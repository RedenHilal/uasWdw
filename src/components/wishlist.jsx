import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import './wishlist.css'
import { Link } from "react-router-dom"
import '../index.css'

const Wishlist = ()=>{
    const {prodAtWish, setProdAtWish} = useOutletContext();
    const handleRemoveWish = (index)=>{
        const updatedWish = prodAtWish.filter((e,i)=>index!=i)
        if (updatedWish.length == 0) setProdAtWish([])
            else setProdAtWish(updatedWish)
    }

    return(
        <div className="wishlistContainer min-h-[80vh]">
            <div className="headerContainer">
                Wishlist - {prodAtWish.length} Item(s) at Wish 
            </div>
            <div className="wishItemsContainer">
                {prodAtWish.length==0?
                <div className="noWishContainer">
                    <div className="">There is now Item on wish currently</div>
                    <Link to={'/main'} className="flex flex-row">Search Items</Link>
                </div>
                :
                <div className="wishItemContainer">
                    {prodAtWish.map((e,i)=><div>
                        <div className="itemOnWishContainer">
                            <Link to={`/product/${e.objectID}` } className="imageItemOnWishContainer">
                                    <img src={`${e.image}`} alt="" />
                            </Link>
                            <div className="imageInfoOnWishContainer">
                                <div>{e.name}</div>
                                <div>{e.salePrice}</div>
                                <div className="removeWishBtn" onClick={()=>handleRemoveWish(i)}>Remove Item</div>
                            </div>
                        </div>
                    </div>)}
                </div>    
            }
            </div>
        </div>
    )
}

export default Wishlist