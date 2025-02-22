import React from "react";

export default function Form() {
  return (
    <div className="flex-1 flex-col gap-2 flex bg-primary-50 rounded-lg p-6 border border-primary-100">
      <div className="flex flex-col gap-1">
        <span className="text-2xl capitalize font-bold text-primary">
          Give us a message
        </span>
        <span className="font-medium text-font-secondary">
          Your email address will not be published. Required fields are marked *
        </span>
      </div>
      <div className="">
        <textarea
          name="message"
          className="w-[100%] p-2 rounded-lg outline-none"
          placeholder="Message"
          rows={7}
          id=""
        ></textarea>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Name"
          className="flex-1 rounded-lg p-3 w-[100%] outline-none"
        />
        <input
          type="text"
          placeholder="Email"
          className="flex-1 rounded-lg p-3 w-[100%] outline-none"
        />
        <input
          type="text"
          placeholder="Phone"
          className="flex-1 rounded-lg p-3 w-[100%] outline-none"
        />
      </div>
      <div className="flex gap-2">
        <button className="flex font-medium bg-primary text-primary-50 px-6 py-2 mt-2 rounded-lg">
          Submit Message
        </button>
      </div>
    </div>
  );
}
