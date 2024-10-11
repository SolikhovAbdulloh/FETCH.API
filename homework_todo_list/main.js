// const li = document.querySelectorAll('li')
// const btn = document.querySelector('#btn')
// const ul = document.querySelector('ul')
// li.forEach((e)=>{
//     e.addEventListener("click",()=>{
//         e.remove()
//     })
// })

// btn.addEventListener('click',()=>{
//     let li = document.createElement('li')

//     li.innerHTML = "qoshilgan-list";

//     ul.append(li)

// })
// ul.addEventListener('click',(e)=>{
//     if(e.target.nodeName ==='LI'){
//         e.target.remove();
//     }
// })

// To do list

// const input = document.querySelector("input");
// const ul = document.getElementById("ul");
// const btn = document.querySelector("#btn");
// const data = JSON.parse(localStorage.getItem('data')) || []

// btn.addEventListener("click", () => {

//   if (input.value !== "") {
//     let li = document.createElement("li");
//     li.innerHTML ='<i class="fa-solid fa-check fa-beat-fade" style="color: #63e6be;"></i>'+ input.value;

//     let dlt = document.createElement("button");
//     dlt.innerHTML = "🗑️Delete";

//     dlt.addEventListener("click", () => {
//       ul.removeChild(li);
//     });

//     li.appendChild(dlt);

//     ul.appendChild(li);

//     input.value = "";
//   } else {

//     alert("Iltimos, so'z kiriting");
//   }
// });

// Local Storage ga qoshilgan varianti
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const btn = document.querySelector("#btn");

let data = JSON.parse(localStorage.getItem("data")) || [];

 


const renderList = () => {
  ul.innerHTML = "";
  data.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML =
      '<i class="fa-solid fa-check fa-beat-fade" style="color: #63e6be;"></i>' +
      item.matn;

    let dlt = document.createElement("button");
    dlt.innerHTML = "🗑️ O'chirish"

    let times = document.createElement('li')

    times.innerHTML = item.time;

    let edit = document.createElement("button");
    edit.innerHTML = "✏️ Tahrirlash";

    dlt.addEventListener("click", () => {
      data.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(data));
      renderList();
    });

    edit.addEventListener("click", () => {
      let newName = prompt("O'zgartiring", item.matn);
      if (newName !== null && newName !== "") {
        data[index].matn = newName;
        localStorage.setItem('data',JSON.stringify(data))
        renderList();
     ul.appendChild(times);

      }
    });

    li.appendChild(edit);
    li.appendChild(dlt);
    ul.appendChild(li);
    ul.appendChild(times);
  });
};

btn.addEventListener("click", () => {
  if (input.value !== "") {
    let sana = {
        matn: input.value,
        time :new Date().toLocaleString()
    }
    data.push(sana);
    localStorage.setItem("data", JSON.stringify(data));

    renderList();
    input.value = "";
  } else {
    alert("Iltimos, so'z kiriting");
  }
});

renderList();

// 3-variant

// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const ul = document.getElementById("ul");
// let id = null;

// let data = JSON.parse(localStorage.getItem("data")) || [];

// btn.addEventListener("click", () => {
//   let a = {
//     id: data[data.length - 1]?.id + 1 || 0,
//     key1: input.value,
// };

//   data.push(a);

//   localStorage.setItem("key", JSON.stringify(data));

//   let li = document.createElement("li");

//   li.textContent = input.value;

//   ul.appendChild(li);

//   li.addEventListener("click", (value) => {
//     li.remove();

//     data.forEach((value, index) => {
//       let deleteId = data.findIndex((item) => item.id === value.id);
//       if (deleteId !== -1) {
//         data.splice(deleteId, 1);
//         localStorage.setItem("key", JSON.stringify(data));
//       }
//     });

//   });
// });
