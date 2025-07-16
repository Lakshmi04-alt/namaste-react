import React from "react";

class UserClass extends React.Component {
    constructor(props){
            super(props)

            this.state={
                userInfo:{
                    name:"Dummy",
                    location:"Default",
                
                },
           
        };
         console.log(this.props.name+"child Constructor");
        
        }

        /* async componentDidMount(){
              console.log(this.props.name+"child component Did mount");
            const data= await fetch("https://api.github.com/users/Lakshmi04-alt");
            const json = await data.json();

            this.setState({
                userInfo:json,
            });
            console.log(json);

         } */

            componentDidMount(){
                this.timer=setInterval(()=>{
                    console.log("opp");
                },1000);
            }

         componentDidUpdate(){
            console.log("component did update");
         }

         componentWillUnmount(){
            clearInterval(this.timer);
            console.log("component did unmount");
            
         }
        
    
    render(){
        
        //const{name,location,avatar_url}=this.props;
        const{name,location,avatar_url}=this.state.userInfo;
    
         console.log(this.props.name+"child render");
        return(
            <div className="user-card">
            
             <img src={avatar_url}></img> 
            <h1>{name}</h1>
            <h2>location:{location}</h2>
            <h2>Contact:9652128669</h2>
           
             
        </div>
        );
    };
}

export default UserClass;