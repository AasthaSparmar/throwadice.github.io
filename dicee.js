var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimg1="dice"+randomnumber1+".png";
var randomimagesource1="images/"+randomdiceimg1;
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource1);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimg2="dice"+randomnumber2+".png";
var randomimagesource2="images/"+randomdiceimg2;
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player1 wins!🚩";
}
else if(randomnumber1<randomnumber2) {
    document.querySelector("h1").innerHTML="🚩Player2 wins!🚩";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}