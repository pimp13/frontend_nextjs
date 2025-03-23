"use client";

import React from "react";

const RegisterForm = () => {
    const handlerSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("hi");
    }
    return (
        <div className="container mt-5">
            <form onSubmit={handlerSubmitForm}>

                <button type="submit" className="px-3 py-2 text-gray-100 bg-fuchsia-800 rounded-lg hover:bg-fuchsia-900 cursor-pointer">
                    SUBMIT
                </button>
            </form>
        </div>
    );
}


export default RegisterForm;