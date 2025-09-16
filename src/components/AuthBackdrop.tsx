"use client";

import { useEffect, useState } from "react";

export default function AuthBackdrop() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1521] via-[#0f2234] to-[#0a1a2b]" />
      {mounted && (
        <>
          {[...Array(10)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full blur-3xl opacity-40"
              style={{
                width: `${200 + Math.random() * 200}px`,
                height: `${200 + Math.random() * 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? "#06b6d4" : "#a855f7",
                filter: "blur(90px)",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
        </>
      )}
    </div>
  );
}


