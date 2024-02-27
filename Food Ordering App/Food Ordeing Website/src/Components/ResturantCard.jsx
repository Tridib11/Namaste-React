import { CDN_URL } from "../Utils/constants";

const ResturantCard = ({ resData }) => {
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      resData?.info;
    const { deliveryTime } = resData?.info.sla;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="resturant-logo"
          alt="Resturant logo"
          src={
             CDN_URL+
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

export default ResturantCard