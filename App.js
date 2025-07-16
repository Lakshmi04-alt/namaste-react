   /* const heading=React.createElement
    ("h1",
     {id:"heading",xyz:"abc"},
     "Hello World from React");
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
    console.log(heading); */



    /* <div id="parent">
         <div id="child">
           <h1>..</h1>
           <h2>..</h2>
           </div>
          <div id="child2">
           <h1>..</h1>
           <h2>..</h2>
           </div>
        </div>*/
 //import React from "react";
// import ReactDOM from "react-dom/client";
/*const parent=React.createElement("div",{id:"parent"},[
            React.createElement("div",{id:"child"},[
                React.createElement("h1",{},"I'm an h1 tag"),
                React.createElement("h2",{},"i'm an h2 tag")
            ]),
            React.createElement("div",{id:"child2"},[
                React.createElement("h1",{},"I'm an h1 tag"),
                React.createElement("h2",{},"i'm an h2 tag")
            ]), 
]);   */
// JSX=> transpiles to react code=>React.createElement=>ReactElement-Js Object=>HTML(render)
/*import React from "react";
import ReactDOM from "react-dom/client";
//const jsxHeading=<h1 className="head" tabIndex="1">Namaste React✈️</h1>    
 const Title= () =>(<h1 className="head" tabIndex="1">
    Namaste React✈️</h1>
 );
 //const HeadingComponent= () => (<h1 className="heading">Nmasate React Functional Component</h1>);
 const elem=90000
 const HeadingComponent= () => (
     <div id="container">
        <Title />
       <h2>{elem}</h2>
       {100+200}

        <h1 className="heading">Namaste React Functional Component</h1>

     </div>
 );*/

import React, { lazy,Suspense, useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
//import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
//import Grocery from "./src/components/Grocery";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./src/components/Cart";
//import Shimmer from "./src/components/Shimmer";

//chunking
// code splitting
//Lazy loading
//dynamic Bundling
// on demand loading

const Grocery=lazy(()=>import("./src/components/Grocery"));

const About=lazy(()=> import("./src/components/About"));

const AppLayout=()=>{
  
    
    const [userName,setUserName]=useState("");

    //Authentication
      useEffect(()=>{
        //Make an api call and send username and password
        const data = {
            name:"Rajya lakshmi",
        };
        setUserName(data.name);

      },[]);




    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className="app">
         <Header/>
         <Outlet/>
         
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
         {   
            path:"/",
            element:<Body/>,
         },
         {
        path:"/about",
        element:<Suspense fallback="<h1>Loading..<h1>"><About/></Suspense>,
         },
    
       {
        path:"/contact",
        element:<Contact/>,
       },   

       {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
       },
       {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
       },
       {
         path:"/cart",
         element:<Cart/>,
       },

            
        ],
        errorElement:<Error/>,
    },
    

]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);