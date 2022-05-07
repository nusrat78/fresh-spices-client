import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../images/Banner/banner1.png';
import Banner2 from '../../../images/Banner/banner2.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img height={400} className="d-block w-100"
                    src={Banner1}
                    alt="first slide"
                />
                <Carousel.Caption>
                    <h3>Spices and herbs in bulk for all your business needs.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={400}
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Switching suppliers is easy. Our Spice experts can help you find the right products for your formulation.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;