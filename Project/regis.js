var errorMsg = document.getElementById('errorNotification');

function validate(){
    var form = document.forms["regisform"];
    var name = form["name"].value
    var dob = form["dob"].value;
    var gender = form["gender"].value;
    var email = form["email"].value;
    var number = form["phone"].value;
    var agree = form["agree"].checked;

    if(name == ""){
        errorMsg.innerHTML = "Please fill your name!";
    }
    else if(name.length < 3 || name.length > 30){
        errorMsg.innerHTML = "Name must be between 3-30 characters";
    }
    else if(dob == ""){
        errorMsg.innerHTML = "Please input your Date of Birth!";
    }
    else if(gender == ""){
         errorMsg.innerHTML = "Please select your gender!";
    }
    else if(email == ""){
        errorMsg.innerHTML = "Please input your email!";
    }
    else if(email.indexOf('@') == -1){
        errorMsg.innerHTML = "Your email must contains '@'!";
    }
    else if(number == ""){
        errorMsg.innerHTML = "Please input your phone number!";
    }
    else if(isNaN(number) == true){
        errorMsg.innerHTML = "You have to input number!";
    }
    else if(number.length < 10 || number.length > 12){
        errorMsg.innerHTML = "Phone number must be between 10-12 numbers!";
    }
    else if(!agree){
        errorMsg.innerHTML = "You have to agree with the Terms and Conditions!";
    }
    else{
        alert("You are registered!");
        window.location = "project.html"
    }
}