import React from 'react';
import banner from '../../../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="hero h-[700px]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Collected Mobile.</h1>
                    <p className="mb-5">This Market for Seller and Buyer who can Sell their used Mobile.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;