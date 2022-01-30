import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    
    render(){

        const headerStyle = {
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            background: "rgba( 18, 6, 6, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 20px )",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
        };

        return(

            <header style={headerStyle} uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                <div>
                    <p>Gabriel ROUILLAUD</p>
                </div>

                <nav>
                    <Link to="/menu">
                        <button uk-icon="icon: menu" className="uk-icon-button uk-icon"></button>
                    </Link>
                </nav>
                
            </header>
        )
    };
};

export default Header;