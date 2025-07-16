import User from "./User";
import UserClass from "./UserClass";
import  React from "react";
import UserContext from "../../utils/UserContext";

class About extends React.Component{

  constructor(props){
    super(props);
    console.log("parent Constructor");
  };

  componentDidMount(){
    console.log("parent component Did mount");
  }


  render(){
     console.log("parent Render");
    return(
       <div>
          <h1>About Us</h1>
          <div>
            loggedInUser
            <UserContext.Consumer> 
              {({loggedInUser})=>(
              <h1 className="font-bold">{loggedInUser}</h1>
              )}
              </UserContext.Consumer>
          </div>
          <h2> This is Namaste Web Series</h2>
          <User name={"Lakshmi(class)"}location={"Banglore"}/>
          {/* <UserClass name={"Nani(class)"}location={"kerala"}/> */}
          {/* <UserClass name={"Lilly(class)"}location={"Arunachal"}/> */}
          
        </div>
         
    );
};
}    
  



export default About;