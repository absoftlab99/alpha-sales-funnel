import React from 'react';
import HeroSection from './HeroSection';

const HomeMain = () => {
    return (
        <div className='grid lg:place-content-center custom-bg w-full py-20'>
            <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 lg:px-0 mx-auto'>
                <HeroSection></HeroSection>
            </div>
        </div>
    );
};

export default HomeMain;