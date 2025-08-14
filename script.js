document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
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
  // skills animation end
  // skills scroll animation begin
  gsap.from(".techskills", {
    scrollTrigger: {
      trigger: "#skills h2",
      start: "top 70%",
      endTrigger: "#skills",
      end: "bottom 75%",
      scrub: 2,
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.3,
  });
  // skills scroll animation end
  // about begin
  const textEleOfAbout = document.querySelectorAll(
    "#about .text__container > p "
  );
  const aboutImg = document.querySelector("#about .flex__container img");

  gsap.matchMedia().add("(min-width: 988px)", () => {
    // Desktop animation
    const tlDesktop = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tlDesktop.from(textEleOfAbout, { xPercent: -100, opacity: 0, stagger: 0.1 });
    tlDesktop.from(aboutImg, { xPercent:100, opacity: 0, scale: 0 }, 0);
  });

  gsap.matchMedia().add("(max-width: 987px)", () => {
    // Mobile animation
     // Animate each paragraph independently
  textEleOfAbout.forEach((el, i) => {
    gsap.from(el, {
      xPercent: i % 2 === 0 ? -100 : 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  });

  // Animate image separately
  gsap.from(aboutImg, {
    x: 200,
    opacity: 0.5,
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: aboutImg,
      start: "top 90%",
      end: "bottom 80%",
      scrub: true,
    },
  });
  });

  // about end 

  // recent work animation begin 
  const workItems = document.querySelectorAll("#my__work .wrapper");
  
  gsap.matchMedia().add("(min-width: 641px)", () => {
    // Animation for large screens (desktop)
    workItems.forEach((el) => {
      gsap.set(el, { scale: 0.2, opacity: 0 });
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false,
        },
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  });
  
  gsap.matchMedia().add("(max-width: 640px)", () => {
    // Animation for small screens (mobile)
    workItems.forEach((el, i) => {
      let x = i % 2 === 0 ? -100 : 100;
      gsap.set(el, { opacity: 0, xPercent: x });
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "center 70%",
          scrub: true,
          markers: false,
        },
        xPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power1.out",
      });
    });
  });
  // Recent work animation end
});
