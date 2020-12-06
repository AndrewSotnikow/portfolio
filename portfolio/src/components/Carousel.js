import React, {Component} from "react";
import one from "../img/project1.jpg";
import two from "../img/project2.jpg";
import three from "../img/3.png";
import styles from "../scss/portfolio.module.scss";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.state = {
            currentImageIndex: 0,
            images: [
                {image: one, index: 0},
                {image: two, index: 1},
                {image: three, index: 2},
            ],
        };
    }

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
        if (counter === 2) {
            this.setState({
                currentImageIndex: 0,
            })
        } else (this.setState({
                currentImageIndex: newIndex,
            })
        )
    }

    render() {
        let images = this.state.images;
        let index = this.state.currentImageIndex;
        return (
            <div className={styles.carouselContainer}>
<div className={styles.arrowContainer}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="7" stroke="#ffcc00" fill="none" onClick={this.prevSlide} className={styles.arrowPrev}><polyline points="45.15 57.47 19.88 30.84 45.15 6.58"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="7" stroke="#ffcc00" fill="none" onClick={this.nextSlide} className={styles.arrowNext}><polyline points="18.86 57.47 44.12 30.84 18.86 6.58"/></svg>
</div>



                <div className={styles.imgContainer}>
                    <div className={styles.wrapper}
                         style={{"transform": `translateX(-${index * (100 / images.length)}%)`}}>
                        {images.map((image, index) =>
                            <img key={index.index} src={image.image} alt=""/>
                        )}
                    </div>
                </div>

            </div>
        );
    }
}


export default Carousel;