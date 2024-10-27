"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    gsap.utils.toArray(".row").forEach((row, index) => {
      const cardLeft = row.querySelector(".card-left");
      const cardRight = row.querySelector(".card-right");

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${
              progress * leftXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * leftRotationValues[index]
            }deg)`;
            cardRight.style.transform = `translateX(${
              progress * rightXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * rightRotationValues[index]
            }deg)`;
          },
        },
      });
    });

    gsap.to(".logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to(".line p", {
      y: 0,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.1,
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to("button", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power1.out",
      delay: 0.25,
      scrollTrigger: scrollTriggerSettings,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 2; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img
              src={`/img-${2 * i - 1}.gif`}
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="card card-right">
            <img src={`/img-${2 * i}.gif`} alt="" width={100} height={100} />
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <ReactLenis root>
      <section className="hero flex flex-col gap-6">
        <div className="text-4xl md:text-7xl font-bold">ADITYA <span className="font-extralight">PUNDIR</span></div>
        <div className="text-normal md:text-xl font-thin"><span className="text-red-500">CEHv9</span>  Certified | React Native | Blockchain</div>
        <a href="https://x.com/Adipundir" className="rounded-3xl border border-white px-4 md:px-6 py-2">Connect</a>
      </section>

      <section className="main">
        <div className="main-content">
          <div className="copy">
            <div className="line">
              <p>React Native developer from India ✨</p>
            </div>
            <div className="line">
              <p>who makes cross-platform apps</p>
            </div>
            <div className="line">
              <p>and pay attention to detail</p>
            </div>
          </div>
         

        </div>

        {generateRows()}
      </section>

      <section className="footer font-thin text-5xl">
        {/* <Link href="">Less is More.</Link> */}
        Less is More.
      </section>
    </ReactLenis>
  );
}
