window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.background = "#050b15";
        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";
    } else {
        nav.style.background = "rgba(5,10,25,.95)";
        nav.style.boxShadow = "none";
    }
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s";

observer.observe(card);

});
