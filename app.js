const billAmount = document.querySelector("#bill-amount");
const cashPaid = document.querySelector("#cash-paid");
const nextButton = document.querySelector("#next");
const checkButton = document.querySelector("#check");
const message = document.querySelector("#error-msg");
const hidediv= document.querySelector("#hide");
const noOfNotes = document.querySelectorAll(".no-of-notes");


const availbleNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    message.style.display="none";
    if(billAmount.value>0){
        if(cashPaid.value>=billAmount.value){
            const amountToReturned = cashPaid.value-billAmount.value;
            calculateNote(amountToReturned);
        }else{
            errorMessage("Cash is less that bill plz.. enter the right amount")
        }

    }else{
        errorMessage("Please enter the valid number")
    }
});

function calculateNote(amountToReturned){
    for(let index = 0; index < availbleNotes.length; index++ ){
        const noOfNotesReturned = Math.trunc(amountToReturned/availbleNotes[index]);
        amountToReturned %= availbleNotes[index];
        noOfNotes[index].innerText = noOfNotesReturned
    }
}


function errorMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}

