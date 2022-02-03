import React, { Component } from 'react';
import Card from "../../components/card/card";

export default class Skills extends Component{

    render() {

        const skillsStyles = {
            backgroundImage: "url('assets/img/pages/skills.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }

        return(
            <main style={skillsStyles}>

                <div className="uk-flex uk-flex-center">
                    <div className="uk-card uk-card-secondary uk-card-body uk-width-auto@m uk-margin-top">
                        <p className="uk-card-title uk-text-center">Mes Compétences</p>
                    </div>
                </div>

                <Card>
                    <div>
                        <img src={"#"} alt={"#"}/>
                    </div>

                    <h2>Exemple</h2>

                    <p>lorem ipsume</p>
                </Card>

            </main>
        )
    }
};
