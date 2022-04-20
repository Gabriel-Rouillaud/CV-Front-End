import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Offcanvas from "../../components/offCanvas/offcanvas";
import Card from "../../components/card/card";



export default class Experiences extends Component{

    render() {

        const experiencesStyle = {
            title:{
                backgroundImage: "url('assets/img/pages/skills.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            },
            main: {
                background: "linear-gradient(0deg, rgba(67,132,133,1) 0%, rgba(81,41,161,1) 100%)",
                width: "100%",
                height: "110 auto"
            },
            img: {
                width: "100px",
                height: "100px"
            }
        };

        document.title = "Mes Expériences";

        return(
            <>

                <main style={experiencesStyle.main}>

                    <Offcanvas>
                        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                            <li className="uk-active">
                                <Link to="/">Accueil</Link>
                            </li>
                            <li className="uk-margin-top">
                                <Link to="/skills">Mes Compétences</Link>
                            </li>
                            <li className="uk-margin-top">
                                <Link to="/projects">Mes Projets</Link>
                            </li>
                            <li className="uk-margin-top">
                                <Link to="/trainings">Mon Parcours</Link>
                            </li>
                        </ul>
                    </Offcanvas>

                    <div style={experiencesStyle.title} className="uk-flex uk-flex-center">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-auto@m uk-margin-top">
                            <p className="uk-card-title uk-text-center">Expériences</p>
                        </div>
                    </div>

                    <section className="uk-flex uk-flex-center">
                        <Card>
                            <div className="uk-card-header">
                                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                    <div className="uk-width-auto">
                                        <img className="uk-border-circle" style={experiencesStyle.img} src="assets/img/logos/3eme_logo_bis.png"/>
                                    </div>
                                    <div className="uk-width-expand">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">Phoenix Space Industries</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <p>Site web responsive sur l'agence spatial fictive "Phoenix Space
                                    Industries" proposant de réserver des voyages vers d'autres planètes.
                                    Les technologies utilisés sont les suivantes :
                                    #Front-End : HTML (avec moteur de templating TWIG), CSS et
                                    Javascript natif.
                                    #Back-End : PHP, Framework Symfony basé sur le schéma Modèle,
                                    Vue, Controlleurs, et ORM Doctrine.
                                    #Database : MySQL comme base de donnée relationnelle.
                                </p>
                            </div>
                            <div className="uk-card-footer">
                                <a href="#" className="uk-button uk-button-text">Read more</a>
                            </div>
                        </Card>
                    </section>

                </main>
            </>
        )
    }
}