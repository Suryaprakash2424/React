import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
const { resData } = props;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    sla,
    avgRating,
    costForTwo
  } = resData?.info;

  return (
    <div className="res-card">
      <img className="food-image" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
      <h3 >{name}</h3>
      <h3 >{cuisines.join(", ")}</h3>
      <h3 >{avgRating}</h3>
      <h3 >{sla.slaString}</h3>
      <h3 >{costForTwo}</h3>
    </div>
  );
};
  
  export default RestaurentCard;