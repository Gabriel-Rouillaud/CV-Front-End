import React, { Component } from 'react';

export default class Trainings extends Component{
    render() {

        const trainingsStyles = {
            backgroundImage: "url('assets/img/pages/formation.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }

        return (
            <main style={trainingsStyles}>

                <div className="uk-flex uk-flex-center">
                    <div className="uk-card uk-card-secondary uk-card-body uk-width-auto@m uk-margin-top">
                        <p className="uk-card-title uk-text-center">Mes Diplômes</p>
                    </div>
                </div>

            </main>
        )
    }
};
