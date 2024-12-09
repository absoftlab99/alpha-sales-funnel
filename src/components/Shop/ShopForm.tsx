import Image from 'next/image';
import React from 'react';
import productThumb from '../../app/assets/images/Blue-Cut-Glass.jpg';

const ShopForm = () => {
    return (
        <form className='w-full'>
            <div className="grid grid-cols-12 gap-5 my-5 w-full">
                <div className="col-span-12 md:col-span-6 w-full">
                    <div className='sweet-shad p-5 rounded-xl border-2'>
                        <h3 className='text-lg md:text-2xl'>Billing Detials</h3>
                        <div className="my-2">
                            <input type="text" placeholder="আপনার নাম লিখুন*" className="input input-bordered bg-white w-full" />
                        </div>
                        <div className="my-2">
                            <input type="text" placeholder="আপনার মোবাইল নম্বর লিখুন*" className="input input-bordered bg-white w-full" />
                        </div>
                        <div className="my-2">
                            <input type="text" placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন*" className="input input-bordered bg-white w-full" />
                        </div>
                    </div>
                    <div className="my-2 rounded-xl sweet-shad p-5 mt-4 border-2">
                        <h2 className='text-lg md:text-2xl'>Payment</h2>
                        <div className="form-control">
                            <label className="label cursor-pointer justify-start gap-3">
                                <input type="checkbox" className="checkbox" />
                                <span className="label-text">ক্যাস অন ডেলিভারি</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 w-full">
                    <div className="border-2 rounded-xl">
                        <div className="flex justify-between items-center px-4 py-2">
                            <p className='md:text-lg'>Product</p>
                            <p>Subtotal</p>
                        </div>
                        <div className="divider my-0"></div>
                        <div className="flex gap-5 items-center px-4 py-2">
                            <Image className='rounded-lg border-2' src={productThumb} height={80} width={80} alt='product image' />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ShopForm;