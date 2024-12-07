import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("enter the restaurant name");

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

  // conditional rendering  
    return listOfRestaurants.length === 0 ? (<Shimmer />) :
    (   <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => { setSearchText(e.target.value); }}/>
                    <button className="search-btn" onClick={() => {
                        console.log("search box");
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((resList) => resList.info.avgRating > 4.5);
                    setFilteredRestaurant(filteredList);
                }}>
                    Top Rated Restaurent
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <Link to={"/restaurants/" + restaurant?.info.id} key={restaurant?.info.id} ><RestaurentCard resData={restaurant}/></Link>
                    // <RestaurentCard resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};

export default Body;
