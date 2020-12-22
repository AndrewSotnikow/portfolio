import React, {Component} from "react";
import one from "../img/project1.jpg";
import two from "../img/project2.jpg";
import styles from "../scss/portfolio.module.scss";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);

        this.state = {
            currentImageIndex: 0,
            images: [
                {image: one, index: 0},
                {image: two, index: 1},
            ],
            x: 0,
            touchStartLocation: {
                x: null,
            },
            description: [
                "Projekt ukończenia szkoły Coders Lab. Strona fundacji charytatywnej.",
                "Servis dla planowania siatki zdjęć na instagramie.",
            ],
        };
    }

    //Arrow slide events
    prevSlide() {
        const resetIndex = this.state.currentImageIndex === 0;
        resetIndex ? this.setState({
                currentImageIndex: 0,
            })
            : this.setState({
                currentImageIndex: this.state.currentImageIndex - 1,
            });

    }

    nextSlide() {
        let counter = this.state.currentImageIndex;
        let newIndex = counter + 1;
        if (counter === 1) {
            this.setState({
                currentImageIndex: 0,
            })
        } else (this.setState({
                currentImageIndex: newIndex,
            })
        )
    }

    //Swipe events
    handleTouchStart(e) {
        //touch start events give a list of touches for multiple fingers.  0 would be the first finfer
        const firstTouchEvent = e.touches[0];
        const location = {
            x: firstTouchEvent.clientX, //get where the touch happened
        };
        this.setState({
            touchStartLocation: location
        });
    }

    handleTouchEnd(e) {
        //on touch end, makes change to changedTouches
        const firstTouchEvent = e.changedTouches[0];
        const location = {
            x: firstTouchEvent.clientX, //get the location of the end of the touch
        };
        const differences = {
            x: this.state.touchStartLocation.x - location.x, //find the difference from the start to the end touch
        };
        const newPosition = {
            x: this.state.x + -1 * differences.x * 0.05, //.05 to reduce the distance of the touch.  purely for demonstration ease
        };
        location.x > this.state.touchStartLocation.x ? this.prevSlide() : this.nextSlide();
    }

    render() {

        const images = this.state.images;
        let index = this.state.currentImageIndex;
        let description= this.state.description[index];

        return (
            <div className={styles.carouselContainer}>
                <div className={styles.arrowContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="7" stroke="#ffcc00"
                         fill="none" onClick={this.prevSlide} className={styles.arrowPrev}>
                        <polyline points="45.15 57.47 19.88 30.84 45.15 6.58"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="7" stroke="#ffcc00"
                         fill="none" onClick={this.nextSlide} className={styles.arrowNext}>
                        <polyline points="18.86 57.47 44.12 30.84 18.86 6.58"/>
                    </svg>
                </div>


                <div className={styles.imgContainer}>
                    <div className={styles.wrapper}
                         onTouchStart={this.handleTouchStart}
                         onTouchEnd={this.handleTouchEnd}

                         style={{"transform": `translateX(-${index * (100 / images.length)}%)`}}>
                        {images.map((image, index) =>
                            <img key={index.index} src={image.image} alt=""/>

                        )}
                    </div>
                </div>
                <div className={styles.description}><p>{description}</p></div>

            </div>
        );
    }
}


export default Carousel;