<!DOCTYPE html>git 
<html>

<head>
    <title>Student Management System</title>
    <link rel="stylesheet" href="./you.css">
    <script src="./you.js"></script>
</head>
    <style>body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
}

h1 {
    margin-top: 20px;
}

.container {
    margin: 20px;
}

input {
    padding: 8px;
    margin: 5px;
    width: 200px;
}

button {
    padding: 8px 15px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: darkblue;
}

table {
    margin: auto;
    border-collapse: collapse;
    width: 70%;
    background: white;
}

th,
td {
    padding: 10px;
    border: 1px solid gray;
}

th {
    background-color: #333;
    color: white;
}

.delete-btn {
    background-color: red;
}</style>

<body>

    <h1>Student Management System</h1>

    <div class="container">
        <input type="text" id="name" placeholder="Enter Name">
        <input type="email" id="email" placeholder="Enter Email">
        <input type="text" id="course" placeholder="Enter Course">
        <button onclick="addStudent()">Add Student</button>
    </div>

    <h2>Student List</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody id="studentTable">
        </tbody>
    </table>

    <script src="script.js"></script>
</body>

</html>
