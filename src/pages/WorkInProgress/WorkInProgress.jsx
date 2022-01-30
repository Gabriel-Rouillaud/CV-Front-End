import React, { Component } from 'react';

class WorkInProgress extends Component{

    render () {

        const workinStyle = {
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
        <>
        <main style={workinStyle}>
            <p>Sorry this page is in work in progress</p>
            <p>Please come back later</p>
        </main>
        </>)
    }
};

export default WorkInProgress;