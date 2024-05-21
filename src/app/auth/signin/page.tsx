"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (!res?.error) {
      console.log("Login successful");
      router.push('/')
    } else {
      console.error("Login error", res.error);
      router.push('/')
    }
  };

  return (
    <div className="container mx-auto bg-white rounded-lg m-5 p-5 justify-center items-center border-2 py-10 px-5">
      <h2 className="text-4xl text-center font-bold">
        Signin {"McDonald's"} Take Home
      </h2>
      <div className="w-[400px] p-10 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="w-full mt-5">
          <label className="text-bold">
            Username
            <input
              type="text"
              className="border-2 rounded-md w-72 p-2 ml-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="w-full mt-5">
          <label className="text-bold">
            Password
            <input
              type="password"
              className="border-2 rounded-md w-72 p-2 ml-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-yellow-macdonalds text-black border-b-4 rounded-xl py-2 w-full hover:bg-gray-300 mt-10 "
        >
          Sign In
        </button>
      </form>
      </div>
    </div>
  );
}
