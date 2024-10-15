// // sessionStorage.setItem("person", JSON.stringify({ id: 1, name: "Umar" }));
// // sessionStorage.removeItem("person");
// // sessionStorage.clear();
// // console.log(JSON.parse(sessionStorage.getItem("person")));

// // document.cookie =
// //   "foydalanuvchi= Davron; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// // console.log(
// //   JSON.stringify({
// //     id: 1,
// //     name: "Xolmirza",
// //     lastname: "Gulmirzayev",
// //     age: 22,
// //   })
// // );

// // console.log("Salom 1");

// // for (let i = 0; i < 1000; i++) {
// //   console.log("salom");
// // }
// // console.log("Salom 2");

// // Beckend
// // HTTPXmlrequest
// // Asynxron
// // Synxron\

// // console.log("1");

// // setTimeout(() => {
// //   console.log("2");
// // }, 0);
// // console.log("3");
// const tbody = document.querySelector(".tbody");
// const http = new XMLHttpRequest();
// const getData = (cb) => {
//   http.addEventListener("readystatechange", () => {
//     if (http.readyState === 4 && http.status === 200) {
//       cb(null, JSON.parse(http.response));
//     } else if (http.readyState === 4) {
//       cb("Data is not defined", null);
//     }
//   });
//   http.open("GET", "https://jsonplaceholder.typicode.com/users");
//   http.send();
// };

// getData((err, data) => {
//   if (!err) {
//     data.forEach((value) => {
//       tbody.innerHTML += `
//      <tr>
//      <td>${value.id}</td>
//      <td>${value.name}</td>
//      <td>${value.username}</td>
//      <td>${value.email}</td>
//      <td><a href='https://${value.website}'>${value.website}</a></td>
//      <td><a href='tel:${value.phone}'>${value.phone} </a></td>
//    </tr>

//      `;
//     });
//   }
// });
// //Collback hall
// //GET
// //DELETE
// //PUT
// //POST

// const request = new XMLHttpRequest();

// const getData2 = () => {
//   return new Promise((res, rej) => {
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         res(JSON.parse(request.response));
//       } else if (request.readyState === 4) {
//         rej("Not defined");
//       }
//     });
//     request.open("GET", "https://jsonplaceholder.typicode.com/users");
//     request.send();
//   });
// };

// getData2()
// .then((value) => console.log(value))
// .catch((error) => console.log(error));

// function promiseFuncton(key) {
//   return new Promise((res, rej) => {
//     if (key > 18) {
//       res("Kotta");
//     } else {
//       rej("Kichik");
//     }
//   });
// }
// promiseFuncton(20)
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error))
//   .finally(console.log("salom"));

// fetch("https://fakestoreapi.com/products")
//   .then((data) => data.json())
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// const btn = document.querySelector('#btn')
// let count = 0;
// const sonlar = document.querySelector('#sonlar')
// btn.addEventListener('',()=>{
//     count++ 
//     sonlar.textContent = count;   
// })

// localStorage.setItem("student", JSON.stringify({ id: 1 }));
// console.log(JSON.parse(localStorage.getItem("student")));

// let p = []
// const Womens = document.querySelector("#womens");
// const filter = document.querySelector('.filter')


// fetch("https://fakestoreapi.com/products")

// .then((data)=> data.json())
// .then((value) => {p = value;});
 

// Womens.addEventListener('click',() => {
//     let ayol = p.filter((e) => e.category == "women's clothing");
//     print(ayol)
// })

// function print(products){
//         products.forEach((products) =>{
//         let divUp = document.createElement('div')
//         divUp.innerHTML = `
//          <div>
//         <h1>${products.title}</h1>
//         <p>${products.price}</p>
//         <img src = "${products.image}"/>
//        </div>


        
//         `;
//         filter.appendChild(divUp)

//     })
   
    
    
// }

//POST

