import React from 'react'
import "./home.css"
import Product from './Product'
import "./index.css"

function Home() {
  return (
    <div>
    <img className='home__banner'
    src='https://i.ytimg.com/vi/MFPg04jAfcY/maxresdefault.jpg'
    alt='banner' />
 <div className='product__row'>
    <Product
     id  = "001"
     title = "Apple iPhone 13 Pro Max (256GB) - Graphite"
     price = {1999}
     rating = {4}
     image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000"
     />

<Product
     id  = "002"
     title = "Samsung White WW5500T EcoBubble 9kg Washer | Samsung IE"
     price = {1099}
     rating = {5}
     image = "https://images.samsung.com/is/image/samsung/ie-washer-ww90t554dax-ww90t554dax-s1-frontplatinumsilver-284813179?$PD_GALLERY_L_JPG$"
     />

     </div>

 <div className='product__row'>
    <Product
     id  = "003"
     title = "Walmart Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
     price = {500}
     rating = {4}
     image = "https://i5.walmartimages.com/asr/d5d9bcd2-031a-43f1-af7e-fbce04c59cf9_1.07d937744a232563fc31cbcb1cd078b4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
     />

<Product
     id  = "004"
     title = "Samsung 616L Family Hub Side By Side Fridge Matte Black SRS656MBFH4"
     price = {1599}
     rating = {4}
     image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dzqHBDv-V8qO901GFvnDWMhXIt2UCjENy4QlWUIwcL0U1wu14Q2EkEDgjBn6Lr6dTZw&usqp=CAU"
     />

<Product
     id  = "005"
     title = "Apple MacBook Pro 16 MVVJ2 (Space Gray)"
     price = {2599}
     rating = {4}
     image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87RrB05gD-OIDUO2HVlmQ-S6iIZB2Hp1RIneqer5ZA3BiCvIg7rHzzjw49IPMYL5vUiA&usqp=CAU"
     />
     </div>

     <div className='product__row'>
    <Product
     id  = "122"
     title = "70'' inch curved screen monitor led display TV android OS grobal IPTV BVD-T2 TV wifi smart television TV"
     price = {2999}
     rating = {5}
     image = "https://ae01.alicdn.com/kf/H285a52009511471f8329b591c1ea66ed4/60-65-70-inch-curved-screen-monitor-led-display-TV-android-OS-grobal-IPTV-BVD-T2.png"
     />
</div>
    </div>
  )
}

export default Home