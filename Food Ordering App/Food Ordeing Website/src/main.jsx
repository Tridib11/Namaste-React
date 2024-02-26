import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - ResturantContainer
 *    - ResturantCard
 *      - Img
 *      - Name of Res,Star Rating, cuisines, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home 🏠</li>
          <li>About Us 👤</li>
          <li>Contact Us 📞</li>
          <li>Cart 🛒</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = () =>{
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="resturant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9bdc7ca1bcd102b8d445469552c24e25" />
      <h3>Meghana Foods</h3>
      <h4>Pizza</h4>
      <h4>4.4 ⭐</h4>
      <h4>38 mins</h4>
    </div>
  )
}
const Body = () =>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resturant-container">
        <ResturantCard/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
