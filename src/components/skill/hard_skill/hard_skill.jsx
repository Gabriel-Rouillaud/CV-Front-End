import React, {Component} from "react";

export default class HardSkill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            hardSkills: []
        };
    };

    componentDidMount() {
        fetch("https://us-central1-rouillaud-devcompagny.cloudfunctions.net/api/skills/hard_skills")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        hardSkills: result.hardSkills
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

        const {error, isLoaded, hardSkills} = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div uk-spinner="ratio: 3"/>;
        } else {

            return (
                <div>
                    {this.props.children}
                </div>
            )
        }
    };

};