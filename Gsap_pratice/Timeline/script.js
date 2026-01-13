/** @format */

const t1 = gsap.timeline({
  defaults: {
    delay: 0.5  ,
    duration: 1,
    ease: "power2.out",
    // repeat: -1,
  },
});

// Overlap
// t1.to(".box1", { x: 100 }).to(".box2", { y: 100 }, "-=1");

// Start Togeher
// t1.to(".box1", { x: 100 }).to(".box2", { x: "200" }, "<");


