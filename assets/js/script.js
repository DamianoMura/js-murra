//hands images

const hands=[
  'assets/img/zero.png',
  'assets/img/uno.png',
  'assets/img/due.png',
  'assets/img/tre.png',
  'assets/img/quattro.png',
  'assets/img/cinque.png',
]
const voice =[
  "zero",
  "uno",
  "due",
  "tre",
  "quattro",
  "cinque",
  "sei",
  "sette",
  "otto",
  "nove",
  "dieci/murra"
]

//variabili di gioco
let round=0;
let pcNumber;
let pcDeclared;
let humanNumber;
let humanDeclared;
let pcScore=0;
let humanScore=0;
let result;
let form;



document.getElementById("game").addEventListener("submit", function (e) {
  e.preventDefault();
  humanNumber=parseInt(document.getElementById("game").elements.namedItem("handValue").value);
  humanDeclared=parseInt(document.getElementById("game").elements.namedItem("predicted").value);
  humanDeclared+=humanNumber;
  pcNumber=Math.floor(Math.random()*5)+1;
  pcDeclared=(Math.floor(Math.random()*5)+1)+pcNumber;
  round++;//aumentiamo il numero di round e mostriamo il punteggio aggiornato
 
  document.getElementById('round').innerHTML = round;
  document.getElementById('round-v2').innerHTML =" "+round;
  document.getElementById('humanDeclared').innerHTML = humanDeclared;
  document.getElementById('pcDeclared').innerHTML = pcDeclared;
  let humanHand = document.getElementById('humanHand');
    humanHand.src = hands[humanNumber];
  let pcHand = document.getElementById('pcHand');
    pcHand.src = hands[pcNumber];
  
    result=pcNumber+humanNumber;
    if(humanDeclared != pcDeclared && humanDeclared==result){
      humanScore++;
      document.getElementById('result').innerHTML = "Hai fatto un punto"
    }
    else if(humanDeclared != pcDeclared && pcDeclared==result){
      pcScore++;
       document.getElementById('result').innerHTML = "Il PC ha Fatto un punto"
    }
    else if (pcDeclared==result && humanDeclared==result){
  
      document.getElementById('result').innerHTML = "Patta, nessun punto assegnato"
        
    }
    else{
      document.getElementById('result').innerHTML = "Nessun punto assegnato"
        
    }

    document.getElementById('humanScore').innerHTML = humanScore;
    document.getElementById('pcScore').innerHTML = pcScore;


});
    
    
    
