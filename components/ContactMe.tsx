"use client";
import React from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:suhasshetty570@gmail.com,shetty.suh@northeastern.edu?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="min-h-screen flex relative flec-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-400 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10 mt-32 md:mt-0 md:flex-row md:space-x-10 md:space-y-0">
        <div className="flex flex-col space-y-10 md:w-1/2">
          <h4 className="text-4xl font-semibold text-center md:text-left">
            Feel free to send a message
          </h4>
          <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center md:justify-start">
              <EnvelopeIcon className="text-cyan-400 h-7 w-7 animate-pulse" />
              <p className="text-2xl">suhasshetty570@gmail.com</p>
            </div>

            <div className="flex items-center space-x-5 justify-center md:justify-start">
              <MapPinIcon className="text-cyan-400 h-7 w-7 animate-pulse" />
              <p className="text-2xl">Boston, MA</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full md:w-1/2 mx-auto"
        >
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-cyan-500 py-5 px-10 rounded-md text-white font-bold text-lg hover:bg-cyan-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
