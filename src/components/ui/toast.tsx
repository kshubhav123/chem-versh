'use client';

import React, { useEffect } from "react";

const Toast = ({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onClose]);

  return (
    <div className={`fixed bottom-5 right-5 px-4 py-2 rounded shadow-md transition-all duration-300 z-50 ${
      type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
    }`}>
      <div className="flex justify-between items-center gap-4">
        <span>{message}</span>
        <button onClick={onClose} className="font-bold text-lg leading-none">&times;</button>
      </div>
    </div>
  );
};

export default Toast;
