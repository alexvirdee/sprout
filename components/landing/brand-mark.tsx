import { cn } from "@/lib/utils";

type BrandMarkProps = {
  size?: number;
  variant?: "default" | "cream";
  className?: string;
};

export function BrandMark({ size = 36, variant = "default", className }: BrandMarkProps) {
  if (variant === "cream") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Sprout"
        className={cn(className)}
      >
        <path
          d="M32 58 C32 47 32 42 32 36"
          stroke="#FAF8F2"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <g transform="rotate(-40 32 40)">
          <path d="M32 40 C24.5 36 21 27.5 32 19 C43 27.5 39.5 36 32 40 Z" fill="#FAF8F2" />
        </g>
        <g transform="rotate(40 32 40)">
          <path
            d="M32 40 C24.5 36 21 27.5 32 19 C43 27.5 39.5 36 32 40 Z"
            fill="#FAF8F2"
            opacity="0.82"
          />
        </g>
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sprout"
      className={cn(className)}
    >
      <path d="M32 58 C32 47 32 42 32 36" stroke="#3D9A41" strokeWidth="5" strokeLinecap="round" />
      <g transform="rotate(-40 32 40)">
        <path d="M32 40 C24.5 36 21 27.5 32 19 C43 27.5 39.5 36 32 40 Z" fill="#4CAF50" />
        <path
          d="M32 40 C30 33 30 27 32 21"
          stroke="#3D9A41"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
      </g>
      <g transform="rotate(40 32 40)">
        <path d="M32 40 C24.5 36 21 27.5 32 19 C43 27.5 39.5 36 32 40 Z" fill="#A8C686" />
        <path
          d="M32 40 C30 33 30 27 32 21"
          stroke="#7A9E55"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}
