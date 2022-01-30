import React, { Component } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    };

    componentDidMount() {
        fetch("https://us-central1-rouillaud-devcompagny.cloudfunctions.net/api/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
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
        };

        return (
            <>
                <div style={homeStyle}>
                    <Header/>
                    <main>
                        <section className='uk-animation-toggle'>
                            <div className='uk-animation-slide-right'>
                                <img src="" alt=""/>
                            </div>

                            <article>
                                <div>
                                    <img src="" alt=""/>
                                </div>

                                <p>coucou</p>
                            </article>


                        </section>

                        <section>

                        </section>
                    </main>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default Home;