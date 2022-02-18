import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import Card from "../../components/card/card";
import Offcanvas from "../../components/offCanvas/offcanvas";



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
        }

        return(
            <>
                <main style={skillsStyles.main}>

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

                    <div style={skillsStyles.title} className="uk-flex uk-flex-center">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-auto@m uk-margin">
                            <p className="uk-card-title uk-text-center">Mes Compétences</p>
                        </div>
                    </div>

                    <section>
                        <section>
                            <div className="uk-card uk-card-body uk-card-default">
                                <h2>Hard Skills</h2>
                            </div>

                            <div className="uk-flex uk-flex-around@m uk-grid-match" data-uk-grid>
                                <Card>
                                    <div>
                                        <img src="assets/img/html5.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>Exemple</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img src="assets/img/css3.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>Exemple</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img src="assets/img/javascript.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>Exemple</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img src="assets/img/html5.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>Exemple</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img src="assets/img/html5.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>Exemple</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                                <Card>
                                    <div>
                                        <img src="assets/img/html5.svg.png" alt={"#"}/>
                                    </div>

                                    <h2>Exemple</h2>

                                    <p>lorem ipsume</p>
                                </Card>
                            </div>

                        </section>
                    </section>

                </main>

            </>

        )
    }
};
