import IEmployee from './Interfaces/IEmployee';
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

// manufactures employee
const CreateEmployee=(employeeData:IEmployee):Employee=>{
	return new Employee(employeeData.Name,
						employeeData.ID,
						true);
}

const Employee1 = new Employee('Venki', 263257, true);
Employee1.GetEmployeeName();

// use the create employee
const NewlyCreateEmployee:Employee=CreateEmployee({
	Name:'Randy Orton',
	Age:9000,
	ID: 263258,
	DisplayID:()=>this.ID
})

console.log(NewlyCreateEmployee);