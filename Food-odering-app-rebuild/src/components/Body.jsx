import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button onClick={()=>{
          console.log("clicked")
        }} className="filter-btn">Top Rated Resturants</button>
      </div>
      <div className="resturant-container">
        {resList.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))} 
      </div>
    </div>
  );
};

export default Body;