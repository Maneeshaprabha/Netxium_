"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle2, ArrowRight, UploadCloud, FileText, X } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";

// --- FULL JOB DATABASE ---
const jobDetailsDB = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Global",
    salary: "LKR120k - LKR160k",
    about: "As a Senior AI Engineer at Netxium, you will be at the forefront of building intelligent systems that transform enterprise workflows. You will lead the design, training, and deployment of machine learning models, working closely with product and engineering teams to solve complex, real-world problems.",
    responsibilities: [
      "Design, develop, and deploy scalable machine learning models and NLP applications.",
      "Optimize existing AI infrastructure for low latency and high throughput.",
      "Collaborate with backend engineers to integrate AI models into production environments.",
      "Lead technical architecture discussions and mentor junior engineers.",
      "Stay current with the latest advancements in LLMs and generative AI technologies."
    ],
    requirements: [
      "5+ years of experience in software engineering, with at least 3 years dedicated to Machine Learning.",
      "Strong proficiency in Python, PyTorch, or TensorFlow.",
      "Experience deploying models to production using AWS, GCP, or Azure.",
      "Solid understanding of vector databases (Pinecone, Milvus) and LLM frameworks.",
      "Excellent problem-solving skills and ability to thrive in an autonomous, remote environment."
    ]
  },
  {
    id: 2,
    title: "Frontend Architect (React/Next.js)",
    department: "Engineering",
    type: "Full-time",
    location: "Hybrid",
    salary: "LKR100k - LKR140k",
    about: "We are looking for a visionary Frontend Architect who obsesses over performance, accessibility, and micro-interactions. You will own the frontend architecture for our core products, ensuring they look stunning and run at 60fps.",
    responsibilities: [
      "Architect and build highly interactive web applications using React and Next.js.",
      "Establish and maintain design systems and frontend coding standards.",
      "Optimize web vitals, ensuring sub-second load times across all platforms.",
      "Work closely with UI/UX designers to implement pixel-perfect, accessible interfaces."
    ],
    requirements: [
      "6+ years of frontend development experience.",
      "Deep expertise in React, Next.js, and modern CSS frameworks (Tailwind, Framer Motion).",
      "Strong understanding of browser rendering behavior and performance optimization.",
      "Experience setting up CI/CD pipelines for frontend applications."
    ]
  },
  {
    id: 3,
    title: "UI/UX Product Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    salary: "Competitive",
    about: "Design is at the heart of what we do. We need a product designer who can translate complex technical capabilities into simple, elegant, and highly usable interfaces.",
    responsibilities: [
      "Lead the end-to-end design process from user research to high-fidelity prototypes.",
      "Create and maintain a scalable design system in Figma.",
      "Conduct usability testing and iterate based on user feedback."
    ],
    requirements: [
      "4+ years of product design experience in B2B or SaaS products.",
      "Mastery of Figma and prototyping tools.",
      "A strong portfolio showcasing complex problem-solving and modern visual design."
    ]
  },
  {
    id: 4, 
    title: "Quality Assurance (QA) Engineer", 
    department: "Engineering", 
    type: "Full-time", 
    location: "Remote", 
    salary: "Competitive", 
    about: "As a QA Engineer at Netxium, you will be the final gatekeeper of our digital products. You will ensure that our complex web applications, API integrations, and backend services function flawlessly. We are looking for someone who goes beyond manual testing to build robust test plans and ensure premium quality across modern tech stacks.", 
    responsibilities: [
      "Develop, execute, and maintain comprehensive test plans for full-stack web applications.", 
      "Conduct API validation and endpoint testing using Postman to ensure seamless data flow.", 
      "Collaborate with developers to identify, report, and resolve issues in Node.js and database environments.",
      "Test highly interactive user interfaces built with React and Next.js across multiple devices and browsers.",
      "Perform rigorous functional and security testing on complex platforms, including AI-driven tools."
    ], 
    requirements: [
      "3+ years of experience in Quality Assurance and software testing.", 
      "Strong hands-on experience with API testing tools like Postman.",
      "Familiarity with modern web architectures (React, Next.js, Node.js) and how to test them.",
      "Experience writing detailed test cases for CRUD operations and complex user authorization flows.",
      "A sharp eye for UI/UX discrepancies and a passion for delivering premium user experiences."
    ]
  },
  {
    id: 5, 
    title: "Digital Strategist", 
    department: "Consulting", 
    type: "Contract", 
    location: "Hybrid", 
    salary: "Competitive", 
    about: "As a Digital Strategist at Netxium, you will act as the bridge between cutting-edge technology and business growth. You will consult with enterprise clients to identify bottlenecks, audit their existing workflows, and design comprehensive roadmaps that leverage AI, automation, and modern software architectures to drive measurable ROI.", 
    responsibilities: [
      "Conduct deep-dive audits of client technology stacks and business operations.", 
      "Develop actionable digital transformation roadmaps, incorporating AI readiness and automation strategies.", 
      "Lead client workshops to define project scope, KPIs, and long-term tech investments.",
      "Collaborate closely with UI/UX designers and engineering leads to ensure strategic alignment during product development.",
      "Monitor industry trends to continuously evolve Netxium’s consulting offerings."
    ], 
    requirements: [
      "5+ years of experience in digital consulting, product strategy, or technical project management.", 
      "Proven track record of guiding enterprise clients through digital transformation initiatives.",
      "Strong understanding of modern software development life cycles and AI capabilities.",
      "Exceptional communication and presentation skills, capable of translating complex tech concepts to non-technical stakeholders.",
      "Ability to work independently in a hybrid environment, balancing client-facing duties with strategic planning."
    ]
  }
];

