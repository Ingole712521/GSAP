<!-- @format -->

# Locomotive Scroll Attributes (Complete Reference)

## Overview

Locomotive Scroll is a smooth scrolling library that detects elements in the viewport and applies smooth scrolling effects. It works with both native scroll and smooth scroll.

## Installation & Setup

```html
<!-- Include Locomotive Scroll CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css"
/>

<!-- Include Locomotive Scroll JS -->
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
```

## Basic HTML Structure

```html
<div data-scroll-container>
  <!-- Your content here -->
</div>
```

## Core Attributes

### 1. `data-scroll-container`

**Required** - The main container that wraps all scrollable content.

```html
<div data-scroll-container>
  <!-- All scrollable content goes here -->
</div>
```

### 2. `data-scroll-section`

Defines a scrollable section. Useful for full-page scrolling layouts.

```html
<div data-scroll-section>
  <h1>Section 1</h1>
</div>

<div data-scroll-section>
  <h1>Section 2</h1>
</div>
```

### 3. `data-scroll`

Enables smooth scrolling behavior on an element.

```html
<div data-scroll>
  <!-- This element will have smooth scroll applied -->
</div>
```

### 4. `data-scroll-position`

Sets the vertical position of an element during scroll.

```html
<div data-scroll data-scroll-position="top">
  <!-- Element positioned at top -->
</div>

<!-- Options: top, bottom, center -->
```

### 5. `data-scroll-speed`

Controls the parallax scrolling speed.

```html
<div data-scroll data-scroll-speed="1">
  <!-- Normal speed -->
</div>

<div data-scroll data-scroll-speed="2">
  <!-- Moves 2x faster than default scroll -->
</div>

<div data-scroll data-scroll-speed="-1">
  <!-- Moves in opposite direction -->
</div>
```

### 6. `data-scroll-direction`

Defines the direction of the parallax effect.

```html
<div data-scroll data-scroll-direction="vertical">
  <!-- Vertical parallax (default) -->
</div>

<div data-scroll data-scroll-direction="horizontal">
  <!-- Horizontal parallax -->
</div>
```

### 7. `data-scroll-sticky`

Creates a sticky element that stays in viewport during scroll.

```html
<div data-scroll data-scroll-sticky>
  <!-- Sticky element -->
</div>

<!-- With target -->
<div data-scroll data-scroll-sticky data-scroll-target="#sticky-target">
  <!-- Sticks until reaching target -->
</div>
```

### 8. `data-scroll-target`

Specifies a target element for various effects.

```html
<div id="target"></div>

<div data-scroll data-scroll-target="#target">
  <!-- Element related to target -->
</div>
```

### 9. `data-scroll-offset`

Sets offset values for scroll triggers.

```html
<div data-scroll data-scroll-offset="100">
  <!-- 100px offset -->
</div>

<!-- Multiple values -->
<div data-scroll data-scroll-offset="100, 50%">
  <!-- 100px top, 50% bottom -->
</div>
```

### 10. `data-scroll-repeat`

Controls whether effects repeat when element re-enters viewport.

```html
<div data-scroll data-scroll-repeat="true">
  <!-- Effect repeats -->
</div>

<div data-scroll data-scroll-repeat="false">
  <!-- Effect triggers once (default) -->
</div>
```

### 11. `data-scroll-call`

Triggers custom events when element enters viewport.

```html
<div data-scroll data-scroll-call="myCustomEvent">
  <!-- Triggers 'myCustomEvent' when visible -->
</div>
```

### 12. `data-scroll-class`

Adds/removes CSS classes during scroll.

```html
<div data-scroll data-scroll-class="is-active">
  <!-- Adds 'is-active' class when visible -->
</div>
```

### 13. `data-scroll-id`

Assigns an ID to an element for programmatic access.

```html
<div data-scroll data-scroll-id="unique-element">
  <!-- Accessible via scroll.getById('unique-element') -->
</div>
```

## Animation & Transform Attributes

### 14. `data-scroll-opacity`

Controls opacity based on scroll position.

```html
<div data-scroll data-scroll-opacity>
  <!-- Default: 0 to 1 -->
</div>

<!-- Custom values -->
<div data-scroll data-scroll-opacity="0, 1">
  <!-- From 0 to 1 opacity -->
</div>
```

### 15. `data-scroll-scale`

Applies scale transformation during scroll.

```html
<div data-scroll data-scroll-scale>
  <!-- Default: 1 to 2 -->
</div>

<!-- Custom values -->
<div data-scroll data-scroll-scale="1, 0.5">
  <!-- From scale 1 to 0.5 -->
</div>
```

### 16. `data-scroll-rotate`

Applies rotation during scroll.

```html
<div data-scroll data-scroll-rotate>
  <!-- Default rotation -->
</div>

<!-- Custom values -->
<div data-scroll data-scroll-rotate="0, 360">
  <!-- Rotates 360 degrees -->
</div>
```

### 17. `data-scroll-skew`

Applies skew transformation.

```html
<div data-scroll data-scroll-skew>
  <!-- Default skew -->
</div>
```

## Advanced Attributes

### 18. `data-scroll-delay`

Adds delay to scroll effects.

```html
<div data-scroll data-scroll-delay="0.5">
  <!-- 0.5 second delay -->
</div>
```

