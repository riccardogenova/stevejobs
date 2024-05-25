/**
 * Data un'array di acquisti, trova il prezzo totale degli acquisti fatti da Alice
 *
 *
 * const purchases = [
 * { customer: 'Alice', price: 20 },
 * { customer: 'Bob', price: 30 },
 * { customer: 'Alice', price: 15 },
 * { customer: 'Charlie', price: 25 }
 * ];
 *
 * @format
 */

const purchases = [
  { customer: 'Alice', price: 20 },
  { customer: 'Bob', price: 30 },
  { customer: 'Alice', price: 15 },
  { customer: 'Charlie', price: 25 },
];

function onFilter(el) {
  if (el.customer === 'Alice') return true;
  else return false;
}

function onReduce(acc, el) {
  return acc + el.price;
}

const newCustomer = purchases.filter(onFilter);
console.log(newCustomer);
console.log(newCustomer.reduce(onReduce, 0));
