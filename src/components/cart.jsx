import { useOutletContext, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import './cart.css'
import '../index.css'

const Cart = (props)=>{
    const [data,setData] = useState(props.productData)
    const {prodAtCart, setProdAtCart} = useOutletContext();
    const [findProduct, setFoundProduct] = useState(prodAtCart.map((e)=>data?.find((el)=>el.objectID===e.id)));
    const [totalPrice, setTotalPrice] = useState(0)
    const [popOut,setPopOut] = useState(false)
    

    useEffect(()=>{
        setTotalPrice(findProduct.reduce((el,curr,i)=>el + curr.salePrice*prodAtCart[i]?.count,0))
    },[prodAtCart])

    useEffect(()=>{
        setFoundProduct(prodAtCart.map((e)=>data?.find((el)=>el.objectID===e.id)))
    }, [prodAtCart])

    const handleCountChange = (index, diff)=>{
        const updatedCart = prodAtCart.map((e,i)=>{
            if(i===index){
                return {id:e.id, count:(e.count+diff)}
            }
            console.log(i,index,e)
            return e
        })

        if(updatedCart[index]?.count <= 0){
            const filtered = updatedCart.filter((e,i)=> i!==index)
            setProdAtCart(filtered)
        }
        else {
            setProdAtCart(updatedCart)
        }
        console.log(updatedCart)
    }

const handleCountInput = (index, count)=>{
    count = count.replace(/[^0-9]/g,'');
    const updatedCount = prodAtCart.map((e,i)=>{
        if(i==index){
            return{id:e.id, count:(count<1?1:count)}
        } else e
    })
    setProdAtCart(updatedCount)
}

const triggerPopOut = ()=>{
    setPopOut(true)
    setTimeout(() => {
        setPopOut(false)
    }, 2000);

    setTimeout(() => {
        setProdAtCart([])
    }, 2500);
}

const handleRemoveItem = (index)=>{
    const newCart = prodAtCart.filter((e,i)=>i!==index)
    if (newCart.length==0) setProdAtCart([])
        else  setProdAtCart(newCart)
   
}
    
    return(
        <div className="cartContainer min-h-[80vh]">
            <div className="cartInfoTitle">
                Shopping Cart - {prodAtCart.length} item(s)
            </div>
            <div className="itemCartContainer">
                {findProduct!=0? findProduct.map((e,i)=>{
                    
                    return(
                            <div className="selectedItemContainer">
                                <Link to={`/product/${e.objectID}`} className="selectedImageContainer">
                                    <img src={`${e.image}`} alt="" />
                                </Link>
                                <div className="selectedInfoContainer">
                                    <p>{e.name}</p>
                                    <p>${e.salePrice}</p>
                                    <div className="countContainer">
                                        <div className="minusContainer" onClick={()=>handleCountChange(i,-1)}>-</div>
                                        <input type="text" className="countInput" value={prodAtCart[i]?.count} onChange={(el)=>handleCountInput(i,el.target.value)} style={{appearance:'none'}} />
                                        <div className="plusContainer" onClick={(e)=>handleCountChange(i,1)}>+</div>
                                    </div>
                                    <div className="removeItemButton" onClick={()=>handleRemoveItem(i)}>Remove Item</div>
                                </div>
                            </div>
                    )
                    
                }):
                <div className="noItemContainer">
                    <div>No Item</div>
                    <Link to={'/main'}>Search Now</Link>
                </div>
            }
                { prodAtCart.length !=0 ?
                <div>
                <p className="cartTotalPrice">Total Price: ${prodAtCart.length ==0?'':totalPrice.toFixed(2)}</p>
                <div className="checkOutButton" onClick={()=>triggerPopOut()}>Check Out</div>
                <div className={`checkOutPopOut ${popOut? 'checkOutPopOutTriggered':''}`}>
                    <div>Thanks For Your Purchase</div>
                </div>
                </div>
                :
                <div></div>
                }
            </div>
        </div>
    )
}

export default Cart