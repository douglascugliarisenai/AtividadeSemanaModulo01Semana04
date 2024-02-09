const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let caracter = ''

for (let i = 1; i <= 1; i++) {
    let indice = Math.floor(Math.random() * caracteres.length);
    caracter += caracteres.charAt(indice).toLowerCase();
}


switch(caracter) {
    case 'a':
        console.log("Caracter " + caracter +' é uma vogal.');
        break;
    case'e':
        console.log("Caracter " + caracter +' é uma vogal.');
        break;
    case 'e':
        console.log("Caracter " + caracter +' é uma vogal.');
        break;
    case 'o':
        console.log("Caracter " + caracter +' é uma vogal.');
        break;
    case 'u':
        console.log("Caracter " + caracter +' é uma vogal.');
        break;
    default:
        console.log("Caracter " + caracter +' é uma consoante.');
}