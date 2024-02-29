import ResturantCard from "./ResturantCard";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="resturant-container">
          {resList.map((resturant) => (
            <ResturantCard key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;