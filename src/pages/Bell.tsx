import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bell1, bell2 } from "../assets/images";
import { useRef } from "react";
import ContactMe from "./Contactme";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Bell() {
  const container = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.set(content.current, { opacity: 0 });
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });
      t1.to(".left-layer", { xPercent: -105, ease: "power2.inOut" })
        .to(".right-layer", { xPercent: 105, ease: "power2.inOut" }, "<")
        .to(content.current, { opacity: 1, ease: "power2.out" }, ">");
      // .to(content.current, {
      //   autoAlpha: 0,
      //   ease: "power4.inOut",
      //   duration: 1,
      // })
      // .to(".left-layer", {
      //   xPercent: 0,
      //   autoAlpha: 1,
      //   ease: "power2.inOut",
      // }, "<")

      // .to(
      //   ".right-layer",
      //   {
      //     xPercent: 0,
      //     autoAlpha: 1,
      //     ease: "power2.inOut",
      //   },
      //   "<"
      // );
      //   .to(".content", {autoAlpha: 1, scale: 1, ease: "power2.out"}, ">")
    },
    { scope: container }
  );

  return (
    <div className="h-screen flex relative" ref={container}>
      <div className="flex-1 flex justify-end items-center left-layer bg-white">
        <img src={bell2} alt="bell" />
      </div>
      <div className="flex-1 flex justify-start items-center right-layer bg-white">
        <img src={bell1} alt="bell" />
      </div>
      <div ref={content} className="content absolute inset-0 -z-10 h-screen">
        <ContactMe />
      </div>
    </div>
  );
}
