import React, {Component} from 'react';
import styles from "../scss/about.module.scss";
import webNormal from "../img/web.jpg";
import webSmall from "../img/web_small.jpg";
import photoNormal from "../img/photo.jpg";
import photoSmall from "../img/photo_small.jpg";
import cyclingNormal from "../img/cycling.jpg";
import cyclingSmall from "../img/cycling_small.jpg";
import stockNormal from "../img/stock.jpg";
import stockSmall from "../img/stock_small.jpg";

class About extends Component {

    render() {
        const linkedin = "https://www.linkedin.com/in/andrzej-sotnikow/";
        return (
            <section className={styles.section} id="about">
                <div className={styles.contentContainer}>
                    <div className={styles.textContainer}>
                        <div className={styles.textContent}>
                            <span>&#60;about&#62;</span>
                            <span>Skills,</span>
                            <span>education</span>
                            <p>I completed a course at Coders Lab, during which I learned the following technologies:
                                HTML, CSS, Javascript, React JS, sass, Webpack, RWD. Additionally,
                                I finished the UX course at Igor Dżazow’s School.
                                I can easily navigate around graphic software and have a basic knowledge of graphic design, composition and coloristics.
                                In the past, I graduated from the University of Finance and Management in Warsaw, where I gained higher education in marketing.
                                You can find more about me on.
                               <a
                                    href={linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</a></p>
                        </div>
                    </div>
                    <div className={styles.decorationContainer}>
                        <span className={`${styles.decoration} ${styles.positionHtml}`}>&#60;html&#62;</span>
                        <span className={`${styles.decoration} ${styles.positionReact}`}>&#60;react&#62;</span>
                        <span className={`${styles.decoration} ${styles.positionScript}`}>&#60;script&#62;</span>
                        <span className={`${styles.decoration} ${styles.positionWebpack}`}>&#60;webpack&#62;</span>
                    </div>
                </div>
                <div className={styles.hobbies}>
                    <span>&#60;hobbies&#62;</span>
                    <div className={styles.hobbiesContainer}>
                        <div>
                            <picture>
                                <source
                                    media="(min-width: 1024px)"
                                    sizes="(max-width: 48px) 70vw, 48px"
                                    srcSet={`${webNormal} 48w`}/>
                                <source
                                    media="(min-width: 768px) and (max-width: 1199px)"
                                    sizes="(max-width: 38px) 60vw, 38px"
                                    srcSet={`${webSmall} 38w`}/>
                                <img
                                    sizes="(max-width: 120px) 40vw, 38px"
                                    srcSet={`${webSmall} 38w`}
                                    alt="icon"/>
                            </picture>
                            <span>web</span>
                            <span>development</span>
                        </div>
                        <div>
                            <picture>
                                <source
                                    media="(min-width: 1024px)"
                                    sizes="(max-width: 48px) 70vw, 48px"
                                    srcSet={`${photoNormal} 48w`}/>
                                <source
                                    media="(min-width: 768px) and (max-width: 1199px)"
                                    sizes="(max-width: 38px) 60vw, 38px"
                                    srcSet={`${photoSmall} 38w`}/>
                                <img
                                    sizes="(max-width: 120px) 40vw, 38px"
                                    srcSet={`${photoSmall} 38w`}
                                    alt="icon"/>
                            </picture>
                            <span>photo</span>
                            <span>editing</span>
                        </div>
                        <div>
                            <picture>
                                <source
                                    media="(min-width: 1024px)"
                                    sizes="(max-width: 48px) 70vw, 48px"
                                    srcSet={`${cyclingNormal} 48w`}/>
                                <source
                                    media="(min-width: 768px) and (max-width: 1199px)"
                                    sizes="(max-width: 38px) 60vw, 38px"
                                    srcSet={`${cyclingSmall} 38w`}/>
                                <img
                                    sizes="(max-width: 120px) 40vw, 38px"
                                    srcSet={`${cyclingSmall} 38w`}
                                    alt="icon"/>
                            </picture>
                            <span>xc</span>
                            <span>cycling</span>
                        </div>
                        <div>
                            <picture>
                                <source
                                    media="(min-width: 1024px)"
                                    sizes="(max-width: 48px) 70vw, 48px"
                                    srcSet={`${stockNormal} 48w`}/>
                                <source
                                    media="(min-width: 768px) and (max-width: 1199px)"
                                    sizes="(max-width: 38px) 60vw, 38px"
                                    srcSet={`${stockSmall} 38w`}/>
                                <img
                                    sizes="(max-width: 120px) 40vw, 38px"
                                    srcSet={`${stockSmall} 38w`}
                                    alt="icon"/>
                            </picture>
                            <span>stock</span>
                            <span>photography</span>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;