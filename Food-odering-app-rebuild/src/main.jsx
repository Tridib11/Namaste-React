import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="resturant-logo"
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

const ResturantCard=()=>{
  return (
    <div className="res-card"  style={{ backgroundColor: "#f0f0f0" }} >
      <img className="resturant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ggq5qx6bpw5nnlckiphi" alt="" />
      <h3>Dominos</h3>
    </div>
  )
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resturant-container">
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
