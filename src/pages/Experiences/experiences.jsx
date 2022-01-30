import React, { Component } from 'react';

class Experiences extends Component{
    render() {
        return(
<>
            <main class="professionnal uk-background-cover">
                <div class="uk-overlay-primary uk-position-cover"></div>

                <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                    <div class="uk-offcanvas-bar uk-flex uk-flex-column">
                        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                            <li class="uk-active">
                                <a href="/">Accueil</a>
                            </li>
                            <li class="uk-margin-top">
                                <a href="competences">Compétences</a>
                            </li>
                            <li class="uk-margin-top">
                                <a href="projets">Projets</a>
                            </li>
                            <li class="uk-margin-top">
                                <a href="formations">Formations</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="uk-flex uk-flex-center">
                    <div class="uk-card uk-card-secondary uk-card-body uk-width-auto@m uk-margin-top">
                        <p class="uk-card-title uk-text-center">Expériences</p>
                    </div>
                </div>

                        <div class="uk-flex uk-flex-wrap"/>
                            <div class="uk-card uk-card-secondary uk-width-1-6 uk-margin-left">
                            <div class="uk-card-header">
                                <div class="uk-grid-small uk-flex-middle" uk-grid>
                                    <div class="uk-width-auto">
                                        <img class="uk-border-circle" width="40" height="40" src=""/>
                                    </div>
                                    <div class="uk-width-expand">
                                        <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                                        <p class="uk-text-meta uk-margin-remove-top"></p>
                                    </div>
                                </div>
                                </div>
                            <div class="uk-card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                            <div class="uk-card-footer">
                                <a href="#" class="uk-button uk-button-text">Read more</a>
                            </div>
                        </div>

                    <div class="uk-card uk-card-secondary uk-width-1-6 uk-margin-left">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <div class="uk-width-auto">
                                <img class="uk-border-circle" width="40" height="40" src="images/projects/3eme_logo_bis.png"/>
                            </div>
                            <div class="uk-width-expand">
                                <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                                <p class="uk-text-meta uk-margin-remove-top"></p>
                            </div>
                        </div>
                    </div>
                    <div class="uk-card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div class="uk-card-footer">
                        <a href="#" class="uk-button uk-button-text">Read more</a>
                    </div>
                    </div>

                    <button type="button" name="button" class="uk-icon-button uk-position-bottom-right uk-margin-right uk-margin-bottom" uk-icon="menu" uk-toggle="target: #offcanvas-nav-primary"></button>
                    
            </main>

                    
                    
    </>
        )
    }
};

export default Experiences;