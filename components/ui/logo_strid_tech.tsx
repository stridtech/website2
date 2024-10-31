import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" height={40}>
        {/* Abstract shape made from programming symbols */}
        <g transform="translate(5,5) scale(0.9)">
          {/* { } symbols overlaid */}
          <text
            x="4"
            y="22"
            font-family="monospace"
            font-size="24"
            font-weight="bold"
            fill="#3b82f6"
            opacity="0.9"
          >
            {"{"}
          </text>
          <text
            x="14"
            y="22"
            font-family="monospace"
            font-size="24"
            font-weight="bold"
            fill="#60a5fa"
            opacity="0.9"
          >
            {"}"}
          </text>
        </g>

        {/* Company Name */}
        <text x="32" y="25" font-family="Arial, sans-serif" font-size="18">
          <tspan font-weight="bold" fill="#1e3a8a">
            Strid
          </tspan>
          <tspan font-weight="normal" fill="#3b82f6">
            Tech
          </tspan>
        </text>
      </svg>
    </Link>
  );
}
