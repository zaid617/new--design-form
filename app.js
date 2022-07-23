let users = []
let loggdins = {}
let page = location.href.split("./");


function AllUsers() {
    let takeUser = localStorage.getItem("usersItem")
    let loggdin = localStorage.getItem("LoginItem")
    loggdins = JSON.parse(loggdin) || {}
    users = JSON.parse(takeUser) || []

}
AllUsers()


function dashboard() {

    document.getElementById('name2').value = "Name :" + loggdins.userFirstName
    document.getElementById('dob2').value = "Date of birth :" + loggdins.dob
    document.getElementById('number2').value = "Mobile: " + loggdins.userEmail
}

function signup() {
    let fName = document.getElementById("firstName").value
    let surName = document.getElementById("surName").value
    let email = document.getElementById("number").value
    let password = document.getElementById("password").value
    let cpassword = document.getElementById("cpassword").value
    let dob = document.getElementById("dob").value
    let error2 = document.getElementById('error2')
    let error = document.getElementById('error')
    let login = document.querySelector('.login')


    if (password === cpassword) {
        let newUser = {
            userFirstName: fName,
            surName: surName,
            userEmail: email,
            userPass: password,
            userCpass: cpassword,
            dob: dob,
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].userEmail === email) {
                error2.style.display = 'block'
                setTimeout(function () {
                    error2.style.display = 'none'
                }, 3000)
                return 0;
            }
        }
        users.push(newUser)

        localStorage.setItem("usersItem", JSON.stringify(users))
        login.style.transform = "translateY(-500px)";
    }
    else {
        error.style.display = 'block'
        setTimeout(function () {
            error.style.display = 'none'
        }, 3000)
    }
}

function login() {
    let error3 = document.getElementById('error3');
    let LoginEmail = document.getElementById("num").value
    let Loginpass = document.getElementById("pass").value
    console.log(LoginEmail)
    console.log(Loginpass)

    let isMatch = false

    for (let i = 0; i < users.length; i++) {

        if (users[i].userEmail == LoginEmail && users[i].userPass == Loginpass) {

            isMatch = true
            localStorage.setItem("LoginItem", JSON.stringify(users[i]))
            window.location.href = "./dashboard.html";

        }

    }
    if (!isMatch) {
        error3.style.display = 'block'
        setTimeout(function () {
            error3.style.display = 'none'
        }, 3000)
        return 0;
    }


}
function logout() {
    localStorage.removeItem("LoginItem")
    location.href = './index.html'
    return
}