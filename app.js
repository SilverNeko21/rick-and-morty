document.getElementById("button").addEventListener("click", search);
const result = document.querySelector('#result').innerHTML;

axios
  .get('https://rickandmortyapi.com/api/character/')
  .then(response => {
    search(response);
  })
  .catch(error => {
    console.log('error', error);
  });


function search(response){ 
  result.innerHTML = response
  .map(function charac {
      return `
        <img src="${results.image}">
        <h1> Name: ${results.name}</h1>
      `;
    })
    .join('');
};
