import { CND_URL } from "../utils/constants";
const ResturantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
      resData?.info;
    const { slaString } = resData?.info.sla;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="resturant-logo"
          src={
            CND_URL +
            cloudinaryImageId
          }
          alt=""
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>{slaString}</h4>
      </div>
    );
  };

  export default ResturantCard;