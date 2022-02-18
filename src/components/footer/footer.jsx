import React, { Component } from 'react';
import TechnoModal from "../modals/technos/techno";

export default class Footer extends Component {

    /*constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            All: []
        };
    };

    componentDidMount() {
        fetch("https://us-central1-rouillaud-devcompagny.cloudfunctions.net/api/skills/hard_skills")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        All: result.all
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }*/

    render() {

        /*const {error, isLoaded, All} = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {*/


            const footerStyle = {
                display: "flex",
                justifyContent: "space-evenly",
                background: "rgba( 18, 6, 6, 0.25 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 20px )",
                color: "white"
            };


            return (
                <footer style={footerStyle}>

                    <div>
                        <div className="uk-margin-medium">
                            <p>Hosted by</p>
                            <span  data-uk-icon="icon: github-alt; ratio: 2"/>
                        </div>
                    </div>

                    <div className="uk-flex uk-flex-middle">
                        <a data-uk-icon="icon: info; ratio: 2" uk-toggle="target: #technos" data-uk-toggle/>
                        <TechnoModal/>
                    </div>

                </footer>
            )

    };

};