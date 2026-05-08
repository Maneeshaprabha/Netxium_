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

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/term-of-service" element={<Term/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        {/* Add more routes as needed */}
      </Routes>

      <Footer/>

      <FloatingContact />
    </>
  );
}

export default App;
