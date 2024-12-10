'use client';
import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';
import productThumb from '../../app/assets/images/Blue-Cut-Glass.jpg';
import { TbMinus, TbPlus, TbShoppingBagCheck } from 'react-icons/tb';

const ShopForm = () => {
    const [deliveryCharge, setDeliveryCharge] = useState<number>(60);
    const [quantity, setQuantity] = useState<number>(1)

    const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setDeliveryCharge(value);
    };

    return (
        <form
            className="w-full"
            action="https://docs.google.com/forms/d/e/<form_id>/formResponse" // Replace <form_id> with your Google Form ID
            method="POST"
            target="_self"
        >
            <div className="grid grid-cols-12 gap-5 my-5 w-full">
                {/* Billing Details */}
                <div className="col-span-12 md:col-span-6 w-full">
                    <div className="sweet-shad p-5 rounded-xl border-2">
                        <h3 className="text-lg md:text-2xl">Billing Details</h3>
                        <div className="my-2">
                            <input
                                type="text"
                                name="entry.1234567890" // Replace with Google Form field ID
                                placeholder="আপনার নাম লিখুন*"
                                className="input input-bordered bg-white w-full"
                                required
                            />
                        </div>
                        <div className="my-2">
                            <input
                                type="text"
                                name="entry.0987654321" // Replace with Google Form field ID
                                placeholder="আপনার মোবাইল নম্বর লিখুন*"
                                className="input input-bordered bg-white w-full"
                                required
                            />
                        </div>
                        <div className="my-2">
                            <input
                                type="text"
                                name="entry.5678901234" // Replace with Google Form field ID
                                placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন*"
                                className="input input-bordered bg-white w-full"
                                required
                            />
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

                {/* Product Details */}
                <div className="col-span-12 md:col-span-6 w-full">
                    <div className="border-2 rounded-xl">
                        <div className="flex justify-between px-4 py-2 items-center">
                            <p>Product</p>
                            <p>Subtotal</p>
                        </div>
                        <div className="divider my-0"></div>
                        <div className="flex gap-5 items-center px-4 py-2 justify-between">
                            <Image
                                className="rounded-lg border-2"
                                src={productThumb}
                                height={80}
                                width={80}
                                alt="product image"
                            />
                            <p className='w-[240px]'>Premium Blue-cut Glass for Mens and Wemens</p>
                            <div className="join">
                                <button type='button' onClick={() => setQuantity(quantity - 1)} className='join-item btn btn-primary text-white' disabled={quantity === 1}><TbMinus></TbMinus></button>
                                <input type="text" value={quantity} placeholder="1" className="input input-bordered w-[60px] bg-white rounded-none join-item text-center" />
                                <button type='button' onClick={() => setQuantity(quantity + 1)} className='join-item btn btn-primary text-white'><TbPlus></TbPlus></button>
                            </div>
                            <p>{1690 * quantity} BDT</p>
                        </div>
                        <div className="divider my-0"></div>
                        {/* Radio Section for Shipping */}
                        <div className="flex justify-between px-4 py-2 items-center my-0">
                            <h3 className="text-lg md:text-2xl">Shipping</h3>
                            <div>
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-4">
                                        <input
                                            type="radio"
                                            name="entry.3456789012" // Replace with Google Form field ID for radio group
                                            value={60} // Replace with the exact value Google Form expects
                                            className="radio"
                                            onChange={handleRadio}
                                            defaultChecked
                                        />
                                        <span className="label-text">Inside Dhaka: 60 BDT</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-4">
                                        <input
                                            type="radio"
                                            name="entry.3456789012" // Same ID as above for the radio group
                                            value={130} // Replace with the exact value Google Form expects
                                            className="radio"
                                            onChange={handleRadio}
                                        />
                                        <span className="label-text">Outside Dhaka: 130 BDT</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="divider my-0"></div>
                        <div className="flex justify-between items-center font-bold px-4 py-2">
                            <p>Total</p>
                            <p>{(1690 * quantity) + deliveryCharge} BDT</p>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn custom-btn3 btn-block mt-2 lg:btn-lg"
                    >
                        <TbShoppingBagCheck /> Place Order: {(1690 * quantity) + deliveryCharge} BDT
                    </button>
                </div>
            </div>
        </form >
    );
};

export default ShopForm;