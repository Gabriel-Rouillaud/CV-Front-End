import React, {Component} from "react";

export default class ModalAvailable extends Component{

    render() {

        return(

            <div id="availability" className="uk-flex-top" data-uk-modal>
                <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

                    <button className="uk-modal-close-default" type="button" data-uk-close/>

                    <h2>Mes disponibilités</h2>

                    <div className="uk-flex uk-flex-column uk-flex-around">
                        <div>
                            <p>Disponibilité immédiate</p>
                        </div>
                        <div>
                            <p>
                                Contrat de professionnalisation
                                ou
                                Contrat d'apprentissage
                            </p>
                            <p>Durée: 24 mois</p>
                        </div>
                        <div>
                            <p>Rythme:</p>
                            <p>
                                4 jours en entreprise,1 jour de
                                formation,
                                ou
                                3 jours en entreprise et 2
                                jours en formation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};