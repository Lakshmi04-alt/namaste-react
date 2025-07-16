import {useEffect, useState} from "react";

const User = (props) =>{
    const[count]=useState(0);

  /*  useEffect(()=>{
      const timer= setInterval(()=>{
            console.log("op");
        },1000);

        return()=>{
            clearInterval(timer);
        }
    },[]); */
    
    return(
        <div className="user-card">
            <h1>Count={count}</h1>
            <h1>{props.name}</h1>
            <h2>location:Banglore</h2>
            <h2>Contact:9652128669</h2>

        </div>
    );
};

export default User;