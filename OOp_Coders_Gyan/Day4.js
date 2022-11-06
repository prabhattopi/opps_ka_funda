// //Inheritance
// //Wirasath me milna

class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  //special method given by javascript
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  //Method for deposit just we use prototype previous

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

//this ke jagah extends lago class me class mast
class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance); //class se inheritance kar rahe to parent walla call karo
  }

  takeBussinnesLoan(amount) {
    if (amount < 50000) console.log("Taking businness" + amount);
    else {
      console.log("transaction limit exceed");
    }
  }
}

const rakeshAccount = new CurrentAccount("rakesh k", 1000);
rakeshAccount.deposit(1000);
console.log(rakeshAccount);

// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//   }

// BankAccount.prototype.deposit=function(amount){
//     this.balance+=amount
// }

// BankAccount.prototype.withdraw=function(amount){
//     this.balance-=amount
// }
// function CurrentAccount(customerName, balance = 0) {
//     //constructor Linking
//     BankAccount.call(this,customerName,balance)//this savingaccount ke se jo bhi banega

//     this.transactionLimit=50000
//   }
//   CurrentAccount.prototype=Object.create(BankAccount.prototype)//Linking prototype to parentClass🤣🤣😂😍😫🥱😴😣😋😚🙄🤗

// CurrentAccount.prototype.takeBussinnesLoan=function(amount){
//     if(amount<50000)
//     console.log("Taking businness"+amount)
//     else{
//         console.log("transaction limit exceed")
//     }
// }

// const rakeshAccount=new CurrentAccount("Rakesh R",10000)
// // rakeshAccount.deposit(10000)
// // rakeshAccount.takeBussinnesLoan(6000)
// console.log(rakeshAccount)
