let userScore =0;
let compScore= 0;


const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const showWinner = (userWin ,userChoice , compChoice) =>{
    if(userWin){
        msg.innerText = `You win!🎊 Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "Green";
        userScore++;
        userScorePara.innerText = userScore;
        
    }else{
        msg.innerText =  `You Loose!😥 ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "Red";
        compScore++;
        compScorePara.innerText = compScore;
        
    }
} 

const drawGame = () =>{
    msg.innerText = "It's a draw!"
    msg.style.backgroundColor = "Grey";
    
}

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random() *3) ;
    return options[randIdx];
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();


if(userChoice === compChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        userWin = compChoice === "sciccors" ? false : true;
    }else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
}

choices.forEach((choice) => {    
choice.addEventListener("click", () =>{
    const userChoice= choice.getAttribute("id");
    // console.log("choice was clicked" ,userChoice );
    playGame(userChoice);
});
});