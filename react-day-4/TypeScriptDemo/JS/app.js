"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
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
// manufactures employee
var CreateEmployee = function (employeeData) {
    return new Employee(employeeData.Name, employeeData.ID, true);
};
var Employee1 = new Employee('Venki', 263257, true);
Employee1.GetEmployeeName();
// use the create employee
var NewlyCreateEmployee = CreateEmployee({
    Name: 'Randy Orton',
    Age: 9000,
    ID: 263258,
    DisplayID: function () { return _this.ID; }
});
console.log(NewlyCreateEmployee);
//# sourceMappingURL=app.js.map