function timelineOne(){
    let tl = gsap.timeline({
        scrollTrigger : {
        trigger : "#home",
        start : "top top",
        scrub : 5,
        pin : true,
        end: "bottom -400%"
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
        duration:3,
        ease : Power1,
        rotate: -200,
    }, "center")
    tl.to("#circle #top img",{
        scale: 1,
        stagger : .1,
        duration:3,
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
        duration:0.1,
        ease : Power1,
    }, "center")
    tl.to("#home #nav, #home #btm-nav",{
        opacity: 0,
        stagger : .2,
        duration:0.1,
        ease : Power1,
    }, "center")
    tl.to("#home #nav-w, #home #btm-nav-w img",{
        opacity: 1,
        duration:0.7,
        ease : Power1,
    }, "center")

    tl.to("#circle",{
        scale: .2,
        stagger : .2,
        duration:2,
        ease : Power1,
    }, "center")
    
    tl.to("#overlay>h1#gl",{
        bottom : "-50%",
        stagger : .1,
        duration:1,
        ease: Power1,
    },"center")
    
    tl.to("#pinkball",{
        scale: 10,
        top: "50%",
        stagger : .1,
        duration:1.1,
        ease: Power1,
    }, "center")
    
    tl.to("#pinkball",{
        opacity: 0,
        stagger : .1,
        duration:1,
        ease: Power1,
    }, "center2")
    
    tl.to("#smcircle",{
        scale: 0,
        duration:1.2,
        ease : Power1,
    }, "center2")
    tl.to("#circle",{
        scale: 0,
        duration:1.2,
        ease : Power1,
    }, "center2")
    tl.to("#overlay>h1#pf",{
        bottom : "5%",
        duration:1,
        rotate: 0,
        ease: Power1,
    },"center2")
    
    tl.to("#pinkbox",{
        top: "-50%",
        duration:6,
        rotate: 0,
        ease: Power1,
    },)
    
    tl.to("#pinkbox",{
        top: "-50%",
        duration:1.5,
        rotate: 0,
        ease: Power1,
    },)
    
}

function timelineTwo(){
    let tl2 = gsap.timeline({
        scrollTrigger : {
            trigger : "#page2",
            start : "top top",
            scrub : 5,
            pin : true,
            end : "bottom -800%"
        }
    })

    tl2.to("#stop .circle",{
        scale: 1,
        top: "50%",
        stagger: .3,
        duration:3,
        ease : Power1,
    })
    tl2.to("#stop .circle",{
        scale: 1,
        left: "50%",
        duration:1,
        ease : Power1,
    })
    tl2.to("#stop .pink",{
        scale: 12,
        left: "50%",
        duration:1,
        ease : Power1,
    },"pink")
    tl2.to("#page2 #nav-w-btm",{
        opacity:1,
        duration:1,
        ease : Power1,
    },"pink")
    tl2.to("#stop .pink",{
        background: "linear-gradient(to right, #D5A7B4, #B4AAD5)",
        ease : Power1,
    })
    tl2.to("#stop h1",{
        left: "-150%",
        duration: 10,
        ease : Power1,
    }, "op")
    tl2.to(".one",{
        opacity: 0,
        duration: 2,
        ease : Power1,
    }, "op")
    tl2.to(".two",{
        opacity: 1,
        delay : 2,
        duration: 2,
        ease : Power1,
    }, "op")
}

timelineOne();
timelineTwo();