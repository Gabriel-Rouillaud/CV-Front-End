import React, { Component } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            All: []
        };
    };

    componentDidMount() {
        fetch("https://us-central1-rouillaud-devcompagny.cloudfunctions.net/api/profile"),
        fetch("https://us-central1-rouillaud-devcompagny.cloudfunctions.net/api/profile/contact"),
        fetch("https://us-central1-rouillaud-devcompagny.cloudfunctions.net/api/skills")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        All: result.all
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

        const homeStyle = {
            a: {
                color: "white",
            },
            width: "100%",
            height: "110vh",
            backgroundImage: "url('assets/img/pages/pexels-egil-sjøholt-1906658.jpg')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            firstImg: {
                backgroundSize: "cover",
                width: "100%",
                height: "auto",
            },
            introSection: {
                display: "flex",
                justifyContent: "Center",
            },
            secondImg: {
                borderRadius: "50%"
            },
            skillSection: {
                display: "flex",
                justifyContent: "center"
            }
        };

        //const { error, isLoaded, All } = this.state;
        //if (error) {
            //return <div>Erreur : {error.message}</div>;
        //} else if (!isLoaded) {
            //return <div>Chargement…</div>;
        //} else {

            return (
                <>
                    <div style={homeStyle}>
                        <Header/>
                        <main>

                            <div style={homeStyle.firstImg} className='uk-animation-slide-right'>
                                <img src="assets/img/logos/Mylinkedin.png" alt="Moi-même"/>
                            </div>

                            <section style={homeStyle.introSection}>
                                <div>
                                    <img style={homeStyle.secondImg} src="" alt=""/>
                                </div>

                                <h2>Bienvenue sur mon CV personnel</h2>

                                <p></p>
                            </section>

                            <section style={homeStyle.skillSection}>
                                <h2>Mes Skills</h2>
                                <h3>Mes Hard Skills</h3>
                                <div></div>
                                <h3>Mes Softs Skills</h3>
                                <div></div>
                                <h3>Les outils que j'utilise</h3>
                                <div></div>
                            </section>

                            <section>
                                <h2>Mes Experiences</h2>
                                <div></div>
                            </section>

                            <section>
                                <h2>Mes Formations</h2>
                                <div></div>
                            </section>

                            <section>

                            </section>
                        </main>
                        <Footer/>
                    </div>
                </>
            );
        }
};

export default Home;