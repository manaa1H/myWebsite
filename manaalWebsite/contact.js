function validateIphoneForm(){
    const form = document.getElementById("questionForm");
    const submitButton = document.getElementById("submitButton");
    const message = document.getElementById("message");

    submitButton.addEventListener("click", function validateSubmission(event){
        event.preventDefault();

        const para=  document.getElementById("para").value;
        const downFall=  document.getElementById("downFall").value;
        const email =  document.getElementById("email").value;
        const adress=  document.getElementById("adress").value;
        const sinNum=  document.getElementById("sinNum").value;
        const date=  document.getElementById("date").value;
        var yes = "yes";
        var no = "no";
        
        if(para.length < 20){
            message.innerHTML = "Paragraph must be longer than 25 characters";
            message.style.backgroundColor = "red";
            message.style.color = "white";
        }else if(downFall !== yes && downFall !== no){
            message.innerHTML = "Enter yes or no";
            message.style.backgroundColor = "red";
            message.style.color = "white";
        }else if (!email.endsWith("@gmail.com")){
            message.innerHTML = "You must enter an email that ends with @gmail.com";
            message.style.backgroundColor = "red";
            message.style.color = "white";
        }else if(!adress){
            message.innerHTML = "You must not leave adress empty if you want to submit";
            message.style.backgroundColor = "red";
            message.style.color = "white";
        }else if(sinNum.length != 9 || isNaN(sinNum)){
            message.innerHTML = "Enter a valid Canadian SIN number... (9 numbers)";
            message.style.backgroundColor = "red";
            message.style.color = "white";
        } else if(!date){
            message.innerHTML = "You must not leave date empty if you want to submit";
            message.style.backgroundColor = "red";
            message.style.color = "white";
        } else {
            message.innerHTML = "Your iphone will definitely be delivered soon. Make sure to leave your doors unlocked at night.";
            message.style.backgroundColor = "green";
            message.style.color = "white";
        }
    });
}
validateIphoneForm();