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
    <div className="res-card">
      <h3>Meghana Foods</h3>
    </div>
  )
}
const Body = () =>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resturant-container">
        <ResturantCard></ResturantCard>
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
