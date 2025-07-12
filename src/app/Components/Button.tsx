import React from "react";
import Link from "next/link";

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    target?: string;
    rel?: string;
    disabled?: boolean;
    variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
    href,
    onClick,
    children,
    target,
    rel,
    disabled = false,
    variant = "primary",
    className = "",
    ...props
}) => {
    const baseStyles =
        "relative z-20 overflow-hidden transition-all duration-300 px-8 py-2 rounded-xl text-lg font-semibold";
    const variantStyles =
        variant === "primary"
            ? "btn"
            : "bg-gray-200 text-black border border-green-500 hover:bg-green-100";
    const buttonContent =
        variant === "primary" ? <span className="btnInner">{children}</span> : children;


    if (href) {
        return disabled ? (
            <span
                className={`${baseStyles} ${variantStyles} ${className} opacity-90 cursor-not-allowed`}
                {...props}
            >
                {buttonContent}
            </span>
        ) : (
            <Link
                href={href}
                target={target}
                rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
                className={`${baseStyles} ${variantStyles} ${className}`}
                {...props}
            >
                {buttonContent}
            </Link>
        );
    }

  
    return (
        <button
            type="button"
            onClick={!disabled ? onClick : undefined}
            className={`${baseStyles} ${variantStyles} ${className} ${disabled ? "opacity-90 cursor-not-allowed" : ""}`}
            disabled={disabled}
            {...props}
        >
            {buttonContent}
        </button>
    );
};

export default Button;
