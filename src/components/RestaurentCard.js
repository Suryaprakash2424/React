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
    <div className="m-4 p-4 w-52 bg-gray-100 rounded-lg hover:bg-gray-300" >
      <img className="content-center rounded-lg shadow-sm" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
      <h3 className="font-bold py-2 italic underline">{name}</h3>
      <h3 >{cuisines.join(", ")}</h3>
      <h3 >{avgRating}</h3>
      <h3 >{sla.slaString}</h3>
      <h3 >{costForTwo}</h3>
    </div>
  );
};
// Higher order component
// input->RestaurantCard  output=>RestaurantCardPromoted

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label>
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

  export default RestaurentCard;