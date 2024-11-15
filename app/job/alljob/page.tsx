import JobCard from '@/app/category/JobCard';
import { Button } from '@/components/ui/button';
import JobData from '@/data';
import Link from 'next/link';
import React from 'react';

const AllJob = () => {
  return (
    <div className='mt-12 w-[80%] mx-auto mb-12'>
      <div className='mb-[2rem]'>
        <div className='flex justify-between'>
        <h1 className='font-semibold'>
          Show Result ({JobData.length})
        </h1>
        
      
        </div>
        <div className='space-y-8 pt-5'>
          {JobData.map((job) => (
            <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
              <JobCard job={job} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJob;
