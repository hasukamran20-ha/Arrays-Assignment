
let students = ["Ali", "Ahmed", "Sara"];

// Display all students
function displayStudents() {
    let result = "";

    console.clear();
    console.log("All Students:");

    for (let i = 0; i < students.length; i++) {
       result = result + students[i] + "<br>";
        console.log(students[i]);
    }

    document.getElementById("output").innerHTML = result;
}

// Search student
function searchStudent() {
    let name = prompt("Enter student name");
    let found = false;

    for (let i = 0; i < students.length; i++) {
        if (students[i] === name) {
            found = true;
        }
    }

    if (found === true) {
        document.getElementById("output").innerHTML = name + " Found";
        console.log(name + " Found");
    } else {
        document.getElementById("output").innerHTML = "Student Not Found";
        console.log("Student Not Found");
    }
}

// Add student using push()
function addStudent() {
    let name = prompt("Enter student name");

    if (name !== null && name !== "") {
        students.push(name);

        document.getElementById("output").innerHTML = name + " Added";
        console.log(name + " Added");
        console.log("Updated Students:", students);
    }
}

// Remove student using pop()
function removeStudent() {
    if (students.length > 0) {
        let removed = students.pop();

        document.getElementById("output").innerHTML = removed + " Removed";
        console.log(removed + " Removed");
        console.log("Updated Students:", students);
    } else {
        document.getElementById("output").innerHTML = "No Students";
        console.log("No Students");
    }
}

// Count students using length
function countStudents() {
    document.getElementById("output").innerHTML =
        "Total Students: " + students.length;

    console.log("Total Students:", students.length);
}

// Display names in uppercase
function uppercaseNames() {
    let result = "";

    console.clear();
    console.log("Names in Uppercase:");

    for (let i = 0; i < students.length; i++) {
       let name = students[i].toUpperCase();
        result = result + name + "<br>";
        console.log(students[i].toUpperCase());
    }

    document.getElementById("output").innerHTML = result;
}

