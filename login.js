document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault()

    submitlogin()
})


var firebaseConfig = {
    apiKey: "AIzaSyAZ6uvcPHjBwNAUwr7NgFcPOBYqe9C2MwM",
    authDomain: "projet-86b75.firebaseapp.com",
    databaseURL: "https://projet-86b75.firebaseio.com",
    projectId: "projet-86b75",
    storageBucket: "",
    messagingSenderId: "174468331370",
    appId: "1:174468331370:web:05324cbb9b211b13"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//create database var
let database = firebase.database()


function submitlogin() {
    let ref = database.ref("login")

    //prepare data 
    let data =
    {

        email: document.querySelector("#Email").value,
        passeword: document.querySelector("#passeword").value,

    }
    console.log(data)


    //upload data 
    ref.push(data)
}