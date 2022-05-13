const buttons = document.querySelectorAll("button")
const playerHand = document.querySelector("#player-hand")
const computerHand = document.querySelector("#computer-hand")
const messageDisplay = document.querySelector("#result-message")

let playerChoice
let computerChoice
let result
let game = true

const choices = ['rock', 'paper', 'scissors']
const resultMap = {
  '0': "IT'S A TIE!",
  '1': "YOU WIN!",
  '-1': "YOU LOSE!"
}

const resultMapClass = {
  '0': "tie",
  '1': "win",
  '-1': "lose"
}

const changeHand = (player, option) => {
  setTimeout(() => {
    player.src = "./public/images/" + option + ".png"
  }, 680)
}

const showResult = (result) => {
  setTimeout(() => {
    messageDisplay.classList.add(resultMapClass[result])
    messageDisplay.innerHTML = resultMap[result]
  }, 680)
}

const gameLoop = () => {
  game = false

  setTimeout(() => {
    game = true
    messageDisplay.innerHTML = 'MESSAGE'
    messageDisplay.className = ''

    playerHand.src = '../public/images/rock.png'
    computerHand.src = '../public/images/rock.png'

    playerHand.classList.add("reset")
    computerHand.classList.add("reset")

    playerHand.classList.remove("jankenpon")
    computerHand.classList.remove("jankenpon")

  }, 2000)
}

buttons.forEach(button => button.addEventListener('click', (e) => {
  if (game == true) {

    playerHand.classList.remove("reset")
    computerHand.classList.remove("reset")

    playerChoice = e.target.id
    playerChoiceIndex = choices.indexOf(playerChoice)

    computerChoiceIndex = Math.floor(Math.random() * 3)
    computerChoice = choices[computerChoiceIndex]

    try {
      result = results[playerChoiceIndex][computerChoiceIndex]
      changeHand(playerHand, playerChoice)
      changeHand(computerHand, computerChoice)
      showResult(result)
      gameLoop()
    } catch (error) {
      console.log(error)
      return
    }

    playerHand.classList.add("jankenpon")
    computerHand.classList.add("jankenpon")
  }
}))

const results = [
  [0, -1, 1],
  [1, 0, -1],
  [-1, 1, 0]
]