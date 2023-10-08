import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom";
import { useState } from "react";

class Navbar extends Component{
    state = {clicked: false};
    handleClicked = () =>{
        this.setState({ clicked: !this.state.clicked })
    }


    render(){
        
        const Menu = ['Profile',"Your apps",'Settings','Log out'];
        
        return(
            <nav className="NavbarItems">
                
                <h1  className="navbar-logo" >Vcation</h1>
                

                <div className="menu-icons" onClick={this.handleClicked}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>
                
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}  >
                                <Link className={item.cName} to={item.url}><i className={item.icon}></i> {item.title}</Link>
                           </li>

                        )
                    })}
                    
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;