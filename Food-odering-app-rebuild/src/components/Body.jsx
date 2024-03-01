import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  //Local State variable - Super Powerfull Variable
  const [listOfResturants, setListOfResturants] = useState(resList);

  useEffect(() => {
    console.log("Use Effect called");
  }, []);
  
  console.log("body rendered");

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredResturants = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredResturants);
            setListOfResturants(filteredResturants);
          }}
          className="filter-btn"
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="resturant-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
