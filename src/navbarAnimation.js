gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("#intro").forEach((logoRef) => {
    gsap.fromTo(
    ".logoRef",
      { opacity: 0},
      {
        opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: "#intro",
          start: "top top",
          toggleActions: "play none none reverse"
        },
      }
    );
  });