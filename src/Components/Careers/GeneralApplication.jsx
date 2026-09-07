"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Sparkles, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function GeneralApplication() {
  // Application Form State
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    interest: '',
    resumeLink: '', // CV / Resume URL
    portfolio: '', 
    coverLetter: '' 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- SUBMIT FUNCTION USING SIMPLE JSON (NO FILES) ---
  const handleApply = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New General Application: ${formData.name}`,
          name: formData.name,
          email: formData.email,
          area_of_interest: formData.interest,
          resume_link: formData.resumeLink, // URL field for CV
          portfolio_or_linkedin: formData.portfolio,
          message: formData.coverLetter,
          applied_for: 'General Application / Talent Pool',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: 'success', message: 'Your profile has been successfully added to our talent pool!' });
        setFormData({ name: '', email: '', interest: '', resumeLink: '', portfolio: '', coverLetter: '' });
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
    <div className="relative w-full border-t border-gray-200 bg-white font-sans pt-20 pb-24 md:pt-32 overflow-x-hidden">
      
      {/* BACKGROUND WIREFRAME GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center hidden lg:flex">
        <div className="w-full max-w-7xl h-full border-x border-gray-100 relative">
          <div className="absolute left-1/4 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-1/2 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-3/4 top-0 bottom-0 border-l border-gray-100" />
        </div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:border-x md:border-gray-200">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pb-10 border-b border-gray-200 mb-10 md:mb-16 mt-6 md:mt-0"
        >
          <Link to="/careers" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 group font-medium text-sm">
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Careers
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-[#F4F7FB] border border-gray-100 rounded-full text-sm font-medium text-gray-600">
              <Sparkles size={16} className="text-[#29AAE3]" />
              Talent Pool
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] font-medium tracking-tight text-black max-w-4xl mb-6">
            General Application
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            Don't see a perfect fit right now? We are always on the lookout for exceptional talent. Drop your details below, and we'll reach out when a suitable role opens up.
          </p>
        </motion.div>

        {/* --- Content Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Application Form */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col gap-12"
          >
            <section id="apply-form">
              <div className="bg-[#F4F7FB] p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-gray-100">
                {status.type === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-[#29AAE3]/10 text-[#29AAE3] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-2xl font-medium text-black mb-2">We've got your profile!</h4>
                    <p className="text-gray-500 max-w-md mx-auto">{status.message}</p>
                    <Link to="/careers" className="inline-block mt-8 text-sm font-semibold text-gray-500 hover:text-black transition-colors">
                      Return to Careers
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input 
                        type="text" name="name" required value={formData.name} onChange={handleInputChange}
                        placeholder="Full Name" 
                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                      />
                      <input 
                        type="email" name="email" required value={formData.email} onChange={handleInputChange}
                        placeholder="Email Address" 
                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    
                    {/* Area of Interest Dropdown */}
                    <div className="relative">
                      <select 
                        name="interest" required value={formData.interest} onChange={handleInputChange}
                        className={`w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-black transition-colors appearance-none ${formData.interest ? 'text-black' : 'text-gray-400'}`}
                      >
                        <option value="" disabled>Select Area of Interest</option>
                        <option value="Engineering & Development">Engineering & Development</option>
                        <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="Digital Strategy & Consulting">Digital Strategy & Consulting</option>
                        <option value="Marketing & Sales">Marketing & Sales</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        ▼
                      </div>
                    </div>

                    {/* CV / Resume Link Field */}
                    <div className="w-full">
                      <input 
                        type="url" name="resumeLink" required value={formData.resumeLink} onChange={handleInputChange}
                        placeholder="Resume / CV Link (Google Drive, Notion, etc.)" 
                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                      />
                      <p className="text-[12px] text-gray-400 mt-2 ml-1">
                        * Please ensure your Google Drive/Notion link is set to "Anyone with the link can view".
                      </p>
                    </div>

                    <input 
                      type="url" name="portfolio" value={formData.portfolio} onChange={handleInputChange}
                      placeholder="LinkedIn or Portfolio URL" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                    />

                    <textarea 
                      name="coverLetter" required value={formData.coverLetter} onChange={handleInputChange}
                      placeholder="Tell us about yourself and what you're looking for..." rows="5"
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                    ></textarea>

                    {status.type === 'error' && <p className="text-red-500 text-sm">{status.message}</p>}

                    <button 
                      type="submit" disabled={isSubmitting}
                      className="w-full bg-black text-white font-medium py-4 rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-2 disabled:opacity-70"
                    >
                      {isSubmitting ? "Submitting..." : "Submit to Talent Pool"}
                    </button>
                  </form>
                )}
              </div>
            </section>
          </motion.article>

          {/* RIGHT: Sticky Sidebar (What happens next?) */}
          <motion.aside 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 hidden lg:flex flex-col gap-6 sticky top-32"
          >
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">What happens next?</h4>
              
              <div className="flex flex-col gap-8 relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200" />
                
                <div className="flex gap-5 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-[#29AAE3] flex items-center justify-center shrink-0 border-4 border-gray-50 shadow-sm mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div>
                    <h5 className="text-black font-medium mb-1">We review your profile</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">Our recruitment team actively checks general applications for potential matches with upcoming roles.</p>
                  </div>
                </div>

                <div className="flex gap-5 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center shrink-0 border-4 border-gray-50 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div>
                    <h5 className="text-black font-medium mb-1">Talent Pool</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">Your resume is securely stored in our active talent pool for future reference.</p>
                  </div>
                </div>

                <div className="flex gap-5 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center shrink-0 border-4 border-gray-50 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div>
                    <h5 className="text-black font-medium mb-1">We reach out</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">If a position opens up that aligns with your skills, you'll be the first to know.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-3xl text-white shadow-xl text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={20} className="text-white" />
              </div>
              <h4 className="text-xl font-medium mb-2">Have a question?</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Not sure about a role? Reach out to our HR team directly.
              </p>
              <a href="mailto:careers@netxium.com" className="inline-block text-sm font-semibold hover:text-[#29AAE3] transition-colors">
                careers@netxium.com
              </a>
            </div>
          </motion.aside>

        </div>
      </section>
    </div>
  );
}