import React from 'react';
import { TbShoppingBag } from 'react-icons/tb';

const Cta = () => {
    return (
        <div className=''>
            <h1 className='text-2xl md:text-3xl lg:text-[48px] font-bold text-center text-warning'>আজই অফার প্রাইস মাত্র 1,999 টাকা</h1>
            <h4 className='text-lg md:text-xl lg:text-[28px] text-white text-center mt-5'>সাথে পাচ্ছেন ৩ মাস এর গ্যারান্টি</h4>
            <div className="text-center my-5">
                <button type="button" className='custom-btn1 btn px-10 rounded-se-none rounded-bl-none rounded-2xl btn-lg border-none'>অর্ডার করতে ক্লিক করুন <TbShoppingBag></TbShoppingBag></button>
            </div>
        </div>
    );
};

export default Cta;