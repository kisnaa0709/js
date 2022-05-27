let card1 = Math.floor(Math.random()*11) + 1
let card2 = Math.floor(Math.random()*11) + 1
let cards = [card1, card2]
let sum = card1+card2
let statuss = document.getElementById("status")
let cardd = document.getElementById("cards")
let summ = document.getElementById("sum")

function startGame() {

    if (sum < 21) {
        statuss.textContent = ("You are Below BlackJack Do you want to add card")
        cardd.textContent = ("Cards : ") + cards
        summ.textContent = ("Sum : ") + sum
    
}   if (sum == 21) {
        statuss.textContent = ("You Win!! You got BlackJack")
        cardd.textContent = ("Cards : ") + cards
        summ.textContent = ("Sum : ") + sum 
}   if (sum > 21) {
        statuss.textContent = ("You are Out!!")
        cardd.textContent = ("Cards : ") + cards
        summ.textContent = ("Sum : ") + sum  
}
}
function renderGame() {

    let card3 = Math.floor(Math.random()*11) + 1
    cards.push(card3)
    sum += card3


    if (sum < 21) {
        statuss.textContent = ("You are Below BlackJack Do you want to add card")
        cardd.textContent = ("Cards : ") + cards
        summ.textContent = ("Sum : ") + sum
    
}   if (sum == 21) {
        statuss.textContent = ("You Win!! You got BlackJack")
        cardd.textContent = ("Cards : ") + cards
        summ.textContent = ("Sum : ") + sum 
}   if (sum > 21) {
        statuss.textContent = ("You are Out!!")
        cardd.textContent = ("Cards : ") + cards
        summ.textContent = ("Sum : ") + sum  
}

}
