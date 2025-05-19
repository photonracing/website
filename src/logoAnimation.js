gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".fulllogo").forEach((img) => {
    gsap.fromTo(
      img,
      { scale: 1.5 },
      {
        scale: 0.1,
        scrollTrigger: {
          trigger: ".scroll-images-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  });