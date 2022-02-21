const firstName = prompt("Qual è il tuo nome?");
console.log(firstName);

const secondName = prompt("Qual è il tuo cognome?");
console.log(secondName);

const favoriteColor = prompt("Qual è il tuo colore preferito?");
console.log(favoriteColor);

const password = firstName + secondName + favoriteColor + 21;
console.log(password);

document.getElementById('password').innerHTML = password;