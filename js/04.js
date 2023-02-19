const credits = 23580;
const pricePerDroid = 3000;
let allTv = prompt(`Скільки одиниць товару ви бажаєте купити?`);
let totalPrice = allTv * pricePerDroid;

if (totalPrice) {
  alert(`Сума за дану кількість товару, становить: ${totalPrice} кредитів.`);

  if (totalPrice <= credits) {
    alert(
      `Ви купили ${allTv} телевізорів, на рахунку залишилось: ${
        credits - totalPrice
      } кредитів.`
    );
  } else {
    alert(`Недостатньо коштів на рахунку.`);
  }
} else {
  alert(`Операція скасована`);
}
