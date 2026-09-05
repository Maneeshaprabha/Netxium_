import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, CheckCircle } from "lucide-react";

export default function FloatingContact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // -----------------------------------------
  // Lock body scroll when modal is open
  // -----------------------------------------
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";

      const timer = setTimeout(() => {
        setIsSuccess(false);
        setError("");
      }, 300);

      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // -----------------------------------------
  // Handle input changes
  // -----------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts typing
    if (error) {
      setError("");
    }
  };

  // -----------------------------------------
  // Submit form
  // -----------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Check environment variable
    if (!accessKey) {
      console.error(
        "VITE_WEB3FORMS_ACCESS_KEY is not configured."
      );

      setError(
        "Contact form is temporarily unavailable. Please try again later."
      );

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

            subject:
              formData.subject ||
              "New Contact Message from Netxium",

            message: formData.message,

            from_name: "Netxium Website",

            replyto: formData.email,
          }),
        }
      );

      const data = await response.json();

      console.log("Web3Forms:", data);

      if (response.ok && data.success) {
        setIsSuccess(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setError(
          data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error("Contact form error:", err);

      setError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // -----------------------------------------
  // Close modal
  // -----------------------------------------
  const closeModal = () => {
    if (!isSubmitting) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {/* =====================================================
          FLOATING CONTACT BUTTON
      ====================================================== */}

      <div className="fixed bottom-6 left-1/2 z-50 flex w-[90%] max-w-fit -translate-x-1/2 justify-center md:bottom-10">
        <motion.button
          type="button"
          onClick={() => setIsModalOpen(true)}
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            delay: 0.5,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="group flex max-w-full cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-black/80 py-2 pl-6 pr-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:gap-5 sm:pl-8"
        >
          {/* Text */}

          <div className="flex min-w-0 flex-col overflow-hidden whitespace-nowrap py-1 text-left">
            <span className="mb-0.5 truncate text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:text-[10px]">
              Speak to us
            </span>

            <span className="truncate text-xs font-medium text-white sm:text-sm">
              Email or book a call
            </span>
          </div>

          {/* Mail Icon */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black shadow-inner transition-colors duration-300 group-hover:bg-[#0D4DB1] group-hover:text-white sm:h-12 sm:w-12">
            <Mail
              size={18}
              className="sm:h-5 sm:w-5"
              strokeWidth={2}
            />
          </div>
        </motion.button>
      </div>

      {/* =====================================================
          CONTACT MODAL
      ====================================================== */}

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans sm:p-6">
            {/* =================================================
                BACKDROP
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={closeModal}
              className="absolute inset-0 cursor-pointer bg-black/60 backdrop-blur-sm"
            />

            {/* =================================================
                MODAL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 shadow-2xl sm:rounded-[2rem] sm:p-8 md:p-10"
            >
              {/* =================================================
                  CLOSE BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={closeModal}
                disabled={isSubmitting}
                aria-label="Close contact form"
                className="absolute right-4 top-4 rounded-full bg-white/5 p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:right-6 sm:top-6"
              >
                <X
                  size={20}
                  strokeWidth={2}
                />
              </button>

              {/* =================================================
                  SUCCESS STATE
              ================================================== */}

              {isSuccess ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  {/* Success Icon */}

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#29AAE3]/20 text-[#29AAE3]">
                    <CheckCircle
                      size={32}
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="mb-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    Message Sent!
                  </h3>

                  <p className="max-w-sm text-sm leading-relaxed text-neutral-400 sm:text-base">
                    Thank you for reaching out. We will get
                    back to you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="mt-8 rounded-xl bg-white/10 px-8 py-3 font-medium text-white transition-colors hover:bg-white/20"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* =================================================
                      FORM HEADER
                  ================================================== */}

                  <h3 className="mb-2 pr-8 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    Let's talk.
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-neutral-400 sm:mb-8 sm:text-base">
                    Fill out the form and we will get back to
                    you within 24 hours.
                  </p>

                  {/* =================================================
                      CONTACT FORM
                  ================================================== */}

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 sm:gap-4"
                  >
                    {/* Name */}

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      autoComplete="name"
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-500 focus:border-white/30 focus:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:py-4 sm:text-base"
                    />

                    {/* Email */}

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      autoComplete="email"
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-500 focus:border-white/30 focus:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:py-4 sm:text-base"
                    />

                    {/* Subject */}

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject (Optional)"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-500 focus:border-white/30 focus:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:py-4 sm:text-base"
                    />

                    {/* Message */}

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={4}
                      required
                      disabled={isSubmitting}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-500 focus:border-white/30 focus:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:py-4 sm:text-base"
                    />

                    {/* =================================================
                        ERROR
                    ================================================== */}

                    {error && (
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="mt-1 text-sm leading-relaxed text-red-400"
                      >
                        {error}
                      </motion.p>
                    )}

                    {/* =================================================
                        SUBMIT BUTTON
                    ================================================== */}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-medium text-black shadow-lg transition-all hover:bg-gray-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:mt-4 sm:py-4 sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />

                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}