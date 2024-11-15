 import React from 'react'
 interface Props {
    mainHeading:string;
 }

const Heading = ({mainHeading}:Props) => {
  return (
    <div className='text-center p-3'>
        <h1 className='text-black font-bold text-[27px] text-opacity-90'>{mainHeading}</h1>
        
        
    </div>
  )
}

export default Heading