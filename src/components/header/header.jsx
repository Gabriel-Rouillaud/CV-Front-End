import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    
    render(){

        const headerStyle = {
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            background: "rgba( 18, 6, 6, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 20px )",
            name: {
                width: "30% auto",
                height: "30%",
                fontFamily: "tangerine",
                color: "white",
            },
        };

        return(

            <header style={headerStyle} data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">

                <div style={headerStyle.name}>
                    <p className="uk-text-center">Gabriel ROUILLAUD</p>
                </div>

                <nav className="uk-flex uk-flex-center">
                    <Link to="/menu" data-uk-icon="icon: menu; ratio: 2" className="uk-icon"/>
                </nav>
                
            </header>
        )
    };
};
