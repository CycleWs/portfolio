function toTranslate(){

    document.getElementById('about').innerHTML = "About";
    document.getElementById('presentation3').firstChild.textContent = "I'm a software developer and currently studying computer science. Specialized in several programming languages, including ";
    document.getElementById('presentation5').innerHTML = "SOCIAL MEDIAS";
    document.getElementById('presentation6').innerHTML = "PROJECTS IN: ";
    document.getElementById('footerInfo').innerHTML = "Website developed by Henrique ";

}

function presentationTranslate(){
  document.getElementById('presentation1').firstChild.textContent = "I'm ";
  document.getElementById('presentation2').innerHTML = "Henrique Lima, i'm ";
}

function checkHourTranslate() {
    var hour = new Date().getHours();
    var message = "";
  
    if (hour >= 5 && hour < 12) {
      message = "Hello, good morning!";
    } else if (hour >= 12 && hour < 18) {
      message = "Hello, good afternoon!";
    } else {
      message = "Hello, good night!";
    }

    document.getElementById("hour").innerHTML = message;
  }

function checkAgeTranslate(){
    var year = new Date().getFullYear();
    var day = new Date().getDate();
    var month = new Date().getMonth();
    var age = year - 2003;

month += 1;
age -=1;

if(month >= 8 && day >= 17){
    age +=1;
}

document.getElementById("age").innerHTML = age + " years old.";
}