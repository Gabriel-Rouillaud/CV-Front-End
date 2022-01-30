import React from "react";
import { Link } from "react-router-dom";


function NothingHere () {

    const nothingStyle = {
        backgroundImage: "url('assets/img/pages/matrix.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        color: "white",
    };

    return (
        <main style={nothingStyle}>
            <h1>OUPS ! Sorry there is nothing here !</h1>
            <h2>Error 404</h2>
            <p>Return to <Link to="/">HOME</Link></p>
        </main>
        
    )
};

export default NothingHere;