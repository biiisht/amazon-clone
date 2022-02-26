// import { red } from "@mui/material/colors";
// import { type } from "@testing-library/user-event/dist/type";

export const initialState = {
  basket: [
    {
      id: "001",
      title: "Apple iPhone 13 Pro Max (256GB) - Graphite",
      price: 1999,
      rating: 4,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000",
    },

    {
      id: "002",
      title: "Samsung White WW5500T EcoBubble 9kg Washer | Samsung IE",
      price: 1099,
      rating: 5,
      image:
        "https://images.samsung.com/is/image/samsung/ie-washer-ww90t554dax-ww90t554dax-s1-frontplatinumsilver-284813179?$PD_GALLERY_L_JPG$",
    },
  ],
};

const reducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    // break;
    case "REMOVE_FROM_BASKET":
      let newBasket =  [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

      if(index >= 0)
          newBasket.splice(index, 1)
          else{
            console.warn("can't remove product")
          }
      return { ...state ,
       basket : newBasket
      };
    // break;
    default:
      return state;
  }
};

export default reducer;
