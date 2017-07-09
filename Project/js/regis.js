var errorMsg = document.getElementById('errorNotification');

function validate(){
    var form = document.forms["regisform"];
    var name = form["name"].value
    //var dob = form["dob"].value;
    var gender = form["gender"].value;
    var address = form["address"].value;
    var email = form["email"].value;
    var number = form["phone"].value;
    var location = form["loc"].value;
    var agree = form["agree"].checked;


    if(name == ""){
        alert("Please fill your name!");
    }
    else if(isNaN(name) == false){
        alert("You can't fill your name with numeric!");
    }
    else if(name.length<3||name.length>30){
        alert("Name must be between 3-30 characters!");
    }
    /*else if(dob == ""){
        alert("Please input your Date of Birth!");
    }*/
    else if(gender == ""){
         alert("Please select your gender!");
    }
    else if(address == ""){
         alert("Please input your address!");
    }
    else if(address.length < 10 || address.length > 50){
         alert("Address must be between 10-50 characters");
    }
    else if(email == ""){
        alert("Please input your email!");
    }
    else if(email.indexOf('@') == -1){
        alert("Your email must contains '@'!");
    }
    else if(number == ""){
        alert("Please input your phone number!");
    }
    else if(isNaN(number) == true){
        alert("You have to input number!");
    }
    else if(number.length < 10 || number.length > 12){
        alert("Phone number must be between 10-12 numbers!");
    }
    else if(location=="default"){
        alert("Please choose race location!");
    }
    else if(!agree){
        alert("You have to agree with the Terms and Conditions!");
    }
    else{
        alert("You are registered! Press OK for go back to Home Page");
        window.location = "../project.html"
    }
    /*
    if(name == ""){
        errorMsg.innerHTML = "Please fill your name!";
    }
    else if(isNaN(name) == false){
        errorMsg.innerHTML = "You can't fill your name with numeric!";
    }
    else if(name.length < 3 || name.length > 30){
        errorMsg.innerHTML = "Name must be between 3-30 characters!";
    }
      //  else if(dob == ""){
      //      errorMsg.innerHTML = "Please input your Date of Birth!";
      //  }
    else if(gender == ""){
         errorMsg.innerHTML = "Please select your gender!";
    }
    else if(address == ""){
         errorMsg.innerHTML = "Please input your address!";
    }
    else if(address.length < 10 || address.length > 50){
         errorMsg.innerHTML = "Address must be between 10-50 characters";
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
    else if(location=="default"){
        errorMsg.innerHTML = "Please choose race location!";
    }
    else if(!agree){
        errorMsg.innerHTML = "You have to agree with the Terms and Conditions!";
    }
    else{
        alert("You are registered!");
        window.location = "../project.html"
    }
    */
}
