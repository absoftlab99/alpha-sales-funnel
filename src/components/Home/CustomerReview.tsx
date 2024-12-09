import Image from 'next/image';
import React from 'react';
import review1 from '../../app/assets/images/customer-review1.png';
import review2 from '../../app/assets/images/customer-review2.png';
import review3 from '../../app/assets/images/customer-review3.png';
import review4 from '../../app/assets/images/customer-review4.png';

const CustomerReview = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl md:text-3xl lg:4xl border-2 border-dashed rounded-xl p-4 md:p-5 border-warning  text-center bg-warning bg-opacity-25">আমাদের কাস্টমার রিভিউ</h1>
            <div className="grid grid-cols-12 gap-5 items-center my-5 lg:my-10">
                <div className="col-span-12 md:col-span-6">
                    <Image className='w-full rounded-lg' src={review1} height={260} width={635} alt='reviews'/>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <Image className='w-full rounded-lg' src={review2} height={260} width={635} alt='reviews'/>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <Image className='w-full rounded-lg' src={review3} height={260} width={635} alt='reviews'/>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <Image className='w-full rounded-lg' src={review4} height={260} width={635} alt='reviews'/>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;