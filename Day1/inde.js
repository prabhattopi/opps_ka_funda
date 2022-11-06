function Employee(a,b){
    // let x={}
    this.name=a
    this.proffession=b

    //  return x
    }
   
 
    let Student1= new Employee("Rishab","FullstackDeveloper")
    Employee.prototype.coding=function(){
        console.log(this.name)
    }
   Student1.coding()
    