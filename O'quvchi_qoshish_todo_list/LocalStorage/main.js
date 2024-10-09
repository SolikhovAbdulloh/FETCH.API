// const age = 14;

// const name = 'Asad';



// localStorage.setItem('name',name) // key: nomi name value:Asad saqlandi localstrage ga
// localStorage.setItem('age',age) // key: nomi age value: 14  saqlandi localstrage ga

// const a = localStorage.getItem("age") //age key: dagi value ni olib beradi. 'Asad' chiqadi 

// const b = localStorage.getItem('name')//name dagi value ni olib beradi. '14' chiqadi

// console.log(a); // Asad

// console.log(b);// 14

// localStorage.clear() barchasini ochiradi.

// localStorage.removeItem('age') faqat berilgan keyni ochiradi.


// const user = { name: "John", age: 99 };

// localStorage.setItem("user", JSON.stringify(user));


// // const count = localStorage.length // localStorage ni uzunligini aniqlaydi.

// // console.log(count);
// const user1 = JSON.parse(localStorage.getItem("user"));
// console.log(user1.age);  // "John"


localStorage.setItem('data','salom')
localStorage.setItem('data',JSON.stringify({id:12}))

console.log(JSON.parse(localStorage.getItem('data')));