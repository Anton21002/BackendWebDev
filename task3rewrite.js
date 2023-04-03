
function validateCreditCard(cardNum) {
    function lengthcheck(cardNumlc) {
        if (cardNumlc.toString().length != 16) {
           // console.log("Incorrect amount of card characters");
            return false;
        }
       // console.log("16 char met");
        return true;
    }

    function onlynumcheck(card) {
        for (var num = 0; num < card.length; num++) {
            card[num] = cardNum.charAt(num);
            var isnum = /^\d+$/.test(card);
            if (!isnum) {
               // console.log("Only numbers are allowed");
                return false;
            }
        }
       // console.log("only numbers met");
        return true;
    }

    function lastevencheck(card) {
        if (Number(card[card.length - 1]) % 2 == 0) {
           // console.log("even last number met");
            return true;
        }
        //console.log("Last number should be even");
        return false;
    }


    var SumOfDig = 0; //var CardNum =cardNumAr.toNumber 
    for (num = 0; num < cardNum.length; num++) {
        SumOfDig += Number(cardNum[num]);
    } console.log("sum is " + SumOfDig)
    function NumSum(SumOfDig) {
        if (SumOfDig > 16) {
            isValid = true;
           // console.log("more than 16 met");
        }
        else {
            isValid = false;
           // console.log("Sum of numbers must be more than 16")
        }
        return isValid;
    }
    function notsame(SumOfDig) {
        if (SumOfDig / cardNum.length == Number(cardNum[1])) {
            //console.log("Numbers are all the same") ;
            return false;
        } else {
           //console.log("Different number check passed") ;
            return true ;
        }
    }
        if (!lengthcheck(cardNum)) {
            return false;
        } else if (!onlynumcheck(cardNum)) {
            return false;
        } else if (!lastevencheck(cardNum)) {
            return false;
        } else if (!NumSum(SumOfDig)) {
            return false;
        } else if (!notsame(SumOfDig)) {
            return false;
        }
        else {
            return true;
        }
    

}
console.log(validateCreditCard("01234567890"));
console.log(validateCreditCard("1113568400745631"));
console.log(validateCreditCard("1234567890123a"));
console.log(validateCreditCard("1000000000000000"));
console.log(validateCreditCard("4523785512307434"));
