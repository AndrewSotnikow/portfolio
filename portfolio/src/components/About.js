import React, {Component} from 'react';
import styles from "../scss/about.module.scss";
import web from "../img/web.png";
import webNormal from "../img/web.png";
import webSmall from "../img/web_small.png";
import photoNormal from "../img/photo.png";
import photoSmall from "../img/photo_small.png";
import cyclingNormal from "../img/cycling.png";
import cyclingSmall from "../img/cycling_small.png";
import stockNormal from "../img/stock.png";
import stockSmall from "../img/stock_small.png";
class About extends Component {

    render() {
        // const webNormal = "../img/web.png";
        // const webSmall = "../img/web_small.png";
        const linkedin = "https://www.linkedin.com/in/andrzej-sotnikow/";
        return (
            <section className={styles.section} id="about">
                <div className={styles.contentContainer}>
                  <div className={styles.textContainer}>
                      <div className={styles.textContent}>
                          <span>&#60;about&#62;</span>
                          <span>Skills,</span>
                          <span>education</span>
                          <p>kurs w coders lab podczas którego poznałem następujące technologie: HTML, CSS, Javascript,
                              React JS, sass, Webpack, RWD. skończyłem KURS UX w Szkołe Igora Dżazowa. Z łatwością pracuję
                              w edytorach graficznych i znam podstawy projektowania i kompozycji. Za plecami mam wyższe
                              wykształcenie z marketingu w Wyższej Szkołe Finansów i Zarządzania w Warszawie. Więcej na <a
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
                                    alt=""/>
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
                                    alt=""/>
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
                                    alt=""/>
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
                                    alt=""/>
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