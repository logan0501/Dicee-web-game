var randomnum = Math.floor(Math.random()*6)+1;

var imgsource = "images/dice"+randomnum+".png";

document.querySelectorAll("img")[0].setAttribute("src",imgsource);

var randomnum2 = Math.floor(Math.random()*6)+1;

var imgsource2 = "images/dice"+randomnum2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imgsource2);

if(randomnum>randomnum2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins"
}
else if (randomnum<randomnum2){
  document.querySelector("h1").innerHTML="🚩 Player 2 Wins"
}
else{
  document.querySelector("h1").innerHTML="🏳️ Draw!"  
}
