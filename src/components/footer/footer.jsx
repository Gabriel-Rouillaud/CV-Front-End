import React, { Component } from 'react';

class Footer extends Component {

    render(){

        const footerStyle = {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "30px",
            background: "rgba( 18, 6, 6, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 20px )",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }

    

        return (
            <footer style={footerStyle}>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                
            </footer>
        )

    };
};

export default Footer;