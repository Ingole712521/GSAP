/** @format */

const t1 = gsap.timeline({
  defaults: {
    delay: 0.5,
    duration: 1,
    ease: "power2.out",
    // repeat: -1,
  },
});

// Label
// t1.addLabel("intro");
// t1.to([".box1", ".box2"], { x: 100 }, "intro");

// Overlap
// t1.to(".box1", { x: 100 }).to(".box2", { y: 100 }, "-=1");

// Start Togeher
// t1.to(".box1", { x: 100 }).to(".box2", { x: "200" }, "<");

const child = gsap.timeline();

child.from(".timeline", { 
  y: 30,
  opacity: 0,
  stagger: 0.2,
  delay: 1,
  repeat: 0,
});

tl.add(child, "-=0.5");
