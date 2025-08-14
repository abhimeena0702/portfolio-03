document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.set("header img", { yPercent: -150, opacity: 1 });
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
        end: "bottom 110%",
        scrub: 1,
      },
    });
    tlDesktop.from(textEleOfAbout, {
      xPercent: -100,
      opacity: 0,
      stagger: 0.1,
    });
    tlDesktop.from(aboutImg, { xPercent: 100, opacity: 0, scale: 0 }, 0);
  });

  gsap.matchMedia().add("(max-width: 987px)", () => {
    // para animation

    textEleOfAbout.forEach((para) => {
      let split = SplitText.create(para, {
        type: "lines",
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self.lines, {
            // x:(i)=>i%2===0?-50:50,
            autoAlpha: 0.01,
            stagger: {amount:0.5},
            scrollTrigger: {
              trigger: para,
              start: "top 80%",
              end: "bottom 80%",
              toggleActions: "play none none reverse",
            },
          });
        },
      });
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
    workItems.forEach((el, i) => {
      let x = i % 2 === 0 ? -100 : 100;
      gsap.set(el, { opacity: 0, xPercent: x });
      // Animate with toggleActions
      gsap.to(el, {
        xPercent: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse", // onEnter, onLeave, onEnterBack, onLeaveBack
          markers: false,
        },
      });
    });
  });
  // Recent work animation end
});



// form handling start 
gsap.to(".spinner-gsap", {
  rotation: 360,
  repeat: -1,
  ease: "linear",
  duration: 1,
  transformOrigin: "50% 50%",
});
const publicKey = "hK4wvV_-LnKifLW3_";
const serviceID = "service_8ceb21n";
const templateID = "template_ck8iejl";

// Initialize EmailJS
(function () {
  emailjs.init(publicKey);
})();

// Form handling
const form = document.getElementById("contact__form");
const messageBox = document.querySelector(".message");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  messageBox.style.display = "flex";
  emailjs.sendForm(serviceID, templateID, form).then(
    () => {
      messageBox.children[0].style.display = "none";
      messageBox.children[1].textContent =
        "Your message has been sent successfully!";
      form.reset();
      // Fade out on success
      setTimeout(() => {
        gsap.to(messageBox, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            messageBox.style.display = "none";
            messageBox.style.opacity = 1;
          },
        });
      }, 2000);
    },
    (err) => {
      console.error("EmailJS error:", err);
      messageBox.children[0].style.display = "none";
      messageBox.textContent = "Something went wrong. Please try again.";
      // Fade out on failure
      setTimeout(() => {
        gsap.to(messageBox, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            messageBox.style.display = "none";
            messageBox.style.opacity = 1;
          },
        });
      }, 2000);
    }
  );
  messageBox.children[0].style.display = "block";
  messageBox.children[1].textContent = "Please Wait";
});
// form handling end
