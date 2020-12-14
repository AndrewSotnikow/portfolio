import React, {Component} from 'react';
import styles from "../scss/contact.module.scss";
import Lines from "../components/lines";
import linkedIn from "../img/linkedIn.png";
import linkedInSmall from "../img/linkedIn_small.png";
import {HashLink} from 'react-router-hash-link';
import MyForm from "../components/Contact form"


class Contact extends Component {

    render() {
        const linkedin = "https://www.linkedin.com/in/andrzej-sotnikow/";
        return (
            <section className={styles.section} id="contact">
                <div className={styles.abstract}>
                    <div className={styles.abstractContainer}>
                        <Lines/>
                    </div>
                </div>
                <div className={styles.contentContainer}>

                    <div className={styles.textContainer}>
                        <div className={styles.textContainerContent}>
                            <div className={styles.text}>
                                <span>&#60;Contact&#62;</span>
                                <span>Contact</span>
                            </div>
                            <MyForm/>
                        </div>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <picture>
                            <source
                                media="(min-width: 1024px)"
                                sizes="(max-width: 48px) 70vw, 48px"
                                srcSet={`${linkedIn} 48w`}/>
                            <source
                                media="(min-width: 768px) and (max-width: 1199px)"
                                sizes="(max-width: 38px) 60vw, 38px"
                                srcSet={`${linkedInSmall} 38w`}/>
                            <img
                                sizes="(max-width: 120px) 40vw, 38px"
                                srcSet={`${linkedInSmall} 38w`}
                                alt="LinkedIn Icon"/>

                        </picture>
                    </a>
                    <ul>
                        <li><HashLink smooth className={styles.navLink} to="#home">Home</HashLink></li>
                        <li><HashLink smooth className={styles.navLink} to="#portfolio">portfolio</HashLink></li>
                        <li><HashLink smooth className={styles.navLink} to="#about">about</HashLink></li>
                    </ul>
                </nav>

            </section>
        );
    }
}

export default Contact;