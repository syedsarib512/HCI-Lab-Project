let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

toggleBtn.onclick = (e) => {
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

let profile = document.querySelector('.header .flex .profile');
document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
};

let searchForm = document.querySelector('.header .flex .search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    profile.classList.remove('active');
};

let sideBar = document.querySelector('.side-bar');
document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
};
document.querySelector('#close-btn').onclick = () => {
    sideBar.classList.remove('active');
    body.classList.remove('active');
};

window.onscroll = () => {
    profile.classList.remove('active');
    searchForm.classList.remove('active');
    sideBar.classList.remove('active');
    body.classList.remove('active');
}

const translations = {
    en: {
        "title": "about us",
        "header.logo": "Educa.",
        "header.search_placeholder": "search courses...",
        "profile.name": "Syed Sarib",
        "profile.role": "student",
        "profile.view_profile": "view profile",
        "profile.login": "login",
        "profile.register": "register",
        "navbar.home": "home",
        "navbar.about": "about",
        "navbar.courses": "courses",
        "navbar.teachers": "teachers",
        "navbar.contact": "contact us",
        "about.title": "why choose us?",
        "about.description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo? Distinctio expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur quaerat tenetur.",
        "about.courses": "our courses",
        "stats.courses": "+10k",
        "stats.courses_text": "online courses",
        "stats.students": "+40k",
        "stats.students_text": "brilliant students",
        "stats.tutors": "+2k",
        "stats.tutors_text": "expert tutors",
        "stats.placement": "100%",
        "stats.placement_text": "job placement",
        "reviews.heading": "student's reviews",
        "reviews.review_1.text": "This e-learning platform is absolutely fantastic! The courses are well-structured, and the instructors are incredibly knowledgeable. I love how user-friendly the interface is. Highly recommend it to anyone looking to learn something new!",
        "reviews.review_1.name": "Usman Safder",
        "footer.copyright": "copyright @ 2022 by mr. web designer | all rights reserved!"
    },
    ur: {
        "title": "ہمارے بارے میں",
        "header.logo": "ایجوکا.",
        "header.search_placeholder": "کورس تلاش کریں...",
        "profile.name": "سید سارب",
        "profile.role": "طالب علم",
        "profile.view_profile": "پروفائل دیکھیں",
        "profile.login": "لاگ ان کریں",
        "profile.register": "رجسٹر کریں",
        "navbar.home": "صفحہ اول",
        "navbar.about": "ہمارے بارے میں",
        "navbar.courses": "کورسز",
        "navbar.teachers": "اساتذہ",
        "navbar.contact": "ہم سے رابطہ کریں",
        "about.title": "ہمیں کیوں منتخب کریں؟",
        "about.description": "لورم ایپسم ڈولر سیت امیت کونسیٹچور، اڈیپیساٹانگ ایلیٹ۔ یوٹ ڈولورم کوئیسی الو؟ ڈسٹنکٹو ایکسپیڈٹا کوموڈی، نیمو آ کوام ایرر ریپیلنڈس سنٹ، فوگیٹ قیس نونقوام ایم ایونیت سیکوئی اسپیرناتور کوایرات ٹینیٹور.",
        "about.courses": "ہمارے کورسز",
        "stats.courses": "+10k",
        "stats.courses_text": "آن لائن کورسز",
        "stats.students": "+40k",
        "stats.students_text": "عمدہ طلبہ",
        "stats.tutors": "+2k",
        "stats.tutors_text": "ماہر اساتذہ",
        "stats.placement": "100%",
        "stats.placement_text": "ملازمت کا تعین",
        "reviews.heading": "طالب علموں کے جائزے",
        "reviews.review_1.text": "یہ ای لرننگ پلیٹ فارم بالکل لاجواب ہے! کورسز اچھی طرح سے ترتیب دیئے گئے ہیں، اور انسٹرکٹرز انتہائی ماہر ہیں۔ مجھے انٹرفیس کی صارف دوست نوعیت پسند ہے۔ کسی بھی نئے علم حاصل کرنے والے کو اس کی انتہائی سفارش کرتا ہوں!",
        "reviews.review_1.name": "عثمان صفدر",
        "footer.copyright": "کاپی رائٹ @ 2022 بذریعہ مسٹر ویب ڈیزائنر | تمام حقوق محفوظ ہیں!"
    }
};

document.getElementById('language-en').addEventListener('click', () => {
    setLanguage('en');
});

document.getElementById('language-ur').addEventListener('click', () => {
    setLanguage('ur');
});

function setLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}
