import { useGSAP } from '@gsap/react'
import jessie from '../assets/images/jessie.png'
import PageReveal from './PageReveal'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function () {
    const imgRef = useRef<HTMLDivElement>(null);
    useGSAP(()=> {
        gsap.to(imgRef.current, {
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: true,
                markers: true
            }
        })
    },)

    return (
        <section ref={imgRef} className="h-screen flex">

            <div  className='w-1/3 h-screen relative'>
            <img src={jessie} alt="" className='absolute -scale-x-100 left-0 bottom-0'/>
            </div>

            <div className='flex-1'>
                <PageReveal />
            </div>
        </section>
    )
}