gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('#intro').forEach(topbarr => {
    ScrollTrigger.create({
        trigger: topbarr,
        start: 'top top',
        animation: gsap.to("#intro", { position:"fixed", paused:"true"} ),
        toggleAction: "restart none none reverse",
        markers: true,
        pin: true
    })
});