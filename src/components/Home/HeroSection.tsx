import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div className="bg-error rounded-xl">
                <h1 className='text-white p-4 text-3xl leading-[1.5] lg:text-5xl lg:leading-[2] font-semibold text-center'>মোবাইল কম্পিউটারের স্কীনের <span className='bg-primary px-3 rounded-md text-warning'>ক্ষতিকর ব্লু-লাইট</span> ধীরে ধীরে চোখের <span className='bg-primary px-3 rounded-md text-warning'>রেটিনা ড্যামেজ</span> সহ বিভিন্ন ভাবে চোখের ক্ষতি করেই যাচ্ছে !</h1>
            </div>
            <h3 className='text-white text-2xl lg:text-4xl text-center my-10'>দোকানে যে সকল <span className='text-warning'>Anti-Reflection</span> লেন্স পাওয়া যায়, তা থেকে আমাদের <span className='text-warning'>Blue light লেন্সটি</span> অরজিনাল অনেক বেশি কার্যকর।</h3>
        </div>
    );
};

export default HeroSection;