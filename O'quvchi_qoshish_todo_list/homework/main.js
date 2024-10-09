let students = JSON.parse(localStorage.getItem("students")) || [];

// DOM elementlar bilan ishlash
const studentForm = document.getElementById("studentForm");
const studentsTable = document.querySelector(".students-table tbody");

// Talabalarni jadvalga qo'shish funksiyasi
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
                <td><button class="btn btn-danger" onclick="deleteStudent(${index})">O'chirish</button></td>
            </tr>
        `;
  });
}

// Talaba qo'shish formasi topshirilganda
studentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Formadagi ma'lumotlarni olish
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const group = document.getElementById("group").value;
  const doesWork = document.getElementById("doesWork").checked;

  // Yangi talaba obyekti
  const newStudent = { firstName, lastName, group, doesWork };

  // Talabani massivga qo'shish
  students.push(newStudent);

  // LocalStorage-ga saqlash
  localStorage.setItem("students", JSON.stringify(students));

  // Jadvalni yangilash
  displayStudents();

  // Modalni yopish
  const modalElement = document.getElementById("studentModal");
  const modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();

  // Formani tozalash
  studentForm.reset();
});

// Talabani o'chirish funksiyasi
function deleteStudent(index) {
  if (confirm("Talabani o'chirmoqchimisiz?")) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
  }
}

// Dastlab jadvalni chiqarish
window.addEventListener("DOMContentLoaded", displayStudents);
