const langEl = document.querySelector(".language-section"); 
const link = langEl.querySelectorAll("a");
const menu1El = document.querySelector('.about-me-link');
const menu2El = document.querySelector('.skills-link');
const menu3El = document.querySelector('.contact-link');
const titleEl = document.querySelector(".title");
const locationTextEl = document.querySelector(".location-text");
const text1El = document.querySelector(".text1");

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.activelang').classList.remove('activelang');
        el.classList.add('activelang');

        const attr = el.getAttribute('language');

        menu1El.textContent = data[attr].menu1;
        menu2El.textContent = data[attr].menu2;
        menu3El.textContent = data[attr].menu3;
        titleEl.textContent = data[attr].title;
        locationTextEl.innerHTML = `<i class="fa-solid fa-globe" style="color: #000000;"></i> ${data[attr].locationText}`;
        text1El.textContent = data[attr].text1;
    })
})

var data = {
    "english": {
        "menu1": "About Me",
        "menu2": "Skills",
        "menu3": "Contact",
        "title": "Thank you for visiting my website!",
        "locationText": "Zviahel, Ukraine",
        "text1": "I'll be happy if you follow me on social media or check out my Github repositories)"
    },
    "ukrainian": {
        "menu1": "Про мене",
        "menu2": "Скіли",
        "menu3": "Контакти",
        "title": "Дякую, що відвідали мій сайт!",
        "locationText": "Звягель, Україна",
        "text1": "Мені буде приємно, якщо ви зайдете на мої соцмережі або поцікавитеся моїми репозиторіями на Github)"
    }
}