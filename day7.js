// Array


let fruits = ["Apple", "Banana", 12];
console.log(fruits);

fruits[1] = "cherry";

console.log(fruits[0]);
console.log(typeof fruits[3]);


console.log(fruits.pop());  //12
console.log(fruits.pop());  //cherry
console.log(fruits);


fruits.push("Hello");
console.log(fruits);
console.log("---------------------------");

fruits.unshift("world");
console.log(fruits);

fruits.shift();
console.log(fruits);

for(let i =0;i<=10;i++){
    console.log(i);  
}

for(let values of fruits){
    console.log(values);
}

// --------------------------------------------------------


// Object

let student = {
  name: "Jeo",
  age: 20,
  course: "JavaScript",
  fun: function (){
    console.log("Hello from function...");
    return 10;
  }
};
console.log(student.age);
console.log(student["course"]);


// Modify
student.age = 40;
console.log(student.age);


// Adding
student.city = "chennai";
console.log(student.city);

// deleting
delete student.age
console.log(student);

console.log(student.fun());
student.fun();


// IN


for (let key in student){
    console.log(student[key]);
}


let students = [
    {name:'jeo',age:15},   //0
    {name:"Jhon",age:17},  //1
    {name:'Jack',age:15},  //2
    {name:"King",age:17},  //3
];

console.log(students[2].age);


