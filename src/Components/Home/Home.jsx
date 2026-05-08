// import { Animate } from "../animate/animate";


import FutureTech from "../FutureTech/FutureTech";
import Hero from "../Hero/Hero";
import Creative from "../Creative/Creative";
import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import Services from "../services/services";
import Process from "../Process/Process";
import FAQ from "../FAQ/FAQ";
// import { Contact } from "../ContactUs/Contact";

import Choose from "../Choose/Choose";
// import WorkSection from "../WorkSection/WorkSection";
import ProjectCard from "../ProjectCard";
export default function Home() {
  return (
    <>
      <Hero />
      <ProjectCard />
      {/* <WorkSection/> */}
      <Intro />
      <Services />
      <Projects />
      <FutureTech />
      <Choose />
      {/* <Animate /> */}
   <Creative/>
      <Process />
      <FAQ />
      {/* <Contact /> */}
     
    </>
  );
}
