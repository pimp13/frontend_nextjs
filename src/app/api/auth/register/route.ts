import { getCsrfToken } from "@/services/auth";
import { NextResponse } from "next/server";
import { BACKEND_URL } from "@/lib/config";

export async function POST(request: Request) {
    const body = await request.json();

    const {
        name,
        email,
        password
    } = body;

    const csrf = await getCsrfToken();
    if (!csrf) {
        return NextResponse.json({ message: "get csrf token failed" }, { status: 500 })
    }
    

    const response = await fetch(`${BACKEND_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf,
        },
        credentials: 'include',
        body: JSON.stringify({name, email, password}),
      });
      console.log(response);
      


    return NextResponse.json({ response }, { status: 200 });

}
