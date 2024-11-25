import { useState, useRef} from 'react'
import './App.css'
import SearchBar from './components/searchbar.jsx'
import {Routes, Route, Outlet} from 'react-router-dom'
import './components/dashboard.jsx'
import Footer from './components/footer.jsx'
import './index.css'

function App() {
  const [account, setAccount] = useState(null)
  const [prodAtCart, setProdAtCart] = useState([])
  const [prodAtWish, setProdAtWish] = useState([])
  const [regex,setRegex] = useState('')
  const [trigger, toggleTrigger] = useState(false)

  return (
    <div>
      <SearchBar regexValue={regex} trigger={trigger} setRegex={setRegex} ></SearchBar>
      {}
      <Outlet context={{prodAtWish,setProdAtWish,trigger,toggleTrigger, regex, setProdAtCart, prodAtCart}}></Outlet>
      <Footer></Footer>
    </div>
    )
}

export default App
