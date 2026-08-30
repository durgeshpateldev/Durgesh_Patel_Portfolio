import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ContactSection = () => {
  const contactRef = useRef();
  const formRef = useRef();

  const isVisible = useIntersectionObserver(contactRef, {
    threshold: 0.3,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = (type, message) => {
    setToast({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setToast({
        show: false,
        type: "",
        message: "",
      });
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5yaqi7l",
        "template_2nnneka",
        formRef.current,
        "HhZExZ2M17HCwGGVd",
      )
      .then(() => {
        showToast("success", "Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        showToast("error", "Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="pt-24 scroll-mt-32 py-20 px-4 sm:px-8 bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
    >
      
     
       {toast.show && (
  <div
    className={`fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[9999] sm:max-w-sm flex items-center gap-3 rounded-xl border px-4 py-3 sm:px-5 sm:py-4 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
      toast.type === "success"
        ? "border-cyan-400/40 bg-black/90 text-white dark:bg-white/95 dark:text-black"
        : "border-red-400/40 bg-black/90 text-white dark:bg-white/95 dark:text-black"
    }`}
  >
    <div
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
        toast.type === "success"
          ? "bg-cyan-400/15 text-cyan-400"
          : "bg-red-400/15 text-red-400"
      }`}
    >
      <i
        className={`fas ${
          toast.type === "success"
            ? "fa-check"
            : "fa-exclamation"
        } text-sm`}
      ></i>
    </div>

    <div className="min-w-0">
      <p className="font-semibold text-sm">
        {toast.message}
      </p>

      {toast.type === "success" && (
        <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
          Thanks for reaching out!
        </p>
      )}
    </div>
  </div>
)}
     

      <div className="max-w-6xl mx-auto">
        
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 orbitron neon-glow-pink dark:neon-glow-none ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
         
          <div
            className={`${
              isVisible ? "animate-slide-left" : "opacity-0"
            } space-y-6`}
          >
            <h3 className="text-2xl font-bold text-cyan-400 dark:text-cyan-600">
              Let's Connect
            </h3>

            <p className="text-gray-300 dark:text-gray-700 text-base sm:text-lg leading-relaxed">
              I'm currently open to internships, freelance opportunities,
              collaborations, and entry-level roles. Feel free to reach out if
              you'd like to work together.
            </p>

            
            <div className="space-y-4 text-sm sm:text-base">
              {/* Email */}
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-cyan-400 text-lg"></i>

                <a
                  href="mailto:durgesh.patel.dev@gmail.com"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  durgesh.patel.dev@gmail.com
                </a>
              </div>

             
              <div className="flex items-center gap-3">
                <i className="fab fa-github text-gray-300 text-lg"></i>

                <a
                  href="https://github.com/gurjardurgesh88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>

              
              <div className="flex items-center gap-3">
                <i className="fab fa-linkedin text-blue-500 text-lg"></i>

                <a
                  href="https://linkedin.com/in/durgesh-gurjar-195533369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

         
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className={`${
              isVisible ? "animate-slide-right" : "opacity-0"
            } relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl dark:border-black/10 dark:bg-black/[0.03]`}
          >
            
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

            
            <div className="mb-5">
              <h3 className="text-xl font-bold">Send a Message</h3>

              <p className="text-sm text-gray-400 dark:text-gray-600 mt-1">
                Have an idea or opportunity? Let's talk.
              </p>
            </div>

            
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-300 dark:text-gray-700"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/10 dark:border-black/10 dark:bg-black/[0.03] dark:text-black dark:placeholder:text-gray-400 dark:focus:border-cyan-600/60"
              />
            </div>

            
            <div className="space-y-1.5 mt-4">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 dark:text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/10 dark:border-black/10 dark:bg-black/[0.03] dark:text-black dark:placeholder:text-gray-400 dark:focus:border-cyan-600/60"
              />
            </div>

            
            <div className="space-y-1.5 mt-4">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-300 dark:text-gray-700"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/10 dark:border-black/10 dark:bg-black/[0.03] dark:text-black dark:placeholder:text-gray-400 dark:focus:border-cyan-600/60"
              />
            </div>

            
            <div className="space-y-1.5 mt-4">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300 dark:text-gray-700"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none resize-none transition-all duration-300 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/10 dark:border-black/10 dark:bg-black/[0.03] dark:text-black dark:placeholder:text-gray-400 dark:focus:border-cyan-600/60"
              ></textarea>
            </div>

           
            <button
              type="submit"
              className="group w-full mt-5 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(139,92,246,0.25)] active:translate-y-0"
            >
              <span className="flex items-center justify-center gap-2">
                Send Message
                <i className="fas fa-paper-plane text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
