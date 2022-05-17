class SignUp {
    constructor() {
        this.registerEvents();
    }

    registerEvents() {
        $("#sign-up").on("click", (event) => {
            $(".wrapper").empty();
            $(".wrapper").load("../signup/signup.html");
        });
    }
}

export default SignUp;