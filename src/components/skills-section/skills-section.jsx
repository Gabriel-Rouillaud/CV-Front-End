import React from 'react';
import clsx from 'clsx';

import styles from './skills-section.module.css';

export default function SkillsSection (props) {
    return (
        <>
            {/*-- Skills Section --*/}
                        <section id="skills" className="skills section light-background">

                        {/*-- Section Title --*/}
                        <div className="container section-title" data-aos="fade-up">
                            <h2>Skills</h2>
                            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                        </div>{/*-- End Section Title --*/}

                        <div className="container" data-aos="fade-up" data-aos-delay="100">

                            <div className="row skills-content skills-animation">

                            <div className="col-lg-6">

                                <div className="progress">
                                <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>{/*-- End Skills Item --*/}

                                <div className="progress">
                                <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>{/*-- End Skills Item --*/}

                                <div class="progress">
                                <span class="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>{/*-- End Skills Item --*/}

                            </div>

                            <div className="col-lg-6">

                                <div className="progress">
                                <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>{/*-- End Skills Item --*/}

                                <div className="progress">
                                <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>{/*-- End Skills Item --*/}

                                <div className="progress">
                                <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>{/*-- End Skills Item --*/}

                            </div>

                            </div>

                        </div>

                        </section>{/*-- /Skills Section --*/}
        </>
    )
}