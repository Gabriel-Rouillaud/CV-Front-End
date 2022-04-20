import React, {Component} from "react";

export default class Totop extends Component{

    constructor(props){
        super(props)

        this.state = {
            is_visible: false
        };

    };

    componentDidMount() {
        let scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    };

    toggleVisibility() {
        if (window.scrollY > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    };

    render() {

        const { is_visible } = this.state;

        return(
            <a style={{display : is_visible ? 'flex' : 'none'}} href="#totop" className="uk-position-fixed uk-position-medium uk-position-bottom-right uk-icon-button" data-uk-totop data-uk-scroll/>
        )
    };
};