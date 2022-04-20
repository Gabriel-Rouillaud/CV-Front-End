import React, {Component} from "react";

export default class TechnoModal extends Component {

    render() {

        const technoStyle = {
            width: "150px",
            height: "150px"
        };

        return(
            <div id="technos" className="uk-flex-top" data-uk-modal>
                <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

                    <button className="uk-modal-close-default" type="button" data-uk-close/>

                    <h2>Front-End</h2>

                    <div className="uk-flex uk-flex-around">
                        <div>
                            <img style={technoStyle} src="assets/img/React.png" alt="ReactJS"/>
                            <p>ReactJS</p>
                        </div>
                        <div>
                            <img style={technoStyle} src="assets/img/UIKit.png" alt="UIKit"/>
                            <p>UIKit</p>
                        </div>
                    </div>
                    <p>Version : V0.1</p>
                </div>
            </div>
        )
    }
};