import { getCsrfToken } from "@/services/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    const {
        name,
        email,
        password
    } = body;

    const csrf = await getCsrfToken();
    return NextResponse.json({ payload: body, csrf }, { status: 200 });

}