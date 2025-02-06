let svgElement = document.querySelector('.svg-large-img');
let clickCount = 0
let HeartScaleBeat = 1.025
let HeartScale = 1.0
let HeartGray = 1.0
let textopacity = 1.0

function lovePhrase(id) {
    switch (id) {
        case 1:
            return "Я люблю тебя"; // Russian
        case 2:
            return "I love you"; // English
        case 3:
            return "Je t'aime"; // French
        case 4:
            return "Te quiero"; // Spanish
        case 5:
            return "Ti amo"; // Italian
        case 6:
            return "Ich liebe dich"; // German
        case 7:
            return "Eu te amo"; // Portuguese
        case 8:
            return "Te iubesc"; // Romanian
        case 9:
            return "Aishiteru"; // Japanese
        case 10:
            return "Saranghae"; // Korean
        case 11:
            return "Wo ai ni"; // Chinese (Mandarin)
        case 12:
            return "Mahal kita"; // Filipino
        case 13:
            return "Saya cinta padamu"; // Malay
        case 14:
            return "Jeg elsker dig"; // Danish
        case 15:
            return "Jeg elsker deg"; // Norwegian
        case 16:
            return "Amo-te"; // Galician
        case 17:
            return "Ik hou van jou"; // Dutch
        case 18:
            return "Kocham cię"; // Polish
        case 19:
            return "Eu te amo muito"; // Portuguese (Brazil)
        case 20:
            return "Tôi yêu bạn"; // Vietnamese
        case 21:
            return "Lubię cię"; // Polish (informal)
        case 22:
            return "Bhāvāni ki premī chu"; // Hindi
        case 23:
            return "Kimi wo ai shiteru"; // Japanese (alternative)
        case 24:
            return "Men te xhobha"; // Xhosa
        case 25:
            return "Walang makakapantay sa aking pagmamahal"; // Filipino (long version)
        case 26:
            return "Nashim ishq karte hain"; // Urdu
        case 27:
            return "Kocham cię bardzo"; // Polish (intense)
        case 28:
            return "Mi amas vin"; // Esperanto
        case 29:
            return "Eres mi amor"; // Spanish (informal)
        case 30:
            return "Szeretlek"; // Hungarian
        case 31:
            return "Te espero"; // Spanish (informal, poetic)
        case 32:
            return "Wita ku" // Belarusian
        case 33:
            return "Ég elska tig"; // Icelandic
        case 34:
            return "Ndinokuda"; // Shona
        case 35:
            return "Saya sangat mencintaimu"; // Malay (strong version)
        case 36:
            return "Håkjem med deg"; // Norwegian (alternative)
        case 37:
            return "Eshqim seninle"; // Turkish
        case 38:
            return "Nina nkonda"; // Bemba
        case 39:
            return "Ek mohamet"; // Afrikaans
        case 40:
            return "Amo ya"; // Swahili
        case 41:
            return "Des te amou"; // Portuguese (regional)
        case 42:
            return "Të dua"; // Albanian
        case 43:
            return "Szeretlek téged"; // Hungarian (longer)
        case 44:
            return "Tote voyo se"; // Hindi (alternative)
        case 45:
            return "Mahal kita ng sobra"; // Filipino (emphatic)
        case 46:
            return "Yêu anh"; // Vietnamese (informal)
        case 47:
            return "Nyarong lan tege"; // Uzbek
        case 48:
            return "Akhoba ve"; // Tamil
        case 49:
            return "Ohayou gozaimasu, aishiteru"; // Japanese (formal)
        case 50:
            return "Jeziwe nkunda"; // Zulu
        case 51:
            return "Ai shiteru"; // Japanese
        case 52:
            return "Laa kinneh"; // Tajik
        case 53:
            return "Solu kèbè ni"; // French Creole
        case 54:
            return "Ñañdu romi"; // Fulani
        case 55:
            return "Ai de tu"; // Chinese (Cantonese)
        case 56:
            return "Iola plehe ki"; // Hawaiian
        case 57:
            return "Vă iubesc"; // Romanian
        case 58:
            return "Nodi aei te"; // Hawaiian
        case 59:
            return "J'aimerais te dire que je t'aime"; // French (full sentence)
        case 60:
            return "Te amo mucho"; // Spanish (intense)
        case 61:
            return "Aloha wau ia'oe"; // Hawaiian
        case 62:
            return "I love you, my friend"; // English (informal)
        case 63:
            return "Azi n'anya"; // Igbo
        case 64:
            return "Lubavna te"; // Bulgarian
        case 65:
            return "Te twal love"; // Haitian Creole
        case 66:
            return "J'éprouve de l'amour"; // French (formal)
        case 67:
            return "Länem aman"; // Georgian
        case 68:
            return "Lubim te"; // Slovak
        case 69:
            return "Bohýhumi sa boci"; // Chichewa
        case 70:
            return "Ndimakukonda"; // Chichewa
        case 71:
            return "Taimo naʻe maʻu"; // Samoan
        case 72:
            return "Muzi rebu"; // Albanian
        case 73:
            return "Te amo mucho, siempre"; // Spanish (very strong)
        case 74:
            return "An yu"; // Hausa
        case 75:
            return "Georgetra un me"; // Albanian
        case 76:
            return "Lantwiro te"; // Swahili
        case 77:
            return "O noni te"; // Sanskrit
        case 78:
            return "Mo re moa"; // Maori
        case 79:
            return "Lugundu uhora"; // Kikuyu
        case 80:
            return "Maliishka senatsoni"; // Thai
        case 81:
            return "Jétè moj"; // French
        case 82:
            return "Saha ko'wa"; // Malagasy
        case 83:
            return "Si túo ha lo ri"; // Yoruba
        case 84:
            return "Dune kudo"; // Ewe
        case 85:
            return "Serjangi zhi"; // Uzbek
        case 86:
            return "O kórè si"; // Tswana
        case 87:
            return "Tête idakwana"; // Chichewa
        case 88:
            return "Njivwela kwa nke"; // Xhosa
        case 89:
            return "Belo yi zo'fu"; // Sotho
        case 90:
            return "Mukoli ewo"; // Kiswahili
        case 91:
            return "Boji wa'i" // Kinyarwanda
        case 92:
            return "Tsiti amezi" // Twi
        case 93:
            return "Ihobaho wa'tse" // Tswana
        case 94:
            return "G'ładź ti pija" // Croatian
        case 95:
            return "Mu fi woin" // Shona
        case 96:
            return "Jezi mwihi" // Kikuyu
        case 97:
            return "Nakara a'ahu" // Malagasy
        case 98:
            return "Zavoti da kosefa" // Hausa
        case 99:
            return "Yajumba ummido" // Zulu
        case 100:
            return "Vibrajo fa yeboke" // Bemba
        default:
            return "I love you";
    }
}

