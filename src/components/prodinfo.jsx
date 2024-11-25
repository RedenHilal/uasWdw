import { useParams } from "react-router-dom"
import { useState, useEffect, useRef} from "react";
import './prodinfo.css'
import '../index.css'
import { useOutletContext } from "react-router-dom";

const ProdInfo = (props)=>{
    const {setProdAtCart,prodAtCart, toggleTrigger,trigger, prodAtWish, setProdAtWish} = useOutletContext();
    const {objectID} = useParams();
    const [wishPopOut, setWishPopOut] = useState(false)
    const [cartPopOut, setCartPopOut] = useState(false)
    const [data, setData] = useState(props.productData?.find((e)=>e.objectID==objectID))
    const [wished, setWished] = useState(prodAtWish?.find((e)=>e.name==data.name))
    useEffect(()=>{
        setData(props.productData?.find((e)=>e.objectID==objectID))
    }, [props.ProductData])

    useEffect(()=>{
        setWished(prodAtWish?.find((e)=>e.name == data.name))
    },[prodAtWish])

    const addProduct = (productId)=>{
        const isExist = prodAtCart.find((e)=> e.id == data.objectID)

        if (isExist){
            return prodAtCart.map((e)=>e.id === productId? {id:e.id, count:e.count+1}:e)
        } else{
            return [...prodAtCart, {id:productId, count:1}]
        }
    }

    const handleCartButton = ()=>{
        setProdAtCart([...prodAtCart, data.objectID])
        toggleTrigger(!trigger)
        setProdAtCart(addProduct(data.objectID))
        console.log(prodAtCart)
        setCartPopOut(true)
        setTimeout(() => {
            setCartPopOut(false)
        }, 1000);
    }
    const handleWishToggle = ()=>{
        const status = prodAtWish.find((e)=>e.name === data.name)
        console.log(status)
        if (status){
            const filtered = prodAtWish.filter((e)=>e.name!==data.name)
            if (filtered.length!==0) setProdAtWish(filtered)
                else setProdAtWish([])
        }
        else {
            setProdAtWish([...prodAtWish, data])
            setWishPopOut(true)
            setTimeout(() => {
                setWishPopOut(false)
            }, 500);
        }
        
    }
    console.log(prodAtWish)

    return (
        <div className="prodInfoContainer min-h-[80vh]">
            <div className="productImageContainer ">
                <img src={`${data && data.image}`} className="p-20" alt="" />
            </div>
            <div className="rightProductContainer ms-[10px]">
                <div className="productTitle">{data.name}</div>
                <div className="descriptionContainer">{data.shortDescription}</div>
                <div className="priceContainer">${data.salePrice}</div>
                <div className="manufacturerContainer">Manufacturer: {data.manufacturer?data.manufacturer:'unknown'}</div>
                <div className="prodBtnCon">
                    {data && data.shipping && <div className="shippingContainer" >{data.shipping}</div>}
                    {data && data.shipping && <div className="shippingInfo">This Product offer Free Shipping!</div>}
                </div>
                <div className="popCartContainer">
                    <div className="addToCartButton" onClick={handleCartButton}>Add to Cart</div>
                    <div className={`addToCartPopOut ${cartPopOut? 'addToCartPopOutTriggered':''}`}>Item Successfully Added, Check Your Cart!</div>
                </div>
                <div className="wishPopOutContainer">
                    <div className={wished?'displayNone':''}>Add to Wishlist</div>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>handleWishToggle()} fill="currentColor" id="Outline" className={`${wished? 'wishToggled':''} prodInfoWish`} viewBox="0 0 24 24" width="512" height="512"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>
                    <div className={`${wishPopOut? 'wishTriggered':''}`} >Product Wished</div>
                </div>
            </div>
        </div>
    )
}

export default ProdInfo