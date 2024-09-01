


let tl = gsap.timeline()

tl.from("#opt a",{
    y : -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
})

gsap.from("#heading h1",{
    opacity : "0",
    // height:"100px",
    duration: 0.5,
    delay: 0.3,
    y: 100,
    stagger: 0.6
    // scrollTrigger:{
    //     trigger:"#heading",
    //     scroller:"body",
    //     markers : true,
    //     start: "top -10%",
    //     end :"top -11%",
    //     scrub: 0.5
    // }
})

gsap.from("#head5",{
    opacity : "0",
    // height:"100px",
    duration: 0.5,
    delay: 0.3,
    y: 100,
    // stagger: 0.6
    scrollTrigger:{
        trigger:"#head5",
        scroller:"body",
        start: "top 60%",
        end :"top 40%",
    }
})


gsap.from("#head2",{
    opacity : "0",
    // height:"100px",
    duration: 0.5,
    delay: 0.3,
    y: 100,
    // stagger: 0.6
    scrollTrigger:{
        trigger:"#head2",
        scroller:"body",
        start: "top 60%",
        end :"top 40%",
    }
})


gsap.from("#head3",{
    opacity : "0",
    // height:"100px",
    duration: 0.5,
    delay: 0.3,
    y: 100,
    // stagger: 0.6
    scrollTrigger:{
        trigger:"#head3",
        scroller:"body",
        start: "top 80%",
        end :"top 40%",
    }
})

gsap.from("#head6",{
    opacity : "0",
    // height:"100px",
    duration: 0.5,
    delay: 0.3,
    y: 100,
    // stagger: 0.6
    scrollTrigger:{
        trigger:"#head6",
        scroller:"body",
        start: "top 70%",
        end :"top 40%",
    }
})

gsap.from("#head7",{
    opacity : "0",
    // height:"100px",
    duration: 0.5,
    delay: 0.3,
    y: 100,
    // stagger: 0.6
    scrollTrigger:{
        trigger:"#head7",
        scroller:"body",

        start: "top 90%",
        end :"top 40%",
    }
})


gsap.from("#nav img",{
    opacity: 0,
    rotateY: "180deg",
    duration: 2
})

gsap.to("#page1",{
    opacity: 0,
    duration: 1.5,
    backgroundColor: "#030303",
    zindex: "99",
    scrollTrigger: {
        trigger: "#page1",
        scroller : "body",
        start: "top -10%",
        end: "top -80%",
        scrub: 1
    }
})

gsap.to("#nav",{
    backgroundColor: "transparent",
    zindex: "99",
    scrollTrigger: {
        trigger: "#nav",
        scroller : "body",
        start: "top -10%",
        end: "top -80%",
        scrub: 1
    }
})

gsap.from("#subpage2 .card",{
    opacity: 0,
    y: 90,
    duration: 1.2,
    scrollTrigger: {
        trigger: "#subpage2 .card",
        scroller : "body",
        // markers:true,
        start: "top 70%",
        end: "top 50%",
        // scrub: 2
    }
})

gsap.from("#subpage3 #describe1",{
    opacity: 0,
    x: 80,
    duration: 1.2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#subpage3 #describe1",
        scroller : "body",
        // markers: true,
        start: "top 75%",
        end: "top 40%",
    }
})

gsap.from("#subpage3 #describe2",{
    opacity: 0,
    x: -80,
    duration: 1.2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#subpage3 #describe2",
        scroller : "body",
        // markers: true,
        start: "top 75%",
        end: "top 40%",
    }
})

gsap.from("#subpage3 #describe3",{
    opacity: 0,
    x: 80,
    duration: 1.2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#subpage3 #describe3",
        scroller : "body",
        // markers: true,
        start: "top 75%",
        end: "top 40%",
    }
})

gsap.from("#subpage3 #describe4",{
    opacity: 0,
    x: -80,
    duration: 1.2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#subpage3 #describe4",
        scroller : "body",
        // markers: true,
        start: "top 75%",
        end: "top 40%",
    }
})

gsap.from("#subpage3 #describe5",{
    opacity: 0,
    x: 80,
    duration: 1.2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#subpage3 #describe5",
        scroller : "body",
        // markers: true,
        start: "top 75%",
        end: "top 40%",

    }
})

gsap.from("#subpage3 #describe6",{
    opacity: 0,
    x: -80,
    duration: 1.2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#subpage3 #describe6",
        scroller : "body",
        // markers: true,
        start: "top 75%",
        end: "top 40%",

    }
})

gsap.from("#page5 .map",{
    opacity: 0,
    y: 60,
    duration: 1.2,
    scrollTrigger: {
        trigger: "#page5 .map",
        scroller : "body",
        start: "top 70%",
        end: "top 50%",
    }
})

gsap.from("#subpage6 #box",{
    opacity: 0,
    y: 60,
    duration: 1.2,
    scrollTrigger: {
        trigger: "#subpage6 #box",
        scroller : "body",
        start: "top 70%",
        end: "top 50%",
        // scrub: 2
    }
})
