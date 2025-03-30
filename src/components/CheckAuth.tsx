"use client";

import { useAuth } from "@/context/auth-context";
import { redirect } from "next/navigation";

const CheckAuth = () => {
  const { user, isAuthenticated } = useAuth();


  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="text-2xl bg-blue-600 text-black">
        <span>خوش آمدی </span>
        <span>{user?.name}</span>
        <span>-</span>
        <span>{user?.email}</span>
        <span>به اپلیکیشن ما برنامه نویس پویا</span>
      </h1>
    </div>
  )

}

export default CheckAuth;