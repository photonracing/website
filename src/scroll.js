gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.slide').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: "bottom top",
    pin: true,
    pinSpacing: false,
    markers: true,
  });
});