// INTRO ANIMATION
gsap.to(".intro h1", {
    opacity:1,
    duration:1.5,
    y:0
});

gsap.to(".intro", {
    delay:2,
    opacity:0,
    duration:1,
    onComplete:()=>document.querySelector(".intro").remove()
});

// HERO TEXT
gsap.from(".hero-content h1", {y:50, opacity:0, duration:1});
gsap.from(".hero-content p", {y:40, opacity:0, delay:0.3});
gsap.from(".btn", {scale:0.9, opacity:0, delay:0.6});

// CARDS
gsap.from(".card", {
    scrollTrigger:{
        trigger:"#reel",
        start:"top 80%"
    },
    opacity:0,
    y:60,
    stagger:0.2
});

// FEATURED FILMS SCROLL BUTTONS

const scrollRow = document.querySelector(".scroll-row");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

rightBtn.addEventListener("click", () => {
    scrollRow.scrollBy({
        left:320,
        behavior:"smooth"
    });
});

leftBtn.addEventListener("click", () => {
    scrollRow.scrollBy({
        left:-320,
        behavior:"smooth"
    });
});