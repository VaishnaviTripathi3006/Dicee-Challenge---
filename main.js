
var randomNumber1=Math.floor(Math.random()*6)+1;
var name1="dice"+randomNumber1+".png";
var randomNumber2=Math.floor(Math.random()*6)+1;
var name2="dice"+randomNumber2+".png";
var randomImageSource1="images/"+name1;
var randomImageSource2="images/"+name2;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource1);
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}

