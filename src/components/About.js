import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(){
        super();
    }
    
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1><u>About Us</u></h1>
                <h1>This is about us page</h1>            
                <UserClass/>
            </div>
        );    
    }
}


export default About;