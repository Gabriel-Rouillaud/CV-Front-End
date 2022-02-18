import React, {Component} from "react";

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            Contact: []
        };
    };

    componentDidMount() {
        fetch("https://us-central1-rouillaud-devcompagny.cloudfunctions.net/api/profile/contact")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        Contact: result.contact
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        const {error, isLoaded, Contact} = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div uk-spinner="ratio: 3"></div>;
        } else {

            return (
                <div/>
            )
        }
    }
};