"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, CheckCircle } from 'lucide-react';

export default function FloatingContact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset form if they close it
      setTimeout(() => {
        setIsSuccess(false);
        setError('');
      }, 500);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission to the Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // FIXED: Added leading slash to ensure it always hits the root API
    const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        // FIXED: Extract the actual error message from the backend
        const errorData = await response.json();
        setError(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-fit flex justify-center">
        <motion.button 
          onClick={() => setIsModalOpen(true)}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 sm:gap-5 rounded-full bg-black/80 pl-6 sm:pl-8 pr-2 py-2 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer max-w-full"
        >
          <div className="flex flex-col text-left py-1 whitespace-nowrap overflow-hidden">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-0.5 truncate">
              Speak to us
            </span>
            <span className="text-xs sm:text-sm font-medium text-white truncate">
              Email or book a call
            </span>
          </div>
          <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full bg-white flex items-center justify-center text-black group-hover:bg-[#0D4DB1] group-hover:text-white transition-colors duration-300 shadow-inner">
            <Mail size={18} className="sm:w-5 sm:h-5" />
          </div>
        </motion.button>
      </div>

      {/* THE CONTACT POP-UP MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
            
            {/* Dark Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                <X size={20} strokeWidth={2} />
              </button>

              {isSuccess ? (
                /* --- SUCCESS STATE --- */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-16 h-16 bg-[#29AAE3]/20 text-[#29AAE3] rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-3">Message Sent!</h3>
                  <p className="text-neutral-400">Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="mt-8 bg-white/10 text-white px-8 py-3 rounded-xl hover:bg-white/20 transition-colors font-medium"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                /* --- FORM STATE --- */
                <>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-2 pr-8">Let's talk.</h3>
                  <p className="text-sm sm:text-base text-neutral-400 mb-6 sm:mb-8">Fill out the form and we will get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm sm:text-base"
                    />
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm sm:text-base"
                    />
                    <textarea 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..." 
                      rows="4"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none text-sm sm:text-base"
                    ></textarea>

                    {error && <p className="text-red-400 text-sm mt-1">{error}</p>}

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 sm:mt-4 bg-white text-black font-medium py-3.5 sm:py-4 rounded-xl hover:bg-gray-200 active:scale-[0.98] transition-all text-sm sm:text-base shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
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