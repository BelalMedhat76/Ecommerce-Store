// components/AuthGuard.jsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../../lib/firebase";

const AuthGuard = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/login");
    }
  }, [auth.currentUser, router]);

  return auth.currentUser ? children : null;
};

export default AuthGuard;
