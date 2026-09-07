import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Services } from "./Components/services/Page/services";
import { About } from "./Components/AboutUs/About";

import FloatingContact from "./Components/FloatingContact/FloatingContact";
import Footer from "./Components/Footer/Footer";
import Contact  from "./Components/ContactUs/Contact";
import Term from "./Components/Term/Term";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import ScrollToTop from "./Components/ScrollToTop";
import Blog from "./Components/Blogs/Blogs";
import BlogPost from "./Components/Blogs/BlogPost";
import Careers from "./Components/Careers/Careers";
import JobDetails from "./Components/Careers/CareersDetails";
import GeneralApplication from "./Components/Careers/GeneralApplication";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <>

    <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<JobDetails />} />
        <Route path="/careers/general-application" element={<GeneralApplication />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/term-of-service" element={<Term/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        {/* Add more routes as needed */}
      </Routes>

      <Footer/>

      <FloatingContact />
      <ScrollToTopButton />
    </>
  );
}

export default App;
