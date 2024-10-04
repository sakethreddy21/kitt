'use client';


import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react'


import {
  Card,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {

 
 
 

  
  return (
    <div className="w-full lg:grid min-h-screen lg:grid-cols-2 place-items-center container mx-auto">
      <div className="hidden lg:block">
        <div className="text-start font-black text-4xl pb-10">
          Welcome to <span className="text-[#458CFE]">Training</span>
          <span className="text-[#A4C739]">Mug</span> <br /> Learning Platform
        </div>
        <span className="font-bold text-lg ">Benefits of Joining</span>
       
     
        <div className="flex flex-col justify-start items-start gap-5 mt-2">
          <h2 className="font-bold text-lg">Don&rsquo;t have an account?</h2>
          <Link href="/signup">
            <Button
              size={'lg'}
              variant={'default'}
              className=" font-bold text-[22px] w-full"
            >
              Sign Up &rarr;
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center py-12 h-full">
        <Card className="w-[550px]  bg-[#161B22] outline-none border-none py-4 rounded-2xl ring-1 ring-white/10 shadow-xl">
          <CardHeader className="text-center px-10">
            <CardTitle className="font-black text-xl">
              Sign-in to your account
            </CardTitle>
            <div
              className="w-full flex pt-4 items-center justify-center"
            >
              <Button
                variant="outline"
                size={'lg'}
                onClick={() => signIn()}
                className="flex justify-center items-center gap- w-full"
              >
                <FcGoogle className="w-5 h-5 mr-2" />
                <span className="font-semibold text-xl">
                  Continue with Google
                </span>
              </Button>
            </div>
           
          </CardHeader>
       
        
        </Card>
      </div>
    </div>
  );
};




export default LoginPage;
