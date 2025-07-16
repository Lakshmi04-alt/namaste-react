import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const RestaurantCard=(props) => {
    const {resData}=props;

    //console.log(resData);
    const {loggedInUser}=useContext(UserContext);

    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    }=resData?.info;
    return(

        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300" >
         <img 
         // className="res-logo" src={CDN_URL}
          // }
          // />
           className="rounded-lg" src={CDN_URL + cloudinaryImageId}

           />
           

           <h3 className="font-bold py-4 text-lg ">{name}</h3>
           <h4>{cuisines?.join(",")|| "cuisines not available"}</h4>
           <h4>{avgRating}</h4>
           <h4>{costForTwo/100}FOR TWO</h4>
           <h4>{deliveryTime} minutes</h4>
           <h4>User:{loggedInUser}</h4>
        </div>
    );
}; 

 export const withPromotedlabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
              <label className="absolute text-white rounded-lg bg-black m-2 p-2">Promoted</label>
               <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;