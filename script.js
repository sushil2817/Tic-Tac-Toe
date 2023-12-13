let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#refresh");
let newbtn = document.querySelector("#new");
let msgContainer = document.querySelector(".winner");
let msg = document.querySelector("#msg");


let turnO = true//playerX, player0


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];


const resetGame = () =>{
           turnO = true;
           enablebtn();
           msgContainer.classList.add("hide");
}


box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
       if(turnO){
        box.innerText = "0";
        turnO = false;
       }
       else{
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;

       checkWinner();
    })
})

const diablebtn = () =>{
    for(let box1 of box){
        box1.disabled = true;
    }
}
const enablebtn = () =>{
    for(let box1 of box){
        box1.disabled = false;
        box1.innerText = "";
    }
}

const showWinner = (winner) => {
      msg.innerText = `Congratulations, winner is ${winner}`;
    //   console.log("hide");
    msgContainer.classList.remove("hide");
      diablebtn();
    //   console.log("hide1");
}

const checkWinner = ()=>{
      for( pattern of winPatterns){
       
            let pos0Val = box[pattern[0]].innerText;
            let pos1Val = box[pattern[1]].innerText;
            let pos2Val = box[pattern[2]].innerText;

            if(pos0Val != "" && pos1Val != ""&& pos2Val !=""){
                if(pos0Val === pos1Val && pos1Val === pos2Val){
                    console.log("winner",pos0Val);
                    showWinner(pos0Val);
                }
            }
      }
}


newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);