import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render ,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

// UNIT TESTING
it("should render Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button");
    
    // if there are many buttons than 
    // const loginButton = screen.getByRole("button",{name:"Login"});

    expect(loginButton).toBeInTheDocument();
});

it("should render Header component with a cart item 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartitem = screen.getByText("Cart:(0 Items)");

    expect(cartitem).toBeInTheDocument();
});

it("should render Header component with a cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartitem = screen.getByText(/Cart/);

    expect(cartitem).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
});