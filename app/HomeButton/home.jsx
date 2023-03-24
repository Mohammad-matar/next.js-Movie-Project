"use client";

import React from "react";
import { useRouter } from "next/router";

export default function HomeButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <button
      className="fixed top-2 left-2 ml-2 py-2 px-4 bg-green-500 text-white rounded-md"
      onClick={handleClick}
    >
      Home
    </button>
  );
}
