    let registerlog  = "f"
    let registerpass = "f"
    
    let loginText = ""
    let passwordText = ""
function logar(){
    loginText = document.querySelector(".login-text").value;
    passwordText = document.querySelector(".password-text").value;
    console.log(loginText, passwordText)
    if(loginText == registerlog && passwordText == registerpass){
        console.log("Deu")
        alert("Logou")
    }else{
        alert("E-mail ou senhas incorretos")
    }
}
