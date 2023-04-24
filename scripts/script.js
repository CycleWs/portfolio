function checkHour() {
    var hour = new Date().getHours();
    var message = "";
  
    if (hour >= 5 && hour < 12) {
      message = "Olá, bom dia!";
    } else if (hour >= 12 && hour < 18) {
      message = "Olá, boa tarde!";
    } else {
      message = "Olá, boa noite!";
    }
  
    document.getElementById("hour").innerHTML = message;
  }

function checkAge(){
  var year = new Date().getFullYear();
  var day = new Date().getDate();
  var month = new Date().getMonth();
  var age = year - 2003;

  month += 1;
  age -=1;

  if(month >= 8 && day >= 17){
    age +=1;
  }

  document.getElementById("age").innerHTML = age + " anos.";
}

function copyText() {
  if(document.hasFocus){
    navigator.clipboard.writeText("CycleWs#6695").then(
      () => {
      alert('Meu nome de usuario do discord foi copiado para usa area de transferencia =D')
    },
    () => {
      alert('Ocorreu algum erro na hora de copiar meu nome de usuario do discord =( CycleWs#6695 ')
    })
  }else{
    alert('Ocorreu algum erro na hora de copiar meu nome de usuario do discord =( CycleWs#6695 ')
  }
}