interface IEmployee{
	// members
	Name: string;
	Age: number;
	ID: number | string;

	// methods
	DisplayID:()=>any;
}

export default IEmployee;