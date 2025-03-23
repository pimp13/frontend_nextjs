import RegisterForm from "@/components/Auth/RegisterForm";

const RegisterPage = () => {
    return (
        <div className="container px-5 sm:px-15">
            <div className="shadow p-5 mt-12">
                <h3 className="text-xl text-gray-600">Register user form</h3>

                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage;