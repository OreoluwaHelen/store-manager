const pwd1= document.getElementById('password')
const pwd2 = document.getElementById('confirmPassword')



function checkPass(){
    if (pwd1.value != pwd2.value){
        pwd2.setCustomValidity("not matching")
    }
    else {
        pwd2.setCustomValidity("")
    }
}


pwd2.onkeyup = checkPass;