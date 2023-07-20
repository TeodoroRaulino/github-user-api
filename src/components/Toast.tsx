import { useEffect } from "react";

type ToastProps = {
  onClose: () => void;
  message: string;
  type: "success" | "error";
};

export default function Toast({ onClose, message, type }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <>
      {type === "success" ? (
        <div className="fixed top-4 right-4 p-4 bg-green-500 rounded-lg shadow-lg text-white font-bold">
          {message}
        </div>
      ) : (
        <div className="fixed top-4 right-4 p-4 bg-red-600 rounded-lg shadow-lg text-white font-bold">
          {message}
        </div>
      )}
    </>
  );
}
