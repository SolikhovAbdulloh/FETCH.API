fetch("https://jsonplaceholder.typicode.com/posts",{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        UserId:1,
        title:'j-t Nazaryasi',
        body:"nimadir",

    })

});
th