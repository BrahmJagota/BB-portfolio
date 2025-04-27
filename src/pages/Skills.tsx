import { useGSAP } from "@gsap/react";
import gus from "../assets/images/gus.png";
import { useRef } from "react";
import gsap from "gsap";
import Skill from "../components/Skill";
import { settings, mongo, nodejs, express, react, tools, bulb, tick } from "../assets/images";

gsap.registerPlugin(useGSAP);
export default function Skills() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".skill-box",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen bg-[#1A1A1A] text-white flex justify-between items-center px-6"
    >

      <div className="max-w-4xl h-full gap-20 flex flex-1 p-4">
        <div className=" m x-4">
          <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"> <span><img src={settings} width={30} alt="" className="inline-block" /></span> DEVELOPMENT</h1>
          <div className="grid grid-cols-3 gap-4">
            <Skill skill="JavaScript" shortSkill="JS" />
            <Skill skill="TypeScript" shortSkill="TS" />
            <Skill skill="Tailwind CSS" shortSkill="TW" />
            <Skill skill="React" shortSkill="RE" />
            <Skill skill="Express" shortSkill="EX" />
            <Skill skill="NestJS" shortSkill="NS" />
            <Skill skill="Node.js" shortSkill="ND" />
            <Skill skill="MongoDB" shortSkill="MG" />
            <Skill skill="Prisma" shortSkill="PR" />
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-between">

          <div className="flex gap-6">
            <img src={mongo} alt="mongo" width={50}/>
            <img src={express} alt="express" width={50}/>
            <img src={react} alt="react" width={50}/>
            <img src={nodejs} alt="nodejs" width={50}/>
          </div>

            <div className="flex justify-between">
              {/* tools */}
                <div>
                <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"> <span><img src={tools} width={30} alt="" className="inline-block" /></span> TOOLS</h1>
                <ul>
                  <li className="flex items-center"><img src={tick} alt="tick" width={15} height={15} className="mr-1"/> Git + Github</li>
                  <li className="flex items-center"><img src={tick} alt="tick" width={15} height={15} className="mr-1"/> Command Line</li>
                  <li className="flex items-center"><img src={tick} alt="tick" width={15} height={15} className="mr-1"/> Chrome DevTools</li>
                  <li className="flex items-center"><img src={tick} alt="tick" width={15} height={15} className="mr-1"/> VS Code</li>
                  <li className="flex items-center"><img src={tick} alt="tick" width={15} height={15} className="mr-1"/> Postman</li>
                </ul>
                </div>
                {/* knowdledge */}
                <div>
                <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"> <span><img src={bulb} width={30} alt="" className="inline-block" /></span> KNOWLEDGE</h1>

                </div>
            </div>
        </div>
      </div>

      <img src={gus} alt="gus" className="self-end" />

    </section>
  );
}
