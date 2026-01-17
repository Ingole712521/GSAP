<!-- @format -->

Great — this is **professional-level GSAP control**.
This is what lets you **drive animations with logic**, not just let them play.

I’ll explain in this order (very important):

1. Big picture mental model (analogy)
2. Manual controls
3. Tween lifecycle callbacks
4. Time manipulation
5. Practice questions
6. Answers + explanations

---

# 🎮 GSAP ANIMATION CONTROL & STATE

---

## 1️⃣ BIG PICTURE (ANALOGY)

### 🎮 Video Player Analogy

Your animation is a **video**.

- `.play()` → play video
- `.pause()` → pause
- `.seek()` → jump to timestamp
- `.timeScale()` → playback speed
- `.kill()` → delete video
- Callbacks → video events

GSAP lets you **control time itself**.

---

## 2️⃣ MANUAL CONTROL METHODS

---

### ▶️ `.pause()`

Stops animation at current frame.

```js
tween.pause();
```

🧠 Use case:

- Pause on hover
- Pause on scroll stop

---

### ▶️ `.resume()`

Continues from paused position.

```js
tween.resume();
```

---

### ▶️ `.kill()`

❌ Destroys animation completely.

```js
tween.kill();
```

🧠 Use case:

- Route change (React / Vue)
- Prevent memory leaks

⚠️ After `.kill()`, animation is **gone forever**.

---

### ▶️ `.clear()` (TIMELINES ONLY)

Removes all tweens inside timeline.

```js
tl.clear();
```

🧠 Timeline exists, but is empty.

---

## 3️⃣ TWEEN LIFECYCLE CALLBACKS

Callbacks = **hooks into animation life**

---

### 🟢 `onStart`

Runs once at animation start.

```js
gsap.to(".box", {
  x: 100,
  onStart: () => console.log("Started"),
});
```

---

### 🔵 `onUpdate`

Runs **every frame**.

```js
gsap.to(".box", {
  x: 300,
  onUpdate: () => console.log("Updating"),
});
```

🧠 Use carefully — runs ~60 times/sec.

---

### 🟣 `onComplete`

Runs when animation finishes.

```js
gsap.to(".box", {
  x: 100,
  onComplete: () => console.log("Done"),
});
```

---

### 🔴 `onReverseComplete`

Runs when reversed animation finishes.

```js
const tween = gsap.to(".box", { x: 100 });

tween.reverse();

tween.eventCallback("onReverseComplete", () => {
  console.log("Reverse done");
});
```

---

## 4️⃣ TIME MANIPULATION (POWER TOOLS)

---

### ⏩ `timeScale()`

Changes speed.

```js
tween.timeScale(2); // 2x faster
tween.timeScale(0.5); // slower
```

🧠 Use case:

- Fast forward on click
- Slow motion effect

---

### ⏭ `seek()`

Jump to specific time.

```js
tl.seek(1.5);
```

🧠 Jumps timeline to 1.5 seconds instantly.

---

### 🔢 `progress()`

Jump using percentage.

```js
tl.progress(0.5);
```

🧠 Goes to 50% of timeline.

---

## 5️⃣ PRACTICE QUESTIONS (TRY FIRST)

---

### 🟢 Q1 — Pause on Hover

Pause animation when mouse enters, resume on leave.

---

### 🟡 Q2 — Kill Animation

Stop animation forever on button click.

---

### 🟠 Q3 — onComplete Trigger

Log `"Animation finished"` when done.

---

### 🔵 Q4 — Reverse Complete

Log when animation finishes reversing.

---

### 🔴 Q5 — Speed Control

Button click doubles animation speed.

---

### 🟣 Q6 — Seek Control

Jump animation to middle when button clicked.

---

## 6️⃣ ANSWERS + EXPLANATION

---

### 🟢 A1 — Pause on Hover

```js
const tween = gsap.to(".box", { x: 300, duration: 3 });

const box = document.querySelector(".box");

box.addEventListener("mouseenter", () => tween.pause());
box.addEventListener("mouseleave", () => tween.resume());
```

---

### 🟡 A2 — Kill Animation

```js
const tween = gsap.to(".box", { x: 300 });

document.querySelector("button").addEventListener("click", () => {
  tween.kill();
});
```

🧠 Cannot restart after kill.

---

### 🟠 A3 — onComplete

```js
gsap.to(".box", {
  x: 200,
  onComplete: () => console.log("Animation finished"),
});
```

---

### 🔵 A4 — Reverse Complete

```js
const tween = gsap.to(".box", { x: 200 });

tween.reverse();

tween.eventCallback("onReverseComplete", () => {
  console.log("Reverse finished");
});
```

---

### 🔴 A5 — Speed Control

```js
const tween = gsap.to(".box", { x: 300, duration: 3 });

document.querySelector(".speed").addEventListener("click", () => {
  tween.timeScale(2);
});
```

---

### 🟣 A6 — Seek to Middle

```js
const tl = gsap.timeline();

tl.to(".box", { x: 200 }).to(".box", { y: 100 });

document.querySelector(".jump").addEventListener("click", () => {
  tl.seek(tl.duration() / 2);
});
```

---

## 🚨 COMMON MISTAKES (REMEMBER)

❌ Using `onUpdate` for heavy logic
❌ Killing when pause is enough
❌ Forgetting to store tween in variable
❌ Not cleaning up in SPAs

---

## 🔥 YOU NOW CONTROL TIME

✔ Start / stop / destroy
✔ React to animation states
✔ Control speed & position
✔ Build interactive UIs

---

### ⏭ NEXT STEP

Reply with:

- **“ScrollTrigger control next”**
- **“GSAP utils deep dive”**
- **“Real-world interaction project”**

You’re officially past beginner level 💪
