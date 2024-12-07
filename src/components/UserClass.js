import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "user",
                location: "location",
                url: "http/url",
                avatar_url: "url"
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Suryaprakash2424");
        const json = await data.json();
        // console.log("child mount");
        // console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        // console.log("component did uodate");
    }

    componentWillUnmount() {
        // console.log("component will unmount");
    }

    render() {
        const { name, location, url, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img className="avatar" src={avatar_url}></img>
                <h1>Name: {name}</h1>
                <h3>Location: {location}</h3>
                <h4>Contact: {url}</h4>
            </div>
        ); 
    }
}

export default UserClass;