import React, {Component} from 'react';
import Particles from "react-tsparticles";
import fff from "../img/arrowRight.svg"

import particles from "./animation/particles.json";
import webNormal from "../img/web.png";
import styles from "../scss/test.module.scss";
import {HashLink} from "react-router-hash-link";
import Carousel from "./Carousel";

class Test extends Component {


    render() {
        return (
                <div>
                   <Carousel />
                </div>
        );
    }
}

export default Test;

