let svgElement = document.querySelector('.svg-large-img');
let clickCount = 0
let HeartScaleBeat = 1.025
let HeartScale = 1.0
let HeartGray = 1.0
let textopacity = 1.0

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
