var listele=document.getElementById("listele")
let data = fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response.json())
.then(veri=>{
    veri.forEach(element => {
        if(element.id<=20)
        listele.innerHTML+=`<li>${element.body}</li>`
    });
})