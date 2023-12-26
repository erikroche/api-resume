"use client"
import { useState } from "react";

export const CopyButton = ({ text, children }: { text: string, children: React.ReactNode }) => {
 const [isCopied, setIsCopied] = useState(false);

 const copy = async () => {
  await navigator.clipboard.writeText(text);
  setIsCopied(true);

  setTimeout(() => {
    setIsCopied(false);
  }, 10000);
 };

 return (
  <button 
    className="text-sm p-2 rounded-md bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring focus:ring-indigo-500"
    disabled={isCopied} 
    onClick={copy}
  >
    {children}
  </button>
 );
};
