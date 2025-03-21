import React, {Component} from "react";
import clsx from "clsx";

import styles from './hero-section.module.css'

export default class HeroSection extends Component{

    render() {
        return(
        <>
            {/*-- Hero Section --*/}
                <section id="hero" className={clsx(styles.hero, "section dark-background")}>

                    <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" className=""/>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <h2>Alex Smith</h2>
                        <p>I'm <span className="typed" data-typed-items="DevOps, Developer">DevOps</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
                    </div>

                </section>
            {/*-- /Hero Section --*/}
        </>
        )
    };
};