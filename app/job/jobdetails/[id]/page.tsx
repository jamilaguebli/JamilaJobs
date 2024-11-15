import JobCard from '@/app/category/JobCard';
import ButtonModal from '@/app/home/ButtonModal';
import JobData from '@/data';
import React from 'react';

interface JobDetailsProps {
  params: {
    id: string;
    title:string;
  };
}

const JobDetails = async ({ params: { id } }: JobDetailsProps) => {
    const singlejob=JobData.find((job)=>job.id.toString()==id)
  return (
    <div className='mt-20 mb-12 '>
        <div className='block sm:flex items-center justify-between w-[80%] mx-auto '>
            <div className="flex-[0.7]">
           <JobCard job={singlejob!}/>
            </div>
            <ButtonModal />

        </div>

        <div className='mt-16 w-[80%]  mx-auto '>
            <h1 className="text-[20px] font-semibold">Job Description</h1>
            <p className='mt-4 text-black text-opacity-70'>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus,
              vero pariatur beatae tempore ad quibusdam repellat dolorum temporibus? Modi mollitia eligendi,
               delectus aliquid vel veritatis incidunt, quam saepe pariatur cupiditate, 
               numquam aliquam nesciunt non recusandae cum earum molestiae.
             Quasi autem iusto neque quod necessitatibus et ad minima quaerat. Dolorem, soluta.

            </p>


            <h1 className="text-[20px] font-semibold mt-5">Key Responsibilities</h1>
            <p className='mt-4 text-black text-opacity-70'>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus,
              vero pariatur beatae tempore ad quibusdam repellat dolorum temporibus? Modi mollitia eligendi,
               delectus aliquid vel veritatis incidunt, quam saepe pariatur cupiditate, 
               numquam aliquam nesciunt non recusandae cum earum molestiae.
             Quasi autem iusto neque quod necessitatibus et ad minima quaerat. Dolorem, soluta.

            </p>


            <h1 className="text-[20px] font-semibold mt-5">skills</h1>
               <ul className="mt-4">
                <li className='mt-4text-black text-opacity-70'>
                      React Js
                </li>

                <li className='mt-4text-black text-opacity-70'>
                      Next Js
                </li>
                <li className='mt-4text-black text-opacity-70'>
                     Tailwind Css
                </li>
                <li className='mt-4text-black text-opacity-70'>
                    TypeScript
                </li>
                <li className='mt-4text-black text-opacity-70'>
                    Clerck
                </li>
                

               </ul>

        </div>
        
    </div>
  );
};

export default JobDetails;