function shakeHeart() {
    const svgElement = document.querySelector('.svg-large-img');
    svgElement.style.transition = "transform 0.1s ease-in-out";
    svgElement.style.transform = "rotate(-4deg)";

    setTimeout(() => {
        svgElement.style.transform = "rotate(3deg)";
    }, 100);

    setTimeout(() => {
        svgElement.style.transform = "rotate(-2deg)";
    }, 200);

    setTimeout(() => {
        svgElement.style.transform = "rotate(2deg)";
    }, 300);

    setTimeout(() => {
        svgElement.style.transform = "rotate(0deg)";
    }, 400);
}


function heartClick() {
    svgElement.style.transition = "transform 0.2s ease-in-out";
    svgElement.style.transform = `scale(${HeartScaleBeat})`;
    svgElement.style.filter = `grayscale(${HeartGray})`;

    clickCount++ 
    HeartScaleBeat += 0.025
    HeartScale += 0.015
    HeartGray -= 0.1
    
    setTimeout(() => {
        svgElement.style.transform = `scale(${HeartScale})`;
        shakeHeart();
    }, 100);
    
    if (clickCount === 14){
        boom()
        setTimeout(() => {
            document.addEventListener("click", boomAtClick);
        }, 500);
    }
}


function boom() {
    const mainHeart = document.querySelector('.svg-large-img svg');
    const container = document.querySelector('.svg-large-img');

    // Увеличение главного сердца перед исчезновением
    mainHeart.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out";
    mainHeart.style.transform = "scale(5)";
    mainHeart.style.opacity = "0";

    for (let i = 0; i < 101; i++) {
        const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        heart.setAttribute("viewBox", "0 0 24 24");
        heart.setAttribute("fill", "currentColor");
        heart.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        
        const size = 75 + Math.random() * 75;
        heart.style.position = "absolute";
        heart.style.width = `${size}px`;
        heart.style.height = "auto";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.transform = "translate(-50%, -50%)";
        heart.style.opacity = "1";
        heart.style.transition = `transform ${0.5 + Math.random()}s ease-out, opacity ${0.5 + Math.random()}s ease-out`;
        heart.style.filter = `brightness(${0.5 + Math.random() * 0.5})`;

        // Добавляем путь сердца
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z");
        path.setAttribute("fill", " #CA0147");

        heart.appendChild(path);
        document.body.appendChild(heart);

        // Случайное направление полёта
        const angle = Math.random() * 2 * Math.PI;
        const distance = 200 + Math.random() * 400;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        setTimeout(() => {
            heart.style.transform = `translate(${x}px, ${y}px) scale(0)`;
            heart.style.opacity = "0";
        }, 10);

        // Удаление сердца после анимации
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }

    // Удаление основного сердца после анимации
    setTimeout(() => {
        mainHeart.style.display = "none";
    }, 800);
}


function boomAtClick(event) {
    // Создание 100 маленьких сердец
    for (let i = 0; i < 51; i++) {
        const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        heart.setAttribute("viewBox", "0 0 24 24");
        heart.setAttribute("fill", "currentColor");
        heart.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        const size = 25 + Math.random() * 25;
        heart.style.position = "absolute";
        heart.style.width = `${size}px`;
        heart.style.height = "auto";
        heart.style.left = `${event.clientX - size / 2}px`;
        heart.style.top = `${event.clientY - size / 2}px`;
        heart.style.transform = "translate(-50%, -50%)";
        heart.style.opacity = "1";
        heart.style.transition = `transform ${0.5 + Math.random()}s ease-out, opacity ${0.5 + Math.random()}s ease-out`;
        heart.style.filter = `brightness(${0.5 + Math.random() * 0.5})`;

        // Добавляем путь сердца
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z");
        path.setAttribute("fill", " #CA0147");

        heart.appendChild(path);
        document.body.appendChild(heart);

        // Случайное направление полета
        const angle = Math.random() * 2 * Math.PI;
        const distance = 250 + Math.random() * 750;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        setTimeout(() => {
            heart.style.transform = `translate(${x}px, ${y}px) scale(0)`;
            heart.style.opacity = "0";
        }, 10);

        // Удаление маленького сердца после анимации
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    svgElement.style.transition = "width 2s ease-in-out, opacity 2s ease-in-out";
    setTimeout(() => {
        svgElement.style.opacity = "1";
        setTimeout(() => {
            svgElement.style.width = "100%";
        }, 150);
    }, 1000);
});
