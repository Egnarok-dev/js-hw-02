// const ADMIN_PASSWORD = `jqueryismyjam`;
// let password = prompt(``);
// let message;

// if (ADMIN_PASSWORD === password) {
//   message = `Ласкаво просимо!`;
// } else if (password === null) {
//   message = `Операція скасована!`;
// } else {
//   message = `Доступ заборонено, невірний пароль!`;
// }

// alert(message);

//Варіант №2

// const ADMIN_PASSWORD = `jqueryismyjam`;
// let password = prompt(``);
// let message;

// if (ADMIN_PASSWORD === password) {
//   message = `Ласкаво просимо!`;
// } else if (password === null) {
//   message = `Операція скасована!`;
// }
// if (ADMIN_PASSWORD !== password && password !== null) {
//   message = `Доступ заборонено, невірний пароль!`;
// }

// alert(message);

//Варіант №3

const ADMIN_PASSWORD = `jqueryismyjam`;
let password = prompt(``);
let message = "Доступ заборонено, невірний пароль!";

if (ADMIN_PASSWORD === password) {
  message = `Ласкаво просимо!`;
} else if (password === null) {
  message = `Операція скасована!`;
}

alert(message);
