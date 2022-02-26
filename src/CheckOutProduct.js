import React from "react";
import "./checkOutProduct.css"
import StarIcon from '@mui/icons-material/Star';

function CheckOutProduct({ id, title, image, price, rating }) {
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

        <button className="CheckOutProduct__button">Remove from basket</button> 
      </div>
    </div>
  );
}

export default CheckOutProduct;
