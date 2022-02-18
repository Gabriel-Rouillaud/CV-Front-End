import React, {Component} from "react";

export default class ToolsSkill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            toolsSkills: []
        };
    };

    componentDidMount() {
        fetch("https://us-central1-rouillaud-devcompagny.cloudfunctions.net/api/skills/tools_skills")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        toolsSkills: result.toolsSkills
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

        const {error, isLoaded, toolsSkills} = this.state;
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

}