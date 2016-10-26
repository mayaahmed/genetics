var canvas = document.getElementById("outputCanvas");
var ctx = canvas.getContext("2d");



var output= document.getElementById('outputDiv'); var x=10; var y=0;
var mainString; var truncatedString;
var m=20;  var n=10;

function run(){ 
 mainString = document.getElementById('inputText').value;
 console.log(mainString);
 mainString=mainString.trim();

 if(mainString.length == m) splitString(mainString);

if(mainString.length > m){
truncatedString = mainString.substring(0, m);
 splitString(truncatedString);
 slicedString= mainString.slice(1); 
}


while(slicedString.length > m){
truncatedString = slicedString.slice(0, m);
 splitString(truncatedString);
slicedString= slicedString.slice(1); 
 }

} //  end of function run


function splitString(string){
 part1 = string.substring(0, n);
part2= string.slice(n);
y=y+10;



ctx.fillText(part1,x,y);
ctx.fillText(part2,x+90,y);
}

