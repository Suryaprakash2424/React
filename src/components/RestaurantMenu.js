import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurentMenu = () => {    
    const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null)
        return (<Shimmer />);

    const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;

    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c) => c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
    
    return (
        <div className="">
            <h1 className="text-center font-bold italic underline text-2xl" >{name}</h1>
            <p className="text-center font-semibold text-xl">{cuisines.join(", ")}</p>
              {categories.map((category,index) =>(
                <RestaurantCategory
                key={category?.card?.card.title}
                data={category.card?.card}
                showItems={index == showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)} />))}
          </div>
          );
};

export default RestaurentMenu;