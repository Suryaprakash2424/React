// rafce
import React from "react";
const Contact = () => {
    return (
        <div>
            {/* <h1 className="text-center font-semibold text-2xl">This is contact us page</h1> */}
            <h1 className="font-bold text-4xl p-4 m-4">contact Us</h1>
            <form>
                <input type="text" className="px-4  mx-4 border border-black " placeholder="Name"></input>
                <input type="text" className="border px-4  mx-4  border-black " placeholder="Message"></input>
                <button className="border px-4  mx-4  border-black rounded-lg bg-gray-100">Submit</button>
            </form>
        </div>  
    );
};

export default Contact;