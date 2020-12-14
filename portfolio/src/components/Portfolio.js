import React, {Component} from 'react';
import styles from "../scss/portfolio.module.scss";
import GitLogo from "../components/gitLogo"
import Carousel from "./Carousel";

class Portfolio extends Component {
    render() {
        const git = "https://github.com/AndrewSotnikow?tab=repositories";
        return (
            <section className={styles.section} id="portfolio">
                <div className={styles.contentContainer}>
                    <div className={styles.textContainer}>
                        <div className={styles.textContainerContent}>
                            <div className={styles.text}>
                                <span>&#60;portfolio&#62;</span>
                                <span>Portfolio,</span>
                                <span>my project's</span>
                                <p>bardziej szczegółowo możesz hostować i przeglądać kod:</p>
                            </div>

                            <div className={styles.gitLink}>
                                <div><GitLogo/></div>
                                <span><a href={git} target="_blank" rel="noopener noreferrer">My GitHub</a></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carousel}>
                        <Carousel/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;