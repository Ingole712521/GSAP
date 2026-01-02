gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-section",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    markers: true,
  },
});

t1.to(".image-wrapper img", {
  y: "0%",
  scale: 1.2,
  duration: 1,
});
