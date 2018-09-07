var Employee = /** @class */ (function () {
    // constructor with members
    function Employee(Name, ID, OnPayroll) {
        this.Name = Name;
        this.ID = ID;
        this.OnPayroll = OnPayroll;
    }
    // methods
    Employee.prototype.GetEmployeeName = function () {
        console.log("Employee name is : " + this.Name);
        return this.Name;
    };
    return Employee;
}());
var Employee1 = new Employee('Venki', 263257, true);
Employee1.GetEmployeeName();
//# sourceMappingURL=app.js.map