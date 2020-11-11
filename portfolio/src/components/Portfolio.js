import React, {Component} from 'react';
import styles from "../scss/portfolio.module.scss";
import GitLogo from "../components/gitLogo"
import Carousel from "./Carousel";
class Portfolio extends Component {
    render() {
        return (
            <section className={styles.section}>
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
                                <div><GitLogo /></div> <span>Link linl link</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carouselContainer}>
                        <Carousel/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;