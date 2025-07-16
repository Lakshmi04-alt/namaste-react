import { LOGO_URL } from "../../utils/constants";
import {useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";


const Header=()=>{

    const[btnNameReact,setBtnNameReact]=useState("Login");
    //console.log(" Header render");

   // if no dependency array => it will called on every render
   // if dependency array is empty => [] => useEffect is called on initial render(just once)
   // if dependency array is [btnNameReact] => called everytime btnNamereact is updated

    useEffect(()=>{
       // console.log("useEffect called");

    },[]);
     
    const onlineStatus = useOnlineStatus();

    const {loggedInUser}=useContext(UserContext);
    //console.log(loggedInUser);

    // Subscribing to the store using a Selector

    const cartItems=useSelector((store)=> store.cart.items);
    //console.log(cartItems);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-200">
            <div className="logo-container">
                <img className="w-48" alt="app-logo" src={LOGO_URL} />
             </div>   
                <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4"> onlinestatus:{onlineStatus ? "✅" :"🔴"}</li>
                  <li className="px-4"><Link to="/">Home</Link></li> 
                   <li className="px-4"><Link to="/about"> About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart"> 🛒Cart ({cartItems.length} items)</Link></li>
                    <li className="px-4 "><Link to="/Grocery">Grocery</Link></li>
                    <button className="login"
                    onClick={()=>{

                      btnNameReact==="Login" 
                      ? setBtnNameReact("Logout") 
                      : setBtnNameReact("Login");
                        
                        }}
                        >
                         {btnNameReact}
                        </button>

                        <li className="px-4 font-bold">{loggedInUser}</li>

               </ul>
                </div>
                
            </div>

        
        );
    };
    export default Header;