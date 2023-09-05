let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let img1 = document.querySelector('.img-1');
let img2 = document.querySelector('.img-2');

 switch (randomNumber1) {
    case 1:
        img1.style.backgroundImage = 'url(dice-img/5447345139807799655_109.jpg)'
        break;

    case 2:
        img1.style.backgroundImage = 'url(dice-img/5447345139807799656_109.jpg)'
        break;

    case 3:
        img1.style.backgroundImage = 'url(dice-img/5447345139807799657_109.jpg)'
        break;

    case 4:
        img1.style.backgroundImage = 'url(dice-img/5447345139807799658_109.jpg)'
        break;

    case 5:
        img1.style.backgroundImage = 'url(dice-img/5447345139807799659_109.jpg)'
        break;

    case 6:
        img1.style.backgroundImage = 'url(dice-img/5447345139807799660_109.jpg)'
        break;
}

switch (randomNumber2) {
    case 1:
        img2.style.backgroundImage = 'url(dice-img/5447345139807799655_109.jpg)'
        break;

    case 2:
        img2.style.backgroundImage = 'url(dice-img/5447345139807799656_109.jpg)'
        break;

    case 3:
        img2.style.backgroundImage = 'url(dice-img/5447345139807799657_109.jpg)'
        break;

    case 4:
        img2.style.backgroundImage = 'url(dice-img/5447345139807799658_109.jpg)'
        break;

    case 5:
        img2.style.backgroundImage = 'url(dice-img/5447345139807799659_109.jpg)'
        break;

    case 6:
        img2.style.backgroundImage = 'url(dice-img/5447345139807799660_109.jpg)'
        break;
}

if(randomNumber1 > randomNumber2) {
    document.querySelector('.result').innerHTML = 'Player1 Win!'
} else if(randomNumber1 < randomNumber2) {
    document.querySelector('.result').innerHTML = 'Player2 Win!'
} else {
    document.querySelector('.result').innerHTML = 'Draw'
}