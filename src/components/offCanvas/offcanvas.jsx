import React, {Component} from "react";


export default class Offcanvas extends Component{

    render() {
        return (
            <>
                <nav>
                    <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true">
                        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                            {this.props.children}
                        </div>
                    </div>
                </nav>

                <button data-uk-icon="icon: menu; ratio: 2" className="uk-icon uk-position-small uk-position-top-left uk-margin uk-margin-medium uk-light" data-uk-toggle="target: #offcanvas-nav-primary"/>
            </>
        )
    };
};