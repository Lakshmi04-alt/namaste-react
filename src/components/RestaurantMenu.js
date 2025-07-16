import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=() =>{

    
    const {resId} =useParams();
    //console.log(resId);
    const dummy="lakshmi";

   
    const resInfo = useRestaurantMenu(resId);

    const[showIndex,setShowIndex]=useState(null);
   

    if (resInfo===null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage} =
    resInfo?.cards[2]?.card?.card?.info || {};

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

   // console.log(categories);
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
        

             {categories.map((category, index)=>{
              return  <RestaurantCategory  key={index} data={category?.card?.card}
              showItems={index===showIndex ? true : false}
              setShowIndex={() => setShowIndex(index) }
              dummy={dummy}
              
              />
             })}

            {/*<ul> 
                {itemCards.map((item)=>(
                    <li key= {item.card.info.id}>
                       {item.card.info.name} -  {" Rs."}
                        {item.card.info.price/100}</li>
                    ))}
                {/* <li>{itemCards[0].card.info.name}</li> */}
                {/* <li>{itemCards[1].card.info.name}</li> */}
                {/* <li>{itemCards[2].card.info.name}</li> */}
           {/* </ul> */}

        </div>
    );
};

export default RestaurantMenu;