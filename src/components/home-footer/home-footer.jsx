import React from 'react';
import clsx from 'clsx';

import styles from './home-footer.module.css'

export default function HomeFooter (props){

    return (
            <footer id="footer" className={clsx(styles.footer, "position-relative light-background")}>

                <div className="container">
                    <div className="copyright text-center">
                        <p>© <span>Copyright</span> <strong className="px-1 sitename">Gabriel ROUILLAUD</strong> <span>All Rights Reserved</span></p>
                    </div>
                </div>

            </footer>
        )
};