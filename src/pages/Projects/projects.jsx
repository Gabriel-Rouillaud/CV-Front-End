import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Offcanvas from "../../components/offCanvas/offcanvas";
import Card from "../../components/card/card";

export default class Projects extends Component{

    render() {

        const projectsStyles = {
            title: {
                backgroundImage: "url('assets/img/pages/projects.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            },
            main: {
                background: "linear-gradient(0deg, rgba(67,132,133,1) 0%, rgba(81,41,161,1) 100%)",
                width: "100%",
                height: "110 auto"
            },
        };

        document.title = "Mes Projets en cours";

        return(
            <main style={projectsStyles.main}>

                <Offcanvas>
                    <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                        <li className="uk-active">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className="uk-margin-top">
                            <Link to="/skills">Mes Compétences</Link>
                        </li>
                        <li className="uk-margin-top">
                            <Link to="/experiences">Mes Expériences</Link>
                        </li>
                        <li className="uk-margin-top">
                            <Link to="/trainings">Mon Parcours</Link>
                        </li>
                    </ul>
                </Offcanvas>

                <div style={projectsStyles.title} className="uk-flex uk-flex-center uk-flex-middle">
                    <div className="uk-card uk-card-secondary uk-card-body uk-width-auto@m uk-margin-top">
                        <p className="uk-card-title uk-text-center">Les Projets en cours</p>
                    </div>
                </div>

                <section className="uk-flex uk-flex-around@m">
                    <Card>
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                <div className="uk-width-auto">
                                    <img className="uk-border-circle" width="40" height="40" src="assets/img/tavern.png"/>
                                </div>
                                <div className="uk-width-expand">
                                    <h3 className="uk-card-title uk-margin-remove-bottom">Tavern</h3>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <p> "Tinder des rôlistes" pour créer des tables et pas des couples. Le projet consiste à créer une application permettant de créer des parties de jeux de rôles</p>
                        </div>
                        <div className="uk-card-footer">
                            <a href="#" className="uk-button uk-button-text">Soon</a>
                        </div>
                    </Card>
                    <Card>
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                <div className="uk-width-auto">
                                    <img className="uk-border-circle" width="40" height="40" src="assets/img/skrall.png"/>
                                </div>
                                <div className="uk-width-expand">
                                    <h3 className="uk-card-title uk-margin-remove-bottom">Skrall Animation</h3>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <p>Le projet est un site web responsive pour un animateur 3D présentant toutes ses productions et courts-métrages.</p>
                        </div>
                        <div className="uk-card-footer">
                            <a href="#" className="uk-button uk-button-text">Soon</a>
                        </div>
                    </Card>
                </section>
            </main>
        )
    }
};
