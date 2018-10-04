document.getElementById("button").addEventListener("click", click);
const result = document.querySelector('#result');


function click(){
axios
  .get('https://rickandmortyapi.com/api/character/')
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
      `;
    })
    .join('');
};
