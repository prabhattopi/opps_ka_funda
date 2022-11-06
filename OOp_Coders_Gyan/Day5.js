//Encapsulation
//bulb complex chizi hide aur user ko intract kiya jata hai
//class ke under band bahar walla na use kar pye

class BankAccount {
  customerName;
  accountNumber;
  #balance = 0;
  //basically common convention(underScore private samjhta hai)😁😁😁😁😁😌😑😑🥱 But no changed to #

  //constructor is special method in class
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  //Method for deposit just we use prototype previous

  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }

  set balance(amount) {
    //private property can be accesss inside class but not outside of class
    if (isNaN(amount)) {
      throw new Error("Amount is not valid input");
    }
    this.#balance = amount;
  }
  get balance() {
    return this.#balance;
  }
}

//child
class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance); //class se inheritance kar rahe to parent walla call karo
    // console.log(this.#balance)//we cannot decalre private field here
  }

  #calculateInterest(amount){
    console.log("Calculating interest")

  }

  takeBussinnesLoan(amount) {
    //logic hoga to private method
    this.#calculateInterest(amount)
    if (amount < 50000) console.log("Taking businness" + amount);
    else {
      console.log("transaction limit exceed");
    }
  }
}

const rakeshAccount = new CurrentAccount("rakesh k", 2000);
//   rakeshAccount.deposit(1000);
// rakeshAccount.#balance = "Hello";//balance field is private//ab koi invalid input nahi de payga but set karne ke ham apna banayenge
//rakeshAccount.setBalance(400)//abhi kam nahi huwa hai(inNam)

//setter and getter are accessing the value outside the class
rakeshAccount.takeBussinnesLoan(40000)
console.log(rakeshAccount); //ab lastyly normal property call karna hota hoi

//Ya same const BankAccount=class{...}
