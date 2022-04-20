import React, {Component} from "react";

export default class Download extends Component{

    render() {

        return(
            <a className="uk-button uk-button-primary" href="assets/content/CV_G-Rouillaud.pdf">
                <span data-uk-icon="icon: download; ratio: 2" className="uk-icon"/>
                Télécharger mon CV
            </a>
        );
    }
};