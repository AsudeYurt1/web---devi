var listele=document.getElementById("listele")
let data = fetch(" https://jsonplaceholder.typicode.com/photos")
.then(response =>response.json())
.then(veri=>{

   veri.forEach(element => {
    listele.innerHTML+=`<li>${element.title}</li>`
   });

})