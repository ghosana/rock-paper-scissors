
var playerOption;
var computerOption;
var result;

document.getElementById("image");
document.getElementById("screen");

function generateComputerOption() {
    const option = ["r", "p", "s"];
    const computer = option[Math.floor(Math.random() * option.length)];
    
    image.style.width = "220px";

    if(computer == "r"){ 
        document.getElementById("image").src = "./assets/rock.png";
    }else if(computer == "p"){   
        document.getElementById("image").src = "./assets/paper.png";
    }else{    
        document.getElementById("image").src = "./assets/scissors.png";
    }
    
    return computer;
}   

function calculateWinner(option){
    playerOption = option;
    computerOption = generateComputerOption();

    if(computerOption == "p" && playerOption == "s"){
        result = "Player wins!"
    }else if(computerOption == "p" && playerOption == "r"){
        result = "Computer wins!"
    }else if(computerOption == "s" && playerOption == "p"){
        result = "Computer wins!"
    }else if(computerOption == "s" && playerOption == "r"){
        result = "Player wins!"
    }else if(computerOption == "r" && playerOption == "p"){
        result = "Player wins!"
    }else if(computerOption == "r" && playerOption == "s"){
        result = "Computer wins!"
    }else{
        result = "Draw..."
    }  

    if(result == "Player wins!"){
        document.getElementById("result").style.backgroundColor = "lightgreen";
    }else if(result == "Computer wins!"){
        document.getElementById("result").style.backgroundColor = "lightpink";
    }else{
        document.getElementById("result").style.backgroundColor = "lightgrey";
    }

    document.getElementById("result").innerHTML = result;

}




