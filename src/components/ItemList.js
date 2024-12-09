import { useDispatch } from "react-redux";
import { CDN_URL, NOIMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    }
    
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="flex flex-wrap">
                  <div 
                        className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="p-2">
                              <span>{item.card.info.name}</span>
                              <span> - ₹ {item.card.info.price/100 ||item.card.info.defaultPrice/100}</span>
                        </div>
                    <p className="text-xs">{ item.card.info.description }</p>
                  </div>
                  <div className="w-3/12 p-4 ">
                    <div className="absolute">
                      <button class="bg-transparent mx-16 hover:bg-blue-500 text-black-700 font-semibold hover:text-white hover:border-transparent rounded"
                        onClick={()=>handleAddItem(item)}
                      >
                      Add +
                      </button>
                    </div>
                    <img src={(item.card.info.imageId)?
                      (CDN_URL + item.card.info.imageId):(NOIMAGE_URL)} className="w-full " />
                  </div>
                </div>
              </div>
            ))}
        </div>
    );
};

export default ItemList;