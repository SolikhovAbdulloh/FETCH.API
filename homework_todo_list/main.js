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


const ul_ = document.getElementById('#ul')

const todos = JSON.parse(localStorage.getItem('todos')) || [];


todos.forEach(todo =>{
    let li = document.createElement('li')
   
    li.innerHTML = `${todo} <button>O'chirish</button>`;

    ul_.appendChild(li);
});

       li.querySelector('#btn').onclick = function() {
                todos = todos.filter(t => t !== todo);
                localStorage.setItem('todos', JSON.stringify(todos));
                li.remove();  // DOM-dan olib tashlash
            };
        
        });