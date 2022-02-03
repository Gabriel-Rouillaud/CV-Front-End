import React from "react";

export default function Offcanvas (){

    return (
        <>
            <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                    <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                        <li className="uk-active">
                            <a href="/">Accueil</a>
                        </li>
                        <li className="uk-margin-top">
                            <a href="competences">Compétences</a>
                        </li>
                        <li className="uk-margin-top">
                            <a href="projets">Projets</a>
                        </li>
                        <li className="uk-margin-top">
                            <a href="formations">Formations</a>
                        </li>
                    </ul>
                </div>
            </div>

            <button type="button" name="button" className="uk-icon-button uk-position-bottom-right uk-margin-right uk-margin-bottom" uk-icon="menu" uk-toggle="target: #offcanvas-nav-primary"/>

        </>
    )

};