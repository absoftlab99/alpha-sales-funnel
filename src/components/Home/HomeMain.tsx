import React from 'react';
import HeroSection from './HeroSection';
import BeforeFaq from './BeforeFaq';
import Faq from './Faq';
import Cta from './Cta';
import CustomerReview from './CustomerReview';
import OrderDetails from '../Shop/OrderDetails';

const HomeMain = () => {
    return (
        <div>
            <div className='grid lg:place-content-center custom-bg w-full py-10 lg:py-20'>
                <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 lg:px-0 mx-auto'>
                    <HeroSection></HeroSection>
                </div>
            </div>
            <div className='grid lg:place-content-center bg-whtie w-full py-10 lg:py-20'>
                <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 lg:px-0 mx-auto'>
                    <BeforeFaq></BeforeFaq>
                    <Faq></Faq>
                </div>
            </div>
            <div className='grid bg-accent lg:place-content-center bg-whtie w-full py-10 lg:py-20'>
                <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 lg:px-0 mx-auto'>
                    <Cta></Cta>
                </div>
            </div>
            <div className='grid lg:place-content-center bg-whtie w-full py-10 lg:py-20'>
                <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 lg:px-0 mx-auto'>
                    <CustomerReview></CustomerReview>
                </div>
            </div>
            <div className='grid bg-white lg:place-content-center bg-whtie w-full py-10 lg:py-20'>
                <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 lg:px-0 mx-auto'>
                    <OrderDetails></OrderDetails>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;