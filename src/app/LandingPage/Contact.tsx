"use client";
import { useState } from "react";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    }).then((response) => {
      if (response.ok) {
        console.log("Email sent successfully!");
      } else {
        console.error("Error sending email.");
      }
    }
    ).catch((error) => {
      console.error("Error:", error);
    });
  };


  return (
    <section id="contact" className="min-h-screen relative z-10 mt-80 md:mt-160 min-h-screen ">
      <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-4">
        <div className="max-w-6xl w-full bg-[#101010] rounded-xl p-10 md:flex md:justify-between mt-20 mb-20">
          {/* Left Form */}
          <div className="md:w-1/2 mb-10 md:mb-0 ">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">
              Have a <span className="text-[#810CAB]">question</span> or facing an issue? <br />
              We’re here to <span className="text-[#810CAB]">help you!</span>
            </h1>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-sm mb-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1e1e1e] rounded-md border border-[#333] focus:outline-none focus:border-[#810CAB]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@gmail.com"
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1e1e1e] rounded-md border border-[#333] focus:outline-none focus:border-[#810CAB]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Message *</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="I have a problem using the Email Agent. Can you help me with..."
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1e1e1e] rounded-md border border-[#333] focus:outline-none focus:border-[#810CAB]"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#810CAB] hover:bg-[#a14ddb] transition text-white font-medium px-6 py-3 rounded-full flex items-center gap-2"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=93330&format=png&color=ffffff"
                  alt="Send Icon"
                  className="w-5 h-5"
                />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="md:w-1/2 md:pl-10">
            <p className="text-gray-300 mb-6">
              Send me a message if you have any questions or issues using Email
              Agent. I’ll get back to you as soon as possible and help you sort
              it out.
            </p>

            <div className="mb-6">
              <h3 className="text-sm uppercase text-gray-500 mb-2">
                Address email
              </h3>
              <a
                href="mailto:support@emailagent.ai"
                className="text-[#810CAB] hover:underline"
              >
                support@emailagent.ai
              </a>
            </div>

            <div className="mb-6">
              <h3 className="text-sm uppercase text-gray-500 mb-2">
                Local time
              </h3>
              <p className="text-white">00:20 UTC+5:30, India</p>
            </div>

            <div>
              <h3 className="text-sm uppercase text-gray-500 mb-2">Socials</h3>
              <div className="flex gap-4 items-center text-white">
                <img
                  src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=ffffff"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
                <img
                  src="https://img.icons8.com/?size=100&id=9xygBPzKrg89&format=png&color=ffffff"
                  alt="Website"
                  className="w-8 h-8"
                />
                <img
                  src="https://img.icons8.com/?size=100&id=g7P0iny5Rros&format=png&color=ffffff"
                  alt="GitHub"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
