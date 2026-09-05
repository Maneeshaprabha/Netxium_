import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // --------------------------------------------------
  // Handle input changes
  // --------------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // --------------------------------------------------
  // Handle form submit
  // --------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    // Vite environment variable
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Check environment variable
    if (!accessKey) {
      console.error(
        "VITE_WEB3FORMS_ACCESS_KEY is missing."
      );

      setStatus({
        type: "error",
        message:
          "Contact form configuration is missing. Please try again later.",
      });

      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            access_key: accessKey,

            name: formData.name,

            email: formData.email,

            subject: formData.subject,

            message: formData.message,

            from_name: "Netxium Website",

            replyto: formData.email,
          }),
        }
      );

      const data = await response.json();

      console.log("Web3Forms response:", data);

      if (data.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Unable to send your message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --------------------------------------------------
  // Reset success screen
  // --------------------------------------------------
  const handleSendAnother = () => {
    setStatus({
      type: "",
      message: "",
    });
  };

  return (
    <div className="relative w-full overflow-x-hidden border-t border-gray-200 bg-white font-sans">
      {/* ==================================================
          BACKGROUND WIREFRAME GRID
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center">
        <div className="relative h-full w-full max-w-7xl border-x border-gray-100" />
      </div>

      {/* ==================================================
          MAIN SECTION
      ================================================== */}

      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 md:py-24 lg:flex-row lg:gap-24 lg:py-32">
        {/* ==================================================
            LEFT COLUMN
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="flex w-full flex-col lg:w-1/2"
        >
          {/* Heading */}

          <h2 className="mt-10 mb-6 py-2 text-[40px] font-normal leading-[1.2] tracking-tight text-black md:mt-0 md:text-[64px] md:leading-[1.1]">
            We are always ready to support your business and bring your ideas to life.
          </h2>

          {/* Description */}

          <p className="mb-10 max-w-md text-[15px] leading-relaxed text-gray-500 md:mb-16 md:text-base">
            Netxium blends creativity, AI, and technology to build smart
            solutions that inspire growth and shape the future.
          </p>

          {/* ==================================================
              CONTACT DETAILS
          ================================================== */}

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:gap-y-12">
            {/* Call Center */}

            <div>
              <h4 className="mb-3 text-lg font-semibold tracking-tight text-black md:mb-4">
                Call Center
              </h4>

              <div className="space-y-1.5 text-[15px] text-gray-600 md:space-y-2">
                <p>+(94) 776689031</p>
                <p>+(94) 703803556</p>
              </div>
            </div>

            {/* Location */}

            <div>
              <h4 className="mb-3 text-lg font-semibold tracking-tight text-black md:mb-4">
                Our Location
              </h4>

              <div className="space-y-1.5 text-[15px] text-gray-600 md:space-y-2">
                <p>Welimada 90216</p>
                <p>No 04, Nugathalawa</p>
              </div>
            </div>

            {/* Email */}

            <div>
              <h4 className="mb-3 text-lg font-semibold tracking-tight text-black md:mb-4">
                Email
              </h4>

              <div className="text-[15px] text-gray-600">
                <p>netxium@mail.com</p>
              </div>
            </div>

            {/* Social Network */}

            <div>
              <h4 className="mb-3 text-lg font-semibold tracking-tight text-black md:mb-4">
                Social network
              </h4>

              <div className="flex items-center gap-5 text-black">
                {/* Facebook */}

                <a
                  href="#"
                  aria-label="Facebook"
                  className="transition-colors hover:text-gray-500"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.55.45-1 1-1Z" />
                  </svg>
                </a>

                {/* X / Twitter */}

                <a
                  href="#"
                  aria-label="X"
                  className="transition-colors hover:text-gray-500"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-gray-500"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V9H3.54v11.45Z" />
                  </svg>
                </a>

                {/* YouTube */}

                <a
                  href="#"
                  aria-label="YouTube"
                  className="transition-colors hover:text-gray-500"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.57A3.01 3.01 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.13c1.88.57 9.38.57 9.38.57s7.5 0 9.38-.57a3.01 3.01 0 0 0 2.12-2.13A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.99V8.01L16.2 12 9.6 15.99Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            RIGHT COLUMN - CONTACT FORM
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="w-full lg:w-1/2"
        >
          <div className="relative z-10 w-full rounded-3xl border border-gray-100 bg-[#F4F5F7] p-6 shadow-sm sm:p-10 md:rounded-[2.5rem] md:p-14">
            {/* ==================================================
                SUCCESS MESSAGE
            ================================================== */}

            {status.type === "success" ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <CheckCircle
                  size={48}
                  strokeWidth={1.5}
                  className="mb-4 text-[#333333]"
                />

                <h3 className="mb-2 text-2xl font-normal text-black md:text-3xl">
                  Thank You!
                </h3>

                <p className="text-gray-500">
                  Your message has been sent successfully.
                </p>

                <button
                  type="button"
                  onClick={handleSendAnother}
                  className="mt-8 text-sm font-semibold text-gray-500 transition-colors hover:text-black"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                {/* Form Heading */}

                <h3 className="mb-3 text-2xl font-normal tracking-tight text-black md:mb-4 md:text-3xl">
                  Get in Touch
                </h3>

                <p className="mb-8 max-w-sm text-sm text-gray-500 md:mb-12 md:text-[15px]">
                  Define your goals and identify areas where AI can add value
                  to your business.
                </p>

                {/* ==================================================
                    FORM
                ================================================== */}

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 md:gap-8"
                >
                  {/* Name */}

                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      autoComplete="name"
                      required
                      disabled={isSubmitting}
                      className="w-full border-b border-gray-300 bg-transparent py-2.5 text-[15px] text-black outline-none transition-colors placeholder:text-gray-400 focus:border-black disabled:cursor-not-allowed disabled:opacity-60 md:py-3"
                    />
                  </div>

                  {/* Email */}

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      autoComplete="email"
                      required
                      disabled={isSubmitting}
                      className="w-full border-b border-gray-300 bg-transparent py-2.5 text-[15px] text-black outline-none transition-colors placeholder:text-gray-400 focus:border-black disabled:cursor-not-allowed disabled:opacity-60 md:py-3"
                    />
                  </div>

                  {/* Subject */}

                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      disabled={isSubmitting}
                      className="w-full border-b border-gray-300 bg-transparent py-2.5 text-[15px] text-black outline-none transition-colors placeholder:text-gray-400 focus:border-black disabled:cursor-not-allowed disabled:opacity-60 md:py-3"
                    />
                  </div>

                  {/* Message */}

                  <div className="relative mt-2 mb-2 md:mb-4">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={4}
                      required
                      disabled={isSubmitting}
                      className="w-full resize-none border-b border-gray-300 bg-transparent py-2.5 text-[15px] text-black outline-none transition-colors placeholder:text-gray-400 focus:border-black disabled:cursor-not-allowed disabled:opacity-60 md:py-3"
                    />
                  </div>

                  {/* Error Message */}

                  {status.type === "error" && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="text-sm text-red-500"
                    >
                      {status.message}
                    </motion.p>
                  )}

                  {/* Submit Button */}

                  <div className="flex">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#333333] px-8 py-4 text-[14px] font-semibold text-white transition-all hover:bg-black active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          {/* Loading spinner */}

                          <span
                            className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                            aria-hidden="true"
                          />

                          Sending...
                        </>
                      ) : (
                        <>
                          <ChevronRight
                            size={18}
                            strokeWidth={3}
                            className="text-white transition-transform group-hover:translate-x-1"
                          />

                          Send a message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}