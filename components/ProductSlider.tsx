import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Image } from './types';

interface Props {
    images: Image[];
}

const ProductSlider: React.FC<Props> = ({ images }) => (
    <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={50}
        totalSlides={images.length}
    >
        <Slider>
            {images.map((img, idx) => (
                <Slide index={idx}>
                    <img src={img.src} alt={img.alt} />
                </Slide>
            ))}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
);

export default ProductSlider;