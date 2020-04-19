//Validation for LOGIN page
let username=document.getElementById("username");
let pswd=document.getElementById("pswd");

function validate(){
    if(username.value.trim()==""|| pswd.value.trim()==""){
        alert("Fields Cannot be Empty");
        return false;
    }
    else{
        return true;
    }
}


// Valiadation for SIGNUP page

let usr=document.getElementById("usr");
let contctno=document.getElementById("contctno");
let email=document.getElementById("email");
let psd=document.getElementById("psd");
let cnfrmpsd=document.getElementById("cnfrmpsd").value;
let error=document.getElementById("error");

//validation of username


//validation of contactNo
function validContct(){
    let contactRegexp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(contactRegexp.test(contctno.value)){
        error.innerHTML="Valid";
        return true;
    }
    else{
        error.innerHTML="Invalid Contact No";
        return false;
    }
}

//validation of email
function validEmail(){
   let emailRegExp=/^([\w\,-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/ ; 
   if(emailRegExp.test(email.value)){
       error.innerHTML="Valid";
       error.style.color="green";
       return true;
   }
   else{
       error.innerHTML="Invalid Email";
       error.style.border="2px solid red";
       return false;
   }
}

//validation of password
function validPassword()
{
    let psdRegExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(psdRegExp.test(psd.value))
    {
        if(psd.value.length<8)
        {
            alert("Weak Password(password must contain atleast 1 uppercase,1 lowercase, 1 number and 1 spl character and  length should be >8 and <15");
            psd.style.border="2px solid red";
            return false;
        }
        else if(psd.value.length>=8 && psd.value.length<10)
        {
            alert("Medium Strength");
            psd.style.border="2px solid orange";
            return true;
        }
        else 
        {
            alert("Strong Password");
            psd.style.border="2px solid green";
            return true;
        }
        // error.innerHTML="Valid";
        // return true;
    }
   else
   {
    error.innerHTML="Invalid Password";
    error.style.border="2px solid red";
    return false;
   }
}

//Validation for ConfirmPassword
function  validConfPswd(){
   if(cnfrmpsd==""){
       document.getElementById("confpswdsp").innerHTML="**Please fill the field";
       return false;
   }
   if(cnfrmpsd!=psd.value){
    document.getElementById("confpswdsp").innerHTML="**Passwords dont match";
    return false; 
   }
}


