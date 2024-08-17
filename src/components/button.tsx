"use client";
// prop types
export interface ButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  text?: string;
  variant?: "contained" | "outlined" | "text";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  const {
    startIcon = null,
    endIcon = null,
    text = null,
    variant = "outlined",
    onClick,
  } = props;

  let buttonClassName =
    "px-2 py-1 rounded-lg flex items-center justify-center gap-1";
  if (variant === "contained") {
    buttonClassName +=
      " bg-indigo-700 text-indigo-200 border border-indigo-700";
  } else if (variant === "outlined") {
    buttonClassName += " text-indigo-700 border border-indigo-700";
  } else {
    buttonClassName += " text-black";
  }

  return (
    <button
      className={buttonClassName}
      onClick={function (e) {
        onClick(e);
      }}
    >
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
}
