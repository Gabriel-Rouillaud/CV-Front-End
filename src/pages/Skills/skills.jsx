import React, { Component } from 'react';
import Card from "../../components/card/card";
import Offcanvas from "../../components/offCanvas/offcanvas";
import { Link } from "react-router-dom";
import Totop from "../../components/totop/totop";



export default class Skills extends Component{

    render() {

        const skillsStyles = {
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
                height: "100px",
            }
        };

        document.title = "Mes Compétences";

        return(
            <>
                <main style={skillsStyles.main}>

                    <Offcanvas>
                        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                            <li className="uk-active">
                                <Link to="/">Accueil</Link>
                            </li>
                            <li className="uk-margin-top">
                                <Link to="/experiences">Mes Expériences</Link>
                            </li>
                            <li className="uk-margin-top">
                                <Link to="/projects">Mes Projets</Link>
                            </li>
                            <li className="uk-margin-top">
                                <Link to="/trainings">Mon Parcours</Link>
                            </li>
                        </ul>
                    </Offcanvas>

                    <div style={skillsStyles.title} className="uk-flex uk-flex-center uk-flex-middle">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-auto@m uk-margin uk-margin-medium">
                            <p className="uk-card-title uk-text-center">Mes Compétences</p>
                        </div>
                    </div>

                    <section>

                        <section>

                            <div className="uk-card uk-card-body uk-card-secondary uk-margin uk-margin-medium">
                                <h2>Hard Skills</h2>
                            </div>

                            <h2>Front-End</h2>

                            <section className="uk-flex uk-flex-around@m uk-grid-match" data-uk-grid>

                                <Card>
                                    <div>
                                        <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>HTML5</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img style={skillsStyles.img} src="assets/img/css3.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>CSS3</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img style={skillsStyles.img} src="assets/img/javascript.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>Javascript</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img src="assets/img/html5.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>ReactJS</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img src="assets/img/html5.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>Bootstrap</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img src="assets/img/html5.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>UIKit</h2>

                                    <p>lorem ipsume</p>
                                </Card>

                            </section>

                            <h2>Back-End</h2>

                            <section className="uk-flex uk-flex-around@m uk-grid-match" data-uk-grid>
                                <Card>
                                    <div>
                                        <img style={skillsStyles.img} src="assets/img/nodejs.png" alt={"#"}/>
                                    </div>

                                    <h2>NodeJS</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img style={skillsStyles.img} src="assets/img/php.png" alt={"#"}/>
                                    </div>

                                    <h2>PHP</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img style={skillsStyles.img} src="assets/img/symfony.png" alt={"#"}/>
                                    </div>

                                    <h2>Symfony</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                            </section>

                            <h2>Database</h2>

                            <section>
                                <Card>
                                    <div>
                                        <img style={skillsStyles.img} src="assets/img/mysql.png" alt={"#"}/>
                                    </div>

                                    <h2>MySQL</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                            </section>

                        </section>

                        <div className="uk-card uk-card-body uk-card-secondary uk-margin uk-margin-medium">
                            <h2>Soft Skills</h2>
                        </div>

                        <section className="uk-flex uk-flex-around@m uk-grid-match" data-uk-grid>
                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Autodidacte</h2>

                                <p>lorem ipsume</p>
                            </Card>

                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Empathie</h2>

                                <p>lorem ipsume</p>
                            </Card>

                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Agilité</h2>

                                <p>lorem ipsume</p>
                            </Card>

                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Adaptable</h2>

                                <p>lorem ipsume</p>
                            </Card>

                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Rigueur</h2>

                                <p>lorem ipsume</p>
                            </Card>

                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Intelligence emotionnelle</h2>

                                <p>lorem ipsume</p>
                            </Card>


                        </section>

                        <div className="uk-card uk-card-body uk-card-secondary uk-margin uk-margin-medium">
                            <h2>Les outils que j'utilise</h2>
                        </div>

                        <section className="uk-flex uk-flex-around@m uk-grid-match" data-uk-grid>
                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Intelligence emotionnelle</h2>

                                <p>lorem ipsume</p>
                            </Card>

                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Intelligence emotionnelle</h2>

                                <p>lorem ipsume</p>
                            </Card>

                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Intelligence emotionnelle</h2>

                                <p>lorem ipsume</p>
                            </Card>

                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Intelligence emotionnelle</h2>

                                <p>lorem ipsume</p>
                            </Card>

                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Intelligence emotionnelle</h2>

                                <p>lorem ipsume</p>
                            </Card>

                            <Card>
                                <div>
                                    <img style={skillsStyles.img} src="assets/img/html5.svg.png" alt={"#"}/>
                                </div>

                                <h2>Intelligence emotionnelle</h2>

                                <p>lorem ipsume</p>
                            </Card>
                        </section>

                    </section>
                    <Totop/>
                </main>

            </>

        )
    }
};
