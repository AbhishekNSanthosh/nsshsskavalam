"use client";

import TitleBar from "@widgets/Common/TitleBar";
import React from "react";
import LocationIcon from "@icons/SvgIcons/LocationIcon";
import { colors } from "../../../common/Utils/utils";
import PhoneIcons from "@icons/SvgIcons/PhoneIcons";
import MailIcon from "@icons/SvgIcons/MailIcon";
import Form from "@widgets/Contact/Components/Form";

export default function Content() {
  return (
    <div className="w-full px-5vw py-8">
      <div className="flex flex-col gap-8">
        <TitleBar title={"Contact"} />
        <div className="mt-2 mb-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15741.548345060619!2d76.4568463!3d9.4750201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06281e4a04f9db%3A0xbef4993321cdfc74!2sNSS%20HSS%2C%20Kavalam!5e0!3m2!1sen!2sin!4v1719590255592!5m2!1sen!2sin"
            className="w-[100%] h-[70vh] rounded-lg"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex gap-10">
          <div className="flex-1 flex flex-col gap-7 mt-5">
            <div className="flex flex-col gap-4">
              <span className="text-2xl text-primary font-semibold">
                How can we help you?
              </span>
              <p className="text-justify">
                Send a message through given form, If your enquiry is time
                sensitive please use below contact details.
              </p>
            </div>
            <div className="flex w-[50%] gap-4 items-center justify-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                <LocationIcon stroke={colors.primary} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold">Address</span>
                <span className="">Kavalam, Alappuzha, 688506</span>
              </div>
            </div>

            <div className="flex w-[50%] gap-4 items-center justify-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                <PhoneIcons stroke={colors.primary} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold">Phone</span>
                <a href="tel:+917907247909" className="">
                  +91 7907247909
                </a>
              </div>
            </div>

            <div className="flex w-[50%] gap-4 items-center justify-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                <MailIcon stroke={colors.primary} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold">E-Mail</span>
                <a
                  href="mailto:nsshsskavalam04066@gmail.com"
                  target="_blank"
                  className=""
                >
                  nsshsskavalam04066@gmail.com
                </a>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
