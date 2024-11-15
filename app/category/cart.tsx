
import React from 'react'
import Heading from './Heading'
import JobCategoryCard from './JobCategoryCard'

interface CardData {
  image: string;
  category: string;
  openposition: string;
}

const jobCategories: CardData[] = [
  {
    image: '/dev.png',
    category: 'Development',
    openposition: '23',
  },
  {
    image: '/marketing.png',
    category: 'Marketing',
    openposition: '13',
  },
  {
    image: '/design.png', 
    category: 'Design',
    openposition: '33',
  },
  {
    image: '/fianance.png', 
    category: 'Finance',
    openposition: '23',
  },
  {
    image: '/hR.png',
    category: 'Human Resource',
    openposition: '33',
  },
  {
    image: '/atjob.png',
    category: 'Automotive Jobs',
    openposition: '53',
  },
  {
    image: '/custservice.png',
    category: 'Customer Services',
    openposition: '13',
  },
  {
    image: '/health.png',
    category: 'Health and Care',
    openposition: '03',
  },
  {
    image: '/management.png',
    category: 'Project Management',
    openposition: '23',
  },
];

const Cart = () => {
  return (
    <div className='pt-20 pb-12'>
      <Heading mainHeading="Popular Job Categories"/>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center ">
        {jobCategories.map((card, index) => (
          <JobCategoryCard
            key={index}
            image={card.image}
            category={card.category}
            openposition={card.openposition} 
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
