let students = JSON.parse(localStorage.getItem("students")) || [];

let selectedStudentIndex = null; 

const studentForm = document.getElementById("studentForm");

const studentsTable = document.querySelector(".students-table tbody");

const studentModalTitle = document.getElementById("studentModalLabel");

const firstNameInput = document.getElementById("firstName");

const lastNameInput = document.getElementById("lastName");

const groupInput = document.getElementById("group");

const doesWorkInput = document.getElementById("doesWork");

function displayStudents() {

    studentsTable.innerHTML = "";

    students.forEach((student, index) => {

        studentsTable.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.group}</td>
                <td>${student.doesWork ? "Ha" : "Yo'q"}</td>
                <td>
                    <button class="btn btn-primary" onclick="editStudent(${index})">Tahrirlash</button>
                    <button class="btn btn-danger" onclick="deleteStudent(${index})">O'chirish</button>
                </td>
            </tr>
        `;
  });
}

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const group = groupInput.value;
  const doesWork = doesWorkInput.checked;

  const student = { firstName, lastName, group, doesWork };

  if (selectedStudentIndex === null) {
    students.push(student);
  } else {
    students[selectedStudentIndex] = student;
    selectedStudentIndex = null; 
  }

  localStorage.setItem("students", JSON.stringify(students));

  displayStudents();

  const modalElement = document.getElementById("studentModal");
  const modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();

  studentForm.reset();
});

function deleteStudent(index) {
  if (confirm("Talabani o'chirmoqchimisiz?")) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
  }
}

function editStudent(index) {
  selectedStudentIndex = index; 
  const student = students[index];

  firstNameInput.value = student.firstName;
  lastNameInput.value = student.lastName;
  groupInput.value = student.group;
  doesWorkInput.checked = student.doesWork;

  studentModalTitle.textContent = "Talabani tahrirlash";
  const modalElement = document.getElementById("studentModal");
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
}

window.addEventListener("DOMContentLoaded", displayStudents);
