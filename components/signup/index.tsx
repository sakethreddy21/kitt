/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

import { FC,} from 'react';




import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '../ui/card';


import { Button } from '../ui/button';

import { FcGoogle } from 'react-icons/fc';

const SignupComponent: FC = () => {





  return (
    <Card className="w-[550px] bg-[#161B22] outline-none border-none">
      <CardHeader className="text-center">
        <CardDescription className="pt-2 text-white font-thin text-lg">
          Create a new account with us!
        </CardDescription>
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
            <span className="font-semibold text-xl">Continue with Google</span>
          </Button>
        </div>
      </CardHeader>
      
     
    </Card>
  );
};

export default SignupComponent;
