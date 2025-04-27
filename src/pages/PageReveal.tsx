import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function PageReveal() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const panels = gsap.utils.toArray(".panel");
        gsap.set(containerRef.current, { position: "relative" });
        // Set initial position and z-index for proper stacking
        gsap.set(panels, {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: (i, _target, targets) => targets.length - i,
        });
        
        // Create the reveal animation
        gsap.to(panels, {
            yPercent: -100, // Move panels up and out of view
            // ease: "power2.inOut", // Smoother easing
            stagger: 0.5,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=300%",
                scrub: 1, // Smoother scrubbing with slight delay
                pin: true,
                pinSpacing: false, // Create space for the scrolling
                markers: true // Remove in production
            }
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="h-screen w-full overflow-hidden relative">
            {/* Bottom layer (will be revealed last) */}
            <div className="panel bg-blue-500 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Final Content</h1>
            </div>
            
            {/* Middle layer */}
            <div className="panel bg-orange-400 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Second Layer</h1>
            </div>
            
            {/* Top layer (will be revealed first) */}
            <div className="panel bg-black flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold">First Layer</h1>
            </div>
        </div>
    );
}