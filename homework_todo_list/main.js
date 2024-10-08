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

const input = document.querySelector("input");
const ul = document.getElementById("ul");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.innerHTML = input.value;

    let dlt = document.createElement("button");
    dlt.innerHTML = "Delete";

  
    dlt.addEventListener("click", () => {
      ul.removeChild(li);
    });

   
    li.appendChild(dlt);

    ul.appendChild(li);

  
    input.value = "";
  } else {
 
    alert("Iltimos, so'z kiriting");
  }
});
