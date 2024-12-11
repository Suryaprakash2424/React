import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurentMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { withPromotedLabel } from "./components/RestaurentCard";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));


const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Surya Prakash",
    }; setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
      </UserContext.Provider>
      </Provider>
  )
};

const indexRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      } ,
      {
        path: "/about",
        element: <Suspense fallback={"Loading......" }>
          <About />
        </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={"Loading......" }>
          <Grocery />
          </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurentMenu/>,
      }
    ],
    errorElement:<Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={indexRouter}/>);
