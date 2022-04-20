import React, {Component} from "react";
import ModalContact from "../modals/contact/contact";

export default class Contact extends Component {
    render() {
        return (
            <>
                <a className="uk-button uk-button-primary" data-uk-toggle="target: #contact">
                    <span data-uk-icon="icon: receiver" className="uk-icon"/>
                    Me contacter
                </a>
                <ModalContact id="contact"/>
            </>

        )
    }
};