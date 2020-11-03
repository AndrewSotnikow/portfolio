import React, {Component} from 'react';
import styles from "../scss/home.module.scss";
import Logo from "../components/logo.js";
import  abstract from "../img/abstract.png";
import portrait from "../img/portrait.png"


class Home extends Component {
    x = "../img/portrait.jpg";
    render() {
        return (
            <section className={styles.section}>
                <nav className={styles.nav}>
                    <ul>
                        <li><a className={styles.link} href="">portfolio</a></li>
                        <li><a className={styles.link} href="">about</a></li>
                        <li><a className={styles.link} href="">contact</a></li>
                    </ul>
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
                               <p>dynamicznie rozwijający się młody specjalista, którego celem jest dołaczenie do zgrabnego
                                   zespołu aby opanować nowe technologie i rozwijać umiętmości pod czas wspólnej realizacji
                                   projektów.</p>
                           </div>

                            <div className={styles.buttons}>
                                <button className={styles.getCv}>pobierz cv</button>
                                <button className={styles.github}>moje prace</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageContainerContent}>
                            <div className={styles.decorationContainer}>
                                <span className={`${styles.decoration} ${styles.positionHtml}`}>&#60;html&#62;</span>
                                <span className={`${styles.decoration} ${styles.positionReact}`}>&#60;react&#62;</span>
                                <span className={`${styles.decoration} ${styles.positionScript}`}>&#60;script&#62;</span>
                                <span className={`${styles.decoration} ${styles.positionWebpack}`}>&#60;webpack&#62;</span>
                                <img className={styles.portrait} src={portrait}  alt="" />
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

                            <img className={styles.abstract} src={abstract}  alt="" />

                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
