'use client'
import React, { useEffect, useState } from 'react';
import FaqChild from './FaqChild';
import { TbShoppingBag } from 'react-icons/tb';
import Image from 'next/image';
import banner from '../../app/assets/images/banner.png';
import glass from '../../app/assets/images/poster.webp';

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
            <div className='border-2 border-success font-bold border-dashed rounded-lg w-full'>
                <h1 className='text-center text-2xl md:text-3xl bg-success bg-opacity-20 lg:text-4xl p-4 md:p-5 text-success'>ব্লু কাট লেন্সের চশমা ব্যবহারের উল্লেখযোগ্য উপকারিতা সমূহ</h1>
            </div>
            <div className="my-8">
                {
                    faqItems.map(faq =><FaqChild key={faq.id} id={faq.id} title={faq.title}
                    ></FaqChild>)
                }
            </div>
            <div className="text-center my-5">
                <button type="button" className='custom-btn1 btn px-10 rounded-se-none rounded-bl-none rounded-2xl btn-lg'>অর্ডার করতে ক্লিক করুন <TbShoppingBag></TbShoppingBag></button>
            </div>
            <div className="my-10 bg-white rounded-xl sweet-shad p-4 md:p-5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center border-2 border-dashed p-4 md:p-5 rounded-lg border-success font-bold">অ্যান্টি ব্লু লাইট লেন্স কেন ব্যবহার করবেন?</h1>
                <div className="flex flex-col gap-5 items-center my-5">
                    <div className="">
                        <p className='text-center md:text-2xl lg:text-[20px]'>অ্যান্টি ব্লু লাইট লেন্স নিয়ে কথা বলতে গেলে প্রথমেই আমাদের জানতে হবে ব্লু লাইট বা নীল আলো সম্পর্কে।আমরা যে আলো দেখি অর্থাৎ দৃশ্যমান আলোতে রংধনুর সাতটা রঙই থাকে। বেগুনী, নীল, আসমানি, সবুজ, হলুদ, লাল সবগুলোই। এদের মধ্যে লাল আলোর তরঙ্গদৈর্ঘ্য সবচেয়ে বেশী আর বেগুনী আলোর তরঙ্গদৈর্ঘ্য সবচেয়ে কম। যে আলোর তরঙ্গদৈর্ঘ্য যতো বেশি, তার শক্তি বা এনার্জি ততো কম। আর যে আলোর তরঙ্গদৈর্ঘ্য যতো কম, তার শক্তি ততো বেশি। সেই হিসেবে বেগুনী আলোর শক্তি সবচেয়ে বেশী, লাল আলোর সবচেয়ে কম। শক্তির বিচারে নীল আলোর শক্তি শুধু বেগুনী রঙের থেকে কম। বেশী শক্তির কারণে এই বেগুনী বা নীল রঙের আলোকে High Energy Visible Light বা HEV লাইট বলা হয়।</p>
                    </div>
                    <div className="">
                        <Image src={banner} height={500} width={500} alt='offer banner'></Image>
                    </div>
                </div>
            </div>
            <div className="my-20">
                <h1 className="font-bold text-2xl md:text-3xl lg:4xl border-2 border-dashed rounded-xl p-4 md:p-5 border-primary text-accent text-center bg-accent bg-opacity-25">ব্লু কাট লেন্সর চশমার প্যাকেজের সাথে কি কি ফ্রি পাচ্ছেন</h1>
                <div className="my-10 grid grid-cols-12 gap-5 items-center">
                    <div className="col-span-12 md:col-span-8 flex gap-4 flex-wrap justify-center">
                        <p className='bg-warning p-3 md:p-4 rounded-md md:rounded-xl sweet-shad animate-bounce'>1. অরজিনাল ব্লু-কাট লেন্স UV 420</p>
                        <p className='bg-white p-3 md:p-4 rounded-md md:rounded-xl sweet-shad'>2. একটি চশমা বক্স ।</p>
                        <p className='bg-white p-3 md:p-4 rounded-md md:rounded-xl sweet-shad'>3. লেন্স ক্লিনার।</p>
                        <p className='bg-white p-3 md:p-4 rounded-md md:rounded-xl sweet-shad'>4. গ্লাস পরিষ্কার করার সফট টিসু কাপর।</p>
                        <p className='bg-white p-3 md:p-4 rounded-md md:rounded-xl sweet-shad'>5. আপনার পছন্দের ফাইবার ফ্রেম।</p>
                        <p className='bg-white p-3 md:p-4 rounded-md md:rounded-xl sweet-shad'>6. একটি UV টেস্টিং কিট। ( অরজিনাল কিনা তা পরীক্ষা করার জন্য)</p>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <Image src={glass} height={250} width={400} alt='Glass Image'></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;