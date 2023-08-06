import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import navimg from "./Resources/navImg.jpg";
import mainimg from "./Resources/mainImg.jpg";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  
  useEffect(() => {
    let locoScroll = null;

    const initLocoScroll = () => {
      locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
      });
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
    };

    const destroyLocoScroll = () => {
      if (locoScroll) {
        locoScroll.destroy();
        locoScroll = null;
      }
    };

    initLocoScroll();
    return destroyLocoScroll;
  }, []);

  useEffect(() => {
    gsap.to(".page1 h1", {
      x: -90,
      scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 27%",
        end: "top 0%",
        scrub: 3,
      },
    },"anim");

    gsap.to(".page1 h2", {
      x: 90,
      scrollTrigger: {
        trigger: ".page1 h2",
        scroller: ".main",
        start: "top 27%",
        end: "top 0%",
        scrub: 3,
      },
    },"anim");

    gsap.to(".page1 .mainVideo", {
      width: "90%",
      scrollTrigger: {
        trigger: ".page1 .mainVideo",
        scroller: ".main",
        start: "top 27%",
        end: "top 0%",
        scrub: 3,
      },
    },"anim");
  }, []);
  return (
    <>
      <div className="main" id="main">
        <div className="page1">
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
          <h1>Shivam Sharma</h1>
          <h2>
            <span>Student.</span> <span>Designer.</span>{" "}
            <span>Developer .</span>
          </h2>
          {/* <video autoplay muted loop z src='' alt=''></video> */}
          <img className="mainVideo" src={mainimg} alt="loading"></img>
        </div>
      </div>
    </>
  );
}
