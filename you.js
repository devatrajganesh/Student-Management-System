let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    if (name === "" || email === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        email: email,
        course: course
    };

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";

    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        let row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td>
                    <button class="delete-btn" onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

displayStudents();




