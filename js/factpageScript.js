let Num = 0
document.addEventListener('click', function () {
	const textContainer = document.getElementById('text')
	textContainer.style.opacity = '0'
	Num++
	setTimeout(() => {
		switch (Num) {
			case 1:
				textContainer.textContent = 'Мы уже 413 дней вместе'
				console.log('я люблю тебя')
				break
			case 2:
				textContainer.textContent = 'это 1 год 1 месяц и 16 дней'
				console.log('я люблю тебя')
				break
			case 3:
				textContainer.textContent = 'Я безумно рад тому'
				console.log('я люблю тебя')
				break
			case 4:
				textContainer.textContent = 'ЧТО ТЫ ПОЯВИЛАСЬ В МОЕЙ ЖИЗНИ'
				console.log('я люблю тебя')
				break
			case 5:
				textContainer.textContent = 'Писал я это вэб-приложение не долго'
				console.log('я люблю тебя')
				break
			case 6:
				textContainer.textContent = 'Около 4 часов'
				console.log('я люблю тебя')
				break
			case 7:
				textContainer.textContent = 'Ну это не важно'
				console.log('я люблю тебя')
				break
			case 8:
				textContainer.textContent = 'Я очень тебе благодарен'
				console.log('я люблю тебя')
				break
			case 9:
				textContainer.textContent = 'За то что всегда рядом'
				console.log('я люблю тебя')
				break
			case 10:
				textContainer.textContent = 'Мотивируешь и поддерживаешь'
				console.log('я люблю тебя')
				break
			case 11:
				textContainer.textContent = 'Я ОЧЕНЬ СИЛЬНО ТЕБЯ ЛЮБЛЮ!!!'
				console.log('я люблю тебя')
				break
			case 12:
				document.getElementById('img').style.display = 'flex'
				document.getElementById('img').src = 'image/cats.jpg'
				textContainer.textContent = 'Это МЫ! котики'
				textContainer.style.transform = 'translateY(55%)'
				console.log('я люблю тебя')
				break
			case 13:
				document.getElementById('img').src = 'image/dogs.jpg'
				textContainer.textContent = 'И это МЫ'
				textContainer.style.transform = 'translateY(55%)'
				console.log('я люблю тебя')
				break
			case 14:
				document.getElementById('img').src = 'image/monke.jpg'
				textContainer.textContent = 'И это тоже МЫ'
				textContainer.style.transform = 'translateY(55%)'
				console.log('я люблю тебя')
				break
			case 15:
				document.getElementById('img').style.display = 'none'
				textContainer.style.transform = 'translateY(0%)'
				textContainer.textContent =
					'Это веб-приложение для моей женщины, автор этого веб-приложения Я, Рязанов В., ПОШЛИ НАХ ВОРЮГИ'
				break
		}
		textContainer.style.opacity = '1'
	}, 250)
})
