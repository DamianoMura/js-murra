//giochiamo a murra
let pcNumber;
let pcDeclared;
let humanNumber;
let humanDeclared;
let pcScore=0;
let humanScore=0;
let result;

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
