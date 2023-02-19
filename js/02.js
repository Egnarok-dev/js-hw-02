const total = 100;
let ordered = Number.parseInt(prompt(``));

if (total >= ordered) {
  alert(`Замовлення оформлено.`);
} else {
  alert(`На складі недостатня кількість товару!`);
}
