import { Loader2 } from "lucide-react";
import React from "react";

interface LoaderProps {
  message?: string;
  center?: boolean;
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ message = "Loading...", center = true, size = 24 }) => {
  return (
    <div className={`flex items-center gap-2 ${center ? "justify-center my-6" : ""}`}>
      <Loader2 className="animate-spin text-orange-600" size={size} />
      <span className="text-sm text-gray-800">{message}</span>
    </div>
  );
};

export default Loader;
