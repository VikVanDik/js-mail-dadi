// Creo il prompt per ricevere la mail.
const eMailUser = prompt ('Inserisci qui la tua e-mail')

// Creo la lista di mail iscritte al sito.
const emailList = ['GionniMaggia@gmail.com','Max_Power_Springfield@Outlook.it', 'sascha.the.dog@dogmail.com']
console.log (emailList)

// Controllo che la mail inserita sia nella lista.
// flag di controllo
let emailCheck = false

// Ciclo le mail per controllare che la mail inserita sia all'interno della lista
for(let i = 0; i < emailList.lenght; i++ ) {
  const emailSaved = emailList[i]
  if (eMailUser === emailSaved) {
    emailCheck = true    
  }
}

// Creo la variabile del messaggio

let message = document.getElementById('message')
if (emailCheck===true) {
  message.innerHTML = `Benvenuto al gioco dei dadi`
} else {
  message.innerHTML = `Inserire una mail registrata`
}
  



