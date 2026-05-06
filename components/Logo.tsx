import Link from "next/link";

export default function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Remarkable Travel Design home"
      className={`inline-flex items-center transition-opacity hover:opacity-80 ${className}`}
      style={
        light
          ? {
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(6px)",
              borderRadius: "6px",
              padding: "5px 10px",
            }
          : undefined
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="Remarkable Travel Design"
        style={{ width: "180px", height: "auto", display: "block" }}
      />
    </Link>
  );
}
