import { useEffect, useRef, useState } from "react"
import './searchbar.css'
import Cross from "../assets/icon/cross"
import '../index.css'
import { Link, useOutletContext, useNavigate } from "react-router-dom"


function SearchBar(props){
    const navigate = useNavigate()
    const [show,setShow] = useState(false)
    const [shake, setShake] = useState(false)
    const [categoryPopOut, setCategoryPopOut] = useState(false)
    const inputRef = useRef(null)

    useEffect(()=>{
        setShake(true)
        setTimeout(()=>{
            setShake(false)
        },500)
    }, [props.trigger])
    

    const handleKeyDown = (event)=>{
        if(event.key === 'Enter'){
            setShow(false)
            navigate('/main')
        }
    }

const handleTrue = ()=>{
    setShow(true)
    console.log(inputRef.current)
    setTimeout(()=>{    
        if (inputRef.current){
            inputRef.current.focus()
        }
     },0)
}

const handleCategoryPopout = ()=>{
    setCategoryPopOut(true)
}


    return (
        <div className="SearchBarContainer min-h-[60px] h-[4vh]">
            <div className="BrandLogo">
                <Link className="noStyle" to={'/'}><p >PuereM</p></Link>
            </div> 
            <div className="MenuContainer">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>handleCategoryPopout()} fill="currentColor" id="Outline" viewBox="0 0 24 24" width="512" height="512"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg> 
                <Link to={'/wishlist'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>
                </Link>
                <Link to={'/cart'} >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`cartsvg ${shake? 'shake':''}`} fill="currentColor" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg"  onClick={handleTrue} fill="currentColor" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/></svg>
            </div>
            <div className={`searchInput ${!show? "hiddenInputt":''}`}  >
                <div className="searchInputContainer">
                    <input placeholder="Searching for something?.." type="text" value={props.regex} onChange={(e)=>props.setRegex(e.target.value)} onKeyDown={handleKeyDown} ref={inputRef}/>
                    <Cross clickHandler={setShow}></Cross>
                </div>
            </div>
            <div className={`categoryPopOutContainer ${categoryPopOut? 'categoryPopOutContainerTriggered':''}`} onClick={()=>setCategoryPopOut(false)}>
                    <Link to={'/'}>DashBoard</Link>
                    <Link to={'/sign'}>Sign Up</Link>
                    <Link to={'/main'}>Shop</Link>
                    <Link to={'/cart'}>Cart</Link>
                </div>
        </div>
    )
}

export default SearchBar