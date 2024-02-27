import ResturantCard from "./ResturantCard";
import resList from "../Utils/mockData";


const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="resturant-container">
          {/* Passing PROPS to a function */}
          {/* <ResturantCard resData={resList[0]} />
          <ResturantCard resData={resList[1]} />
          <ResturantCard resData={resList[2]} />
          <ResturantCard resData={resList[3]} />
          <ResturantCard resData={resList[4]} />
          <ResturantCard resData={resList[5]} />
          <ResturantCard resData={resList[6]} /> */}
  
          {resList.map((resturant) => (
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