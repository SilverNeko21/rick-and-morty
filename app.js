document.getElementById("button").addEventListener("click", click);
const result = document.querySelector('#result');

function click(){
const text = document.getElementById("search").value; 
axios
  .get(`https://rickandmortyapi.com/api/character/?species=${text}`)
  .then(response => {
    search(response);
  })
  .catch(error => {
    console.log('error', error);
  });

axios
  .get(`https://rickandmortyapi.com/api/character/?name=${text}`)
  .then(response => {
    search(response);
  })
  .catch(error => {
    console.log('error', error);
  });
}

function search(response){ 
  console.log('response', response);
    result.innerHTML = response.data.results
  
    .map(function(response) { // ooga booga, make theis a function 
      return `
        <img src="${response.image}">
        <h1> Name: ${response.name}</h1>
        <h3> Species: ${response.species}</h3>
        <h3> Origin: ${response.origin.name}</h3>
        <h3> Status: ${response.status}</h3>
        <br>
        <br>
      `;
    })
    .join('');
};
