const card = document.querySelector("#card");
const Mens = document.querySelector("#Erkaklar");
const Womens = document.querySelector('#Ayollar');
const All = document.querySelector('#All');
const Gold = document.querySelector("#Zargarlik");
const Texnico = document.querySelector("#Texnika");
let product = [];



fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((value) => {
    console.log(value);
    product = value; 
  })
  .catch((error) => {
    console.error("Xatolik:", error);
  });

Mens.addEventListener("click", () => {

  const Erkak = product.filter(
    (product) => product.category === "men's clothing");
    Ekranga(Erkak); 
});

Womens.addEventListener('click',()=>{

  const women = product.filter(
    (product) => product.category === "women's clothing");
    Ekranga(women)
})

Gold.addEventListener('click', ()=>{

  const gold = product.filter((product) => product.category === "jewelery");
  Ekranga(gold)
})

Texnico.addEventListener('click',()=>{

  const tex = product.filter((product) => product.category === 'electronics');

  Ekranga(tex)

})

All.addEventListener('click',()=>{

  const all = product.filter((product)=> product)

  Ekranga(all)

})

function Ekranga(product) {
  card.innerHTML = ""; 
  product.forEach((product) => {
    let creatediv = document.createElement("div");
    creatediv.innerHTML = `
      <div class = "cards">
        <img src="${product.image}" alt="rasm bor" style="width: 100px; height: 100px;">
        <p class="title">${product.title}</p>
        <p>Price: <span>${product.price}$</span></p>
      </div>
    `;
    card.appendChild(creatediv);
  });
}
