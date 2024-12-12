"use client";
import { useState } from "react";
import { auth } from "../../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login"); // Redirect to login after successful signup
    } catch (error) {
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 p-6 flex justify-center items-center">
      <div className="bg-slate-800 p-6 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-semibold text-white mb-4">Sign Up</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-white">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
