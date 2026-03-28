"use client";

import Image from "next/image";
import React from "react";

export default function PreLoader() {
  return (
    <div className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center gap-6">
      {/* Logo + Name */}
      <div className="flex flex-col items-center gap-3 animate-fade-up">
        <Image
          src="/images/nssOrangeLogo.webp"
          height={200}
          width={200}
          priority
          alt="NSS HSS Kavalam"
          className="w-16 h-16 object-contain"
        />
        <div className="flex flex-col items-center gap-0.5 text-center">
          <span className="text-base font-bold text-font-primary">
            NSS Higher Secondary School
          </span>
          <span className="text-xs text-font-secondary">Kavalam, Alappuzha</span>
        </div>
      </div>

      {/* Animated dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary"
            style={{ animation: `bounce 1s ease-in-out ${i * 0.18}s infinite` }}
          />
        ))}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40%            { transform: translateY(-8px); opacity: 1; }
        }
        .animate-fade-up {
          animation: fadeUp 0.5s ease-out forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
