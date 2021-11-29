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
                <Slide index={idx} key={img.src}>
                    <img
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                        src={img.src}
                        alt={img.alt}
                    />
                </Slide>
            ))}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
);

export default ProductSlider;