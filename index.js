var timer=30;
var score=0;
let newHit=0;

function getHit(){
    newHit = Math.floor(Math.random()*7);
    document.getElementById("hitval").textContent=newHit;
}

function incscore(){
    score += 10;
    document.getElementById("scoreval").textContent=score;
}

function runTimer(){
   let rn = setInterval(function(){
        if(timer > 0){
            timer--;
            document.getElementById("timerval").textContent=timer;
        }
        else{
            clearInterval(rn);
            document.getElementById("down").innerHTML=`<h1>Game Over Score Dekh Apna AA Tooh!!</h1>`;
        }
        
    },1000)
}

function makeBubble(){
    var count="";
    for(var i=0; i<=131; i++){
        var ran = Math.floor(Math.random()*13);
        count += `<div class="bubble">${ran}</div>`;
    }
    document.querySelector("#down").innerHTML=count;
}

document.getElementById("down").addEventListener("click",function(details){
    var clicknum=Number(details.target.textContent);
    if(clicknum === newHit){
        makeBubble();
        getHit();
        incscore();
    }
});

makeBubble();
runTimer();
getHit();