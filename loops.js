let names = ["Damian", "David", "John", "Steward", "Milot", "Anna", "Abdul"];
const myName = "Damian"

let x = 0;


let hour;
let minutes;
let greet;
let randomName;


hour = Math.floor(Math.random() * 24);
minutes = Math.floor(Math.random() * 59);
randomName = Math.floor(Math.random() * 6);



// for(x in names){
//     if(names[x] == "Damian")
//     {
//         console.log("This is your name")
//     }
//     else{
//         console.log("The name is " + names[x])
//     }
// }

if(hour < 12){
    greet = "Good morning, ";
}
else if(hour <18){
    greet = "Good afternoon, ";
}
else{
    greet = "Good evening, ";
}

function tellTime(){
    console.log(greet + names[randomName] + " it is currently " + hour + ":" + minutes)
}

tellTime();
//this is my new change
