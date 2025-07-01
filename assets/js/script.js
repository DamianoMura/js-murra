//hands images

let hands=[
  'assets/img/zero.png',
  'assets/img/uno.png',
  'assets/img/due.png',
  'assets/img/tre.png',
  'assets/img/quattro.png',
  'assets/img/cinque.png',
]


//variabili di gioco
let pcNumber;
let pcDeclared;
let humanNumber;
let humanDeclared;
let pcScore=0;
let humanScore=0;
let result;
window.onload = function(){
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('pcScore').innerHTML = pcScore;
}
document.getElementsByClassName("hand").style.display="none";
function play(){
  
    pcNumber=Math.floor(Math.random()*5)+1;
    pcDeclared=(Math.floor(Math.random()*5)+1)+pcNumber;
    
}
/*
while (pcScore<10 || humanScore<10){
  pcNumber=Math.floor(Math.random()*5)+1;
  pcDeclared=(Math.floor(Math.random()*5)+1)+pcNumber;
  humanNumber=parseInt(prompt("inserisci il numero da 1 a 5  da aggiungere a quello dell'avversario"));
  humanDeclared=parseInt(prompt("predici la somma da 1 a 10 del tuo numero con quella dell'avversario"));

  result=pcNumber+humanNumber;
  if(humanDeclared != pcDeclared && humanDeclared==result){
    humanScore++;
    alert(
      " punto per te"+ 
      "\n i tuoi numeri : "+ humanNumber +" e "+ humanDeclared +
      "\n i suoi numeri : "+ pcNumber +" e "+ pcDeclared +
      "\n  punteggio: TU:"+ humanScore + " / PC:"+pcScore );
  }
  else if(humanDeclared != pcDeclared && pcDeclared==result){
    pcScore++;
      alert(
        " punto per il pc"+
        "\n i tuoi numeri : "+ humanNumber +" e "+ humanDeclared +
        "\n i suoi numeri : "+ pcNumber +" e "+ pcDeclared +
        "\n  punteggio: TU:"+ humanScore + " / PC:"+pcScore );
  }
  else if (pcDeclared==result && humanDeclared==result){

    alert(
      " pareggio, quindi nessuno ha fatto punto....."+
      "\n i tuoi numeri : "+ humanNumber +" e "+ humanDeclared +
      "\n i suoi numeri : "+ pcNumber +" e "+ pcDeclared+
      "\n  punteggio: TU:"+ humanScore + " / PC:"+pcScore  );
  }
  else{
    alert(
      "  nessuno ha fatto punto....."+
      "\n i tuoi numeri : "+ humanNumber +" e "+ humanDeclared +
      "\n i suoi numeri : "+ pcNumber +" e "+ pcDeclared+
      "\n  punteggio: TU:"+ humanScore + " / PC:"+pcScore  );
  }
}

if (humanScore>pcScore){
  alert("hai vinto");
}
else alert("hai perso");
*/