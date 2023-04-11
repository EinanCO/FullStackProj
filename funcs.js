function checkLogin() {
    let errors=[];
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters= /[A-Z]/g;
    var digit = /[0-9]/g;
    var specialLetters= /[!@#$%^&*()+=_-]/g;
    // do specialletters2 with the rest of the special letters

    if (!uname.includes("@"))
        errors.push("incorrect email address");
    if(pass=="")
        errors.push("Fill password field");   
    if (!pass.match(lowerCaseLetters))
        errors.push("Must include at least one lowercase letter");
    if (!pass.match(upperCaseLetters))
        errors.push("Must include at least one uppercase letter");
    if(!pass.match(digit))
        errors.push("Must include at least one digit");
    if(pass.length<6)
        errors.push("Password length must be atleast 6 characters");
    if (!pass.match(specialLetters))
        errors.push("Must include at least one special character");

    errors.forEach((err) => alert(err));
    if(errors.length==0)
    alert(uname+"\n"+pass);   
}
    //var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,40}$/;