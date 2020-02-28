
var varkyan = document.querySelector(".arrow1");
var rope = document.querySelector(".arrow2");
var jam = document.querySelector(".arrow3");
var clocknumber = document.querySelector(".clocknumber");

var v = 0, r = 0, j = 0;

setInterval(function (){
    clocknumber.innerHTML = j+":"+r+":"+v;
    varkyan.style.transform = "rotate("+v*6+"deg)";
    v++;
    if(v==60){
        r++;
        v=0;
    }
    rope.style.transform = "rotate("+r*6+"deg)";
    if(r==60){
        j++;
        r=0;
    }
    jam.style.transform = "rotate("+j*30+"deg)";
    if(j==24){
        j++; 
        j=0;
    }
},1000);




    

