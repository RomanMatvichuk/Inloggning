// Här deklareras alla variabler

const userName = "test";
const userPassword = "1234";

var loginForm = document.getElementById('loginForm');
var uName = document.forms["userLogin"]["userName"];
var uPsw = document.forms["userLogin"]["userPassword"];
var message = document.getElementById("message");
var info = document.getElementById("info");
var firstBtn = document.getElementById("firstBtn");
var secondBtn = document.getElementById("secondBtn");
var homePage = document.getElementById("homePage");

loginStatus(); // Här kollas inloggningsstatusen

// När man trycker utanför inloggingsformen så stängs den 
window.onclick = function(event) {
  if (event.target == loginForm) {
    loginForm.style.display = "none";
  }
}

// Här kollas om uppgifterna stämmer
function checkUser(){
    if (userName === uName.value && userPassword === uPsw.value){
        localStorage.setItem("userName", uName.value);
        loginForm.style.display = "none";
    }
    else{
        loginForm.style.display = "block";
        message.style.display = "block";
        return false;
    }
}

// Här kollas inloggningsstatus och styrs sidansinnehållet
function loginStatus(){    
    if (localStorage.length > 0){
        var user = localStorage.getItem("userName");
        info.innerText = "Välkommen, " + user + "!";
        firstBtn.style.display = "none";
        secondBtn.style.display = "block";
        loginForm.style.display = "none";
        homePage.style.display = "block";
    }
    else{
        info.innerText = "Logga in för att kunna se sidan";
        firstBtn.style.display = "block";
        secondBtn.style.display = "none";
        loginForm.style.display = "block";
        homePage.style.display = "none";
    }
}

// Här sker utloggning och rensning av localStorage
function logOut(){
    localStorage.clear();
    loginStatus();
}