import React, {Component} from "react";

export default class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            Experiences: []
        };
    };

    componentDidMount() {
        fetch("https://us-central1-rouillaud-devcompagny.cloudfunctions.net/api/experiences")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        Experiences: result.experiences
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

        const { error, isLoaded, Experiences } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {

        }
        return(
            <div/>
        )
    }
}