import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function TestPinScroll() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".box-1",{
        scrollTrigger: {
            trigger: ".container",
            start: "top top",
            end: "center top",
            scrub: 1,
            pin: true,
            markers: true
        },
        x: 500,
    })
  }, { scope: container });
  return (
    <div className="bg-red-500" ref={container}>

      <div className="h-screen bg-green-300 container grid grid-cols-3 items-center grid-rows-1">
        <div className="bg-red-500">
          <h1 className="text-3xl  text-center text-white font-bold">hello</h1>
        </div>

        <div className="bg-green-500">
          <h2 className="box-1 inline-block text-3xl  text-center text-white font-bold">
            I am pinned content!
          </h2>
        </div>

        <div className="bg-blue-500">
          <h1 className="text-3xl  text-center text-white font-bold">world</h1>
        </div>
      </div>
    </div>
  );
}
