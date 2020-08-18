document.addEventListener('DOMContentLoaded', () => {

//Card options
const cardArray = [
    {
        name: 'beer',
        img: '/images/beer.png'
    },
    {
        name: 'beer',
        img: 'images/beer.png'
    },
    {
        name: 'burger',
        img: 'images/burger.png'
    },
    {
        name: 'burger',
        img: 'images/burger.png'
    },
    {
        name: 'cake',
        img: 'images/cake-pop.png'
    },
    {
        name: 'cake',
        img: 'images/cake-pop.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'meat',
        img: 'images/meat.png'
    },
    {
        name: 'meat',
        img: 'images/meat.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardChosen = []
var cardChoseID = []
var cardsWon = []
//Create your board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', '/images/mcdonalds.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//Check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardChoseID[0]
    const optionTwoId = cardChoseID[1]
    if (cardChosen[0] === cardChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', '/images/tick.png')
        cards[optionTwoId].setAttribute('src', '/images/tick.png')
        cardsWon.push(cardChosen)
    }else {
        cards[optionOneId].setAttribute('src', '/images/mcdonalds.png')
        cards[optionTwoId].setAttribute('src', '/images/mcdonalds.png')
        alert('Sorry, Try again')
    }

    cardChosen = []
    cardChoseID = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

//Flip your card

function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChoseID.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}



createBoard();



})