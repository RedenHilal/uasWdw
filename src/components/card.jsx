import './card.css'
import { Link } from 'react-router-dom'

const Card = (props)=>{
    const data = props.item
    return(
        <Link to={`/product/${data.objectID}`} className="cardContainer">
                <img className="cardImage" src={`${data.image}`} alt="" />
                <div className='namepriceCon'>
                    <p className="name">{data.name}</p>
                    <p className="price">${data.salePrice}</p>
                </div>
        </Link>
    )
}

export default Card