### 19. `data-scroll-duration`

Controls the duration of scroll effects.

```html
<div data-scroll data-scroll-duration="2">
  <!-- Effect lasts 2 seconds of scroll time -->
</div>
```

### 20. `data-scroll-css-progress`

Creates CSS custom property with scroll progress.

```html
<div data-scroll data-scroll-css-progress="--scroll-progress">
  <!-- Creates --scroll-progress CSS variable -->
</div>
```

### 21. `data-scroll-ignore`

Ignores the element for scroll calculations.

```html
<div data-scroll-ignore>
  <!-- Excluded from Locomotive calculations -->
</div>
```

### 22. `data-scroll-lag`

Adds lag/smoothness to scroll effects.

```html
<div data-scroll data-scroll-lag="0.1">
  <!-- 0.1 second lag effect -->
</div>
```

### 23. `data-scroll-persistent`

Keeps element in DOM even when out of view (for smooth transitions).

```html
<div data-scroll data-scroll-persistent="true">
  <!-- Element persists in DOM -->
</div>
```

## Viewport Detection Attributes

### 24. `data-scroll-inview`

Detects when element enters/exits viewport.

```html
<div data-scroll data-scroll-inview>
  <!-- Triggers when in view -->
</div>

<!-- With custom classes -->
<div data-scroll data-scroll-inview="view-in, view-out">
  <!-- Adds 'view-in' when entering, 'view-out' when exiting -->
</div>
```

### 25. `data-scroll-progress`

Tracks scroll progress through element.

```html
<div data-scroll data-scroll-progress>
  <!-- Tracks 0 to 1 progress -->
</div>

<!-- With custom CSS variable -->
<div data-scroll data-scroll-progress="--my-progress">
  <!-- Creates --my-progress variable -->
</div>
```

## Group Animations

### 26. `data-scroll-group`

Groups elements for synchronized animations.

```html
<div data-scroll data-scroll-group="my-group">
  <!-- Part of 'my-group' -->
</div>

<div data-scroll data-scroll-group="my-group">
  <!-- Synchronized with other group members -->
</div>
```

## JavaScript Initialization

```javascript
// Basic initialization
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// With all options
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: "vertical",
  multiplier: 1,
  firefoxMultiplier: 50,
  touchMultiplier: 2,
  scrollFromAnywhere: false,
  gestureDirection: "vertical",
  smartphone: {
    smooth: false,
    direction: "vertical",
    breakpoint: 0,
  },
  tablet: {
    smooth: false,
    direction: "vertical",
    breakpoint: 0,
  },
  reloadOnContextChange: true,
  lerp: 0.1,
  class: "is-inview",
  initClass: "has-scroll-init",
  scrollingClass: "has-scroll-scrolling",
  directionClass: "has-scroll-direction-",
  speed: 1,
  getDirection: true,
  getSpeed: false,
  offset: ["30%", 0],
});

// Update on DOM changes
scroll.update();

// Destroy instance
scroll.destroy();
```

## Event Handling

```javascript
// Scroll events
scroll.on("scroll", (args) => {
  console.log(args.scroll.y);
  console.log(args.limit.y);
  console.log(args.currentElements);
});

// Call events
scroll.on("call", (value, way, obj) => {
  if (value === "myCustomEvent") {
    console.log("Custom event triggered:", way);
  }
});
```

## CSS Classes Added by Locomotive

- `.is-inview` - When element is in viewport
- `.has-scroll-init` - After initialization
- `.has-scroll-scrolling` - During scrolling
- `.has-scroll-direction-[x/y]` - Current scroll direction

## Performance Tips

1. **Use `data-scroll-ignore`** on static elements
2. **Limit parallax effects** on mobile devices
3. **Use `data-scroll-persistent`** sparingly
4. **Destroy instance** when not needed: `scroll.destroy()`

## Common Patterns

### Fullpage Sections

```html
<div data-scroll-container>
  <section data-scroll-section>
    <h1 data-scroll data-scroll-speed="2">Section 1</h1>
  </section>
  <section data-scroll-section>
    <h1 data-scroll data-scroll-speed="-1">Section 2</h1>
  </section>
</div>
```

### Sticky Elements

```html
<div data-scroll-container>
  <div data-scroll data-scroll-sticky data-scroll-target="#target">
    Sticky Content
  </div>
  <div style="height: 200vh"></div>
  <div id="target">Target</div>
</div>
```

### Scroll-triggered Animations

```html
<div data-scroll-container>
  <div data-scroll data-scroll-class="animate" data-scroll-repeat="true">
    Animate me!
  </div>
</div>

<style>
  .animate {
    animation: fadeIn 1s forwards;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Notes

1. Always include `data-scroll-container` as the main wrapper
2. Test performance on mobile devices
3. Use CSS transforms for better performance
4. Consider using `will-change` CSS property for complex animations

## Troubleshooting

**Issue**: Effects not working
**Solution**: Ensure `data-scroll-container` wraps all content

**Issue**: Jumpy scrolling on mobile
**Solution**: Disable smooth scroll on mobile:

```javascript
smooth: window.innerWidth > 768;
```

**Issue**: Elements flashing
**Solution**: Add CSS:

```css
html.has-scroll-smooth {
  overflow: hidden;
}
```
