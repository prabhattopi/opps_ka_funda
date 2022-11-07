// class Config{
//     static dbUser="username"
//     static dbPassword="secret";
//     static apiToken="abcd";

// }
// console.log(Config.dbUser)

// //Static properties and Methods

// //Utility functions

// //Increment

// // let id=1//but class ke bahar antipatter
class User {
  static id = 1;
  static cache = {
    1: "some value",
  };
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    //this nahi kar sakte id pe because it refers instance
    //this.id=this.id❌❌❌
    //id is static no this
    this.id = User.id++;
  }

  //    static chekcCache(){
  //     console.log(this.cache)
  //    }
  //   static hasInCache(){
  //     //ab this chalega kyuki static se static chalega
  //     this.chekcCache()

  //   }
  static {
    //ek barr hi run hoga block kuch initialize karna kar lo
    console.log("Intialize");
  }

  static Blocking() {
    console.log(User.cache);
  }
  //static cannot be called over instance
  //khud class ke uper store not like normal
  //normal store in instance but static in class
  //   static compareByAge(user1, user2) {
  //     return user1.age - user2.age;
  //   }
  //   static compareByIncome(user1, user2) {
  //     return user1.income - user2.income;
  //   }
}

// const user1 = new User("Rakesh K", 30, 5000); //ise instanc bannana bolte hai

// const user2 = new User("Joh Doe", 40, 10000);
// const user3 = new User("Prabhat", 20, 7000);

// // const users = [user1, user2, user3];
// // // users.sort(User.compareByAge)//clean and readable
// // users.sort(User.compareByIncome); //clean and readable

// console.log(user1,user2,user3);
