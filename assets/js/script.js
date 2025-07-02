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
  "murra"
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




document.getElementById("game").addEventListener("submit", function (e) {
  e.preventDefault();
  //value coming from radio represents the number you put with your hand
  humanNumber=parseInt(document.getElementById("game").elements.namedItem("handValue").value);
  //value coming from radio represents the prediction of the number the opponent shows with his hand
  humanDeclared=parseInt(document.getElementById("game").elements.namedItem("predicted").value);
//adding the prediction of the opponent number with your number, represent the number you say by voice that has to be the sum by both hands
  humanDeclared+=humanNumber;
  //random numbers for PC
  pcNumber=Math.floor(Math.random()*5)+1;
  pcDeclared=(Math.floor(Math.random()*5)+1)+pcNumber;
  round++;//aumentiamo il numero di round
  //show n round number in main page
  document.getElementById('round').innerHTML = round;
  //show round number in modal
  document.getElementById('round-v2').innerHTML =" "+round;

  //modal visuals
  document.getElementById('humanDeclared').innerHTML = humanDeclared;
  document.getElementById('pcDeclared').innerHTML = pcDeclared;
  //change the images based on the number chosen
  let humanHand = document.getElementById('humanHand');
    humanHand.src = hands[humanNumber];
  let pcHand = document.getElementById('pcHand');
    pcHand.src = hands[pcNumber];
  //calculate results
    result=pcNumber+humanNumber;

    //elaborate conditions to determine who scored (if u guess the sum of the two hands you score unless you both guess it)
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
    //print updated score
    document.getElementById('humanScore').innerHTML = humanScore;
    document.getElementById('pcScore').innerHTML = pcScore;


});
    
    
    
