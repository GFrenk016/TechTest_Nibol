import PasswordWithStrength from "@/components/PasswordWithStrength";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [password, setPassword] = useState('');
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4 bg-gray-100 p-8 w-full max-w-md authCustom">
        <h1 className="text-2xl font-semibold pt-6">Signup</h1>
        <p className="text-sm textCustom">
          Already registered? <Link className="text-black font-bold" href="/">Login</Link>
        </p>
        <form>
          <div className="mb-4">
            <input
              className="inputCustom w-full focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition duration-200"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="inputCustom w-full focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition duration-200"
              type="text"
              placeholder="Surname"
            />
          </div>
          <div className="mb-4">
            <input
              className="inputCustom w-full focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition duration-200"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <PasswordWithStrength onChange={setPassword} />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 my-8">
            <input
              type="checkbox"
              id="terms"
              className="checkboxCustom w-4 h-4 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition duration-200"
            />
            <label htmlFor="terms" className="ms-2">
              Agree to our{' '}
              <span className="font-semibold underline">Terms and Conditions</span>
            </label>
          </div>
          <button className="btnCustom w-full p-2 text-white" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
