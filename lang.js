const langEl = document.querySelector(".language-section"); 
const link = langEl.querySelectorAll("a");
const titleEl = document.querySelector(".title");
const locationTextEl = document.querySelector(".location-text");
const text1El = document.querySelector(".text1");
const downloadTextEl = document.querySelector(".download-text");
const skillsTextEl = document.querySelector(".skills-text");
const text2El = document.querySelector(".text2");
const text3El = document.querySelector(".text3");

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.activelang').classList.remove('activelang');
        el.classList.add('activelang');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        locationTextEl.innerHTML = `<i class="fa-solid fa-globe" style="color: #000000;"></i> ${data[attr].locationText}`;
        text1El.textContent = data[attr].text1;
        downloadTextEl.textContent = data[attr].downloadText;
        skillsTextEl.textContent = data[attr].skillsText;
        text2El.textContent = data[attr].text2;
        text3El.textContent = data[attr].text3;
    })
})

var data = {
    "english": {
        "title": "Hi, I am Mykyta, Junior Front-End Developer",
        "locationText": "Zviahel, Ukraine",
        "text1": "I am a student who wants to connect his life with Front-End or Full-Stack development. Currently, I have no practical experience, but I want to gain it, so EPAM's Front-End Development programme is what I need.",
        "downloadText": "Download CV",
        "skillsText": "Skills",
        "text2": "I am currently trying to gain knowledge of React. I also have basic skills in developing web applications on Spring Boot, as Java is the main programming language at the university. It helped me a lot to understand HTML and CSS. I also studied HTML/CSS and JavaScript in a separate discipline, so I have skills in these technologies (git of laboratory works).",
        "text3": "In my free time, I am engaged in self-study, completing the Meta Front-End Developer course, and also learning more about Full-Stack development on the Codecademy website."
    },
    "ukrainian": {
        "title": "Привіт, мене звати Микита, я Junior Front-End розробник",
        "locationText": "Звягель, Україна",
        "text1": "Я студент, який хоче пов'язати своє життя з Front-End або Full-Stack розробкою. Наразі я не маю практичного досвіду, але хочу його отримати, тому програма Front-End Development від EPAM - це те, що мені потрібно.",
        "downloadText": "Завантажити CV",
        "skillsText": "Скіли",
        "text2": "Наразі я намагаюся отримати знання про React. Я також маю базові навички розробки веб-додатків на Spring Boot, оскільки Java є основною мовою програмування в університеті. Мені це дуже допомогло для розуміння HTML та CSS. Також я вивчав HTML/CSS та JavaScript на окремій дисципліні, тому маю навички роботи з цими технологіями.",
        "text3": "У вільний час займаюся самоосвітою, проходжу курс Meta Front-End Developer, а також дізнаюся більше про Full-Stack розробку на сайті Codecademy."
    }
}