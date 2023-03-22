var correctlet = [] ;
var guessawnser = [] ;
function wordarranger (awnserword) {
for (var letternum = 0 ; letternum < awnserword.length;letternum++){
correctlet[letternum] = awnserword.charAt(letternum);
guessawnser[letternum] = '_'
}
console.log (correctlet);
console.log (guessawnser)
return correctlet , guessawnser
}



function guessLetter (guessedlet) {
var corletamo = 0 ; 
for (var letternum=0;letternum < correctlet.length;letternum++){   
if (guessawnser[letternum] == '_'){
if (correctlet[letternum] == guessedlet){
guessawnser[letternum] = guessedlet ;
console.log("Congratulations, guessed letter " + guessedlet+ " was in the word") ;
corletamo++;   
}   
}
else {
corletamo++ ;    
}    
} 
var leftlet = correctlet.length - corletamo ;
console.log(leftlet + " letters left to find");
if (corletamo == correctlet.length){
console.log("Congradulations,you have guessed the word " + correctlet.join(""))    
}else {
    corletamo = 0;
}
console.log(guessawnser.join(" ")) ;
return guessawnser;
}

wordarranger('water');
guessLetter('t');
guessLetter('d');
guessLetter('a');
guessLetter('w');
guessLetter('e');
guessLetter('s');
guessLetter('r')
