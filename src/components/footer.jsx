import './footer.css'
import IG from '../assets/ig.jsx'
import Github from '../assets/github.jsx'
import Linkedin from '../assets/linkedin.jsx'

const Footer = ()=>{
    
    return(
        <div className='footerContainer flex flex-col'>
            <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="footer-contact">
                &copy; 2024 PuereM. All rights reserved.
            </div>
            <div className='profile'>
                <IG className="icon"></IG>
                <Github className="icon"></Github>
                <Linkedin></Linkedin>
            </div>
        </div>
    )
}

export default Footer