const card = document.querySelector("#card");
const Mens = document.querySelector("#Erkaklar");
const Womens = document.querySelector('#Ayollar');
const All = document.querySelector('#All');
const Gold = document.querySelector("#Zargarlik");
const Texnico = document.querySelector("#Texnika");
let sonlar = document.querySelector(".sonlar");
let savat = document.querySelector(".savat");
let count = 0;
let product = [];
let Btn = document.querySelectorAll(".Btn");




fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((value) => { product = value; })

  .catch((error) => {
    console.error("Xatolik bo'ldi tekshirib ko'ring:", error);
  });







Mens.addEventListener("click", () => {

  const Erkak = filter(product, "men's clothing");

  Ekranga(Erkak); 
});

Womens.addEventListener('click',() => {

  const women = filter(product, "women's clothing");   

  Ekranga(women)
})

Gold.addEventListener('click', () => {

  const gold = filter(product, "jewelery");

  Ekranga(gold);
})

Texnico.addEventListener('click',() => {

  const texnico = filter(product,'electronics')

  Ekranga(texnico)

})

All.addEventListener('click',() => {

  const all = product.filter((product)=>product)

  Ekranga(all)

});

function filter(product, category) {
  return product.filter((product) => product.category === category);
}


function Ekranga(product) {
  card.innerHTML = "" ; 
  product.forEach((product) => {
    let creatediv = document.createElement("div");
    creatediv.innerHTML = `
      <div class = "cards">
        <img src="${product.image}" alt="rasm bor" style="width: 80%; display:flex; justify-content: center; align-items:center;  height: 300px;">
        <p class="title">${product.title}</p>
        <p class ="price">Narxi: <span>${product.price}$</span></p>
        <button class="savat">Savatga qo'shish</button>

      </div>
    `;
    card.appendChild(creatediv);
  });
 
}

 
 
  

card.addEventListener("click", (e) => {

  if(e.target.classList.contains('savat')){

    count++;
    sonlar.textContent = count;
  }
});


