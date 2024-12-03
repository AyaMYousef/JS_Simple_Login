
//  "user1@example.com": "password123",
/*var userCredentials = {
    "user1@example.com": "123"
};

var userNames = {
    "user1@example.com": "user1"
}*/

localStorage.getItem('userCredentials', JSON.stringify(userCredentials)) | {};
localStorage.getItem('userNames', JSON.stringify(userNames)) | {};


function login() {

    userCredentials = JSON.parse(localStorage.getItem('userCredentials')) || {};
    userNames = JSON.parse(localStorage.getItem('userNames')) || {};

    console.log(userCredentials);
    console.log(userNames);

    var email = document.getElementById("signinEmail").value;
    var password = document.getElementById("signinPassword").value;

    console.log(email);
    console.log(password);
    if (email in userCredentials) {
        if (userCredentials[email] === password) {
            var userName = userNames[email].toUpperCase();
            window.location.href = `home.html?username=${encodeURIComponent(userName)}`;
        }
        else{
            alert('Invalid Password');
        }
    }
    else {
        alert('Invalid Credentials');
    }
}


function signUp() {
    userCredentials = JSON.parse(localStorage.getItem('userCredentials')) || {};
    userNames = JSON.parse(localStorage.getItem('userNames')) || {};


    console.log(userCredentials);
    console.log(userNames);

    var name = document.getElementById('signupName').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;


    if (email in userCredentials) {
        console.log(userCredentials);
        console.log(userNames);
        alert('Email already exists');
        document.getElementById('signupmsg').textContent = 'Already Exist';
        document.getElementById('signupmsg').style.color = 'red';
    }
    else {

        userCredentials[email] = password;
        userNames[email] = name;

        localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
        localStorage.setItem('userNames', JSON.stringify(userNames));



        console.log(userCredentials);
        console.log(userNames);

        document.getElementById('signupmsg').textContent = 'Success';
        document.getElementById('signupmsg').style.color = 'green';

    }
}

