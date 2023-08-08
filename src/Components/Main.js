import React, { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import navimg from "./Resources/navImg.jpg";
import mainimg from "./Resources/mainImg.jpg";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Scrollbar from "mainbar";

export default function Main() {

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      function smoothning() {
        //smoothning the scroller
        gsap.registerPlugin(ScrollTrigger);

        const locoScroll = new LocomotiveScroll({
          el: document.querySelector(".main"),
          smooth: true,
        });
        locoScroll.on("scroll", ScrollTrigger.update);

        //connecting scrolltrigger to locomotive scroll
        ScrollTrigger.scrollerProxy(".main", {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: document.querySelector(".main").style.transform
            ? "transform"
            : "fixed",
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
      }
      //smoothning done and wrapped in a function 
      smoothning();

      gsap.set("#moveLeft", { x: 0, y: 0, opacity: 1 });
      gsap.set("#moveRight", { x: 0, y: 0, opacity: 1 });
      gsap.set(".mainVideo", { x: 0 , y: 0, width:"60%" });

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".page1 h1",
          scroller:".main",
          // markers:true,
          start:"top 20%",
          end:"top 0%",
          scrub:2,
        }
      })
      tl.to("#moveLeft",{
        x:-90,
        duration:1.5,
        opacity:0.5,
        filter: "blur(4px)",
      },"anim")
      tl.to("#moveRight",{
        x:100,
        duration:1.5,
        opacity:0.5,
        filter: "blur(4px)",
      },"anim")
      tl.to(".mainVideo",{
        width:"85%",
        duration: 2,
        y: -250,
      },"anim")


    });
    return () => ctx.revert;
  }, []);

  // useEffect(() => {
  //   gsap.to(
  //     ".page1 h1",
  //     {
  //       x: -90,
  //       scrollTrigger: {
  //         trigger: ".page1 h1",
  //         scroller: ".main",
  //         start: "top 27%",
  //         end: "top 0%",
  //         scrub: 2,
  //       },
  //     },
  //     "anim"
  //   );

  //   gsap.to(
  //     ".page1 h2",
  //     {
  //       x: 90,
  //       scrollTrigger: {
  //         trigger: ".page1 h2",
  //         scroller: ".main",
  //         start: "top 27%",
  //         end: "top 0%",
  //         scrub: 2,
  //       },
  //     },
  //     "anim"
  //   );

  //   gsap.to(
  //     ".page1 .mainVideo",
  //     {
  //       width: "90%",
  //       scrollTrigger: {
  //         trigger: ".page1 .mainVideo",
  //         scroller: ".main",
  //         start: "top 20%",
  //         end: "top 0%",
  //         scrub: 2,
  //       },
  //     },
  //     "anim"
  //   );

  //   gsap.to(
  //     ".main",
  //     {
  //       background: "#fff",
  //       scrollTrigger: {
  //         trigger: ".page1 h1",
  //         scroller: ".main",
  //         // markers:true,
  //         start: "top -115%",
  //         end: "top -120%",
  //         scrub: 2,
  //     }
  //     },
  //     "anim"
  //   );
  // }, []);
  return (
    <>
      <div className="main" id="main">
        <div className="page1" data-bgcolor="#111">
          {/* <img src={svgIcon} alt="SVG Icon" /> */}
          <></>
          <div className="nav">
            <img
              className="img"
              src={navimg}
              alt="loading"
              style={{ height: "60px", width: "40px" }}
            />
            <div className="nav-items">
              <h4>Home</h4>
              <h4>About</h4>
              <h4>Projects</h4>
              <h4>Skills</h4>
            </div>
            <div className="nav-button"></div>
          </div>
          <h1 id="moveLeft">Shivam Sharma</h1>
          <h2 id="moveRight">
            <span>Student.</span> <span>Designer.</span>{" "}
            <span>Developer .</span>
          </h2>
          {/* <video autoplay muted loop z src='' alt=''></video> */}
          <img className="mainVideo" src={mainimg} alt="loading"></img>
        </div>
        <div className="page2" data-bgcolor="#fff">
          <h1>About</h1>
          <div className="page2-container container">
            <div className="page2-left">
              <h2>
                <span>Creative Problem Solver, </span>
                <span>Passionate for knowledge, </span>
                <span>"Fail fast,Fail better", </span>
                <span>Stratergic Careful Planner, </span>
                <span>Anything "can do",Adaptive. </span>
              </h2>
            </div>
            <div className="page2-right">
              <p>
                <span>
                  Innovative, task-driven professional with 2+ years of
                  experience in web design and development across diverse
                  technologies.
                </span>
                <span>
                  Equipped with a record of success in consistently identifying
                  and providing the technological needs of companies through
                  ingenious innovation.
                </span>
                <span>Proficient in developing databases, </span>
                <span>creating user interfaces,</span>
                <span>writing and testing codes,</span>
                <span>troubleshooting simple/complex issues,</span>
                <span>
                  and implementing new features based on user feedback.
                </span>
              </p>
              <button>Curriculum Vitae</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
