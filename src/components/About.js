import UserClass from "./UserClass";
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(){
        super();
    }
    componentDidMount() {
    }

    render() {
        // const { loggedInUser } = useContext(UserContext);
        return (
            <div>
                <h1><u>About Us</u></h1>
                <h1>This is about us page</h1>            
                <div>loggedInUser:
                    <UserContext.Consumer>
                        {({ loggedInUser }) =>
                        (
                            <h1 className="text-xl font-bold">{ loggedInUser }</h1>
                        )
                        }
                    </UserContext.Consumer>
                </div>
                <UserClass name={"First"} location={"Banglore"} />
            </div>
        );    
    }
}


export default About;