//Classes
//Synthetic sugar of constructor object
//vairable is property
//func are methods

// hoisting matters in class(we cannot initialize before creating class)
class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  //constructor is special method in class
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

const rakeshAccount = new BankAccount("rakesh k", 1000);
rakeshAccount.deposit(1000);
console.log(rakeshAccount);

//Ya same const BankAccount=class{...}



