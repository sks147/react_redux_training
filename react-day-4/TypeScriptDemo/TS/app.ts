class Employee{
	// constructor with members
	constructor(public Name:string, 
				public ID:number, 
				public OnPayroll:boolean){}
	// methods
	GetEmployeeName():string{
		console.log(`Employee name is : ${this.Name}`);
		return this.Name;
	}
}

const Employee1 = new Employee('Venki', 263257, true);
Employee1.GetEmployeeName();