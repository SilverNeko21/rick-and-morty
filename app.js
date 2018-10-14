document.getElementById("button").addEventListener("click", click);
const result = document.querySelector('#result');
const searchPage = document.querySelector('#searchpage');
const exit = document.querySelector('#exit');

function click(){
ShowResult();
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
        <div class='char'>
          <div class='bigdiv'>
            <div class='image' style='background-image:url(${response.image})' >
              <h1>${response.name}</h1>
            </div>
            <div class='text'>
              <h3> Species: ${response.species}</h3>
              <h3> Origin: ${response.origin.name}</h3>
              <h3> Status: ${response.status}</h3>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
};

function ShowResult() {
  searchPage.style.display = 'none'
  result.style.display = 'inline-flex';
  exit.style.display = 'inline-block';
}

function ShowSearch() {
  searchPage.style.display = 'inline-flex';
  result.style.display = 'none';
  exit.style.display = 'none'
}