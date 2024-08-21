gsap.to("#heading",{
    opacity : "1",
    // height:"100px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#heading",
        scroller:"body",
        markers : true,
        start: "top -10%",
        end :"top -11%",
        scrub: 0.5
    }
})