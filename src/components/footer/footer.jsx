import React, { Component } from 'react';

class Footer extends Component {

    render(){

        const footerStyle = {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "30px",
            background: "rgba( 18, 6, 6, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 20px )",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }

    

        return (
            <footer style={footerStyle}>
                <nav>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </nav>

                <div>
                    <button uk-icon="icon: info; ratio: 2" href="#modal-center" uk-toggle></button>
                    <div id="modal-center" className="uk-flex-top" uk-modal>
                        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

                            <button className="uk-modal-close-default" type="button" uk-close></button>

                            <div className="">
                                <h2>Front-End</h2>
                            </div>
                            <div className="">
                                <h2>Back-End</h2>
                            </div>

                        </div>
                    </div>
                </div>

                
            </footer>
        )

    };
};

export default Footer;