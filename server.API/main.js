const Telefon = document.querySelector('#telefonlar')
const Kampyuter = document.querySelector("#noutbook");
const cards = document.querySelector(".cards");
const btn = document.querySelector('#Bos')
const APIBtn = document.querySelector("#API")
const APIBtn1 = document.querySelector("#API1")
const APIBtn2 = document.querySelector("#API2");


let API = "http://localhost:3000/Maxsulotlar";
fetch(API)
  .then((data) => data.json())
  .then((data) =>Addproduct(data));

function Addproduct(data) {
  data.forEach((tovar) => {
    // console.log(tovar);
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML += `
       <div class="card">
      
            <img src="${tovar.img}" alt="asd">
            <h3>${tovar.title}</h3>
            <p>${tovar.price} so'm</p>
            <div class = "btnn"> 
            <button id = "Bos">Add</button>
           </div>
             
        </div>`;
        cards.append(card)
  });
}




function ADDpost() {
  fetch(API, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      id: Date.now(),
      img: "https://assets.asaxiy.uz/product/main_image/desktop//659a72a385ec0.jpeg.webp",
      title: " Смартфон Samsung Galaxy A15 8/256GB Blue",
      price: 299999590,
      category: "Telefon",
    }),
  })
    .then((data) => console.log(data))
}
function deleteData(id) {
  fetch(`http://localhost:3000/Maxsulotlar/${id}`, {
    method: "DELETE",
  });
}
function EditPUT(id) {
  fetch(`http://localhost:3000/Maxsulotlar/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      id: Date.now(),  
      img: "https://assets.asaxiy.uz/product/main_image/desktop//659a72a385ec0.jpeg.webp",
      title: " Смартфон Samsung Galaxy A15 8/256GB Blue",
      price: 29999959000,
      category: "Telefon",
    }),
  });
}


APIBtn.addEventListener('click',()=>{
    
    ADDpost();
    alert('API ga malumot qoshildi !! Brauzerga refreshdan song qoshiladi')
})
let count = 0;
let savat = document.querySelector(".nol");
APIBtn2.addEventListener('click',()=>{
  count++
  savat.te = count
})
// APIBtn1.addEventListener('click',()=>{
//     deleteData(1); 
// })
// APIBtn2.addEventListener('click',()=>{
//     EditPUT(2);
// })
//////////////////////////////////////////ishlamayapti
const uy = document.querySelector("#uy-jihozlari");

function filter(product,category){
     product.filter((p)=>p.category === category)
}

uy.addEventListener("click", (products) => {
  const filteredProducts = products.filter(
    (p) => p.category === "uy-jihozlari"
  );
  ADDpost(filteredProducts);
});

// });
// console.log(Telefon);









//   const form = document.querySelector('form')
//     form.addEventListener('submit',(e)=>{
//         e.preventDefault()

//         const file = form.file.files

//         if(file.length > 0 && file[0].type === "image/jpg"){
//             console.log('togri');

//         }else{
//             console.log('malumot notogri');

//         }

//     })

//POST