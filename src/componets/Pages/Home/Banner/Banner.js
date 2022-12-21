import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from '../../../../assets/banner/3072209.jpg';
import banner2 from '../../../../assets/banner/3056065.jpg';
import banner3 from '../../../../assets/banner/3003640.jpg';
import banner4 from '../../../../assets/banner/3108307.jpg';

import bannerCSS from './Banner.css';

const Banner = () => {
    return (


        <>
            <Carousel showArrows={true} infiniteLoop autoPlay  >
                <div>
                    <img src={banner1} alt="" width="500px" height="200px" />

                </div>
                <div>
                    <img src={banner2} alt="" width="500px" height="200px" />

                </div>
                <div>
                    <img src={banner3} alt="" width="500px" height="200px" />

                </div>
                <div>
                    <img src={banner4} alt="" width="500px" height="200px" />

                </div>

            </Carousel>
        </>

    );
};

export default Banner;