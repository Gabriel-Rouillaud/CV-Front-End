import React, {Component} from "react";
import ModalAvailable from "../modals/availability/Availability";


export default class Availability extends Component {
    render() {
        return (
            <>
                <a className="uk-button uk-button-primary" data-uk-toggle="target: #availability">
                    Mes disponibilités
                </a>
                <ModalAvailable/>
            </>

        )
    }
};