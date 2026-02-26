let coinFlip = Math.round(Math.random()); 
let choice = prompt("Heads or Tails:").toLowerCase(); 

if (coinFlip === 0) { 
    if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else if (choice === "tails") {
        alert("The flip was heads but you chose tails...you lose!");
    } else {
        alert("Invalid choice. Please enter Heads or Tails.");
    }
} else { 
    if (choice === "tails") {
        alert("The flip was tails and you chose tails...you win!");
    } else if (choice === "heads") {
        alert("The flip was tails but you chose heads...you lose!");
    } else {
        alert("Invalid choice. Please enter Heads or Tails.");
    }
}