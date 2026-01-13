/** @format */

const t1 = gsap.timeline({
  defaults: {
    delay: 2,
    duration: 1,
    ease: "power2.out",
  },
});

t1.to(".box1", { x: 100 }).to(".box2", { y: 100 }, "-=1");
