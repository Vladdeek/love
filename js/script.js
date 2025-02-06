let svgElement = document.querySelector('.svg-large-img');
let text = document.querySelector('.LovePhrase');
let clickCount = 0
let HeartScaleBeat = 1.025
let HeartScale = 1.0
let HeartGray = 1.0
let textopacity = 1.0
let idPhrase = 0

function lovePhrase(id) {
    switch (id) {
        case 1:
            console.log("Я люблю тебя на русском");
            return "Я люблю тебя"; // Russian
        case 2:
            console.log("Я люблю тебя на японском иероглифами");
            return "愛してる"; // Japanese (kanji)
        case 3:
            console.log("Я люблю тебя на украинском");
            return "Я тебе люблю"; // Ukrainian
        case 4:
            console.log("Я люблю тебя на французском");
            return "Je t'aime"; // French
        case 5:
            console.log("Я люблю тебя на китайском иероглифами");
            return "我爱你"; // Chinese (Simplified)
        case 6:
            console.log("Я люблю тебя на итальянском");
            return "Ti amo"; // Italian
        case 7:
            console.log("Я люблю тебя на португальском");
            return "Eu te amo"; // Portuguese
        case 8:
            console.log("Я люблю тебя на корейском иероглифами");
            return "사랑해요"; // Korean (Hangeul)
        case 9:
            console.log("Я люблю тебя на арабском");
            return "أحبك"; // Arabic
        case 10:
            console.log("Я люблю тебя на испанском");
            return "Te quiero"; // Spanish
        case 11:
            console.log("Я люблю тебя на немецком");
            return "Ich liebe dich"; // German
        case 12:
            console.log("Я люблю тебя на итальянском");
            return "Ti voglio bene"; // Italian (alternative)
        case 13:
            console.log("Я люблю тебя на хинди");
            return "मैं तुमसे प्यार करता हूँ"; // Hindi
        case 14:
            console.log("Я люблю тебя на польском");
            return "Kocham cię"; // Polish
        case 15:
            console.log("Я люблю тебя на румынском");
            return "Te iubesc"; // Romanian
        case 16:
            console.log("Я люблю тебя на шведском");
            return "Jag älskar dig"; // Swedish
        case 17:
            console.log("Я люблю тебя на норвежском");
            return "Jeg elsker deg"; // Norwegian
        case 18:
            console.log("Я люблю тебя на венгерском");
            return "Szeretlek"; // Hungarian
        case 19:
            console.log("Я люблю тебя на финском");
            return "Rakastan sinua"; // Finnish
        case 20:
            console.log("Я люблю тебя на датском");
            return "Jeg elsker dig"; // Danish
        case 21:
            console.log("Я люблю тебя на греческом");
            return "Σ' αγαπώ"; // Greek
        case 22:
            console.log("Я люблю тебя на турецком");
            return "Seni seviyorum"; // Turkish
        case 23:
            console.log("Я люблю тебя на чешском");
            return "Miluji tě"; // Czech
        case 24:
            console.log("Я люблю тебя на болгарском");
            return "Обичам те"; // Bulgarian
        case 25:
            console.log("Я люблю тебя на японском");
            return "愛してるよ"; // Japanese (alternative)
        case 26:
            console.log("Я люблю тебя на финском");
            return "Rakastan sinua"; // Finnish
        case 27:
            console.log("Я люблю тебя на латинском");
            return "Te amo"; // Latin
        case 28:
            console.log("Я люблю тебя на португальском (Бразилия)");
            return "Eu te amo muito"; // Brazilian Portuguese
        case 29:
            console.log("Я люблю тебя на иврите");
            return "אני אוהב אותך"; // Hebrew
        case 30:
            console.log("Я люблю тебя на индонезийском");
            return "Aku cinta padamu"; // Indonesian
        case 31:
            console.log("Я люблю тебя на малайском");
            return "Saya cinta padamu"; // Malay
        case 32:
            console.log("Я люблю тебя на вьетнамском");
            return "Anh yêu em"; // Vietnamese
        case 33:
            console.log("Я люблю тебя на сингапурском");
            return "I love you, my friend"; // English (informal)
        case 34:
            console.log("Я люблю тебя на бенгальском");
            return "আমি তোমায় ভালোবাসি"; // Bengali
        case 35:
            console.log("Я люблю тебя на урду");
            return "میں تم سے محبت کرتا ہوں"; // Urdu
        case 36:
            console.log("Я люблю тебя на тайском");
            return "รักคุณ"; // Thai
        case 37:
            console.log("Я люблю тебя на монгольском");
            return "Би чамд хайртай"; // Mongolian
        case 38:
            console.log("Я люблю тебя на грузинском");
            return "მიყვარხარ"; // Georgian
        case 39:
            console.log("Я люблю тебя на казахском");
            return "Мен сені жақсы көремін"; // Kazakh
        case 40:
            console.log("Я люблю тебя на армянском");
            return "Ես սիրում եմ քեզ"; // Armenian
        case 41:
            console.log("Я люблю тебя на узбекском");
            return "Men seni sevaman"; // Uzbek
        case 42:
            console.log("Я люблю тебя на суахили");
            return "Nakupenda"; // Swahili
        case 43:
            console.log("Я люблю тебя на африкаанс");
            return "Ek het jou lief"; // Afrikaans
        case 44:
            console.log("Я люблю тебя на эсперанто");
            return "Mi amas vin"; // Esperanto
        case 45:
            console.log("Я люблю тебя на латвийском");
            return "Es tevi miilu"; // Latvian
        case 46:
            console.log("Я люблю тебя на литовском");
            return "Aš tave myliu"; // Lithuanian
        case 47:
            console.log("Я люблю тебя на эстонском");
            return "Ma armastan sind"; // Estonian
        case 48:
            console.log("Я люблю тебя на малгашском");
            return "Tiako anao"; // Malagasy
        case 49:
            console.log("Я люблю тебя на суахили");
            return "Ninapenda"; // Swahili
        case 50:
            console.log("Я люблю тебя на самoanском");
            return "O le alofa ia te oe"; // Samoan
        case 51:
            console.log("Я люблю тебя на финском");
            return "Rakastan sinua"; // Finnish
        case 52:
            console.log("Я люблю тебя на хмонг");
            return "Kuv hlub koj"; // Hmong
        case 53:
            console.log("Я люблю тебя на тунгусском");
            return "Mi ya asko"; // Tunguska
        case 54:
            console.log("Я люблю тебя на кубинском");
            return "Te quiero mucho"; // Cuban Spanish
        case 55:
            console.log("Я люблю тебя на гэльском");
            return "Tha gaol agam ort"; // Scottish Gaelic
        case 56:
            console.log("я люблю тебя на Гавайском");
            return "Iola plehe ki"; // Hawaiian
        case 57:
            console.log("я люблю тебя на румынском");
            return "Vă iubesc"; // Romanian
        case 58:
            console.log("я люблю тебя на Гавайском");
            return "Nodi aei te"; // Hawaiian
        case 59:
            console.log("я люблю тебя на французском");
            return "J'aimerais te dire que je t'aime"; // French (full sentence)
        case 60:
            console.log("я люблю тебя на испанском");
            return "Te amo mucho"; // Spanish (intense)
        case 61:
            console.log("я люблю тебя на Гавайском");
            return "Aloha wau ia'oe"; // Hawaiian
        case 62:
            console.log("я люблю тебя на английском");
            return "I love you, my friend"; // English (informal)
        case 63:
            console.log("я люблю тебя на игбо");
            return "Azi n'anya"; // Igbo
        case 64:
            console.log("я люблю тебя на болгарском");
            return "Lubavna te"; // Bulgarian
        case 65:
            console.log("я люблю тебя на гаитянском креольском");
            return "Te twal love"; // Haitian Creole
        case 66:
            console.log("я люблю тебя на французском");
            return "J'éprouve de l'amour"; // French (formal)
        case 67:
            console.log("я люблю тебя на грузинском");
            return "Länem aman"; // Georgian
        case 68:
            console.log("я люблю тебя на словацком");
            return "Lubim te"; // Slovak
        case 69:
            console.log("я люблю тебя на чичеве");
            return "Bohýhumi sa boci"; // Chichewa
        case 70:
            console.log("я люблю тебя на чичеве");
            return "Ndimakukonda"; // Chichewa
        case 71:
            console.log("я люблю тебя на самоанском");
            return "Taimo naʻe maʻu"; // Samoan
        case 72:
            console.log("я люблю тебя на албанском");
            return "Muzi rebu"; // Albanian
        case 73:
            console.log("я люблю тебя на испанском");
            return "Te amo mucho, siempre"; // Spanish (very strong)
        case 74:
            console.log("я люблю тебя на хауса");
            return "An yu"; // Hausa
        case 75:
            console.log("я люблю тебя на албанском");
            return "Georgetra un me"; // Albanian
        case 76:
            console.log("я люблю тебя на суахили");
            return "Lantwiro te"; // Swahili
        case 77:
            console.log("я люблю тебя на санскрите");
            return "O noni te"; // Sanskrit
        case 78:
            console.log("я люблю тебя на маори");
            return "Mo re moa"; // Maori
        case 79:
            console.log("я люблю тебя на кикую");
            return "Lugundu uhora"; // Kikuyu
        case 80:
            console.log("я люблю тебя на тайском");
            return "Maliishka senatsoni"; // Thai
        case 81:
            console.log("я люблю тебя на французском");
            return "Jétè moj"; // French
        case 82:
            console.log("я люблю тебя на малагасийском");
            return "Saha ko'wa"; // Malagasy
        case 83:
            console.log("я люблю тебя на йоруба");
            return "Si túo ha lo ri"; // Yoruba
        case 84:
            console.log("я люблю тебя на эве");
            return "Dune kudo"; // Ewe
        case 85:
            console.log("я люблю тебя на узбекском");
            return "Serjangi zhi"; // Uzbek
        case 86:
            console.log("я люблю тебя на тсвана");
            return "O kórè si"; // Tswana
        case 87:
            console.log("я люблю тебя на чичеве");
            return "Tête idakwana"; // Chichewa
        case 88:
            console.log("я люблю тебя на ксоса");
            return "Njivwela kwa nke"; // Xhosa
        case 89:
            console.log("я люблю тебя на сото");
            return "Belo yi zo'fu"; // Sotho
        case 90:
            console.log("я люблю тебя на суахили");
            return "Mukoli ewo"; // Kiswahili
        case 91:
            console.log("я люблю тебя на киньяруанда");
            return "Boji wa'i"; // Kinyarwanda
        case 92:
            console.log("я люблю тебя на тви");
            return "Tsiti amezi"; // Twi
        case 93:
            console.log("я люблю тебя на тсвана");
            return "Ihobaho wa'tse"; // Tswana
        case 94:
            console.log("я люблю тебя на хорватском");
            return "G'ładź ti pija"; // Croatian
        case 95:
            console.log("я люблю тебя на шона");
            return "Mu fi woin"; // Shona
        case 96:
            console.log("я люблю тебя на кикую");
            return "Jezi mwihi"; // Kikuyu
        case 97:
            console.log("я люблю тебя на малагасийском");
            return "Nakara a'ahu"; // Malagasy
        case 98:
            console.log("я люблю тебя на хауса");
            return "Zavoti da kosefa"; // Hausa
        case 99:
            console.log("я люблю тебя на зулу");
            return "Yajumba ummido"; // Zulu
        case 100:
            console.log("я люблю тебя на бемба");
            return "Vibrajo fa yeboke"; // Bemba
        default:
            return "I love you";
    }
}

function changeLovePhrase() {
    const lovePhraseElement = document.querySelector('.LovePhrase');
    
    if (lovePhraseElement) {
        lovePhraseElement.textContent = lovePhrase(idPhrase);
    }
}

function shakeHeart() {
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
    text.style.display = "flex";
    setTimeout(() => {
        text.style.opacity = "1";
    }, 250);
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
        path.setAttribute("fill", " #E4717A");

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
    changeLovePhrase(idPhrase)
    idPhrase++
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
        path.setAttribute("fill", " #E4717A");

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
