import LoginForm from "@/components/Auth/LoginForm";

const LoginPage = () => {
    return (
      <div className="container px-5 sm:px-15">
        <div className="shadow p-5 mt-12">
          <h3 className="text-xl text-gray-600">Login user form</h3>

          <LoginForm />
        </div>
      </div>
    )
}

export default LoginPage;