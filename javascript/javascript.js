var name = "Jack";
var age = 23;

var message = "Hi, my name is " +name + " and I am " + age + " years old.";

// 		alert(message);
console.log(message);


var student = {
		firstName: "John",
		lastName: "Parker",
		age: 7
};


function studentName(student) {
	console.log(student.firstName + student.lastName);
}

var student1 = new Object();
student1.firstName = "Dave";
student1.lastName = "Franco";

var student2 = {};
student2.firstName = "James";
student2.lastName = "Franco";

var students = [];
students.push(student);
students.push(student1);
students.push(student2);

for (var index= 0; index < students.length; index++) {
	studentName(students[index]);
}

var greeting = {
		type: "hello",
		greeting: function() {
			return this.type + " jack";
		}
};
console.log(greeting.greeting());

function person(name, height, weight) {
	this.name = name;
	this.height = height;
	this.weight = weight;
	this.greeting = function() {
		return "Hi, I'm " + this.name + ". I am " + height + "cm and " + weight + "kgs.";
	};
}

var person = new person("Jack", 183, 80);
console.log(person.greeting());



