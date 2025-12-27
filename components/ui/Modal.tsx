"use client";

import { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-4 max-w-lg w-full shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="ml-auto block text-gray-500 hover:text-black"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}
