"use client";

import React from "react";

const TestCors = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch('http://localhost:8000/api/test-cors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "test": "hello msg from next js" }),
        });

        const data = await res.json();
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>
                    Test Cors
                </button>
            </form>
        </div>
    )
}


export default TestCors;