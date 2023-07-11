/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface GoBackButtonProps {
  children: string;
  className: string;
}

const GoBackButton = ({ children, className }: GoBackButtonProps) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        goBack();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <button className={className} type='button' onClick={goBack}>
      {children}
    </button>
  );
};

export default GoBackButton;
