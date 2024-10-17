document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelector(".cards");
  const Icon = document.querySelector(".nol"); // Savat soni
  const Button = document.getElementById("view-cart");
  const Items = document.querySelector(".cart-items ul"); // Savatdagi mahsulotlar ro'yxati
  const Section = document.querySelector(".cart-items");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Mahsulotlarni yuklash
  fetch("http://localhost:3000/Maxsulotlar")
    .then((response) => response.json())
    .then((products) => renderCards(products))
    .catch((error) => console.error("Mahsulotlarni yuklashda xatolik:", error));

  // Mahsulotlarni sahifaga chiqarish
  function renderCards(products) {
    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${product.img}" alt="Mahsulot rasmi">
        <h3>${product.title}</h3>
        <p>${product.price} so'm</p>
        <button class="add-to-cart" data-id="${product.id}">Savatga qo'shish</button>
      `;
      // Savatga qo'shish tugmasi bosilganda mahsulotni savatga qo'shish
      card
        .querySelector(".add-to-cart")
        .addEventListener("click", () => addToCart(product));
      cards.appendChild(card);
    });
  }

  // Savatga mahsulot qo'shish
  function addToCart(product) {
    cart.push(product);
    updateCartCount();
    localStorage.setItem("cart", JSON.stringify(cart)); // Savatni saqlash
  }

  // Savat sonini yangilash
  function updateCartCount() {
    Icon.textContent = cart.length;
  }

  // Savatdagi mahsulotlarni ko'rsatish
  Button.addEventListener("click", () => {
    Items.innerHTML = cart
      .map((item) => `<li>${item.title} - ${item.price} so'm</li>`)
      .join(""); // Savatdagi elementlarni chiqarish
    Section.style.display = "block"; // Savatni ko'rsatish
  });

  // Sahifa yuklanganida savat sonini yangilash
  updateCartCount();
});

// Telefon.addEventListener("click", (products) => {
//   ADDpost(filter(products, "Telefon"));
// });

// Kampyuter.addEventListener("click", (products) => {
//   ADDpost(filter(products, "Noutbook"));
// });

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