export default function JobDetails() {
  const { id } = useParams();
  
  // Application Form State
  const [formData, setFormData] = useState({ name: '', email: '', portfolio: '', coverLetter: '' });
  const [file, setFile] = useState(null); // File state for CV
  const fileInputRef = useRef(null); // Reference for hidden file input

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const job = jobDetailsDB.find((j) => j.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!job) {
    return <Navigate to="/careers" />;
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // --- SUBMIT FUNCTION WITH FILE UPLOAD ---
  const handleApply = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Use FormData instead of JSON to support File Uploads
    const formSubmissionData = new FormData();
    formSubmissionData.append('access_key', accessKey);
    formSubmissionData.append('subject', `New Job Application: ${job.title}`);
    formSubmissionData.append('name', formData.name);
    formSubmissionData.append('email', formData.email);
    formSubmissionData.append('portfolio_or_linkedin', formData.portfolio);
    formSubmissionData.append('cover_letter', formData.coverLetter);
    formSubmissionData.append('applied_for', job.title);

    // If CV exists, append it as an attachment
    if (file) {
      formSubmissionData.append('attachment', file);
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        // IMPORTANT: When using FormData, DO NOT set 'Content-Type' header. The browser will set it automatically.
        body: formSubmissionData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: 'success', message: 'Application submitted successfully! We will be in touch.' });
        setFormData({ name: '', email: '', portfolio: '', coverLetter: '' });
        setFile(null);
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
              <div className="w-2 h-2 rounded-full bg-[#29AAE3] animate-pulse" />
              {job.department}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] font-medium tracking-tight text-black max-w-4xl mb-8">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 md:gap-10 text-gray-500 font-medium text-sm md:text-base">
            <div className="flex items-center gap-2"><MapPin size={18} className="text-gray-400"/> {job.location}</div>
            <div className="flex items-center gap-2"><Clock size={18} className="text-gray-400"/> {job.type}</div>
            <div className="flex items-center gap-2"><Briefcase size={18} className="text-gray-400"/> {job.salary}</div>
          </div>
        </motion.div>

        {/* --- Content Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col gap-12"
          >
            <section>
              <h3 className="text-2xl md:text-3xl font-medium text-black tracking-tight mb-5">About the Role</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">{job.about}</p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-medium text-black tracking-tight mb-5">What you'll do</h3>
              <ul className="flex flex-col gap-4">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4">
                    <CheckCircle2 size={24} className="text-[#29AAE3] shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-medium text-black tracking-tight mb-5">What we're looking for</h3>
              <ul className="flex flex-col gap-4">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4">
                    <div className="w-2 h-2 rounded-full bg-black shrink-0 mt-2.5 ml-1" />
                    <span className="text-base md:text-lg text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* APPLICATION FORM WITH CV UPLOAD */}
            <section id="apply-form" className="mt-8 pt-12 border-t border-gray-200">
              <h3 className="text-3xl md:text-4xl font-medium text-black tracking-tight mb-4">Apply for this position</h3>
              <p className="text-gray-500 mb-8 md:mb-10 text-sm md:text-base">Please complete the form below. We usually respond within 48 hours.</p>

              <div className="bg-[#F4F7FB] p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-gray-100">
                {status.type === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-[#29AAE3]/10 text-[#29AAE3] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-2xl font-medium text-black mb-2">Application Received!</h4>
                    <p className="text-gray-500">{status.message}</p>
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
                    
                    <input 
                      type="url" name="portfolio" value={formData.portfolio} onChange={handleInputChange}
                      placeholder="LinkedIn or Portfolio URL" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                    />

                    {/* CUSTOM CV UPLOAD FIELD */}
                    <div className="w-full">
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        onChange={handleFileChange} 
                        ref={fileInputRef} 
                        className="hidden" 
                      />
                      
                      {!file ? (
                        <div 
                          onClick={() => fileInputRef.current.click()}
                          className="w-full bg-white border-2 border-dashed border-gray-300 rounded-xl px-5 py-8 flex flex-col items-center justify-center cursor-pointer hover:border-black hover:bg-gray-50 transition-colors group"
                        >
                          <UploadCloud size={32} className="text-gray-400 group-hover:text-black mb-3 transition-colors" />
                          <p className="text-black font-medium mb-1">Click to upload your CV</p>
                          <p className="text-xs text-gray-500">PDF, DOC, or DOCX (Max 5MB)</p>
                        </div>
                      ) : (
                        <div className="w-full bg-white border border-[#29AAE3] rounded-xl px-5 py-4 flex items-center justify-between shadow-[0_0_15px_rgba(41,170,227,0.1)]">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="w-10 h-10 rounded-full bg-[#29AAE3]/10 flex items-center justify-center shrink-0">
                              <FileText size={18} className="text-[#29AAE3]" />
                            </div>
                            <div className="flex flex-col truncate">
                              <span className="text-black font-medium text-sm truncate">{file.name}</span>
                              <span className="text-gray-500 text-xs">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                            </div>
                          </div>
                          <button 
                            type="button" 
                            onClick={removeFile}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors shrink-0"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      )}
                    </div>

                    <textarea 
                      name="coverLetter" required value={formData.coverLetter} onChange={handleInputChange}
                      placeholder="Cover Letter / Why are you a great fit?" rows="5"
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                    ></textarea>

                    {status.type === 'error' && <p className="text-red-500 text-sm">{status.message}</p>}

                    <button 
                      type="submit" disabled={isSubmitting}
                      className="w-full bg-black text-white font-medium py-4 rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-2 disabled:opacity-70"
                    >
                      {isSubmitting ? "Submitting Application..." : "Submit Application"}
                    </button>
                  </form>
                )}
              </div>
            </section>
          </motion.article>

          {/* RIGHT: Sticky Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 hidden lg:flex flex-col gap-6 sticky top-32"
          >
            <div className="bg-[#1A1A1A] p-8 rounded-3xl text-white shadow-xl">
              <h4 className="text-2xl font-medium mb-3">Ready to join us?</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Take the next step in your career. Submit your application below and let's build the future together.
              </p>
              <a 
                href="#apply-form"
                className="w-full flex items-center justify-between bg-white text-black px-6 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors group"
              >
                <span>Apply Now</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Role Summary</h4>
              <div className="flex flex-col gap-4 text-[15px]">
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">Department</span>
                  <span className="text-black font-medium">{job.department}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">Location</span>
                  <span className="text-black font-medium">{job.location}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">Type</span>
                  <span className="text-black font-medium">{job.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Salary</span>
                  <span className="text-black font-medium">{job.salary}</span>
                </div>
              </div>
            </div>
          </motion.aside>

        </div>
      </section>
    </div>
  );
}