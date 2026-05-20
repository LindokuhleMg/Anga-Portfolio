// this is for the intro animation
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

// this is for the hero section animation
gsap.from(".hero-content h1", {y:50, opacity:0, duration:1});
gsap.from(".hero-content p", {y:40, opacity:0, delay:0.3});
gsap.from(".btn", {scale:0.9, opacity:0, delay:0.6});

// this is for cards animation in the reel section
gsap.from(".card", {
    scrollTrigger:{
        trigger:"#reel",
        start:"top 80%"
    },
    opacity:0,
    y:60,
    stagger:0.2
});

// this is for the featured films scroll buttons
const scrollRow = document.querySelector(".scroll-row");
const cards = document.querySelectorAll(".card");

const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

let currentIndex = 0;

function scrollToCard(index){
    cards[index].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest"
    });
}

rightBtn.addEventListener("click", () => {
    if(currentIndex < cards.length - 1){
        currentIndex++;
        scrollToCard(currentIndex);
    }
});

leftBtn.addEventListener("click", () => {
    if(currentIndex > 0){
        currentIndex--;
        scrollToCard(currentIndex);
    }
});