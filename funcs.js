function checkLogin() {
    let errors = [];
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var digit = /[0-9]/g;
    var specialLetters = /[!@#$%^&*()+=_-]/g;

    if (!uname.includes("@"))
        errors.push("incorrect email address");
    if (pass == "")
        errors.push("Fill password field");
    if (!pass.match(lowerCaseLetters))
        errors.push("Must include at least one lowercase letter");
    if (!pass.match(upperCaseLetters))
        errors.push("Must include at least one uppercase letter");
    if (!pass.match(digit))
        errors.push("Must include at least one digit");
    if (pass.length < 6)
        errors.push("Password length must be atleast 6 characters");
    if (!pass.match(specialLetters))
        errors.push("Must include at least one special character");

    errors.forEach((err) => alert(err));
    if (errors.length == 0) {
        //alert(uname + "\n" + pass);
        var json = {
            'user': uname,
              'password': pass
          }
        $.ajax({
            url: "/test_data_transfer",
            type: "POST",
            data: json,
            success: function (response) {
                // $("#resbox").append("<br>");
                // $("#resbox").append(response);
            },
            error: function (xhr, status, errmsg) {  // XHR - XMLHttpRequest  
                alert(errmsg + "  " + status);
            }
        });
        return true;
    }
    return false;
}
function checkSignUp() {
    var uname = document.getElementById("username").value; //we will use it in the future
    var pass = document.getElementById("password").value;
    var ConfPass = document.getElementById("ConfPassword").value;
    if (pass === ConfPass)
        checkLogin()
    else
        alert("The password does not match");
}