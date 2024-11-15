import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Main from "./home/main";
import Cart from "./category/cart";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-8 pt-5">
        <div className="relative h-[240px] w-[240px] lg:w-[400px] lg:h-[400px] mb-8 lg:mb-0 pt-5 lg:mr-10">
          <Image
            src='/main.png'
            fill
            alt="img"
            className=""
          />
        </div>
        <div className="flex flex-col items-center gap-y-8 space-x-10">
          <h1 className="text-xl lg:text-2xl font-bold text-neutral-600 max-w-[480px] text-center">
            Discover, pursue, and excel in your career with JAMILAJOBS
          </h1>
          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <ClerkLoading>
              <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton>
                  <Button size='lg' variant='secondary' className="w-full text-xl font-medium text-yellow-300">
                    Get Started
                  </Button>
                </SignUpButton>
                <SignInButton>
                  <Button size='lg' className="w-full font-medium text-xl bg-green-300 text-white hover:bg-green-400 transition duration-200 ease-in-out">
                    I already have an account
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Main />
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div> 

      {/* Afficher le composant Cart uniquement si l'utilisateur est connecté */}
      <ClerkLoaded>
        <SignedIn>
          <Cart />
        </SignedIn>
        
      </ClerkLoaded>
    </div>
  );
}
