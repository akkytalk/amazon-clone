import React from "react";

import "./Home.css";

import Products from "./Products/Products";
import Slide from "./SlideShowImages/Slide";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Slide />
        {/* <img className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""  /> */}
      </div>
      <div className="home-row">
        <Products
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Products
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>
      <div className="home-row">
        <Products
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Products
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Products
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home-row">
        <Products
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
        <Products
          id="64474745"
          title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage)"
          price={99.65}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71cxfqBoTgL._SL1500_.jpg"
        />
      </div>

      <div className="home-row">
        <Products
          id={6484532}
          title="Great Stories for Children"
          price={10.15}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51H2M2jWmvL._SX311_BO1,204,203,200_.jpg"
        />
        <Products
          id={6649849}
          title="The Alchemist Paperback – 17 October 2005
              by Paulo Coelho  (Author)"
          price={15.65}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg://images-na.ssl-images-amazon.com/images/I/51H2M2jWmvL._SX311_BO1,204,203,200_.jpg"
        />
        <Products
          id={7773737}
          title="Grandma's Bag of Stories Paperback – 1 January 2015"
          price={14}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/51NHKZC1a0L._SX324_BO1,204,203,200_.jpg"
        />
        <Products
          id={6484532}
          title="A Gentleman in Moscow: The worldwide bestseller Paperback – 2 November 2017"
          price={7.25}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51P+ZZISffL._SX322_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home-row">
        <Products
          id={6484847}
          title="Lenovo IdeaPad S540 10th Gen Intel Core i5 15.6-inch Full HD IPS Thin and Light Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/MS Office 2019/NVIDIA MX250 2GB Graphics/Mineral Grey/1.8Kg), 81NG002BIN"
          price={205.23}
          rating={4}
          image="https://www.notebookcheck.net/uploads/tx_nbc2/IdeaPad_S540_13API__2_.jpg"
        />
        <Products
          id={6484847}
          title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 156 Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard, PH315-53-72XD"
          price={1186.22}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
