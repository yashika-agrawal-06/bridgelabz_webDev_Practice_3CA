class Person {
  constructor(name, age) {
    this.name = name; //we used the this keyword to refer to the current instance of the class
    //if wwe don't use the this keyword, it will refer to the global object and not the current instance of the class
    this.age = age;
  }

  showInfo() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
class User extends Person { //here inheritance is used to create a new class User that inherits from the Person class
  constructor(name, age) {
    super(name, age); //super keyword is used to call the constructor of the parent class

  }
}
const user1 = new User("Yashika", 20); //creating an instance of the User class
user1.showInfo(); //calling the showInfo method on the user1 instance



class BankAccount {   //encapsulation is used to hide the balance of the account from outside access
    #balance; //private field to store the balance of the account
    constructor(startingAmount, accountHolder){
        this.#balance = startingAmount; //initialize the balance with the starting amount
        this.accountHolder = accountHolder; //initialize the account holder name
    }
    deposit(amount) { //method to deposit money into the account
        this.#balance += amount; //add the deposited amount to the balance
    }
    withdraw(amount) { //method to withdraw money from the account
       
            this.#balance -= amount; //subtract the withdrawal amount from the balance
    }
    getBalance() { //method to get the current balance of the account
        console.log(`${this.accountHolder} has a balance of: ${this.#balance}`);
        return this.#balance; //return the current balance
    }
}


const acc=new BankAccount(1000, "Yashika"); //creating an instance of the BankAccount class with a starting amount of 1000 and account holder name "Yashika"
acc.deposit(2000);
acc.getBalance(); //calling the getBalance method to get the current balance of the account
