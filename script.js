let tl = gsap.timeline({
    scrollTrigger : {
    trigger : "#home",
    start : "top top",
    scrub : 5,
    markers : true,
    pin : true,
    }
});

tl.from("#centerimg",{
    x:400,
    stagger : .1,
    duration:1,
    ease : Power1,
})

tl.to("#circle #btm img",{
    scale: 1,
    rotate : "-180deg",
    stagger : .1,
    duration:1,
    ease : Power1,
}, "center")
tl.to("#circle #top img",{
    scale: 1,
    stagger : .1,
    duration:1,
    ease : Power1,
}, "center")

tl.to("#cimg img",{
    scale: 0,
    stagger : .1,
    duration:1,
    ease : Power1,
}, "center")
tl.to("#centerimg h4",{
    opacity: 0,
    stagger : .1,
    duration:1,
    ease : Power1,
}, "center")
tl.to("#circle",{
    scale: .2,
    stagger : .2,
    ease : Power1,
}, "center")

tl.to("#overlay>h1",{
    y: 400,
    stagger : .1,
    duration:1,
    ease: Power1,
},"center")

tl.to("#pinkball",{
    y: "50%",
    stagger : .1,
    duration:1,
    ease: Power1,
}, "center")

tl.to("#smcircle",{
    scale: 0,
    stagger : .1,
    duration:1,
    ease : Power1,
}, "center2")
tl.to("#circle",{
    scale: 0,
    stagger : .1,
    duration:1,
    ease : Power1,
}, "center2")