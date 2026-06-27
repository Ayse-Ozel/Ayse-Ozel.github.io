// ==========================
// Portfolio Ayse Ozel
// ==========================

// Animation des cartes

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card => {

    observer.observe(card);

});

// Bouton retour en haut

const button = document.createElement("button");

button.innerHTML = "↑";

button.id = "topButton";

document.body.appendChild(button);

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        button.style.display = "block";

    }else{

        button.style.display = "none";

    }

});

button.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

