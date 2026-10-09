"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const { email, password } = data;
    if (email.length > 3 && password.length > 3) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data]);

  const onLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/users/login", data);
      console.log("Login response:", response.data);
      toast.success("Login successful");
      router.push(`/profile/${response.data.user.username}`);
    } catch (error) {
      console.error("Error logging in:", error);

      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "Login failed. Please try again.",
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await onLogin();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold mb-4">Log In</h1>
        <form className="flex flex-col w-96" onSubmit={handleSubmit}>
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
            className={`bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer ${isButtonDisabled || loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isButtonDisabled || loading}
          >
            Log In
          </button>
        </form>
        <p className="mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
