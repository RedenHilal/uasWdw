import './login.css'
import '../index.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Login = ()=>{
const [password,setPassword] = useState('')
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')

    return(
        <div className="mainContainer min-h-[80vh]" >
            <div className='blockContainer'>
                <div className='emailContainer'>
                    <h2>Email</h2>
                    <input placeholder='Ellen@email.dom' type="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
                </div>
                <div className='usernameContainer'>
                    <h2>Username</h2>
                    <input placeholder='Ellen' type="text" value={username} onChange={(event)=>setUsername(event.target.value)} />
                </div>
                <div className='passwordContainer'>
                    <h2>Password</h2>
                    <input placeholder='admin123' type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
                </div>
                
                <Link className='button' to={'/main'}>Sign Up!</Link>
                

                <div className='info'>
                    <p>Enjoy a Better shopping experience with personalized account</p>
                    <ul>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.576,6.429l-1.91-3.171L12,.036,2.334,3.258,.442,6.397c-.475,.792-.563,1.742-.243,2.607,.31,.839,.964,1.488,1.8,1.793l-.008,9.844,10,3.333,10-3.333,.008-9.844c.846-.296,1.507-.946,1.819-1.788,.317-.857,.229-1.797-.242-2.582Zm-5.737-2.338l-5.831,1.946-5.833-1.951,5.825-1.942,5.839,1.946ZM2.156,7.428l1.292-2.145,7.048,2.357-1.529,2.549c-.239,.398-.735,.581-1.173,.434l-5.081-1.693c-.297-.099-.53-.324-.639-.618-.108-.293-.079-.616,.082-.883Zm1.843,4.038l3.163,1.054c1.343,.448,2.792-.088,3.521-1.302l.316-.526-.005,10.843-7-2.333,.006-7.735Zm8.994,10.068l.005-10.849,.319,.532c.556,.928,1.532,1.459,2.561,1.459,.319,0,.643-.051,.96-.157l3.161-1.053-.006,7.734-7,2.333Zm8.95-13.216c-.105,.285-.331,.503-.619,.599l-5.118,1.706c-.438,.147-.934-.035-1.173-.434l-1.526-2.543,7.051-2.353,1.305,2.167c.156,.26,.186,.573,.08,.858Z"/></svg>
                            Check the details and monitor the status of your orders and returns</li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>
                            Create a wishlist to save your favorie items</li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M17,10.039c-3.859,0-7,3.14-7,7,0,3.838,3.141,6.961,7,6.961s7-3.14,7-7c0-3.838-3.141-6.961-7-6.961Zm0,11.961c-2.757,0-5-2.226-5-4.961,0-2.757,2.243-5,5-5s5,2.226,5,4.961c0,2.757-2.243,5-5,5Zm1.707-4.707c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-1-1c-.188-.188-.293-.442-.293-.707v-2c0-.552,.447-1,1-1s1,.448,1,1v1.586l.707,.707Zm5.293-10.293v2c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v1H11c.552,0,1,.448,1,1s-.448,1-1,1H2v9c0,1.654,1.346,3,3,3h4c.552,0,1,.448,1,1s-.448,1-1,1H5c-2.757,0-5-2.243-5-5V7C0,4.243,2.243,2,5,2h1V1c0-.552,.448-1,1-1s1,.448,1,1v1h8V1c0-.552,.447-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5Z"/></svg>
                            View your private appointments and repairs request</li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                          <path d="m21,21.5v2.5h-2v-2.5c0-1.379-1.121-2.5-2.5-2.5H7.5c-1.378,0-2.5,1.121-2.5,2.5v2.5h-2v-2.5c0-2.481,2.019-4.5,4.5-4.5h9c2.481,0,4.5,2.019,4.5,4.5ZM12.824,6.095c1.255.289,2.278,1.304,2.575,2.557.201.847.091,1.659-.238,2.348h1.306c.501,0,.939-.368.997-.866.068-.587.043-1.202-.091-1.831-.444-2.079-2.131-3.756-4.213-4.184-3.537-.727-6.659,1.97-6.659,5.381,0,1.469.579,2.805,1.52,3.792.04-.848.346-1.627.836-2.256-.228-.464-.356-.986-.356-1.537,0-2.199,2.038-3.931,4.324-3.405Zm-5.953-2.067c1.529-1.433,3.531-2.141,5.63-2.011,3.924.254,6.999,3.669,6.999,7.774,0,1.77-1.439,3.209-3.209,3.209h-2.397c-.243-.831-1.01-1.439-1.92-1.439-1.105,0-2,.895-2,2s.895,2,2,2c.539,0,1.029-.214,1.388-.561h2.928c2.872,0,5.209-2.337,5.209-5.209C21.5,4.634,17.604.342,12.63.021c-2.664-.173-5.191.732-7.126,2.548-1.787,1.675-2.861,3.996-2.99,6.432h2.003c.123-1.903.948-3.654,2.355-4.973Z"/>
                        </svg>
                            Receive tailored assistance from our Client Service</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Login