import React, {Component} from "react";

export default class Contact extends Component{

    render() {

        return(

            <div id="contact" className="uk-flex-top" data-uk-modal>
                <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

                    <button className="uk-modal-close-default" type="button" data-uk-close/>

                    <h2>Mes coordonnées</h2>

                    <div className="uk-flex uk-flex-column uk-flex-around">
                        <div>
                            <span uk-icon="icon: receiver; ratio: 2"/>
                            <p>"07-49-74-53-96"</p>
                        </div>
                        <div>
                            <span uk-icon="icon: mail; ratio: 2"/>
                            <p>gabrielrouillaud@gmail.com</p>
                        </div>
                        <div>
                            <span uk-icon="icon: linkedin; ratio: 2"/>
                            <p>linkedin.com/in/gabriel-rouillaud</p>
                        </div>
                        <div>
                            <span uk-icon="icon: github; ratio: 2"/>
                            <p>https://github.com/Gabriel-Rouillaud</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};