import ResturantCard from "./ResturantCard";
import resList from "../Utils/mockData";
import { useState } from "react";


let ResList=resList
const Body = () => {
  const [listOfResturant]=useState
  
  function topRatedButtonClicked(){
    ResList=ResList.filter((res)=>res.info.avgRating>4.4)
    console.log({ResList});
  }
    return (
      <div className="body">
        <div className="filter">
          <button onClick={topRatedButtonClicked} className="filter-btn">Top Rated Resturants</button>
        </div>
        <div className="resturant-container">
          {/* Passing PROPS to a function */}
          {ResList.map((resturant) => (
            <ResturantCard
              key={resturant.info.id}
              resData={resturant}
            ></ResturantCard>
          ))}
        </div>
      </div>
    );
  };

  export default Body