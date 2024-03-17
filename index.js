let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#winner");


// variables to handle turn of each player
let turnO = true; // playerX and playerO

// winning patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // Check if the boxes at the indices in the pattern match
        const [a, b, c] = pattern;
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            console.log("Winner is: " + boxes[a].innerText)
            showWinner(boxes[a].innerText);
            return true; // There is a winner
        }
    }
    return false; // No winner yet
};

const showWinner = (winner) =>{
    msg.innerText = "Winner is: " + winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked...");
        
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        // const checkWinner = () =>{
        //     for (let pattern of winPatterns){
        //         console.log(pattern[0], pattern[1], pattern[2]);
        //     }
        // }

        if(checkWinner()){
            console.log("We have a winner")
        }
    });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

