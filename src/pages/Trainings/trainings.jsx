import React, { Component } from 'react';
import Offcanvas from "../../components/offCanvas/offcanvas";
import {Link} from "react-router-dom";
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
            img: {
                width: "100px",
                height: "100px",
            }
        }

        document.title = "Mon Parcours";

        return (
            <>

                <main style={trainingsStyles.main}>

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
                                <Link to="/experiences">Mes Expériences</Link>
                            </li>
                        </ul>

                    </Offcanvas>

                    <div style={trainingsStyles.title} className="uk-flex uk-flex-center">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-auto@m uk-margin-top">
                            <p className="uk-card-title uk-text-center">Mon Parcours</p>
                        </div>
                    </div>

                    <div className="uk-flex uk-flex-wrap-around" data-uk-grid>
                        <Card>
                            <div className="uk-card-header">
                                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                    <div className="uk-width-auto">
                                        <img src="assets/img/LaPiscine.png"/>
                                    </div>
                                    <div className="uk-width-expand">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">La Piscine</h3>
                                        <p className="uk-text-meta uk-margin-remove-top">
                                            <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <p>Titre RNCP de niveau 5 (bac+2) Développeur
                                    web/web mobile</p>
                            </div>
                            <div className="uk-card-footer">
                                <a href="#" className="uk-button uk-button-text">Read more</a>
                            </div>
                        </Card>
                        <Card>
                            <div className="uk-card-header">
                                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                    <div className="uk-width-auto">
                                        <img src="assets/img/saint-genès.png"/>
                                    </div>
                                    <div className="uk-width-expand">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">Saint Genès Bordeaux</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <p> -Baccalauréat Professionnelle Vente section
                                    européenne avec mention (2018)
                                </p>
                                <p>
                                    -BEP Métiers Relation clients et usagers
                                    (2017)
                                </p>
                                <p>
                                    -CAP préparation des ouvrages électriques
                                    (2015)
                                </p>
                            </div>
                            <div className="uk-card-footer">
                                <a href="#" className="uk-button uk-button-text">Read more</a>
                            </div>
                        </Card>
                    </div>
                </main>


            </>

        )
    }
};
