import React from "react";
import "./checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
      <div className="checkout">
          <div className="checkout__left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg"
          alt="Ad"
        ></img>

        {basket.length === 0 ? (
          <div>
            <h2 className="checkout__cart">Your Shopping Basket is Empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__cart">Your Shopping cart</h2>
          </div>
        )}
        {basket.map((item) => (
          <CheckOutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      {(basket.length >0) && (
      <div className="checkout__right">
         <Subtotal />
      </div>
    )}
    </div>


  );
}

export default Checkout;
