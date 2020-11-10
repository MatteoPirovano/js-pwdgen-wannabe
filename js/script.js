var question1 = prompt('Scrivi il tuo nome?');
var question2 = prompt('Scrivi il tuo cognome?');
var question3 = prompt('Scrivi il tuo colore preferito?');
var casualNumber = prompt('Inserisci un numero');
var password;
password = question1 + question2 + question3 + casualNumber;
document.getElementById('new_password').innerHTML= password;
