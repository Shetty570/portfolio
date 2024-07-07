import React from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";

type Props = {};

function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flec-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-400 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Feel free to send a message
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-cyan-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">suhasshetty570@gmail.com</p>
            <EnvelopeIcon className="text-cyan-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">shetty.suh@northeastern.edu</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-cyan-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">Boston, MA</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="text" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />
          <textarea placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#06c4c7db] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
