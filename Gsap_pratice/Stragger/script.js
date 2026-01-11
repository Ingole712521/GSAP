/** @format */

// Basic Stagger
// gsap.from(".list h1", {
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   delay: 1,
//   stagger: 0.3,
// });

// Center Stagger
// gsap.from(".list h1", {
//   scale: 0,
//   duration: 2,
//   delay: 1,
//   stagger: {
//     each: 0.2,
//     from: "center",
//   },
// });

// Reverse Order

// gsap.from(".list h1 ", {
//   x: 50,
//   opacity: 0,
//     duration: 1,
// //   repeat : -1,
//   stagger: {
//     each: 0.2,
//     from: "end",
//   },
// });

// Random Order
// gsap.from(".list h1", {
//   x: 100,
//   opacity: 0,
//   duration: 1,
//   stagger: {
//     each: 0.4,
//     from: "random",
//   },
// });

// Grid Ripple
// gsap.from(".list h1", {
//   scale: 0.5,
//   duration: 0.8,
//   stagger: {
//     each: 0.5,
//     grid: "auto",
//     from: "center",
//   },
// });

// timeline
const tl = gsap.timeline();
tl.from(".list h1", {
  y: "40",
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
})
.to(".list h1 ", {
  duration: 360,
  duration: 1,
});
