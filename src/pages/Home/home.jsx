import React, { Component } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Contact from "../../components/buttons/contact";
import Totop from "../../components/totop/totop";
import Card from "../../components/card/card";
import Download from "../../components/buttons/download";
import Availability from "../../components/buttons/availability";

export default class Home extends Component {


    render() {


        const homeStyle = {
            a: {
                color: "white",
            },
            width: "100%",
            height: "110 auto",
            backgroundImage: "url('assets/img/pages/pexels-egil-sjøholt-1906658.jpg')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            section: {
                marginTop: "30px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            slider: {
                width: "100%",
                height: "auto"
            },
            firstImg: {
                width: "300px",
                height: "auto"
            },
            img: {
                type1: {
                    width: "100px",
                    height: "100px"
                },
                type2: {
                    width: "100px",
                    height: "100 auto"
                },
                type3: {
                    width: "250px",
                    height: "250 auto"
                }
            }
        };

        document.title = "Bienvenue";

            return (
                <>
                    <div style={homeStyle}>
                        <Header/>
                        <main className="uk-flex uk-flex-column uk-flex-around">

                            <section style={homeStyle.section} id="top">

                                <div className="uk-card uk-card-secondary uk-card-body">
                                    <h1>Bienvenue sur mon webCV</h1>
                                </div>

                                <div className="uk-margin uk-margin-medium">
                                    <img style={homeStyle.firstImg} className="uk-border-circle" src="assets/img/GR.jpg" alt=""/>
                                </div>

                                <Card className="uk-container">
                                    <h2>Développeur Android en alternance</h2>
                                    <p style={homeStyle.a}>
                                        "Passionné de tech depuis l'enfance, gérer un ordinateur est pour moi comme une seconde nature. Persévérent, déterminé à atteindre mes buts, je démarre une formation de développeur Android et j'aimerai rejoindre une entreprise, qui me permette d'acquérir ces compétences."
                                    </p>
                                </Card>

                            </section>

                            <div className="uk-card uk-card-secondary uk-card-body uk-margin uk-margin-medium">
                                <h2>Mes Skills</h2>
                            </div>

                            <section>

                                <div className="uk-card uk-card-secondary uk-card-body uk-margin uk-margin-medium">
                                    <h3>Mes Hard Skills</h3>
                                </div>

                                <div style={homeStyle.slider} data-uk-slider tabIndex="0" data-uk-slider="center: true">
                                    <div className="uk-slider-container uk-position-relative uk-visible-toggle uk-light">
                                        <ul className="uk-slider-items uk-child-width-auto uk-child-width-1-3@m" data-uk-grid>
                                            <li>
                                                <img style={homeStyle.img.type2}  src="assets/img/html5.svg.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img.type2}  src="assets/img/css3.svg.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img.type2}  src="assets/img/javascript.svg.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img.type2}  src="assets/img/React.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img.type2}  src="assets/img/nodejs.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img.type2}  src="assets/img/bootstrap-logo.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img.type2}  src="assets/img/php.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img.type2}  src="assets/img/symfony.jpg" alt=""/>
                                            </li>
                                        </ul>
                                        <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-previous uk-slider-item="previous"/>
                                        <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-next uk-slider-item="next"/>
                                    </div>
                                </div>

                                <div className="uk-card uk-card-secondary uk-card-body uk-margin uk-margin-medium">
                                    <h3>Mes Soft Skills</h3>
                                </div>

                                <div style={homeStyle.slider} data-uk-slider tabIndex="0" uk-slider="center: true">
                                    <div className="uk-slider-container uk-position-relative uk-visible-toggle uk-light">
                                        <ul className="uk-flex uk-slider-items uk-child-width-auto uk-child-width-auto uk-child-width-1-3@m uk-grid-large" data-uk-grid>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/autodidacte.png" alt=""/>
                                                <p>Autodidacte</p>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/empathie.png" alt=""/>
                                                <p>Empathie</p>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/agilite.png" alt=""/>
                                                <p>Agilité</p>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/adaptable.png" alt=""/>
                                                <p>Adaptable</p>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/rigueur.png" alt=""/>
                                                <p>Rigueur</p>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/intelligence-emotion.png" alt=""/>
                                                <p>Intelligence emotionnelle</p>
                                            </li>
                                        </ul>
                                        <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-previous uk-slider-item="previous"/>
                                        <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-next uk-slider-item="next"/>
                                    </div>
                                </div>

                                <div className="uk-card uk-card-secondary uk-card-body uk-margin uk-margin-medium">
                                    <h3>Les outils que j'utilise</h3>
                                </div>

                                <div style={homeStyle.slider} data-uk-slider uk-slider="center: true">
                                    <div className="uk-slider-container uk-position-relative uk-visible-toggle uk-light">
                                        <ul className="uk-flex uk-slider-items uk-child-width-auto uk-child-width-1-3@m uk-grid" data-uk-grid>
                                            <li>
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/webstorm.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/vscode.png" alt=""/>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/linux.png" alt=""/>
                                            </li>
                                            <li>
                                                 <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/git.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/composer.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/npm.png" alt=""/>
                                            </li>
                                        </ul>
                                        <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-previous uk-slider-item="previous"/>
                                        <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-next uk-slider-item="next"/>
                                    </div>
                                </div>

                                <div className="uk-card uk-card-secondary uk-card-body uk-margin uk-margin-medium">
                                    <h3>Les langues que je parles</h3>
                                </div>

                                <div>
                                    <div className="uk-slider-container uk-position-relative uk-visible-toggle uk-light">
                                        <ul className="uk-flex uk-flex-around">
                                            <li>
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/united-kingdom.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img.type1} className="uk-border-pill"  src="assets/img/frenchy.png" alt=""/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </section>

                            <div className="uk-card uk-card-secondary uk-card-body uk-margin uk-margin-medium">
                                <h2>Mes Projets en cours</h2>
                            </div>

                            <section>
                                <div>
                                    <div className="uk-position-relative uk-visible-toggle uk-light">
                                        <ul className="uk-flex uk-flex-around">
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img.type1} className="uk-border-pill" src="assets/img/tavern.png" alt="Tavern"/>
                                                <p>Tavern</p>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img.type1} className="uk-border-pill" src="assets/img/skrall.png" alt="Skrall"/>
                                                <p>Skrall Animation</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </section>

                            <div className="uk-card uk-card-secondary uk-card-body uk-margin uk-margin-medium">
                                <h2>Mon parcours</h2>
                            </div>

                            <section className="uk-flex uk-flex-around@m uk-flex-center uk-margin uk-margin-large uk-grid-medium" data-uk-grid>

                                <Card>
                                    <div className="uk-card-header">
                                        <div className="uk-flex uk-flex-center" data-uk-grid>
                                            <div className="uk-width-auto">
                                                <img style={homeStyle.img.type3} src="assets/img/LaPiscine.png"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-card-body">
                                        <p>
                                            Titre RNCP de niveau 5 (bac+2) Développeur Web/Web mobile (2021)
                                        </p>
                                        <p>
                                            - Ergonomie et expérience utilisateur
                                        </p>
                                        <p>
                                            - Créer une interface utilisateur HTML/CSS & Javascript
                                        </p>
                                        <p>
                                            - Langage Back-End PHP et son framework Symfony
                                        </p>
                                        <p>
                                            - Concept des bases de données SQL
                                        </p>
                                    </div>
                                </Card>

                                <Card>
                                    <div className="uk-card-header">
                                        <div className="uk-flex uk-flex-center" data-uk-grid>
                                            <div className="uk-width-auto">
                                                <img style={homeStyle.img.type3} src="assets/img/OpenClassrooms.png"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-card-body">
                                        <p>
                                            Titre RNCP de niveau 6 (bac+3) Développeur Android (2022-2024)
                                        </p>
                                        <p>
                                            - Créer des applications Android grâce au langage Java
                                        </p>
                                        <p>
                                            - Concevoir l’architecture technique d’une application
                                        </p>
                                        <p>
                                            - Apporter des corrections de bugs et d’effectuer des mises à jour
                                        </p>
                                        <p>
                                            - Produire une documentation technique et fonctionnelle pour le client
                                        </p>
                                    </div>
                                </Card>

                                <Card>
                                    <div className="uk-card-header">
                                        <div className="uk-flex uk-flex-center" data-uk-grid>
                                            <div className="uk-width-auto">
                                                <img style={homeStyle.img.type3} src="assets/img/saint-genès.png"/>
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
                                </Card>
                            </section>

                            <section className="uk-flex uk-flex-around@m uk-flex-center uk-margin uk-margin-large uk-grid-medium" data-uk-grid>
                                <Download/>
                                <Availability/>
                                <Contact/>
                            </section>
                            <Totop/>
                        </main>
                        <Footer/>
                    </div>
                </>
            );
        };
};




