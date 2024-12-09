import Link from 'next/link';
import React from 'react';
import { TbShoppingBag } from 'react-icons/tb';


const BeforeFaq = () => {
    return (
        <div>
            <div className='bg-blue-950 p-5 text-white rounded-lg'>
                <h1 className='text-center text-4xl'>আপনাদের পছন্দের চোখকে ভালো রাখতে ব্লু-কাট লেন্সের</h1>
                <h1 className='text-4xl text-center mt-2 text-info'>চশমা ৬,৪১০ টাকা।</h1>
                <div className="divider"></div>
                <h2 className='text-center text-3xl'>যে কোন তথ্যের জন্য প্রয়োজনে কল করুন- <Link href='tel:+8801798930232'>+8801798930232</Link></h2>
            </div>
            <div className="text-center my-5">
                <button type="button" className='custom-btn1 btn px-10'>অর্ডার করতে ক্লিক করুন <TbShoppingBag></TbShoppingBag></button>
            </div>
        </div>
    );
};

export default BeforeFaq;