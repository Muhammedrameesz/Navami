import { AlertTriangle } from "lucide-react";
import React, { ReactNode } from "react";

interface ErrorMessageProps {
  message?: string | ReactNode;
  center?: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = "Something went wrong.", center = true }) => {
  return (
    <div
      className={`flex items-center gap-2 px-4 min-h-[200px] md:min-h-[300px] max-w-2xl mx-auto py-2 rounded-md bg-red-50 text-red-600 border border-red-200 shadow-sm ${
        center ? "justify-center text-center" : ""
      }`}
    >
      <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default ErrorMessage;
