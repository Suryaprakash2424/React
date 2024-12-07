import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { ITEM_URL } from "../utils/constants";
import { NOIMAGE_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurentMenu = () => {    
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null)
        return (<Shimmer />);

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h1>{costForTwoMessage}</h1>
            <h2><u>Menu</u></h2>
            <div className="itemcontainer">
                <ul className="itemcontainer">
                {itemCards.map((item) => (<li key={item.card.info.id} className="itemframe">
                    <img className="itemimage" alt="item_image"
                        src={(item.card.info.imageId)?
                            (ITEM_URL + item.card.info.imageId):(NOIMAGE_URL)}>
                    </img>
                    {item.card.info.name}-{"Rs."}-{item.card.info.price/100 ||item.card.info.defaultPrice/100}
                </li>))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurentMenu;