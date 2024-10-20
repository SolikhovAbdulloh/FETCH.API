let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let likes = JSON.parse(localStorage.getItem("likes")) || [];

const cards = document.querySelector(".cards");
const Icon = document.querySelector(".nol");
const Button = document.getElementById("view-cart");
const Items = document.querySelector(".cart-items ul");
const Section = document.querySelector(".cart-items");
const tel = document.querySelector("#Telefonlar");
const uy = document.querySelector("#uy-jihozlari");
const kampyuter = document.querySelector("#Noutbook");

const yurak = document.querySelector("#yurak");
const Section2 = document.querySelector(".cart-likes");
const cart_likes = document.querySelector(".cart-likes ul");
const count_like = document.querySelector(".like");
const like = document.querySelector(".fa-heart");

fetch("http://localhost:3000/Maxsulotlar")
  .then((data) => data.json())
  .then((data) => {
    products = [...data];
    renderCards(products);
    console.log(products);
  })
  .catch((error) => console.error("Mahsulotlarni yuklashda xatolik:", error));

function renderCards(products) {
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <i class="fa-solid fa-heart"></i>
        <img src="${product.img}" alt="Mahsulot rasmi">
        <h3>${product.title}</h3>
        <p>${product.price} so'm</p>
        <button class="add-to-cart" data-id="${product.id}">Savatga qo'shish</button>
      `;

    card
      .querySelector(".add-to-cart")
      .addEventListener("click", () => addToCart(product));
    card
      .querySelector(".fa-heart")
      .addEventListener("click", () => addToLikes(product)); // Like qo'shish uchun
    cards.appendChild(card);
  });
}

tel.addEventListener("click", () => {
  let result = filters(products, "Telefon");
  clear();
  renderCards(result);
});

uy.addEventListener("click", () => {
  let result = filters(products, "uy-jihozlari");
  clear();
  renderCards(result);
});

kampyuter.addEventListener("click", () => {
  let result = filters(products, "Noutbook");
  clear();
  renderCards(result);
});

function filters(products, category) {
  return products.filter((p) => p.category === category);
}

function addToCart(product) {
  cart.push(product);
  updateCartCount();
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToLikes(product) {
  likes.push(product); 
  updateLikeCount();
  localStorage.setItem("likes", JSON.stringify(likes)); 
}

function clear() {
  cards.innerHTML = "";
}

cart.length = 0;
likes.length = 0;
function updateCartCount() {
  Icon.textContent = cart.length;
}

function updateLikeCount() {
  count_like.textContent = likes.length; 
}

Button.addEventListener("click", () => {
  
  Items.innerHTML = cart
    .map(
      (item) =>
        `<img src="${item.img}" alt="Mahsulot rasmi" style="width:100%"><li>${item.title} - ${item.price} so'm</li>`
    )
    .join("");
  Section.style.display = "flex";
  clear();
});

yurak.addEventListener("click", () => {
  cart_likes.innerHTML = likes
    .map(
      (item) =>
        `<img src="${item.img}" alt="Mahsulot rasmi" style="width:100%"><li>${item.title} - ${item.price} so'm</li>`
    )
    .join("");
  Section2.style.display = "flex"; 
  clear();
});

updateCartCount();
updateLikeCount();

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
