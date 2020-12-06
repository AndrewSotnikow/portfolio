import React, {Component} from 'react';
import styles from "../scss/home.module.scss";
import Logo from "../components/logo.js";
import portrait from "../img/portrait.png"
import Particles from "react-tsparticles";
import particlesParam from "./animation/particles.json";
import {HashLink} from "react-router-hash-link";


class Home extends Component {
    render() {
        return (
            <section className={styles.section} id="home">
                <nav className={styles.nav}>
                    <div className="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="menu">
                            <li><HashLink smooth className={styles.navLink} to="#about">about</HashLink></li>
                            <li><HashLink smooth className={styles.navLink} to="#portfolio">portfolio</HashLink></li>
                            <li><HashLink smooth className={styles.navLink} to="#contact">contact</HashLink></li>
                        </ul>
                    </div>
                </nav>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.textContainer}>
                        <div className={styles.textContainerContent}>
                            <div className={styles.text}>
                                <span>&#60;home&#62;</span>
                                <span>Hello,</span>
                                <span>I’m Andrew,</span>
                                <span>front-end developer.</span>
                                <p>dynamicznie rozwijający się młody specjalista, którego celem jest dołaczenie do
                                    zgrabnego
                                    zespołu aby opanować nowe technologie i rozwijać umiętmości pod czas wspólnej
                                    realizacji
                                    projektów.</p>
                            </div>

                            <div className={styles.buttons}>
                                <button className={styles.getCv}><a download href="../img/3.png">pobierz cv</a> </button>
                                <button className={styles.github}><a download href="../img/3.png">moje prace</a></button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageContainerContent}>
                            <div className={styles.decorationContainer}>
                                <span className={`${styles.decoration} ${styles.positionHtml}`}>&#60;html&#62;</span>
                                <span className={`${styles.decoration} ${styles.positionReact}`}>&#60;react&#62;</span>
                                <span
                                    className={`${styles.decoration} ${styles.positionScript}`}>&#60;script&#62;</span>
                                <span
                                    className={`${styles.decoration} ${styles.positionWebpack}`}>&#60;webpack&#62;</span>
                                <img className={styles.portrait} src={portrait} alt="Portrait photo"/>
                                <div className={styles.decorFront}>
                                    <span>front</span>
                                    <span>front</span>
                                    <span>front</span>
                                </div>
                                <div className={styles.decorEnd}>
                                    <span>end</span>
                                    <span>end</span>
                                    <span>end</span>
                                </div>
                            </div>
                            <div className={styles.abstract}>
                                <Particles params={particlesParam}/>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
