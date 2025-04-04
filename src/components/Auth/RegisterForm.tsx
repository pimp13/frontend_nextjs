"use client";

import clsx from 'clsx';
import { Button, Description, Field, Fieldset, Input, Label, Legend } from '@headlessui/react';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserRegisterRequest } from "@/types/users";

import { create } from "@/services/auth";

const RegisterForm = () => {
  const router = useRouter();

  const [request, setRequest] = useState<UserRegisterRequest>({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInputHandlers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value
    });
  }

  const handlerSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      const res = await create(request);
      const result = await res?.json();
      console.log(result);

      // if (res?.ok) await router.push("/login");

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="bg-gray-700 mt-5 px-4 py-6 rounded">
      <form onSubmit={handlerSubmitForm}>

        <div className="w-full max-w-lg">
          <Fieldset className="space-y-6 rounded-xl bg-gRAY-800 p-6 sm:p-10">
            <Legend className="text-base/7 font-semibold text-white">Register</Legend>
            <Field>
              <Label className="text-sm/6 font-medium text-white">Name</Label>
              <Input
                onChange={onChangeInputHandlers}
                value={request.name}
                name="name"
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )}
              />
            </Field>
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


export default RegisterForm;