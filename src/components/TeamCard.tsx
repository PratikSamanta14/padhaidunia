"use client";

import Image from "next/image";
import { useState } from "react";

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  description?: string;
  linkedinUrl?: string;
};

type TeamCardProps = {
  member: TeamMember;
  size?: "small" | "medium" | "large";
};

export default function TeamCard({ member, size = "medium" }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "w-72 h-96",
    medium: "w-80 h-104",
    large: "w-88 h-112"
  };

  const imageSize = {
    small: "w-32 h-32",
    medium: "w-36 h-36", 
    large: "w-40 h-40"
  };

  return (
    <div
      className={`${sizeClasses[size]} relative group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Card Container */}
      <div
        className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ${
          isHovered
            ? "shadow-[0_25px_50px_rgba(147,51,234,0.4)] shadow-purple-500/50"
            : "shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        }`}
        style={{
          transform: isHovered ? "perspective(1000px) rotateX(5deg) rotateY(5deg)" : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Card Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/90 to-[#0f3460]/90 backdrop-blur-sm" />
        
        {/* Glow Effect */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
            isHovered
              ? "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20"
              : "bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5"
          }`}
        />

        {/* Border Glow */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
            isHovered
              ? "border-2 border-purple-400/60 shadow-[0_0_30px_rgba(147,51,234,0.6)]"
              : "border border-purple-500/20"
          }`}
        />

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
          {/* Profile Image */}
          <div className={`${imageSize[size]} relative mb-8 rounded-full overflow-hidden border-2 border-purple-400/30 transition-all duration-500 ${
            isHovered ? "border-purple-300/60 shadow-[0_0_20px_rgba(147,51,234,0.5)]" : ""
          }`}>
            <Image
              src={member.img}
              alt={member.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 128px, 160px"
            />
          </div>

          {/* Name */}
          <h3 className={`font-bold text-white mb-3 transition-all duration-500 ${
            size === "small" ? "text-xl" : size === "medium" ? "text-2xl" : "text-3xl"
          } ${isHovered ? "text-purple-200" : ""}`}>
            {member.name}
          </h3>

          {/* Role */}
          <p className={`text-purple-300 mb-4 transition-all duration-500 ${
            size === "small" ? "text-base" : "text-lg"
          } ${isHovered ? "text-purple-200" : ""}`}>
            {member.role}
          </p>

          {/* Description */}
          {member.description && size !== "small" && (
            <p className="text-purple-200/80 text-base leading-relaxed mb-6 line-clamp-2 transition-all duration-500">
              {member.description}
            </p>
          )}

          {/* LinkedIn Button */}
          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-xl transition-all duration-500 ${
                size === "small" ? "w-10 h-10" : size === "medium" ? "w-12 h-12" : "w-14 h-14"
              } ${
                isHovered
                  ? "bg-blue-600/80 hover:bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                  : "bg-blue-600/60 hover:bg-blue-500/80"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className={`text-white ${size === "small" ? "w-5 h-5" : size === "medium" ? "w-6 h-6" : "w-7 h-7"}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.15V23h-4v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.93V23h-4V8z"/>
              </svg>
            </a>
          )}
        </div>

        {/* Floating Particles Effect */}
        {isHovered && (
          <>
            <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400/60 rounded-full animate-ping" />
            <div className="absolute top-8 right-6 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse" />
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-bounce" />
          </>
        )}
      </div>
    </div>
  );
}
