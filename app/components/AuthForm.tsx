'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null); // 'use client' must be set to use useState

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof authFormSchema>) {
    console.log(values);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/monevity_logo_10.svg"
            width={150}
            height={150}
            alt="monevity logo"
            // className="w-50 h-50 max-w-xs max-h-xs sm:max-w-sm sm:max-h-sm md:max-w-md md:max-h-md lg:max-w-lg lg:max-h-lg xl:max-w-xl xl:max-h-xl place-content-center"
            // className="w-6 h-6 max-xl:w-3.5 max-xl:h-3.5"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Monevity
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-fray-900">
            {/* if we have a user, link account. else, depending on page, display Sign In or Sign Up  */}
            {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? 'Link your account to get started'
                : 'Please enter your details'}
            </p>
          </h1>
        </div>
      </header>
      {/* if user is authenticated / logged in, provide Plaid link to link bank */}
      {user ? (
        <div className=" flex flex-col gap-4"> {/* PlaidLink*/} </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthForm;
