let svgElement = document.querySelector('.svg-large-img svg')
let text = document.querySelector('.LovePhrase')
let hp = document.querySelector('.hp')
let hpcount = 14
let clickCount = 0
let HeartScaleBeat = 1.025
let HeartScale = 1.0
let HeartGray = 1.0
let textopacity = 1.0
let idPhrase = 0

function lovePhrase(id) {
	switch (id) {
		case 1:
			console.log('Я люблю тебя на русском')
			return 'Я люблю тебя' // Russian
		case 2:
			console.log('Я люблю тебя на японском')
			return '愛してる' // Japanese (kanji)
		case 3:
			console.log('Я люблю тебя на украинском')
			return 'Я тебе кохаю' // Ukrainian
		case 4:
			console.log('Я люблю тебя на французском')
			return "Je t'aime" // French
		case 5:
			console.log('Я люблю тебя на китайском')
			return '我爱你' // Chinese (Simplified)
		case 6:
			console.log('Я люблю тебя на итальянском')
			return 'Ti amo' // Italian
		case 7:
			console.log('Я люблю тебя на португальском')
			return 'Eu te amo' // Portuguese
		case 8:
			console.log('Я люблю тебя на корейском')
			return '사랑해요' // Korean (Hangeul)
		case 9:
			console.log('Я люблю тебя на арабском')
			return 'أحبك' // Arabic
		case 10:
			console.log('Я люблю тебя на испанском')
			return 'Te quiero' // Spanish
		case 11:
			console.log('Я люблю тебя на немецком')
			return 'Ich liebe dich' // German
		case 12:
			console.log('Я люблю тебя на итальянском')
			return 'Ti voglio bene' // Italian (alternative)
		case 13:
			console.log('Я люблю тебя на хинди')
			return 'मैं तुमसे प्यार करता हूँ' // Hindi
		case 14:
			console.log('Я люблю тебя на польском')
			return 'Kocham cię' // Polish
		default:
			return 'I love you'
	}
}

function changeLovePhrase() {
	const lovePhraseElement = document.querySelector('.LovePhrase')

	if (lovePhraseElement) {
		lovePhraseElement.textContent = lovePhrase(idPhrase)
	}
}

function shakeHeart() {
	svgElement.style.transition = 'transform 0.1s ease-in-out'
	svgElement.style.transform = 'rotate(-4deg)'

	setTimeout(() => {
		svgElement.style.transform = 'rotate(3deg)'
	}, 100)

	setTimeout(() => {
		svgElement.style.transform = 'rotate(-2deg)'
	}, 200)

	setTimeout(() => {
		svgElement.style.transform = 'rotate(2deg)'
	}, 300)

	setTimeout(() => {
		svgElement.style.transform = 'rotate(0deg)'
	}, 400)
}

function heartClick() {
	switch (clickCount) {
		case 1:
			console.log('Ты как лучик солнца, освещаешь все вокруг!')
			break
		case 2:
			console.log('Твоя улыбка — это лучшее, что я видел!')
			break
		case 3:
			console.log('Твоя доброта и тепло делают мир лучше.')
			break
		case 4:
			console.log('Ты невероятно умна и красива одновременно!')
			break
		case 5:
			console.log(
				'В твоих глазах можно утонуть, они такие глубокие и загадочные.'
			)
			break
		case 6:
			console.log('Ты — настоящий источник вдохновения для меня.')
			break
		case 7:
			console.log('С тобой даже обычные моменты становятся волшебными.')
			break
		case 8:
			console.log('Твоя энергия и харизма — это что-то особенное!')
			break
		case 9:
			console.log('Ты не только прекрасна снаружи, но и внутри.')
			break
		case 10:
			console.log('Ты создаешь вокруг себя атмосферу счастья и радости.')
			break
		case 11:
			console.log('Ты — как музыка, которая всегда радует мое сердце.')
			break
		case 12:
			console.log('Я восхищаюсь твоей силой и уверенностью.')
			break
		case 13:
			console.log(
				'Каждый твой взгляд — это как волшебство, которое меня очаровывает.'
			)
			break
		case 14:
			console.log('Ты — самое ценное, что произошло в моей жизни!')
			break
		default:
			console.log('Ты потрясающая, и я горжусь, что знаю тебя!')
	}

	svgElement.style.transition = 'transform 0.2s ease-in-out'
	svgElement.style.transform = `scale(${HeartScaleBeat})`
	svgElement.style.filter = `grayscale(${HeartGray})`

	clickCount++
	HeartScaleBeat += 0.025
	HeartScale += 0.015
	HeartGray -= 0.1
	hpcount--
	hp.textContent = hpcount

	setTimeout(() => {
		svgElement.style.transform = `scale(${HeartScale})`
		shakeHeart()
	}, 100)

	if (clickCount === 14) {
		boom()
		changeLovePhrase(idPhrase)
		setTimeout(() => {
			document.addEventListener('click', boomAtClick)
		}, 500)
	}
}

