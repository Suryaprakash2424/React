import RestaurentCard, { withPromotedLabel, withPromotedLabel } from "./RestaurentCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(listOfRestaurants);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(RES_URL);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(setlistOfRestaurants);
    };
    
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Looks like your are offline!! Please check your Internet</h1>
        );
    }

    const { loggedInUser, setUserName } = useContext(UserContext);

  // conditional rendering  
    return listOfRestaurants.length === 0 ? (<Shimmer />) :
    (   <div className="body">
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input type="text" className="border px-2 border-solid border-black rounded" value={searchText} onChange={(e) => { setSearchText(e.target.value); }}/>
                    <button className="px-4 bg-orange-300 m-2 rounded-full ..." onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                    }}>search</button>
                <button className="px-4 bg-orange-300 m-2 rounded-full ... " onClick={() => {
                    const filteredList = listOfRestaurants.filter((resList) => resList.info.avgRating > 4.5);
                    setFilteredRestaurant(filteredList);
                }}>
                    Top Rated Restaurent
                </button>
                
                    <label className="px-2">UserName:</label>
                    <input className="border px-2  my-auto border-solid border-black rounded "
                        value={loggedInUser}
                        onClick={(e) => setUserName(e.target.value)}></input>
                
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        to={"/restaurants/" + restaurant?.info.id}
                        key={restaurant?.info.id} >
                        {   restaurant.info?.promoted ?
                                (<RestaurantCardPromoted resData={restaurant} />)
                                : (<RestaurentCard resData={restaurant} />)}
                    </Link>
                    // <RestaurentCard resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};

export default Body;
