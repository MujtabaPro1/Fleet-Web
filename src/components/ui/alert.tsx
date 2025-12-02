import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, X } from "lucide-react";

interface AlertProps {
  type: "success" | "error";
  message: string;
  onClose?: () => void;
  className?: string;
}

export const Alert = ({
  type,
  message,
  onClose,
  className,
}: AlertProps): JSX.Element => {
  const bgColor = type === "success" ? "bg-green-50" : "bg-red-50";
  const borderColor = type === "success" ? "border-green-400" : "border-red-400";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";
  const iconColor = type === "success" ? "text-green-400" : "text-red-400";

  return (
    <div
      className={cn(
        "flex items-center p-4 mb-4 rounded-lg border",
        bgColor,
        borderColor,
        className
      )}
      role="alert"
    >
      {type === "success" ? (
        <CheckCircle className={cn("flex-shrink-0 w-5 h-5 mr-2", iconColor)} />
      ) : (
        <AlertCircle className={cn("flex-shrink-0 w-5 h-5 mr-2", iconColor)} />
      )}
      <span className={cn("text-sm font-medium flex-1", textColor)}>
        {message}
      </span>
      {onClose && (
        <button
          type="button"
          className={cn(
            "ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5",
            type === "success"
              ? "bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-400"
              : "bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-400"
          )}
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
