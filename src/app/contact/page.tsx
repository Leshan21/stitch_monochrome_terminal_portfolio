"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="flex-grow p-margin max-w-4xl mx-auto w-full flex flex-col gap-lg mt-xl mb-xl">
      {/* Contact Form Card */}
      <div className="border border-white p-6 relative">
        <div className="absolute -top-3 left-4 bg-bg px-2 text-dim font-label-xs text-label-xs">
          ~/contact/init.sh
        </div>
        <h1 className="font-headline-xl text-headline-xl mb-md uppercase tracking-tighter">
          &gt; INITIALIZE_COMMUNICATION
        </h1>
        <p className="mb-lg text-dim">
          Please fill out the parameters below to execute a message protocol.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-md">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-label-xs text-label-xs mb-1 uppercase tracking-widest text-dim"
            >
              &gt; SET --NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter string..."
              className="bg-transparent border border-white p-2 text-fg font-body-base text-body-base focus:outline-none focus:ring-2 focus:ring-focus focus:border-transparent placeholder-dim"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="font-label-xs text-label-xs mb-1 uppercase tracking-widest text-dim"
            >
              &gt; SET --EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter valid address..."
              className="bg-transparent border border-white p-2 text-fg font-body-base text-body-base focus:outline-none focus:ring-2 focus:ring-focus focus:border-transparent placeholder-dim"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="font-label-xs text-label-xs mb-1 uppercase tracking-widest text-dim"
            >
              &gt; SET --PAYLOAD
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter multiline string..."
              rows={5}
              className="bg-transparent border border-white p-2 text-fg font-body-base text-body-base focus:outline-none focus:ring-2 focus:ring-focus focus:border-transparent placeholder-dim resize-none"
            />
          </div>

          <div className="flex justify-start mt-sm">
            <button
              type="submit"
              className="border border-white px-6 py-2 uppercase tracking-widest font-label-xs text-label-xs hover:bg-white hover:text-black transition-none focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-2 focus:ring-offset-bg"
            >
              ./EXECUTE_SEND
            </button>
          </div>
        </form>
      </div>

      {/* Links Card */}
      <div className="border border-dim border-dashed p-6 relative">
        <div className="absolute -top-3 left-4 bg-bg px-2 text-dim font-label-xs text-label-xs">
          ~/contact/links.txt
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="mailto:leshanpasindu12@gmail.com"
            className="flex items-center gap-2 hover:text-white text-dim transition-none group w-fit"
          >
            <span className="font-label-xs text-label-xs">&gt;</span>
            <span className="underline group-hover:bg-white group-hover:text-black group-hover:no-underline px-1">
              leshanpasindu12@gmail.com
            </span>
          </Link>
          <Link
            href="https://github.com/Leshan21"
            className="flex items-center gap-2 hover:text-white text-dim transition-none group w-fit"
          >
            <span className="font-label-xs text-label-xs">&gt;</span>
            <span className="underline group-hover:bg-white group-hover:text-black group-hover:no-underline px-1">
              github.com/Leshan21
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/leshan-pasindu-918251299"
            className="flex items-center gap-2 hover:text-white text-dim transition-none group w-fit"
          >
            <span className="font-label-xs text-label-xs">&gt;</span>
            <span className="underline group-hover:bg-white group-hover:text-black group-hover:no-underline px-1">
              linkedin.com/in/leshan-pasindu-918251299
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
