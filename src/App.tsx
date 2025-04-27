import "./App.css";
import Intro from "./components/Intro";
import rv from './assets/images/RV.png'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Bell from "./pages/Bell";
import Footer from "./components/Footer";
gsap.registerPlugin(useGSAP);

function App() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.to(".box", {
        opacity: 0,
        duration: 3,
        ease: "power2.out",
        delay: 1,
      });
      gsap.fromTo(
        ".hero", // target element(s)
        { opacity: 0 }, // from
        { opacity: 1, duration: 1, delay: 4 } // to
      );
    },
    { scope: container }
  );

  return (
    <div className="max-w-screen">
    <div ref={container} className="h-screen bg-[#E6DBC9]">
      <div className="box w-screen">
        <Intro />
      </div>

      {/* hero */}
      <div className="hero max-h-screen flex justify-center items-center">
        <img
          src={rv}
          alt="rv"
          width={"70%"}
          className="absolute w-full h-full object-contain inset-0 mix-blend-multiply opacity-80 pointer-events-none"
          style={{
            filter: "drop-shadow(0 0 5px rgba(255,255,255,0.15))",
          }}
        />
      </div>

    </div>
      <Skills />
      <Projects />
      <Bell />
          <Footer />
    </div>

  );
}

export default App;
