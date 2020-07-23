import React, { Component } from "react";
import { Redirect } from "react-router-dom";


class Logout extends Component {
    state = {
        transform : false
    };

    logout = () => {
     localStorage.clear("token");
    this.setState({ transform : true });
    };

    render(){
        const { transform }  = this.state;

        if(transform){
            return(<Redirect to="/" push={true} />) 
        }
        return (
              <button onClick={this.logout() }  class='favpage'>
          log out
          </button>
        )
      
    }
    
 
}
export default Logout;