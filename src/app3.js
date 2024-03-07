import React,{Suspense, lazy} from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Restromenu from "./components/Restromenu";
import { Suspense,fallback } from "react";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Cart from "./components/Cart";

// const Contact=lazy(()=> import("./components/Contact"));
const AppLayout =()=>{
   return (
    <Provider store={appstore}>
    <div className="app">
        <Header/>
        <Outlet/>
       
    </div>
    </Provider>
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
            element:(
                <Suspense fallback={<h1>...Loading</h1>}>
                    <About/>
                </Suspense>
            ),
            
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurant/:resId",
            element:<Restromenu/>
        },
        {
            path:"/Cart",
            element:<Cart/>
        }
    ],
        errorElement:<Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={AppRouter}/>)