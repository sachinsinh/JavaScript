//Nested if else condition

let winningNum = 23;
let Userguss = +prompt("Enter Your GuessNumber");

if(Userguss === winningNum){
    console.log("User Guess Is Right!!!");
}else{
    if(Userguss < winningNum){
        console.log("Your Guess Is Too Low!!!");
    }else{
        console.log("Your Guess Is To High!!!");
    }
}