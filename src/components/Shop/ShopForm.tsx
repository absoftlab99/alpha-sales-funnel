'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import productThumb from '../../app/assets/images/Blue-Cut-Glass.jpg';
import { TbMinus, TbPlus, TbShoppingBagCheck } from 'react-icons/tb';

const ShopForm = () => {
    const [deliveryCharge, setDeliveryCharge] = useState<number>(60);
    const [quantity, setQuantity] = useState<number>(1)

    const handleRadio = (e) => {
        const value = parseInt(e.target.value);
        setDeliveryCharge(value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const delivery_charge = form.delivery_charge.value;
        const total = form.total.value;

        const data = {name, phone, address, quantity, price, delivery_charge, total};

        console.log(data);
        

        fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Successfully Order Placed')
            }).catch(error => alert(error.message));

    }



    return (
        <form
            className="w-full"
            method="POST"
            target="_self"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-12 gap-5 my-5 w-full">
                {/* Billing Details */}
                <div className="col-span-12 md:col-span-6 w-full">
                    <div className="sweet-shad p-5 rounded-xl border-2">
                        <h3 className="text-lg md:text-2xl">Billing Details</h3>
                        <div className="my-2">
                            <input
                                type="text"
                                name='name'
                                placeholder="আপনার নাম লিখুন*"
                                className="input input-bordered bg-white w-full"
                                required
                            />
                        </div>
                        <div className="my-2">
                            <input
                                type="text"
                                name='phone'
                                placeholder="আপনার মোবাইল নম্বর লিখুন*"
                                className="input input-bordered bg-white w-full"
                                required
                            />
                        </div>
                        <div className="my-2">
                            <input
                                type="text"
                                name='address'
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
                                <input type="text" name='quantity' value={quantity} placeholder="1" className="input input-bordered w-[60px] bg-white rounded-none join-item text-center" />
                                <button type='button' onClick={() => setQuantity(quantity + 1)} className='join-item btn btn-primary text-white'><TbPlus></TbPlus></button>
                            </div>
                            <p>{1690 * quantity} BDT</p>
                            <input className='hidden' type="number" name="price" defaultValue={1690 * quantity} id=""/>
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
                                            name='delivery_charge'
                                            value={60}
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
                                            name='delivery_charge'
                                            value={130}
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
                            <input type="number" name="total" defaultValue={(1690 * quantity) + deliveryCharge} id="" />
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