function boom() {
	text.style.display = 'flex'
	hp.style.display = 'none'
	setTimeout(() => {
		text.style.opacity = '1'
		hp.style.opacity = '0'
	}, 250)
	const mainHeart = document.querySelector('.svg-large-img svg')
	const container = document.querySelector('.svg-large-img')

	// Увеличение главного сердца перед исчезновением
	mainHeart.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out'
	mainHeart.style.transform = 'scale(5)'
	mainHeart.style.opacity = '0'

	for (let i = 0; i < 101; i++) {
		const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
		heart.setAttribute('viewBox', '0 0 24 24')
		heart.setAttribute('fill', '#E4717A')
		heart.setAttribute('xmlns', 'http://www.w3.org/2000/svg')

		const size = 75 + Math.random() * 75
		heart.style.position = 'absolute'
		heart.style.width = `${size}px`
		heart.style.height = 'auto'
		heart.style.left = '50%'
		heart.style.top = '50%'
		heart.style.transform = 'translate(-50%, -50%)'
		heart.style.opacity = '1'
		heart.style.transition = `transform ${
			0.5 + Math.random()
		}s ease-out, opacity ${0.5 + Math.random()}s ease-out`
		heart.style.filter = `brightness(${0.75 + Math.random() * 0.75})`

		// Добавляем путь сердца
		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
		path.setAttribute(
			'd',
			'M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z'
		)
		path.setAttribute('fill', ' #E4717A')

		heart.appendChild(path)
		document.body.appendChild(heart)

		// Случайное направление полёта
		const angle = Math.random() * 2 * Math.PI
		const distance = 200 + Math.random() * 400
		const x = Math.cos(angle) * distance
		const y = Math.sin(angle) * distance

		setTimeout(() => {
			heart.style.transform = `translate(${x}px, ${y}px) scale(0)`
			heart.style.opacity = '0'
		}, 10)

		// Удаление сердца после анимации
		setTimeout(() => {
			heart.remove()
		}, 1500)
	}

	// Удаление основного сердца после анимации
	setTimeout(() => {
		mainHeart.style.display = 'none'
	}, 800)
}

function boomAtClick(event) {
	if (idPhrase >= 14) {
		text.style.opacity = '0'
		document.body.style.backgroundColor = 'black'
		setTimeout(() => {
			window.location.href = 'factpage.html'
		}, 800)
	} else {
		idPhrase++
		changeLovePhrase(idPhrase)
	}
	// Создание 100 маленьких сердец
	for (let i = 0; i < 51; i++) {
		const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
		heart.setAttribute('viewBox', '0 0 24 24')
		heart.setAttribute('fill', '#E4717A')
		heart.setAttribute('xmlns', 'http://www.w3.org/2000/svg')

		const size = 25 + Math.random() * 25
		heart.style.position = 'absolute'
		heart.style.width = `${size}px`
		heart.style.height = 'auto'
		heart.style.left = `${event.clientX - size / 2}px`
		heart.style.top = `${event.clientY - size / 2}px`
		heart.style.transform = 'translate(-50%, -50%)'
		heart.style.opacity = '1'
		heart.style.transition = `transform ${
			0.5 + Math.random()
		}s ease-out, opacity ${0.5 + Math.random()}s ease-out`
		heart.style.filter = `brightness(${0.75 + Math.random() * 0.75})`

		// Добавляем путь сердца
		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
		path.setAttribute(
			'd',
			'M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z'
		)
		path.setAttribute('fill', ' #E4717A')

		heart.appendChild(path)
		document.body.appendChild(heart)

		// Случайное направление полета
		const angle = Math.random() * 2 * Math.PI
		const distance = 250 + Math.random() * 750
		const x = Math.cos(angle) * distance
		const y = Math.sin(angle) * distance

		setTimeout(() => {
			heart.style.transform = `translate(${x}px, ${y}px) scale(0)`
			heart.style.opacity = '0'
		}, 10)

		// Удаление маленького сердца после анимации
		setTimeout(() => {
			heart.remove()
		}, 1500)
	}
}

document.addEventListener('DOMContentLoaded', function () {
	svgElement.style.transition =
		'transform 2s ease-in-out, opacity 2s ease-in-out'
	setTimeout(() => {
		svgElement.style.opacity = '1'
		setTimeout(() => {
			svgElement.style.transform = 'scale(1)'

			// Добавление эффекта пульсации (удары сердца)
			svgElement.style.transition = 'transform 0.2s ease-in-out' // Для пульсации

			// Первый удар сердца
			setTimeout(() => {
				svgElement.style.transform = 'scale(1.1)' // Увеличиваем размер
				hp.style.opacity = '1'
			}, 500)

			setTimeout(() => {
				svgElement.style.transform = 'scale(1)' // Возвращаем к нормальному размеру
			}, 600)

			// Второй удар сердца
			setTimeout(() => {
				svgElement.style.transform = 'scale(1.1)' // Увеличиваем размер
			}, 700)

			setTimeout(() => {
				svgElement.style.transform = 'scale(1)' // Возвращаем к нормальному размеру
			}, 800)
		}, 150)
	}, 1000)
})
