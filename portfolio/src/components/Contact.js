import React, {Component} from 'react';
import styles from "../scss/contact.module.scss";
import Lines from "../components/lines";
import linkedIn from "../img/linkedIn.png";
import mail from "../img/mail.png";

class Contact extends Component {

    render() {
        return (
            <section className={styles.section}>
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
                              <div className={styles.icon}>
                                  <img src={linkedIn} className={styles.linkedIn}/>
                                  <img src={mail} className={styles.mail}/>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <ul>
                        <li><a className={styles.link} href="">portfolio</a></li>
                        <li><a className={styles.link} href="">about</a></li>
                        <li><a className={styles.link} href="">contact</a></li>
                    </ul>
                </nav>

            </section>
        );
    }
}

export default Contact;