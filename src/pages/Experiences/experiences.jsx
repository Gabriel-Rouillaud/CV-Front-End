import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Offcanvas from "../../components/offCanvas/offcanvas";
import Card from "../../components/card/card";


export default class Experiences extends Component{

    render() {

        const experiencesStyle = {
            backgroundImage: "url('assets/img/pages/professional.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            main: {
                background: "linear-gradient(0deg, rgba(67,132,133,1) 0%, rgba(81,41,161,1) 100%)",
            },
            backgroundColor: "linear-gradient(0deg, rgba(67,132,133,1) 0%, rgba(81,41,161,1) 100%)",
            width: "100%",
            height: "110vh auto"
        }

        return(
            <>

                <main style={experiencesStyle.main} className="uk-flex uk-flex-wrap-around@m">

                    <Offcanvas>
                        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                            <li className="uk-active">
                                <a href="/">Accueil</a>
                            </li>
                            <li className="uk-margin-top">
                                <a href="competences">Compétences</a>
                            </li>
                            <li className="uk-margin-top">
                                <a href="projets">Projets</a>
                            </li>
                            <li className="uk-margin-top">
                                <a href="formations">Formations</a>
                            </li>
                        </ul>
                    </Offcanvas>

                    <div className="uk-flex uk-flex-center">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-auto@m uk-margin-top">
                            <p className="uk-card-title uk-text-center">Expériences</p>
                        </div>
                    </div>

                    <Card>
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </Card>

                </main>
            </>
        )
    }
}