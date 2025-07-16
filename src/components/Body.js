import RestaurantCard,{withPromotedlabel} from "./RestaurantCard";
import {useState,useEffect,useContext} from "react";
import resList from "../../utils/mockData";
import { CDN_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body =  () =>{

    //Local state variable-super powerful variable
     const[listOfRestaurants,setListOfRestaurants]=useState([]);
     const[filteredRestaurant,setFilteredRestaurant]=useState([]);

     const[searchText,setSearchText]=useState(" ");

     const RestaurantCardPromoted = withPromotedlabel(RestaurantCard);

  // whenever state variables update,react triggers a reconciliation cycle(re-renders the component)    
   // console.log("Body rendered",listOfRestaurants);
    
 useEffect(()=>{
    fetchData();
 },[]);
 

   const fetchData= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.5481808&lng=78.1576975&str=all%20restaurants&trackingId=e3e6ec5f-68f6-5ad5-1838-47f31f328297&submitAction=ENTER&queryUniqueId=75309d6e-4968-271b-a29b-0e339530d0f3");

    const json= await data.json();
   // console.log(json);
   /* setListOfRestaurants(json?.data?.cards?.find(
        (c) => c?.groupedCard?.cardGroupMap?.RESTAURANT
      )?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.map(
        (card) => card.card.card));*/
        const restaurantCards =
        json?.data?.cards?.find((c) => c?.groupedCard?.cardGroupMap?.RESTAURANT)
          ?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || [];

      const cleanedList = restaurantCards.map((card) => card?.card?.card);

      setListOfRestaurants(cleanedList);
      
      

   };
   // Conditional rendering
   const onlineStatus = useOnlineStatus();

 //  console.log("from body",onlineStatus);

   if (onlineStatus === false)
     return(
     <h1> 
        It looks like you are offline!!! please check your internet connection
        </h1>
     );


    const {loggedInUser,setUserName}=useContext(UserContext);

    return listOfRestaurants.length=== 0 ? (
    <Shimmer/>
): (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input 
                    type="text" 
                    data-testid ="searchInput"
                    className="border border-solid border-black " 
                    value={searchText} 
                    onChange={(e)=>
                    {setSearchText(e.target.value);

                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                        //filter the res cards and update the UI
                        //searchText
                        console.log(searchText); 
                       const filteredRestaurant= listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText)
                        );

                        setFilteredRestaurant(filteredRestaurant);


                    }}
                    >
                        Search
                        </button>
                </div>
                <div className="search m-4 p-4 flex items-center"> 
                    <button 
                   className="filter px-4 py-2 bg-gray-100 rounded-lg "
                   onClick={() =>{
                    const filteredList =listOfRestaurants.filter(
                    (res) =>res.info.avgRating > 4
                    );
                setListOfRestaurants(filteredList);
                setFilteredRestaurant(filteredList);

                }}
                
                >Top Rated Restaurants
                </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName: </label>
                    <input className="border border-black p-1" 
                    value={loggedInUser}
                    onChange={(e)=> setUserName(e.target.value)}></input>
                </div>
                
            </div>
            <div className="flex flex-wrap rounded-lg">
                {filteredRestaurant.map((restaurant) =>(
                    <Link key={restaurant.info.id}
                     to={"/restaurants/"+restaurant.info.id}>

                     {restaurant.info.promoted?
                     (<RestaurantCardPromoted  resData={restaurant}/>

                     ): (
                     <RestaurantCard  resData={restaurant}/>
                    ) }
                       
                    </Link>
                ))}
            </div>
        </div>
        

    );
};

export default Body;