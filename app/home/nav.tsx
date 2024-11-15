import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from '@/components/ui/button';
import { LogIn, Milestone } from 'lucide-react';

const Nav = () => {
  return (
    <div className='h-[13vh] overflow-hidden shadow-md'>
       <ClerkLoaded>
      <div className='w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between'>
        <div className="">
          <Link href="/">
          <Image
          src="/logo.png"
          alt='logo'
          width={150}
          height={150}
         className=''
          />
          </Link>

        </div>

 <nav className="flex items-center space-x-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <div className='flex '>
             
                
                <Button className="px-4 py-2 rounded-lg bg-yellow-400 text-white hover:bg-yellow-500 transition duration-200 ease-in-out">
                <LogIn className='w-6 h-6 ' />
                  Login
                </Button>
                </div>
              </SignInButton>
             
            </SignedOut>
          </nav>
      </div>
      </ClerkLoaded>
    </div>
  )
}

export default Nav