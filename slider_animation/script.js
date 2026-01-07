
function sliderAnimation() {


    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to(".mark", {
                transform: "translateX(-200%)",
                duration: 4,
                repeat: -1,
                ease: "none",


            })


            gsap.to(".mark img ", {
                rotate: 180,

            })
        } else {
            gsap.to(".mark", {
                transform: "translateX(00%)",
                ease: "none",
                duration: 4,
                repeat: -1,

            })

            gsap.to(".mark img ", {
                rotate: 0,

            })
        }
    })

}






sliderAnimation();



