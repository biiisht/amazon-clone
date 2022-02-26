import React from "react";
import "./checkOutProduct.css"
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from "./StateProvider"

function CheckOutProduct({ id, title, image, price, rating }) {

  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    console.log(basket)
      dispatch({
        type : "REMOVE_FROM_BASKET",
        id : id
      })
  }

  return (
    <div className="CheckOutProduct">
      <img className="CheckOutProduct__image" src={image} />

      <div className="CheckOutProduct__info">
        <p className="CheckOutProduct__title">{title}</p>

        <div className="CheckOutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>

        <div className="CheckOutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => { 
              return (
                <p>
                  <StarIcon className="star"></StarIcon>
                </p>
              );
            })}
        </div>

        <button onClick={removeFromBasket} className="CheckOutProduct__button">Remove from basket</button> 
      </div>
    </div>
  );
}

export default CheckOutProduct;
