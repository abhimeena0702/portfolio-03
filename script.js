document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  gsap.set("header img", { yPercent: -150 });
  //  home screen image animation start
  const tl = gsap.timeline();
  tl.to("header img", {
    yPercent: 0,
    xPercent: 0,
    duration: 2,
  });
  tl.to("header img ", {
    y: 20,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  //  home screen image animation end

  // skills animation begin

  gsap.to(".react-3d1", {
    rotationY: 360,
    rotationX: 360,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "linear",
    transformOrigin: "center center",
  });
  gsap.to(".react-3d2", {
    rotationZ: 360,
    rotationY: 360,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "linear",
    transformOrigin: "center center",
  });
  gsap.to(".react-3d3", {
    rotationZ: 360,
    rotationX: 360,
    rotationX: 90,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "linear",
    transformOrigin: "center center",
  });
  gsap.to(".react-3d4", {
    rotationY: 30,
    rotationZ: 180,
    rotationX: 360,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "linear",
    transformOrigin: "center center",
  });

  gsap.from(".techSkills", {
    width: "0",
    scrollTrigger: {
      trigger: "#skills",
      start: "top center",
      end: "center center",
    },
  });
  // skills animation end
  // skills scroll animation begin 
  gsap.from(".techskills", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",  // when #skills top is 80% from viewport top
      end: "bottom 20%",
      scrub:2
    },
    y: 50,               // slide up effect
    opacity: 0,          // fade in
    duration: 0.8,       // time per card
    ease: "power3.out",
    stagger: 0.3         // delay between each card
  });
  // skills scroll animation end

});


