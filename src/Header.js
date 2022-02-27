import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SearchIcons from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from "./StateProvider";

function Header() {

  const [{basket}] = useStateValue();
  // console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.neow.in/news/images/uploaded/2021/06/1622736066_amazon-logo_story.jpg"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchText"></input>
        <SearchIcons className="header__searchIcon"></SearchIcons>
      </div>

      {/* Link 3 */}
      <div className="header__nav">
      <Link to="/login" classname = "header__link">
        <div className="header__option">
          <span className="header__optionfirst">Hello, Bisht</span>
          <span className="header__optionsecond">Sign in</span>
        </div>
      </Link>

      <Link to="/" classname = "header__link">
        <div className="header__option">
          <span className="header__optionfirst">Returns</span>
          <span className="header__optionsecond">& Orders</span>
        </div>
      </Link>

      <Link to="/" classname = "header__link">
        <div className="header__option">
          <span className="header__optionfirst">Your</span>
          <span className="header__optionsecond">Prime</span>
        </div>
      </Link>
      </div>

      <Link to="/checkout" className="header__link">
       <ShoppingBasketIcon className="header_optionBasket"></ShoppingBasketIcon>
        <span className="header__optionsecond  header__basketnumber">{basket?.length}</span>
      </Link>
    </nav>
  );
}

export default Header;








