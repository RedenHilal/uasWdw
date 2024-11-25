 import { useState, useEffect, useRef } from "react"
 import './display.css'
 import '../index.css'
 import Card from "./card"
import { useOutletContext } from "react-router-dom"

function Main(props){
    const [filter, setFilter] = useState(0)
    const [display, setDisplay] = useState(1)
    const [data,setData] = useState([])
    const [highstyle, setHighstyle] = useState(null)
    const {regex} = useOutletContext()
    const selectedFilter = useRef([])

    useEffect(()=>{
        const coord = selectedFilter.current[filter].getBoundingClientRect()
        setHighstyle({
            width:`${coord.width+5}px`,
            left:`${coord.left-2.5}px`,
            right:`${coord.right}px`,
            height:`${coord.height}px`,
            bottom:`${coord.bottom}px`,
            top:`${coord.top+window.scrollY}px`
        })
        if (filter && regex){
            const filtered = props.Dataset.filter((e)=>e.type==array[filter]).filter((e)=>e.name.includes(regex))
            setData(filtered)
        } else if(filter){
            const filtered = props.Dataset.filter((e)=>e.type==array[filter])
            setData(filtered)
        } else if(regex){
            const filtered = props.Dataset.filter((e)=> e.name!=null && e.name.includes(regex))
            setData(filtered)
        }
        else {
            setData(props.Dataset)
        }
    }, [filter, regex,props.Dataset,display])
   
    useEffect(()=>{
        setDisplay(1)
    }, [filter,regex])

  
    const array = ["View all", "Game", "HardGood", "Movie", "Music", "Software"]
    return(
        <div className="displayContainer min-h-[80vh]">
            <div className="filter">
                <p className="mb-2">What Might Interest You...</p>
                <div className="displayCategory">
                    {array.map((e,i)=><div key={i} ref={(el)=>selectedFilter.current[i] = el} className={filter == i? 'filterActive':''} onClick={()=>setFilter(i)}>{e}</div>)}
                    <div className="underliner" style={highstyle}></div>
                </div>
            </div>
            <div className="itemsContainer">
                {data.length!=0? data.slice(0,20*display).map((e,i)=><Card key={i} item={e}></Card>):<div className="noItemFound">no items found</div>}
            </div>
            <div className={`loadmore ${ data.length > 20*display? '':'loadHidden'}`} onClick={()=>setDisplay(display+1)}>Load More</div>
        </div>
    )
}

export default Main