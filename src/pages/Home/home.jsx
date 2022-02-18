import React, { Component } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Contact from "../../components/modals/contact/contact";
import Totop from "../../components/totop/totop";
import Card from "../../components/card/card";
import Download from "../../components/buttons/download";

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
                width: "100px",
                height: "100px",
            }
        };

            return (
                <>
                    <div style={homeStyle}>
                        <Header/>
                        <main className="uk-flex uk-flex-column uk-flex-around">

                            <section style={homeStyle.section} id="top">

                                <div className="uk-card uk-card-secondary uk-card-body">
                                    <h1 className="uk-card-title">Bienvenue sur mon CV personnel</h1>
                                </div>

                                <div className="uk-margin uk-margin-medium">
                                    <img style={homeStyle.firstImg} className="uk-border-circle" src="assets/img/GR.png" alt=""/>
                                </div>

                                <Card className="uk-card uk-card-secondary uk-card-body uk-margin uk-margin-medium uk-container">
                                    <p style={homeStyle.a}>"Passionné de tech depuis petit, gérer un
                                        ordinateur est pour moi comme une seconde
                                        nature, j’atteins toujours mon but quoi qu'il
                                        arrive et c'est pourquoi j'aimerai devenir
                                        Développeur web FullStack"
                                    </p>
                                </Card>

                            </section>

                            <Card>
                                <h2 className="uk-card-title">Mes Skills</h2>
                            </Card>

                            <section>

                                <div className="uk-card uk-card-secondary uk-card-body uk-margin uk-margin-medium">
                                    <h3>Mes Hard Skills</h3>
                                </div>

                                <div style={homeStyle.slider} data-uk-slider tabIndex="0" data-uk-slider="center: true">
                                    <div className="uk-slider-container uk-position-relative uk-visible-toggle uk-light">
                                        <ul className="uk-slider-items uk-child-width-auto uk-child-width-1-5@m" data-uk-grid>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/html5.svg.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/css3.svg.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/javascript.svg.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/nodejs.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/bootstrap-logo.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/php.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/symfony.png" alt=""/>
                                            </li>
                                        </ul>
                                        <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-previous uk-slider-item="previous"/>
                                        <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-next uk-slider-item="next"/>
                                    </div>
                                </div>

                                <Card>
                                    <h3>Mes Soft Skills</h3>
                                </Card>

                                <div style={homeStyle.slider} data-uk-slider tabIndex="0" uk-slider="center: true">
                                    <div className="uk-slider-container uk-position-relative uk-visible-toggle uk-light">
                                        <ul className="uk-flex uk-slider-items uk-child-width-auto uk-child-width-auto uk-child-width-1-3@m uk-grid-large" data-uk-grid>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/empathie.png" alt=""/>
                                                <p>Empathie</p>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/agilite.png" alt=""/>
                                                <p>Agilité</p>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/adaptable.png" alt=""/>
                                                <p>Adaptable</p>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/rigueur.png" alt=""/>
                                                <p>Rigueur</p>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/intelligence-emotion.png" alt=""/>
                                                <p>Intelligence emotionnelle</p>
                                            </li>
                                        </ul>
                                        <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-previous uk-slider-item="previous"/>
                                        <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-next uk-slider-item="next"/>
                                    </div>
                                </div>

                                <Card>
                                    <h3>Les outils que j'utilise</h3>
                                </Card>

                                <div style={homeStyle.slider} data-uk-slider uk-slider="center: true">
                                    <div className="uk-slider-container uk-position-relative uk-visible-toggle uk-light">
                                        <ul className="uk-flex uk-slider-items uk-child-width-auto uk-child-width-1-3@m uk-grid" data-uk-grid>
                                            <li>
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/webstorm.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/vscode.png" alt=""/>
                                            </li>
                                            <li className="uk-flex-column uk-flex-center">
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/linux.png" alt=""/>
                                                <p>WSL</p>
                                            </li>
                                            <li>
                                                 <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/git.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/composer.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/npm.png" alt=""/>
                                            </li>
                                        </ul>
                                        <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-previous uk-slider-item="previous"/>
                                        <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-icon-button"
                                           href="#" data-uk-slidenav-next uk-slider-item="next"/>
                                    </div>
                                </div>

                                <Card>
                                    <h3>Les langues que je parles</h3>
                                </Card>

                                <div style={homeStyle.slider} data-uk-slider tabIndex="0" uk-slider="center: true">
                                    <div className="uk-slider-container uk-position-relative uk-visible-toggle uk-light">
                                        <ul className="uk-flex uk-flex-around@m">
                                            <li>
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/webstorm.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img} className="uk-border-pill"  src="assets/img/vscode.png" alt=""/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </section>

                            <Card>
                                <h2 className="uk-card-title">Mes Projets en cours</h2>
                            </Card>

                            <section>

                                <div style={homeStyle.slider} data-uk-slider tabIndex="0" uk-slider="center: true">
                                    <div className="uk-slider-container uk-position-relative uk-visible-toggle uk-light">
                                        <ul className="uk-flex uk-flex-around@m">
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/html5.svg.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/css3.svg.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/javascript.svg.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/nodejs.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/bootstrap-logo.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/php.png" alt=""/>
                                            </li>
                                            <li>
                                                <img style={homeStyle.img}  src="assets/img/symfony.png" alt=""/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <Card>
                                <h2 className="uk-card-title">Mon parcours</h2>
                            </Card>

                            <section>

                                <div style={homeStyle.slider} data-uk-slider tabIndex="0" uk-slider="center: true">
                                    <div>
                                        <ul className="uk-flex uk-flex-around@m">
                                            <li>
                                                <div className="uk-card uk-card-default uk-width-1-2@m">
                                                    <div className="uk-card-header">
                                                        <div className="uk-grid-small uk-flex-middle" uk-grid>
                                                            <div className="uk-width-auto">
                                                                <img className="uk-border-circle"
                                                                     src="assets/img/saint-genès.png"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="uk-card-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do eiusmod tempor incididunt.</p>
                                                    </div>
                                                    <div className="uk-card-footer">
                                                        <a href="#" className="uk-button uk-button-text">Read more</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="uk-card uk-card-default uk-width-1-2@m">
                                                    <div className="uk-card-header">
                                                        <div className="uk-grid-small uk-flex-middle" uk-grid>
                                                            <div className="uk-width-auto">
                                                                <img className="uk-border-circle"
                                                                     src="assets/img/saint-genès.png"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="uk-card-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do eiusmod tempor incididunt.</p>
                                                    </div>
                                                    <div className="uk-card-footer">
                                                        <a href="#" className="uk-button uk-button-text">Read more</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="uk-flex uk-flex-around@m uk-margin uk-margin-large">
                                <Download/>
                                <a className="uk-button uk-button-primary" uk-toggle="target: #contact">
                                    <span data-uk-icon="icon: receiver" className="uk-icon"/>
                                    Me contacter
                                </a>
                                <Contact id="contact"/>
                            </section>
                            <Totop/>
                        </main>
                        <Footer/>
                    </div>
                </>
            );
        };
};




