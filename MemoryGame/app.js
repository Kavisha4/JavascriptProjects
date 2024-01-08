const cardArray=[
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'burger',
        img:'images/burger.png',
    },
    {
        name:'choco',
        img:'images/choco.png',
    },
    {
        name:'icecream',
        img:'images/icecream.jpg',
    },
    {
        name:'sushi',
        img:'images/sushi.png',
    },
    {
        name:'pizza',
        img:'images/pizza.jpg',
    },
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'burger',
        img:'images/burger.png',
    },
    {
        name:'choco',
        img:'images/choco.png',
    },
    {
        name:'icecream',
        img:'images/icecream.jpg',
    },
    {
        name:'sushi',
        img:'images/sushi.png',
    },
    {
        name:'pizza',
        img:'images/pizza.jpg',
    }
]

// console.log(cardArray)
cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay=document.querySelector('#grid')
const resultDisplayDisplay=document.querySelector('#result')
let cardsChosen=[]
let cardsChosenID=[]
let cardsWon=[]
function createBoard(){
    for(let i=0;i<cardArray.length;i++)
    {
        const card=document.createElement('img')
        card.setAttribute('src','images/colour.jpg')
        card.setAttribute('data-id',i)
        // console.log(card,i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)


    }
}


function checkMatch()
{
    const cards=document.querySelectorAll('img')
    console.log('check for match')
    const optionOneId=cardsChosenID[0]
    const optionTwoId=cardsChosenID[1]
    if(optionOneId==optionTwoId)
    {
        alert("You have clicked the same card again")
        cards[cardsChosenID[0]].setAttribute('src','images/color.png')
        cards[cardsChosenID[1]].setAttribute('src','images/color.png')
       
    }
    
    else if(cardsChosen[0]==cardsChosen[1])
    {
        alert('You found a match')
        cards[cardsChosenID[0]].setAttribute('src','images/white.png')
        cards[cardsChosenID[1]].setAttribute('src','images/white.png')
        cards[cardsChosenID[0]].removeEventListener('click',flipCard)
        cards[cardsChosenID[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
        
    }
    else
    {
        cards[cardsChosenID[0]].setAttribute('src','images/colour.png')
        cards[cardsChosenID[1]].setAttribute('src','images/colour.png')
        alert("Sorry Try Again")
          
    }
    resultDisplay.innerHTML=cardsWon.length
    cardsChosen=[]
    cardsChosenID=[]
    if(cardsWon.length ==(cardArray.length/2))
    {
        resultDisplay.innerHTML='Congratulations you have found them all'
    }
}

function flipCard()
{   let cardID=this.getAttribute('data-id')
    // console.log('clicked',cardID)
    // console.log(cardArray[cardID].name)
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenID.push(cardID)
    console.log(cardsChosenID)
     console.log(cardsChosen)
    this.setAttribute('src',cardArray[cardID].img)
    if(cardsChosen.length===2)
    {
      setTimeout(checkMatch,500)  
    }
}


createBoard()