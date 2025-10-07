import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { PiFrameCornersLight } from "react-icons/pi";

const Contact = () => {
  return (
    <section className="flex-1 space-y-10 w-full py-10">
      <div className="text-center px-4">
        <h2 className="text-5xl font-extrabold text-[#831843]">Get in Touch</h2>
        <p className="text-xl text-[#404040] mt-4 max-w-2xl mx-auto">
          Ready to treat your nails to something special? Get in touch today to
          book your appointment or ask about our latest styles and offers!
        </p>
      </div>
      <div className="max-w-6xl p-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Contact Form */}
        <form className="space-y-5 shadow p-6 rounded-3xl">
          <h1 className="font-bold text-2xl">Send us a message</h1>
          <div className="relative">
            <label className="block text-sm font-medium  mb-1 text-[#404040]">
              Full Name
            </label>
            <MdPerson
              size={15}
              className="absolute left-2 top-9 text-gray-400"
            />
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-6 py-2 rounded-lg shadow focus:ring-1 focus:ring-[#831843] outline-none placeholder:text-[#d4d4d4] placeholder:text-sm"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-[#404040]">
              Email Address
            </label>
            <MdEmail
              size={15}
              className="absolute left-2 top-9 text-gray-400"
            />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-6 py-2 rounded-lg shadow focus:ring-1 focus:ring-[#831843] outline-none placeholder:text-[#d4d4d4] placeholder:text-sm"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium  mb-1 text-[#404040]">
              Subject
            </label>
            <PiFrameCornersLight
              size={15}
              className="absolute left-2 top-9 text-gray-400"
            />
            <input
              type="text"
              placeholder="How can we help you?"
              className="w-full px-6 py-2 rounded-lg shadow focus:ring-1 focus:ring-[#831843] outline-none placeholder:text-[#d4d4d4] placeholder:text-sm"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-[#404040]">
              Message
            </label>
            <AiFillMessage
              size={15}
              className="absolute left-2 top-9 text-gray-400"
            />
            <textarea
              rows={4}
              placeholder="Your message"
              className="w-full px-6 py-2 rounded-lg shadow focus:ring-1 focus:ring-[#831843] outline-none placeholder:text-[#d4d4d4] placeholder:text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 w-full bg-[#831843] text-white rounded-lg font-medium cursor-pointer"
          >
            <IoIosSend className="inline mr-2 text-xl" />
            Send Message
          </button>
        </form>

        {/* Right - Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/img/contact.png"
            alt="Contact"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
