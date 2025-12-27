"use client";

import { useState } from "react";
import Modal from "../ui/Modal";

type LaunchPatchProps = {
  small?: string | null;
  large?: string | null;
  alt?: string;
  size?: number;
  enableModal?: boolean;
};

export default function LaunchPatch({
  small,
  large,
  alt = "Launch Patch",
  size = 40,
  enableModal = false,
}: LaunchPatchProps) {
  const [open, setOpen] = useState(false);

  if (!small && !large) return null;

  return (
    <>
      <img
        src={small ?? large ?? ""}
        alt={alt}
        width={size}
        height={size}
        className={`object-contain cursor-${enableModal ? "pointer" : "default"}`}
        onClick={() => enableModal && large && setOpen(true)}
      />

      {/* Large picture modal */}
      {enableModal && large && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <img
            src={large}
            alt={alt}
            className="w-full h-auto object-contain rounded-lg"
          />
        </Modal>
      )}
    </>
  );
}