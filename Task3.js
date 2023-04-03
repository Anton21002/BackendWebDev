var CardNum;
var isValid;
var cardDig = [];
function validateCreditCard(CardNum) {
    console.log("checking card number : " + CardNum) ;
    if (CardNum.toString().length != 16) {
        isValid = false;
        console.log("Incorrect amount of card characters");
    } else {
        isValid=true ;
        console.log("16 char met");
        for (var num = 0; num < CardNum.length; num++) {
            cardDig[num] = CardNum.toString.charAt(num);
            if (cardDig[num] !== Number) {
                isValid = false;
            }

        } if (isValid == false) {
            console.log("Only numbers are allowed");
        }
        
        if (isValid == true) {
            console.log("only numbers met");
            console.log(cardDig[8])
            if (cardDig[15] == "0" || cardDig[15] == "2" ||
                cardDig[15] == "4" || cardDig[15] == "6" || cardDig[15] == "8") {
                console.log("even last number met");
                var SumOfDig = 0;
                for (num = 0; num < cardDig.length; num++) {
                    SumOfDig = SumOfDig + cardDig[num];
                }
                if (SumOfDig > 16) {
                    isValid = true;
                    console.log("more than 16 met");
                }
                else {
                    isValid = false;
                    console.log("Sum of numbers must be more than 16")
                }
            }
            else {
                isValid = false;
                console.log("Last number should be even");
            }
        }




    } return isValid;
}
console.log(validateCreditCard(1234567890));
console.log(validateCreditCard(1113568400745631));
console.log(validateCreditCard("1234567890123a"));
console.log(validateCreditCard(1000000000000000));
console.log(validateCreditCard(4523785512307434));
