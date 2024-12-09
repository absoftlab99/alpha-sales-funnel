'use client'
import React, { useEffect, useState } from 'react';
import FaqChild from './FaqChild';

interface FaqItem {
    id: number;
    title: string;
}

const Faq = () => {
    const [faqItems, setFaqItems] = useState<FaqItem[]>([]);

    useEffect(() => {
        const fetchPortfolios = async () => {
            const res = await fetch('/faq.json');
            const data = await res.json();
            setFaqItems(data);
        };
        fetchPortfolios();
    }, []);

    return (
        <div className='mt-14'>
            <div className='border-2 border-success p-3 font-bold border-dashed rounded-lg w-full'>
                <h1 className='text-center text-2xl md:text-3xl  lg:text-4xl'>ব্লু কাট লেন্সের চশমা ব্যবহারের উল্লেখযোগ্য উপকারিতা সমূহ</h1>
            </div>
            <div className="my-8">
                {
                    faqItems.map(faq =><FaqChild key={faq.id} id={faq.id} title={faq.title}
                    ></FaqChild>)
                }
            </div>
        </div>
    );
};

export default Faq;