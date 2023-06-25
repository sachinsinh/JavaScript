//forloop

/*
for(let i=0;i<=10;i++){     //declaring let in loop we cannot us out the loop
    console.log(i)  
}
console.log(i)
*/

for(var i=0;i<=10;i++){        //we can use variable outside the loop if declare in loop also
    console.log(i)  
}   
console.log(i)

let total = 0;
let num = 100;

for(let i=0;i<=num;i++){
    total = total+i;
}
console.log(total);