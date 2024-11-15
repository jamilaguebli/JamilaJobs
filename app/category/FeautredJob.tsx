// FeautredJob.tsx
import React from 'react';
import Heading from './Heading';
import JobData from '@/data';
import Link from 'next/link';
import JobCard from './JobCard';
import { Button } from '@/components/ui/button';

interface FeautredJobProps {
  searchQuery: string;
}

const FeautredJob: React.FC<FeautredJobProps> = ({ searchQuery }) => {
  const filteredJobs = JobData.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='pt-20 pb-12'>
      <Heading mainHeading="Featured Jobs" />
      <div className='mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
              <JobCard job={job} />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-2">No jobs found</p>
        )}
      </div>

      <Link href="/job/alljob">
        <div className="text-center mt-[3rem]">
          <Button className='px-8 py-2 font-semibold bg-blue-700 hover:bg-blue-800 transition-all duration-300 rounded-lg text-white'>
            View all jobs
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default FeautredJob;
