import React, { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import navimg from "./Resources/navImg.jpg";
import mainimg from "./Resources/mainImg.jpg";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Scrollbar from "smooth-scrollbar";

export default function Main() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // smoothning scroll
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
      });

      gsap.registerPlugin(ScrollTrigger);

      //syncronizing scrolls
      locoScroll.on("scroll", ScrollTrigger.update);

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

      //initialinzing elements to be moved
      gsap.set("#moveLeft", { x: 0, y: 0, opacity: 1 });
      gsap.set("#moveRight", { x: 0, y: 0, opacity: 1 });
      gsap.set(".page1 .mainVideo", { x: 0, y: 0, opacity: 1, width:"60%" });

      //motion of the elements
      let tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .to("#moveLeft", { x: -90 })
      
      let t2 = gsap
        .timeline({ defaults: { ease: "none" } })
        .to("#moveRight", { x: 90 });
      
      let t3 = gsap
        .timeline({ defaults: { ease: "none" } })
        .to(".page1 .mainVideo", { width: "90%" });

      //time of movement of elements
      ScrollTrigger.create({
        trigger: "#moveLeft",
        scroller: ".main",
        // markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3,
        animation: tl,
      });

      ScrollTrigger.create({
        trigger: "#moveRight",
        scroller: ".main",
        // markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3,
        animation: t2,
      });

      ScrollTrigger.create({
        trigger: "#moveRight",
        scroller: ".page1 .mainVideo",
        // markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3,
        animation: t3,
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    });

    return ()=> ctx.revert;

    // console.log("Move Left Progress:", moveLeftProgress);

    //checking for triggering points
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
