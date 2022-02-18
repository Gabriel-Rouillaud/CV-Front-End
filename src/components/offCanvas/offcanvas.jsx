import React, {Component} from "react";

export default class Offcanvas extends Component{

    render() {
        return (
            <>
                <nav>
                    <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                            {this.props.children}
                        </div>
                    </div>
                </nav>

                <button type="button" name="button" className="uk-icon-button uk-position-top-left uk-margin" uk-icon="arrow-left" uk-toggle="target: #offcanvas-nav-primary"/>
            </>
        )
    };
};