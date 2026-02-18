// Cloning the dull body so i could reset it in future code through a playAgain button
let body = window.document.body ;
const newBody = body.cloneNode(true) ;

// 0 : R | 1 : S | 2 : P
function checkWin (usersChoice , computersChoice) {

    let winCondition = [
        [0 , 1] ,
        [1 , 2] ,
        [2 , 0]
    ] ;

    if (usersChoice === computersChoice) {

        return "Draw" ;

    } ;

    for (let i = 0 ; i <= 2 ; i++) {

        if(winCondition[i][0] === usersChoice && winCondition[i][1] === computersChoice) {

            return "Win" ;

        }

    }

    return "Lose" ;

} ;

function actionAfterMove (result , usersChoice , computersChoice) {

    if (result === "Win") { 
        // Sry the animations are reverse i by mistakenly made them opp , Win animation -> actually Lose animation & Vice Versa

        choices2[usersChoice].style.animation = "selectedChoice-1l 3s ease-in-out 0s 1 normal forwards , selectedChoice-2l 3s ease-in-out 3s 1 normal forwards , selectedChoice-3l 3s ease-in-out 6s 1 normal forwards , moveUpSpecial 3s ease-in-out 9s 1 normal forwards" ;
        computerChoices[computersChoice].style.animation = "computerSelected-1l 3s ease-in-out 3s 1 normal forwards , computerSelected-2l 3s ease-in-out 6s 1 normal forwards , moveUpSpecial 3s ease-in-out 9s 1 normal forwards" ;
        setTimeout(() => {
            choices[0].style.display = "none" ;
            choices[1].style.display = "none" ;
            choices[2].style.display = "none" ;
        } , 3000) ;

        finalLastPage.style.animation = "moveUpFinalPage 3s ease-in-out 9s 1 normal forwards" ;
        finalMsg.innerText = "Lose" ;

    }else if (result === "Lose") {
        // Sry the animations are reverse i by mistakenly made them opp , Win animation -> actually Lose animation & Vice Versa

        choices2[usersChoice].style.animation = "selectedChoice-1w 3s ease-in-out 0s 1 normal forwards , selectedChoice-2w 3s ease-in-out 3s 1 normal forwards , selectedChoice-3w 3s ease-in-out 6s 1 normal forwards , moveUp 3s ease-in-out 9s 1 normal forwards" ;
        computerChoices[computersChoice].style.animation = "computerSelected-1w 3s ease-in-out 3s 1 normal forwards , computerSelected-2w 3s ease-in-out 6s 1 normal forwards , moveUp 3s ease-in-out 9s 1 normal forwards" ;
        setTimeout(() => {
            choices[0].style.display = "none" ;
            choices[1].style.display = "none" ;
            choices[2].style.display = "none" ;
        } , 3000) ;

        finalLastPage.style.animation = "moveUpFinalPage 3s ease-in-out 9s 1 normal forwards" ;
        finalMsg.innerText = "Win" ;

    }else {

        choices2[usersChoice].style.animation = "selectedChoice-1 3s ease-in-out 0s 1 normal forwards , selectedChoice-2 3s ease-in-out 3s 1 normal forwards , moveUp 3s ease-in-out 6s 1 normal forwards" ;
        computerChoices[computersChoice].style.animation = "computerSelected 3s ease-in-out 3s 1 normal forwards , moveUp 3s ease-in-out 6s 1 normal forwards" ;
        setTimeout(() => {
            choices[0].style.display = "none" ;
            choices[1].style.display = "none" ;
            choices[2].style.display = "none" ;
        } , 3000) ;

        finalLastPage.style.animation = "moveUpFinalPage 3s ease-in-out 6s 1 normal forwards" ;
        finalMsg.innerText = "Draw" ;

    } ;

} ;

let choices = window.document.querySelectorAll(".choice") ;
let computerChoices = window.document.querySelectorAll(".computerChoice") ;
let choices2 = window.document.querySelectorAll(".choice2") ;
let finalLastPage = window.document.querySelector("#finalPage") ;
let finalMsg = window.document.querySelector("#finalMsg") ;
let playAgainButton = window.document.querySelector("#playAgain") ;
var userChoice = 100 ;

var computerChoice = Math.floor((Math.random()*3)) ; // Range (0 - 2) 0 : R | 1 : S | 2 : P
computerChoice = 2 ;

// Adding animation based on users choice

// If user selects Rock
choices[0].addEventListener("click" , () => {

    userChoice = 0 ;

    result = checkWin(userChoice , computerChoice) ;

    actionAfterMove(result , userChoice , computerChoice) ; 
    // I don't know why , but for rock then animation is working in reverse so i used lose animation for win & vice verse
    // Check the function u will get it
    // If any one can find the reason then feel free to fork it 

}) ;

