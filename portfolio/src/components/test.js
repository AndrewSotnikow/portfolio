import React, {Component} from 'react';
import Particles from "react-tsparticles";
import fff from "../img/arrowRight.svg"

import particles from "./animation/particles.json";
import webNormal from "../img/web.png";
import styles from "../scss/test.module.scss";
import {HashLink} from "react-router-hash-link";

class Test extends Component {


    render() {
        return (
                <div>
                    <nav className={styles.nav}>
                        <div className="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul className="menu">
                                <li><a smooth className={styles.navLink} to="#about">about</a></li>
                                <li><a smooth className={styles.navLink} to="#portfolio">portfolio</a></li>
                                <li><a smooth className={styles.navLink} to="#contact">contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
        );
    }
}

export default Test;

