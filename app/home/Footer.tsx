import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[5rem] bg-[#111111]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        gap-[rem] items-start pb-[2rem] border-b-2  border-white border-opacity-10
        '>
            <div>
                <div>
                <Image
                src="/logo.png"
                alt='log'
                width={150}
                height={1550}
                
                />
                </div>

                <div className="flex items-center space-x-4 pt-5">
    {/* Facebook Icon */}
    <div className="bg-blue-600 p-2 rounded-full shadow-lg transition transform hover:scale-110 hover:bg-blue-700 hover:shadow-2xl duration-300">
        <Facebook className="w-6 h-6 text-white animate-bounce "/>
    </div>

    {/* Instagram Icon */}
    <div className="bg-yellow-300 p-2 rounded-full shadow-lg transition transform hover:scale-110 hover:bg-yellow-400 hover:shadow-2xl duration-300">
        <Instagram className="w-6 h-6 text-white animate-bounce "/>
    </div>

    {/* LinkedIn Icon */}
    <div className="bg-green-400 p-2 rounded-full shadow-lg transition transform hover:scale-110 hover:bg-green-500 hover:shadow-2xl duration-300">
        <Linkedin className="w-6 h-6 text-white animate-bounce "/>
    </div>
</div>



                
              
            </div>

            <div className='flex flex-col items-start space-y-3'>
                    <p className='text-white text-opacity-10 hover:text-yellow-300 font-semibold text-[16px]'>
                        About
                        </p>
                    <p className='text-white text-opacity-10 hover:text-yellow-300 font-semibold text-[16px]'
                    >Contact
                    </p>
                    <p className='text-white text-opacity-10 hover:text-yellow-300 font-semibold text-[16px]'>
                        A propos
                        </p>
                        <p className='text-white text-opacity-10 hover:text-yellow-300 font-semibold text-[16px]'>
                        Term
                        </p>
                </div>

                <div  className='flex flex-col items-start space-y-3 '>
                    <h1 className='text-white   font-semibold text-[18px]'>
                    Employer
                        
                        </h1>
                    <p className='text-white text-opacity-10 hover:text-yellow-300 font-semibold text-[16px]'>
                    Post an ad
                    </p>
                    <p className='text-white text-opacity-10 hover:text-yellow-300 font-semibold text-[16px]'>
                    Find a CV
                    </p>
                    <p className='text-white text-opacity-10 hover:text-yellow-300 font-semibold text-[16px]'>
                    Connection
                    </p>
                </div>


                <div  className='flex flex-col items-start space-y-3 '>
                    <h1 className='text-white   font-semibold text-[18px]'>
                    Job seeker
                        
                        </h1>
                    <p className='text-white text-opacity-10 hover:text-yellow-300 font-semibold text-[16px]'>
                    Trouver un emploi
                    </p>
                    <p className='text-white text-opacity-10 hover:text-yellow-300 font-semibold text-[16px]'>
                    Find a job
                    </p>
                    <p className='text-white text-opacity-10 hover:text-yellow-300 font-semibold text-[16px]'>
                    Connection
                    </p>
                </div>

        </div>
        
      </div>
  )
}

export default Footer