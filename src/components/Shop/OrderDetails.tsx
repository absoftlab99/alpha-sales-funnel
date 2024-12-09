import React from 'react';
import ShopForm from './ShopForm';

const OrderDetails = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl md:text-3xl lg:4xl border-2 border-dashed rounded-xl p-4 md:p-5 border-primary text-accent text-center bg-accent bg-opacity-25">তাই আর দেরি না করে আজই অর্ডার করুন</h1>
            <div className="">
                <ShopForm></ShopForm>
            </div>
        </div>
    );
};

export default OrderDetails;