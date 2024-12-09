import React from 'react';
import { TbDirectionSignFilled } from 'react-icons/tb';

interface FaqItemsProps {
    id: number;
    title: string;
}

const FaqChild: React.FC<FaqItemsProps> = ({title}) => {
    return (
        <div className='sweet-shad flex gap-4 items-center p-4 my-2 bg-white rounded-md'>
            <p className='text-success text-2xl'><TbDirectionSignFilled/></p>
            <p className='text-success text-xl md:2xl lg:text-[26px]'>{title}</p>
        </div>
    );
};

export default FaqChild;