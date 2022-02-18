import React, { Component } from 'react';
import Offcanvas from "../../components/offCanvas/offcanvas";
//import {Link} from "react-router-dom";
import Card from "../../components/card/card";

export default class Trainings extends Component{

    render() {

        const trainingsStyles = {
            title: {
                backgroundImage: "url('assets/img/pages/formation.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            },
            main: {
                background: "linear-gradient(0deg, rgba(67,132,133,1) 0%, rgba(81,41,161,1) 100%)",
                width: "100%",
                height: "110vh auto"
            },

        }

        return (
            <>

                <main style={trainingsStyles.main}>

                    <Offcanvas>
                        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                            <li className="uk-active">
                                <a href="/">Accueil</a>
                            </li>
                            <li className="uk-margin-top">
                                <a href="competences">Compétences</a>
                            </li>
                            <li className="uk-margin-top">
                                <a href="projets">Experiences</a>
                            </li>
                            <li className="uk-margin-top">
                                <a href="formations">Mes Projets</a>
                            </li>
                        </ul>
                    </Offcanvas>

                    <div style={trainingsStyles.title} className="uk-flex uk-flex-center">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-auto@m uk-margin-top">
                            <p className="uk-card-title uk-text-center">Mes Diplômes</p>
                        </div>
                    </div>

                    <div className="uk-flex uk-flex-wrap-around" data-uk-grid>
                        <Card>
                            <div><img src="" alt=""/></div>
                            <h3 className="uk-card-title"></h3>
                            <div>
                                <p></p>
                            </div>
                        </Card>
                        <Card>
                            <div><img src="" alt=""/></div>
                            <h3 className="uk-card-title"></h3>
                            <div>
                                <p></p>
                            </div>
                        </Card>
                    </div>
                </main>


            </>

        )
    }
};
