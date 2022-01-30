import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
    
    render(){

        const menuStyle = {

            sectionMenu:{
                width: "100%",
                height: "100vh",
            },
            skills:{
                backgroundImage: "url('assets/img/pages/skills.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            },
            projects:{
                backgroundImage: "url('assets/img/pages/projects.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            },
            experiences:{
                backgroundImage: "url('assets/img/pages/professional.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            },
            trainings:{
                backgroundImage: "url('assets/img/pages/formation.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }
        };

        return(
            <main>
                <section style={menuStyle.sectionMenu} className="uk-section uk-flex uk-flex-wrap uk-section-secondary">

                    <Link style={menuStyle.skills} className="skills uk-background-cover uk-width-1-2 uk-link-reset uk-margin-medium-bottom uk-flex uk-flex-center uk-flex-middle" to="/skills">
                        <div>
                            <p>Mes compétences</p>
                        </div>
                    </Link>


                    <Link style={menuStyle.projects} className="projects uk-background-cover uk-width-1-2 uk-link-reset uk-margin-medium-bottom uk-flex uk-flex-center uk-flex-middle" to="/projects">
                        <p>Mes projets</p>
                    </Link>

                    <Link to="/">
                        <button id="backhome" uk-icon="icon: home; ratio: 2" className="uk-icon-button uk-position-center uk-icon"></button>
                    </Link>

                    <Link style={menuStyle.experiences} className="professionnal uk-background-cover uk-width-1-2 uk-link-reset uk-flex uk-flex-center uk-flex-middle" to="/experiences">
                        <p>Mes expériences</p>
                    </Link>

                    <Link style={menuStyle.trainings} className="formation uk-background-cover uk-width-1-2 uk-link-reset uk-flex uk-flex-center uk-flex-middle" to="/trainings">
                        <p>Mes formations effectuées</p>
                    </Link>

                </section>
            </main>
        )
    }
}

export default Menu;