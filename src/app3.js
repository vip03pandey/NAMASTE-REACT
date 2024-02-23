import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Restromenu from "./components/Restromenu";



const AppLayout =()=>{
   return (
    <div className="app">
        <Header/>
        <Outlet/>
       
    </div>
   );
};


const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[{
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurant/:resId",
            element:<Restromenu/>
        }
    ],
        errorElement:<Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={AppRouter}/>)