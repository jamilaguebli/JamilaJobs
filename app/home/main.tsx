import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div>
        <Link href="/category">
        <Button className='bg-red-500  hover:bg-red-600  text-white text-xl 
         px-8 py-3 border rounded-md shadow-md
        '>
            Job A Post
            </Button>
            </Link>
    </div>
  )
}

export default Main