import React, {Component} from "react";
import clsx from "clsx";

import styles from './top.module.css'

export default class Top extends Component{

    render() {

        return(

            <a href=" " id="scroll-top" className={clsx(styles.scrolltop, "d-flex align-items-center justify-content-center")}>
                <i className="bi bi-arrow-up-short"/>
            </a>

        )
    };
};