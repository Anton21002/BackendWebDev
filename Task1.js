var sqbase;
var inhalf;
var compar;
var origin;
var rad;
var halfed;
var squared;
var percentage;
var area;
console.log("1) Single functions");
//Squaring the number
function squareNumber (sqbase)  {
squared = sqbase**2 ;
console.log('The result of squaring the number ' + sqbase + ' is ' + squared)
} 
squareNumber (3) ;
//Halfing the number
function halfNumber (inhalf) {
halfed = inhalf / 2 ;
console.log('Half of ' +inhalf + ' is ' + halfed)
}
halfNumber (10) ;
//Percentage of a number
function percentOf (compar,origin) 
{percentage = compar / origin * 100 ;
percentage = percentage.toFixed(2) ;
console.log(compar + ' is ' + percentage +'% of ' + origin)     
}
percentOf (4,10) ;
//Circle area
function areaOfCircle (rad) {
area = Math.PI * (rad ** 2) ;
area = area.toFixed(2) ;
console.log('The area of the cirle with radius of ' + rad + ' is ' + area)
}
areaOfCircle(5) ;
//Multifunction
console.log("2) Multifunction") ;
function mutifunc (inhalf) {
halfNumber(inhalf) ;
sqbase = halfed ;
 squareNumber (sqbase) ;
rad = squared ;
 areaOfCircle(rad);
compar = area
origin = squared
percentOf (compar,origin)
}
mutifunc (5) 
console.log("3) Advanced functions")
//Dr Evil
function Drevil (cash) {
if (cash == 1000000){
console.log(cash + " dollars (pinky)")
}
else
{console.log(cash + " dollars ")}   
}
Drevil(100);
Drevil(1000000);
//Word Mix up
function mixup (word1 , word2){
if(word1.length >= 2 && word2.length >= 2) {   
var char1 = word1.charAt(1);
var char2 = word2.charAt(1);
word1 = word1.replace(char1,char2);
word2 = word2.replace(char2,char1) ;
console.log(word1 +" "+ word2 ) ;  
}
else{
console.log("word too short")    
}
}
mixup("computer","virus");
mixup("o","bc");
//Censor a letter after first occurence
function FixStart(uncensor) {
var censlet = uncensor.charAt(0);
var sliced = uncensor.slice(1,uncensor.length) 
sliced=sliced.replaceAll(censlet,"*")
console.log(censlet + sliced)
}
FixStart("bubblegum")
FixStart("acronymical")
//Verbs ending addon 
function verbing (verb){
if (verb.length >= 3){
var verbend = verb.slice(verb.length-3 ,verb.length) ;    
if(verbend == "ing"){
console.log(verb + "ly")
}
else
{
console.log(verb+"ing")    
}    
}
else{
console.log(verb)    
}    
}
verbing("walk");
verbing("talking");
verbing("go");
//Verb order search
function notBad (sentence) {
var NotPos = sentence.search("not")  ;
//console.log(NotPos);
var BadPos =sentence.search("bad") ;
//console.log(BadPos);
if (NotPos < BadPos && NotPos != -1 && BadPos != -1) {
sentence = sentence.replaceAll("not ","") ;
sentence = sentence.replaceAll("bad","good");
console.log(sentence);
}
else {
console.log(sentence)
} 
}
notBad("This steak is not bad")
notBad("This steak is not as bad as i thought")
notBad("This drink is bad")

