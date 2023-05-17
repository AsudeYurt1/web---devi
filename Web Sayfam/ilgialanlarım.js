var liste = document.getElementById("liste");

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach(element => {
      liste.innerHTML += element.body;
    });
  } catch (error) {
    console.log(error);
  }
}

fetchData();