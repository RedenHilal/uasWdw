import './dashboard.css'
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../index.css'


function Dashboard(){
   
    return(
        <div className='dashboardContainer min-h-[80vh] '>
                <img className='bg min-h-[80vh]' src="./src/assets/trav.jpg" alt="" />
                <div className='txtOverlay'> 
                    <h1 className='brandName'>PuereM</h1>
                    <p className='details'>Elevate your lifestyle with our curated collections! Discover timeless elegance in BlackTie attire, dive into epic adventures with our gaming library, and tackle challenges with durable HardGood products. Enjoy classic and blockbuster films for unforgettable movie nights, explore inspiring music from chart-toppers to hidden gems, and boost productivity with innovative software solutions. Experience a seamless blend of elegance, entertainment, and efficiency!</p>
                </div>
                <div className='btnOverlay'>
                    <Link className='lBtn' to={'/main'}>
                        <div>Dive In</div>
                    </Link>
                    <Link className='rBtn' to={'/sign'}>
                        <div >Sign In</div>
                    </Link>                
                </div>
        </div>
    )
}

export default Dashboard