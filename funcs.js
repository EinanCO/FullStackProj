function checkLogin() {
    var uname = document.getElementById("username").value;
    if (!uname.includes("@"))
        window.alert("incorrect email address");
    var pass = document.getElementById("password").value;
    // if (pass == "")
    //     window.alert("Fill password field please");
    // if (pass.length < 6)
    //     window.alert("Password length must be atleast 6 characters");
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,40}$/;
    if (pass.match(decimal))
        alert("good");
    else
        alert("bad");
}