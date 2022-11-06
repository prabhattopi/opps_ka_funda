
//In classes function are methods
// In classes variables are properties

function BankAccount(customerName,balance=0){
this.customerName=customerName;
this.accountName=Date.now();
this.balance=balance;


this.deposit=function(amount){
    this.balance=this.balance+amount

}
this.withdraw=(amount)=>{
    this.balance-=amount
}
   

}

// const rakeshAccount=new BankAccount("Rakesh k",1000)
// rakeshAccount.deposit(1000)
// rakeshAccount.withdraw(1000)
console.log(rakeshAccount)