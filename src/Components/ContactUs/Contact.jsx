"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Facebook, Linkedin, Youtube, CheckCircle } from "lucide-react";

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission with Web3Forms using .env
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Vite සඳහා (Create React App නම් process.env.REACT_APP_WEB3FORMS_ACCESS_KEY දමන්න)
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-white font-sans overflow-x-hidden border-t border-gray-200">
      
      {/* --- BACKGROUND WIREFRAME GRID --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-x border-gray-100 relative">
        </div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* LEFT COLUMN: Text & Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <h2 className="text-[40px] md:text-[64px] leading-[1.2] md:leading-[1.1] font-normal text-black tracking-tight mb-6 mt-10 md:mt-0 py-2">
            We are always ready to support your business and bring your ideas to life.
          </h2>
          
          <p className="text-[15px] md:text-base text-gray-500 leading-relaxed mb-10 md:mb-16 max-w-md">
            Netxium blends creativity, AI, and technology to build smart solutions that inspire growth and shape the future.
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-8">
            <div>
              <h4 className="text-black font-semibold text-lg mb-3 md:mb-4 tracking-tight">Call Center</h4>
              <div className="space-y-1.5 md:space-y-2 text-[15px] text-gray-600">
                <p>+(94) 776689031</p>
                <p>+ (94) 703803556</p>
              </div>
            </div>

            <div>
              <h4 className="text-black font-semibold text-lg mb-3 md:mb-4 tracking-tight">Our Location</h4>
              <div className="space-y-1.5 md:space-y-2 text-[15px] text-gray-600">
                <p>Welimada 90216</p>
                <p>No 04, Nugathalawa</p>
              </div>
            </div>

            <div>
              <h4 className="text-black font-semibold text-lg mb-3 md:mb-4 tracking-tight">Email</h4>
              <div className="text-[15px] text-gray-600">
                <p>netxium@mail.com</p>
              </div>
            </div>

            <div>
              <h4 className="text-black font-semibold text-lg mb-3 md:mb-4 tracking-tight">Social network</h4>
              <div className="flex items-center gap-5 text-black">
                <a href="#" className="hover:text-gray-500 transition-colors">
                  <Facebook size={18} strokeWidth={2} />
                </a>
                <a href="#" className="hover:text-gray-500 transition-colors font-medium text-lg leading-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-500 transition-colors">
                  <Linkedin size={18} strokeWidth={2} />
                </a>
                <a href="#" className="hover:text-gray-500 transition-colors">
                  <Youtube size={20} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="bg-[#F4F5F7] rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-14 w-full relative z-10 shadow-sm border border-gray-100">
            
            {status.type === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <CheckCircle size={48} className="text-[#333333] mb-4" />
                <h3 className="text-2xl md:text-3xl font-normal text-black mb-2">Thank You!</h3>
                <p className="text-gray-500">Your message has been sent successfully.</p>
                <button 
                  onClick={() => setStatus({ type: '', message: '' })}
                  className="mt-8 text-sm font-semibold text-gray-500 hover:text-black transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl md:text-3xl font-normal text-black tracking-tight mb-3 md:mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-500 text-sm md:text-[15px] mb-8 md:mb-12 max-w-sm">
                  Define your goals and identify areas where AI can add value to your business
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name" 
                      className="w-full bg-transparent border-b border-gray-300 py-2.5 md:py-3 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email" 
                      className="w-full bg-transparent border-b border-gray-300 py-2.5 md:py-3 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <input 
                      type="text" 
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject" 
                      className="w-full bg-transparent border-b border-gray-300 py-2.5 md:py-3 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="relative mt-2 mb-2 md:mb-4">
                    <textarea 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message" 
                      rows={4}
                      className="w-full bg-transparent border-b border-gray-300 py-2.5 md:py-3 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                    />
                  </div>

                  {status.type === 'error' && (
                    <p className="text-red-500 text-sm">{status.message}</p>
                  )}

                  <div className="flex">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex justify-center items-center gap-3 bg-[#333333] text-white px-8 py-4 rounded-full text-[14px] font-semibold hover:bg-black transition-all active:scale-[0.98] group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <ChevronRight size={18} strokeWidth={3} className="text-white group-hover:translate-x-1 transition-transform" />
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