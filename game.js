let userScore=0;
let computerScore=0;

let choices=document.querySelectorAll(".choice");

let userScorepar=document.querySelector("#user-score");

let compScorepar=document.querySelector("#comp-score");

let computerChoice=()=>{
    let options=["rock","paper","scissors"];
    const choiceIndx=Math.floor(Math.random()*3);
    return options[choiceIndx];
}

let drawMatch=()=>{
    msg.innerText="Draw!...Play Again.";
    msg.style.backgroundColor="purple";
}

let showWinner=(userWiner,userChoiceId,compchoice)=>{
if(userWiner){
    let msg=document.querySelector("#msg");
    userScore++;
    userScorepar.innerText=userScore;
    msg.innerText=`You Win!...${userChoiceId} Beats ${compchoice}`;
    msg.style.backgroundColor="Green";
    
}else{
    computerScore++;
    compScorepar.innerText=computerScore
    msg.innerText=`You Lost!...${compchoice} Beats Your ${userChoiceId}`;
    msg.style.backgroundColor="red";
}
}
let gamePlay=(userChoiceId)=>{
    console.log("user choice =", userChoiceId);
    const compchoice=computerChoice();
    console.log("Computer Choice =",compchoice);

    if(userChoiceId===compchoice){
        drawMatch();
    }else{
        let userWin=true;
        if(userChoiceId==="rock"){
           userWin=compchoice==="paper"?false:true;
        }else if(userChoiceId==="paper"){
            userWin=compchoice==="scissors"?false:true;
        }else {
            userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin,userChoiceId,compchoice);
    }
}
choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click",()=>{
        let userChoiceId=choice.getAttribute("id");
        gamePlay(userChoiceId)
    })
});

