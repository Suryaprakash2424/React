import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {  clearItem } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearItem = () => {
        dispatch(clearItem());
    };
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="px-4 p-2 font-bold bg-orange-300 rounded-full ..." onClick={handleClearItem}>
                Clearcart
            </button>
            {cartItems.length === 0 &&
                <h1 className="font-bold p-2">Your Cart is Empty..  Please shop..</h1>}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;