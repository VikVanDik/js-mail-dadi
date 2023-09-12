// Creo il prompt per ricevere la mail.
const eMailUser = prompt ('Inserisci qui la tua e-mail');

// Creo la lista di mail iscritte al sito.
const emailList = ['GionniMaggia@gmail.com','Max_Power_Springfield@Outlook.it', 'sascha.the.dog@dogmail.com']
console.log (emailList)

// Controllo che la mail inserita sia nella lista.
// flag di controllo
let emailCheck = false;

// Ciclo le mail per controllare che la mail inserita sia all'interno della lista
for(let i = 0; i < emailList.length; i++ ) {
  const emailSaved = emailList[i];
  if (eMailUser === emailSaved) {
    emailCheck = true;    
  }
}

// Creo la variabile del messaggio e del gioco

let message = document.getElementById('message')
const button = document.getElementById('button')
if (emailCheck === true) {
  message.innerHTML = `Benvenuto al gioco dei dadi`
  button.classList.remove ("d-none")
  button.addEventListener('click', function(){
    const diceUser = Math.floor(Math.random() * 6) +1
    const dicePC = Math.floor(Math.random() * 6) +1
    console.log(diceUser)
    console.log(dicePC)

    const result = document.getElementById('result')
    if (diceUser === dicePC){
      result.innerHTML= `Hai estratto ${diceUser} e il pc ha estratto ${dicePC} quindi hai pareggiato`
    } else if (diceUser > dicePC){
      result.innerHTML= `Hai estratto ${diceUser} e il pc ha estratto ${dicePC} quindi hai vinto`
    } else if (diceUser < dicePC){
      result.innerHTML= `Hai estratto ${diceUser} e il pc ha estratto ${dicePC} quindi hai perso`
    }
  })
} else {
  message.innerHTML = `Inserire una mail registrata`
}
  