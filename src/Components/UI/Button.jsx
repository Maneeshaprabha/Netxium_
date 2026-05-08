

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles =
    "font-normal rounded-full  transition disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-black text-white hover:opacity-90",
    secondary: "bg-white text-gray-800 hover:bg-[#FBFCFF]",
    outline:
      "bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-100",
  };

  const sizeStyle = {
    sm: "px-2 py-1.5 text-sm ",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const isPrimary = variant === "primary";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyle[size]}
        ${isPrimary ? "flex items-center gap-3" : ""}
        ${className}
      `}
      {...props}
    >
      {isPrimary && (
        <span className="flex items-center justify-center w-9 h-9 bg-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-black transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1:"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </span>
      )}

      <span>{children}</span>
    </button>
  );
}
