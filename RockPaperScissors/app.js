const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')

//picked out all the buttons
const possibleChoices=document.querySelectorAll('button')

let userChoice, computerChoice,result
possibleChoices.forEach(possibleChoice=> possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
}))

function generateComputerChoice()
{
    const randomNumber=Math.floor(Math.random()*3)+1 //or use possiblechoices.length
    // console.log(randomNumber)

    if(randomNumber===1)
    {
        computerChoice="rock"
    }

    else if(randomNumber===2)
    {
        computerChoice="scissors"
    }

    else if(randomNumber===3)
    {
        computerChoice="scissors"
    }
    computerChoiceDisplay.innerHTML=computerChoice
    getResult()
}

function getResult()
{
    if(computerChoice===userChoice)
    {result="Its a draw"}
    else if(computerChoice==="rock" && userChoice==="paper")
    {result="You win"}
    else if(computerChoice==="rock" && userChoice==="scissor")
    {result="You lost"}
    else if(computerChoice==="paper" && userChoice==="scissors")
    {result="You win"}
    else if(computerChoice==="paper" && userChoice==="rock")
    {result="You lost"}
    else if(computerChoice==="scissors" && userChoice==="rock")
    {result="You win"}
    else {result="You win"}

    resultDisplay.innerHTML=result
}