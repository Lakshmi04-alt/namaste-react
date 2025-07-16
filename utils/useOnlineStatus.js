import {useState,useEffect} from "react";

const useOnlineStatus= () => {

   const[onlineStatus,setOnlineStatus]=useState(true);

   useEffect(()=>{
    window.addEventListener("offline",() =>{
      setOnlineStatus(false);
    });

    window.addEventListener("online",()=>{
      setOnlineStatus(true);
    });

   },[]);
  // console.log("onlinestatus",onlineStatus);

  return onlineStatus;
};

export default useOnlineStatus;







