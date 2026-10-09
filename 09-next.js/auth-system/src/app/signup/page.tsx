"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const { username, email, password } = data;
    if (username.length > 3 && email.length > 3 && password.length > 3) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data]);

  const onSignup = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/users/signup", data);
      console.log("Signup successful:", response.data);
      toast.success("Signup successful. Please log in.");
      router.push("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Signup failed";

        toast.error(message);
        console.error("Signup error:", error.response?.data);
      } else {
        toast.error("Something went wrong");
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSignup();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form className="flex flex-col w-96">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            value={data.username}
            onChange={(e) => setdata({ ...data, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            value={data.email}
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            value={data.password}
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
