let h2 = document.querySelector("h2");
let started = false;
let level = 0;
let gameColor = ["red","purple","gray","yellow"];
let gameSeq = [];
let userSeq = [];

document.addEventListener("keypress",()=>{
    console.log("Hello Dear Game");
    if(started == false){
        started = true;
        levelIn();
    }
});

function flashUp(box){
    box.classList.add("flash");
    setTimeout(()=>{
        box.classList.remove("flash");
    },500);
}

function levelIn(){
    level++;
    h2.innerText = `Level ${level}`;
    let randNum = Math.floor(Math.random()*3);
    let randBox = gameColor[randNum];
    let ele = document.querySelector(`#${randBox}`);
    gameSeq.push(ele);

    console.log(gameSeq);
    console.log(randNum);
    console.log(ele);
    flashUp(ele);
}

let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
    btn.addEventListener(("click"),()=>{
        console.log(btn);
    });
}
