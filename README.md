

## 1️⃣ GSAP BASICS (FOUNDATION)

✔ Tween types

- `gsap.to()`
- `gsap.from()`
- `gsap.fromTo()`

✔ Common properties

- `duration`, `delay`
- `ease`
- `repeat`, `repeatDelay`
- `yoyo`
- `paused`

✔ Transform properties

- `x`, `y`, `z`
- `xPercent`, `yPercent`
- `scale`, `scaleX`, `scaleY`
- `rotation`, `rotationX`, `rotationY`
- `skewX`, `skewY`
- `transformOrigin`

✔ Visibility helpers

- `opacity`
- `autoAlpha`

✔ Easing (MUST KNOW)

- `power0` → `power4`
- `expo`
- `elastic`
- `bounce`
- `back`
- `none`

---

## 2️⃣ STAGGER & MULTIPLE ELEMENTS

✔ Stagger basics

- `stagger: 0.1`
- `stagger: { each, from }`

✔ Stagger options

- `from: "start" | "center" | "edges" | "end"`
- `grid`
- `axis`

✔ Utilities

- `gsap.utils.toArray()`

---

## 3️⃣ TIMELINES (CORE GSAP POWER)

✔ Timeline creation

- `gsap.timeline()`
- `defaults`

✔ Timeline controls

- `play()`
- `pause()`
- `reverse()`
- `restart()`
- `progress()`
- `timeScale()`

✔ Position parameters (VERY IMPORTANT)

- `"-=1"`
- `"+=0.5"`
- `"<"`
- `">"`

✔ Nested timelines

- `tl.add()`
- child timelines

✔ Labels

- `tl.addLabel()`
- label positioning

---

## 4️⃣ SCROLLTRIGGER (MASTER SECTION)

✔ Setup

- `ScrollTrigger.create()`
- ScrollTrigger inside tween

✔ Trigger positioning

- `trigger`
- `start`
- `end`

✔ Scroll behavior

- `scrub`
- `pin`
- `anticipatePin`
- `pinSpacing`

✔ Debugging

- `markers`

✔ Toggle actions

- `toggleActions`

✔ ScrollTrigger callbacks

- `onEnter`
- `onLeave`
- `onEnterBack`
- `onLeaveBack`

✔ Timeline + ScrollTrigger

- pinned timelines
- scroll-synced timelines

✔ Refresh & resize

- `invalidateOnRefresh`
- `ScrollTrigger.refresh()`

---

## 5️⃣ ANIMATION CONTROL & STATE

✔ Manual control

- `.kill()`
- `.clear()`
- `.pause()`
- `.resume()`

✔ Tween lifecycle

- `onStart`
- `onUpdate`
- `onComplete`
- `onReverseComplete`

✔ Time manipulation

- `timeScale()`
- `seek()`

---

## 6️⃣ INTERACTIONS (REAL-WORLD USE)

✔ Hover animations

- `mouseenter`
- `mouseleave`

✔ Click animations

- menu open/close
- modal animations

✔ Scroll-based UI

- sticky headers
- reveal animations

✔ Cursor animations

- follow cursor
- magnetic buttons

---

## 7️⃣ PERFORMANCE & PRO TECHNIQUES

✔ GSAP Context (IMPORTANT)

- `gsap.context()`

✔ Quick setters

- `gsap.quickSetter()`

✔ Quick tweens

- `gsap.quickTo()`

✔ Will-change awareness

- transform-based animations only

---

## 8️⃣ RESPONSIVE GSAP

✔ Media queries

- `ScrollTrigger.matchMedia()`

✔ Device-specific animations

- desktop vs mobile

✔ Resize handling

- refresh logic

---

## 9️⃣ GSAP UTILITIES (SECRET WEAPONS)

✔ Math utilities

- `gsap.utils.mapRange()`
- `gsap.utils.clamp()`
- `gsap.utils.interpolate()`
- `gsap.utils.random()`

✔ Array helpers

- `wrap()`
- `snap()`

---

## 🔟 SVG ANIMATION (OPTIONAL BUT POWERFUL)

✔ SVG basics

- `drawSVG` _(plugin)_
- `strokeDasharray`

✔ Transform SVGs

- `svgOrigin`

---

## 1️⃣1️⃣ PLUGINS YOU SHOULD KNOW

✔ Core plugins

- ScrollTrigger
- Draggable _(if needed)_
- MotionPathPlugin

✔ Bonus

- Flip Plugin _(layout animations)_

---

## 1️⃣2️⃣ MINI PROJECTS (MANDATORY)

✔ Project 1

- Page load animation
- staggered text
- timeline-based hero section

✔ Project 2

- Scroll-pinned section
- scrubbed timeline
- image + text storytelling

---

## 🛑 FINISH LINE (YOU ARE DONE WHEN)

✔ You animate without CSS keyframes
✔ You think in timelines
✔ You debug scroll animations confidently
✔ You can recreate award-site animations

---

## ⏳ SUGGESTED FLOW TONIGHT

- **2 hrs** → Basics + Timelines
- **2 hrs** → ScrollTrigger
- **2 hrs** → Advanced + Utilities
- **2 hrs** → Projects

---
