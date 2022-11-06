//Prototype
//Helps us to control the memory leakage intna barr kyu banna
//by default it is given as a property by javascript to a function and value as {}🤣
//Array and object are in-built constructors in javascript
//Array methods push pop conacat
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountName = Date.now();
  this.balance = balance;
}
const rakeshAccount = new BankAccount("Rakesh k");
// const JohnAccount = new BankAccount("John k");
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
rakeshAccount.deposit(3000);
console.log(rakeshAccount);
