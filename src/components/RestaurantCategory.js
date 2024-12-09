// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        // setShowItems(!showItems);
        setShowIndex();
    }

    return (
        <div>
        <div className="w-6/12 mx-auto my-4 text-center font-semibold bg-gray-100 shadow-lg py-3 ">
            <div className="flex justify-between" onClick={handleClick }>
                <span className="underline">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}
export default RestaurantCategory;