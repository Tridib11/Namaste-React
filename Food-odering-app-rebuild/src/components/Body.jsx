import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  //Local State variable - Super Powerfull Variable
  const [listOfResturants, setListOfResturants] = useState(resList);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData=async ()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json=data.json()
    console.log(json);

  }


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
