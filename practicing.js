let students=[['Arun',24],['Seem',45]];
students[1][2]='hello';
console.log(students);
students.splice(1,0,['Peter',24]);
console.log(students);
console.log(students[2]);