import React, { Component } from 'react';

export default class Projects extends Component{

    render() {

        const projectsStyles = {
            backgroundImage: "url('assets/img/pages/projects.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }

        return(
            <main style={projectsStyles}>

                <div className="uk-flex uk-flex-center">
                    <div className="uk-card uk-card-secondary uk-card-body uk-width-auto@m uk-margin-top">
                        <p className="uk-card-title uk-text-center">Les Projets en cours</p>
                    </div>
                </div>

            </main>
        )
    }
};
