import React, {Component} from 'react';
import styles from "../scss/about.module.scss";
import cycling from "../img/cycling.png";
import photography from "../img/photo.png";
import web from "../img/web.png";
import stock from "../img/stock.png";

class About extends Component {
    render() {
        return (
            <section className={styles.section}>
                <div className={styles.contentContainer}>
                  <div className={styles.textContainer}>
                      <div className={styles.textContent}>
                          <span>&#60;about&#62;</span>
                          <span>Skills,</span>
                          <span>education</span>
                          <p>kurs w coders lab podczas którego poznałem następujące technologie: HTML, CSS, Javascript,
                              React JS, sass, Webpack, RWD. skończyłem KURS UX w Szkołe Igora Dżazowa. z łatwością pracuję
                              w edytorach graficznych i znam podstawy projektowania i kompozycji. Za plecami mam wyższe
                              wykształcenie z marketingu w Wyższej Szkołe Finansów i Zarządzania w Warszawie. Więcej na <a
                                  href="">LINKEDIN</a></p>
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
                    <div className="text">
                        <div>
                            <img src={web} alt=""/>
                            <span>web</span>
                            <span>development</span>
                        </div>
                        <div>
                            <img src={photography} alt=""/>
                            <span>photo</span>
                            <span>editing</span>
                        </div>
                        <div>
                            <img src={cycling} alt=""/>
                            <span>xc</span>
                            <span>cycling</span>
                        </div>
                        <div>
                            <img src={stock} alt=""/>
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