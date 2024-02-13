let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-game");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-cont");
let turn=true;

const winPaterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const resetGame=()=>{
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=> {
    box.addEventListener("click" ,()=> {
        if(turn){
            box.style.color="green";
            box.innerText="0";
            turn=false;
        }else{
            box.style.color="brown";
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        cheakWinner();
    });
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
};
const showWinner=(val1) => {
    msg.innerText=`The Winner Is ${val1}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const cheakWinner = () => {
    for(let pattern of winPaterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3){
                showWinner(val1);
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
