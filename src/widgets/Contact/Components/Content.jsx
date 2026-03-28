"use client";

import TitleBar from "@widgets/Common/TitleBar";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

const contactItems = [
  {
    Icon: IoLocationSharp,
    label: "Address",
    value: "Kavalam, Alappuzha District, Kerala — 688506",
    href: null,
  },
  {
    Icon: FaPhone,
    label: "Phone",
    value: "0477 274 6100",
    href: "tel:04772746100",
  },
  {
    Icon: MdOutlineMail,
    label: "Email",
    value: "nsshsskavalam04066@gmail.com",
    href: "mailto:nsshsskavalam04066@gmail.com",
  },
];

export default function Content() {
  return (
    <div className="w-full px-[5vw] py-8 pt-6 lg:pt-8">
      <div className="flex flex-col gap-10">
        <TitleBar title={"Contact Us"} />

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-custom">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15741.548345060619!2d76.4568463!3d9.4750201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06281e4a04f9db%3A0xbef4993321cdfc74!2sNSS%20HSS%2C%20Kavalam!5e0!3m2!1sen!2sin!4v1719590255592!5m2!1sen!2sin"
            className="w-full h-[45vh] md:h-[55vh]"
            style={{ border: "0", display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact info + form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: contact details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xl font-bold text-font-primary">
                Get In Touch
              </span>
              <p className="text-sm text-font-secondary leading-relaxed">
                Reach out for admissions, enquiries, or feedback. If your
                message is time-sensitive, use the contact details below.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactItems.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-custom"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-lg text-primary" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {label}
                    </span>
                    {href ? (
                      <Link
                        href={href}
                        className="text-sm font-medium text-font-primary hover:text-primary transition-colors break-all"
                      >
                        {value}
                      </Link>
                    ) : (
                      <span className="text-sm font-medium text-font-primary">
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: message form */}
          <div className="flex flex-col gap-5 p-6 rounded-2xl bg-primary-50 border border-primary-100">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-bold text-font-primary">
                Send a Message
              </span>
              <span className="text-sm text-font-secondary">
                We&apos;ll get back to you as soon as possible.
              </span>
            </div>

            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              className="w-full p-3 rounded-xl border border-primary-100 bg-white outline-none text-sm text-font-primary placeholder-gray-400 resize-none focus:border-primary transition-colors"
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Full name"
                className="flex-1 p-3 rounded-xl border border-primary-100 bg-white outline-none text-sm text-font-primary placeholder-gray-400 focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 p-3 rounded-xl border border-primary-100 bg-white outline-none text-sm text-font-primary placeholder-gray-400 focus:border-primary transition-colors"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone number"
              className="w-full p-3 rounded-xl border border-primary-100 bg-white outline-none text-sm text-font-primary placeholder-gray-400 focus:border-primary transition-colors"
            />

            <button
              type="button"
              className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
