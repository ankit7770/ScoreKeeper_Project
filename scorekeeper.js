var p1Button=document.querySelector("#p1");
var p2Button=document.getElementById("p2");
var p1display=document.querySelector("#a1");
var p2display=document.getElementById("a2");
var resetButton=document.getElementById("reset");
var  num=document.getElementById("a3");
var numInput=document.querySelector("input");



 var p1score=0;
  var p2score=0;
 var winningscore=5;

var gameOver=false;

p1Button.addEventListener("click", function(){
if(!gameOver){
   p1score++;
p1display.textContent=p1score;
 if(p1score===winningscore){
   p1display.classList.add("winner");
   gameOver=true;
   
}
}
  
});
p2Button.addEventListener("click", function(){
if(!gameOver){
   p2score++;
p2display.textContent=p2score;
 if(p2score===winningscore){
    p2display.classList.add("winner");
   gameOver=true;
}
  
}
});
 resetButton.addEventListener("click", function(){
 reset();
});
 function reset(){
 p1score=0;
  p2score=0;
  p1display.textContent=0;
  p2display.textContent=0;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
  gameOver=false;
}
numInput.addEventListener("change", function(){
num.textContent=numInput.value;
winningscore=Number(numInput.value);
reset();
});

