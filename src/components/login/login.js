import Signup from '../signup/signup.js'
class Login {
    constructor() {
        this.signupComponent = new Signup();
        this.registerEvents();
    }

    registerEvents() {
        $("#login-user").on("click", async() => {
            const email = $("#login-email").val().trim();
            const password = $("#login-password").val();
            // email = (Utility.isNullOrEmpty(email)) && "arpan@alumnux.com";
            // password = (Utility.isNullOrEmpty(password)) && "arpan1995";
            // console.log()
            const response = await window.ipcLogin.authenticateUser(email, password);
            console.log(response)
            if (response) {
                $(".wrapper").empty();
            }
        });
    }
}

$(document).ready(() => {
    new Login();
})