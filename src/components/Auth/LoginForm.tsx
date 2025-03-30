"use client";

import { Button, Description, Field, Fieldset, Input, Label, Legend } from "@headlessui/react";
import clsx from "clsx";

import React, { useState } from "react";
import { redirect, useRouter } from "next/navigation";

import { User, UserLoginRequest } from "@/types/users";
import { loginUser } from "@/services/auth";
import { useAuth } from '@/context/auth-context';

interface UserResponse {
  token: string;
  user: User;
}

interface LoginResponse {
  status: number;
  message: string;
  data: UserResponse;
}

const LoginForm = () => {
  const { isAuthenticated, setUser } = useAuth();

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  const [request, setRequest] = useState<UserLoginRequest>({
    email: "",
    password: "",
  });

  const onChangeInputHandlers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value
    });
  }
  const handleLoginForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response: undefined | Response = await loginUser(request);

      if (response?.ok) {
        const result: LoginResponse = await response.json();
        setUser(result.data.user);
        redirect("/dashboard")
      }

    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="bg-gray-700 mt-5 px-4 py-6 rounded">
      <form onSubmit={handleLoginForm}>

        <div className="w-full max-w-lg">
          <Fieldset className="space-y-6 rounded-xl bg-gRAY-800 p-6 sm:p-10">
            <Legend className="text-base/7 font-semibold text-white">Register</Legend>

            <Field>
              <Label className="text-sm/6 font-medium text-gray-50">Email</Label>
              <Input
                type='email'
                name="email"
                onChange={onChangeInputHandlers}
                value={request.email}
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )}
              />
              <Description className="text-sm/6 text-rose-500"></Description>
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-gray-50">Password</Label>
              <Input
                name="password"
                type='password'
                onChange={onChangeInputHandlers}
                value={request.password}
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )}
              />
              <Description className="text-sm/6 text-rose-500"></Description>
            </Field>
          </Fieldset>

          <div className="ml-8">
            <Button type='submit'
                    className="inline-flex items-center gap-2 rounded-md bg-gray-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              Save changes
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;