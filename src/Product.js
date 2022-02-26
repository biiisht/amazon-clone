import React from 'react'
import "./product.css"
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from "./StateProvider"

function Product({id, title, price, rating, image}) {
  const[{}, dispatch] = useStateValue();
  // console.log(basket);
  // console.log("yuv")
  const addToBasket = () =>{
    dispatch({
       type : "ADD_TO_BASKET",
       item :{
         id: id,
         title : title,
         image : image,
         price : price,
         rating : rating,
       },
     });
  };


  return (
    <div className='product'>
    <div className='product__info'>
      <p className='product__title'>{title}</p>
      
      <p className='product__price'>
      <small>$</small>
      <strong>{price}</strong>
      </p>
    
     <div className='product__rating'>
      {Array(rating)
      .fill()
      .map((_) =>{
       return <p><StarIcon className='star'></StarIcon></p>
      })}
      </div>

      <img src= {image} alt = "product"/>

      <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}

export default Product