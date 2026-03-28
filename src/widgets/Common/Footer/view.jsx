"use client";

import React from "react";
import Image from "next/image";
import { logos, navItems } from "../../../common/Utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowForwardIos } from "react-icons/md";

export default function Footer() {
  const location = usePathname();
  if (location.includes("admin")) return null;

  return (
    <footer className="bg-gray-950 text-white mt-10">
      {/* Main footer */}
      <div className="px-[5vw] py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Image
                  src={logos.nssLogoWebP}
                  height={80}
                  width={80}
                  className="w-7 h-7 object-contain"
                  alt="NSS HSS Kavalam"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm md:text-base text-white">
                  NSS Higher Secondary School
                </span>
                <span className="text-xs text-white/50">Kavalam, Alappuzha</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Providing quality education to help students grow and succeed.
              Focused on academics, values, and preparing students for a
              confident and responsible future.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[faFacebook, faWhatsapp, faInstagram].map((icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center cursor-pointer transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={icon} className="h-4 text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-white text-base border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="flex items-center gap-1.5 text-sm text-white/60 hover:text-primary transition-colors capitalize group"
                >
                  <MdArrowForwardIos className="text-[10px] text-primary/60 group-hover:translate-x-0.5 transition-transform" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-white text-base border-b border-white/10 pb-2">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:nsshsskavalam04066@gmail.com"
                className="flex items-start gap-3 text-sm text-white/60 hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} className="h-3.5" />
                </div>
                <span className="mt-1 break-all">nsshsskavalam04066@gmail.com</span>
              </a>
              <a
                href="tel:04772746100"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FontAwesomeIcon icon={faPhone} className="h-3.5" />
                </div>
                0477 274 6100
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faLocationDot} className="h-3.5" />
                </div>
                <span className="mt-1">Kavalam, Alappuzha District, Kerala — 688506</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-[5vw] py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
        <span>© 2025 NSS HSS Kavalam. All Rights Reserved.</span>
        <Link href="https://beond.in" target="_blank" className="hover:text-white/70 transition-colors">
          Developed by <span className="text-primary font-semibold">Beond Innovations</span>
        </Link>
      </div>
    </footer>
  );
}
