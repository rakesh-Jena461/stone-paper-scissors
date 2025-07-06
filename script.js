let mesgcontaner = document.querySelectorAll(".choices");
let contaner = document.querySelector("#contaner");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
let userwin =0;
let compwin =0;


const showWinner = (winner,userchoice,compChoice) =>{
    if(winner){
        userwin++;
        user.innerText = userwin;
        contaner.innerText = `you win. your ${userchoice} bets ${compChoice}`;
        contaner.style.backgroundColor = "green";
    }else{
        compwin++;
         comp.innerText = compwin;
        contaner.innerText = `you lose ${compChoice} bets your ${userchoice} `;
         contaner.style.backgroundColor = "red";
    }

}
const computerChoice = () =>{
    const opction =["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random() *3);
    return opction[randomidx];
}
const playgame =(userchoice) => {
     console.log("user choice is",userchoice);
     const compChoice = computerChoice();
       console.log("computer choice is",compChoice);

      if(userchoice ===  compChoice){
        console.log("drow game");
        contaner.innerText="game drow play agen";
        contaner.style.backgroundColor ="blue";
     }
     else{
        let winner = true;
        if(userchoice === "rock"){
            winner = compChoice === "paper"? false:true;
        }
       else if(userchoice === "paper"){
        winner = compChoice === "scissors"? false:true;
       }
       else{
        winner = compChoice === "rock"? false:true;
       }
       showWinner(winner,userchoice,compChoice);
     }
}

mesgcontaner.forEach((choices) => {
    choices.addEventListener("click", () =>{
        const userchoice = choices.getAttribute("id");
        playgame(userchoice);
    });
});
 