// If user selects Scissor
choices[1].addEventListener("click" , () => {

    userChoice = 1 ;

    result = checkWin(userChoice , computerChoice) ;

    if (result === "Win") { 

        // The animation is flipped for few thing so reanimating is a headache so its juts a quick fix

        choices2[userChoice].style.animation = "selectedChoice-1 3s ease-in-out 0s 1 normal forwards , selectedChoice-2 3s ease-in-out 3s 1 normal forwards , moveUp 3s ease-in-out 6s 1 normal forwards" ;
        computerChoices[computerChoice].style.animation = "computerSelected 3s ease-in-out 3s 1 normal forwards , moveUp 3s ease-in-out 6s 1 normal forwards" ;
        setTimeout(() => {
            choices[0].style.display = "none" ;
            choices[1].style.display = "none" ;
            choices[2].style.display = "none" ;
        } , 3000) ;

        finalLastPage.style.animation = "moveUpFinalPage 3s ease-in-out 6s 1 normal forwards" ;
        finalMsg.innerText = "Draw" ;

    }else if (result === "Lose") {

        choices2[userChoice].style.animation = "selectedChoice-1l 3s ease-in-out 0s 1 normal forwards , selectedChoice-2l 3s ease-in-out 3s 1 normal forwards , selectedChoice-3l 3s ease-in-out 6s 1 normal forwards , moveUpSpecial 3s ease-in-out 9s 1 normal forwards" ;
        computerChoices[computerChoice].style.animation = "computerSelected-1l 3s ease-in-out 3s 1 normal forwards , computerSelected-2l 3s ease-in-out 6s 1 normal forwards , moveUpSpecial 3s ease-in-out 9s 1 normal forwards" ;
        setTimeout(() => {
            choices[0].style.display = "none" ;
            choices[1].style.display = "none" ;
            choices[2].style.display = "none" ;
        } , 3000) ;

        finalLastPage.style.animation = "moveUpFinalPage 3s ease-in-out 9s 1 normal forwards" ;
        finalMsg.innerText = "Lose" ;

    }else {

        // The animation is flipped for few thing so reanimating is a headache so its juts a quick fix

        choices2[userChoice].style.animation = "selectedChoice-1w 3s ease-in-out 0s 1 normal forwards , selectedChoice-2w 3s ease-in-out 3s 1 normal forwards , selectedChoice-3w 3s ease-in-out 6s 1 normal forwards , moveUp 3s ease-in-out 9s 1 normal forwards" ;
        computerChoices[computerChoice].style.animation = "computerSelected-1w 3s ease-in-out 3s 1 normal forwards , computerSelected-2w 3s ease-in-out 6s 1 normal forwards , moveUp 3s ease-in-out 9s 1 normal forwards" ;
        setTimeout(() => {
            choices[0].style.display = "none" ;
            choices[1].style.display = "none" ;
            choices[2].style.display = "none" ;
        } , 3000) ;

        finalLastPage.style.animation = "moveUpFinalPage 3s ease-in-out 9s 1 normal forwards" ;
        finalMsg.innerText = "Win" ;

    } ;

}) ;

// If user selects Paper
choices[2].addEventListener("click" , () => {

    userChoice = 2 ;

    result = checkWin(userChoice , computerChoice) ;

    if (result === "Win") { 

        choices2[userChoice].style.animation = "selectedChoice-1w 3s ease-in-out 0s 1 normal forwards , selectedChoice-2w 3s ease-in-out 3s 1 normal forwards , selectedChoice-3w 3s ease-in-out 6s 1 normal forwards , moveUp 3s ease-in-out 9s 1 normal forwards" ;
        computerChoices[computerChoice].style.animation = "computerSelected-1w 3s ease-in-out 3s 1 normal forwards , computerSelected-2w 3s ease-in-out 6s 1 normal forwards , moveUp 3s ease-in-out 9s 1 normal forwards" ;
        setTimeout(() => {
            choices[0].style.display = "none" ;
            choices[1].style.display = "none" ;
            choices[2].style.display = "none" ;
        } , 3000) ;

        finalLastPage.style.animation = "moveUpFinalPage 3s ease-in-out 9s 1 normal forwards" ;
        finalMsg.innerText = "Win" ;

    }else if (result === "Lose") {

        // The animation is flipped for few thing so reanimating is a headache so its juts a quick fix

        choices2[userChoice].style.animation = "selectedChoice-1 3s ease-in-out 0s 1 normal forwards , selectedChoice-2 3s ease-in-out 3s 1 normal forwards , selectedChoice-3 3s ease-in-out 6s 1 normal forwards , moveUp 3s ease-in-out 6s 1 normal forwards" ;
        computerChoices[computerChoice].style.animation = "computerSelected 3s ease-in-out 3s 1 normal forwards , moveUp 3s ease-in-out 6s 1 normal forwards" ;
        setTimeout(() => {
            choices[0].style.display = "none" ;
            choices[1].style.display = "none" ;
            choices[2].style.display = "none" ;
        } , 3000) ;

        finalLastPage.style.animation = "moveUpFinalPage 3s ease-in-out 6s 1 normal forwards" ;
        finalMsg.innerText = "Draw" ;

    }else {

        // The animation is flipped for few thing so reanimating is a headache so its juts a quick fix

        choices2[userChoice].style.animation = "selectedChoice-1l 3s ease-in-out 0s 1 normal forwards , selectedChoice-2l 3s ease-in-out 3s 1 normal forwards , selectedChoice-3l 3s ease-in-out 6s 1 normal forwards , moveUpSpecial 3s ease-in-out 9s 1 normal forwards" ;
        computerChoices[computerChoice].style.animation = "computerSelected-1l 3s ease-in-out 3s 1 normal forwards , computerSelected-2l 3s ease-in-out 6s 1 normal forwards , moveUpSpecial 3s ease-in-out 9s 1 normal forwards" ;
        setTimeout(() => {
            choices[0].style.display = "none" ;
            choices[1].style.display = "none" ;
            choices[2].style.display = "none" ;
        } , 3000) ;

        finalLastPage.style.animation = "moveUpFinalPage 3s ease-in-out 9s 1 normal forwards" ;
        finalMsg.innerText = "Lose" ;

    } ;

}) ;

// Adding the newGame button logic

playAgainButton.addEventListener("click" , () => {

    body.parentElement.replaceChild(newBody , body) ;
    body = newBody ;

}) ;












