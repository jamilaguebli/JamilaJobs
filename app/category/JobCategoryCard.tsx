import Image from 'next/image';
import React from 'react'
interface JobCategoryCardProps {
    image: string;
    category: string;
    openposition: string;
  }
const JobCategoryCard = ({image,category,openposition}:JobCategoryCardProps) => {
  return (
    <div className='p-4 border-2  cursor-pointer hover:scale-110 hover:shadow-sm transition-all
    duration-300 border-gray-500 rounded-lg  border-opacity-10 
    '>
        <div className='flex items-center  space-x-4'>
            <Image
            src={image}
            alt="image"
            width={60}
            height={60}
            />

            <div>
                <h1 className='text-[17px] font-semibold mb-[0.4rem]'>{category}</h1>
                <p className='text-[14px] text-black font-semibold text-opacity-50'>({openposition}) open Position</p>
            </div>

        </div>
    </div>
  )
}

export default JobCategoryCard