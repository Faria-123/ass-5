document.getElementById('log-btn').addEventListener('click', function () {
    const userName = document.getElementById('user-btn');
    const user = userName.value;
    const userPass = document.getElementById('pass-btn');
    const pass = userPass.value;
    // console.log(user, pass);
    if (user === "admin" && pass === "admin123") {
        window.location.assign("./home.html");
    }
    else {
        alert('Sign In Faild');
        return;
    }

})