import React from "react";

const Logo: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Gradient Background */}
      <defs>
        <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A90E2" />
          <stop offset="100%" stopColor="#9013FE" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgGradient)" />

      {/* Desk */}
      <rect
        x="150"
        y="400"
        width="500"
        height="50"
        fill="#333"
        rx="10"
        ry="10"
      />

      {/* Laptop */}
      <rect
        x="250"
        y="200"
        width="300"
        height="200"
        fill="#555"
        rx="10"
        ry="10"
      />
      <rect x="260" y="210" width="280" height="160" fill="#111" />
      {/* Laptop Screen Content */}
      <text x="270" y="240" fill="#1E90FF" fontFamily="monospace" fontSize="16">
        &lt;Next.js&gt;
      </text>
      <text x="270" y="260" fill="#fff" fontFamily="monospace" fontSize="14">
        const Home = () =&gt; (
      </text>
      <text x="270" y="280" fill="#fff" fontFamily="monospace" fontSize="14">
        &nbsp;&lt;h1&gt;Hello, World!&lt;/h1&gt;
      </text>
      <text x="270" y="300" fill="#fff" fontFamily="monospace" fontSize="14">
        );
      </text>

      {/* Logo */}
      <circle cx="400" cy="420" r="40" fill="#111" />
      <text
        x="400"
        y="430"
        textAnchor="middle"
        fill="#fff"
        fontSize="24"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        ⨉
      </text>
    </svg>
  );
};

export default Logo;
