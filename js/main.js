const boutonPoke = document.querySelector('.boutonPoke')
const colonne =document.querySelector('.colonne')




console.log('test1')

function faitUneCartePoke() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json)
        .then(data => ` 
  <div class="card" style="width: 18rem;">
  <img src="images/test.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>` )


}
console.log('test2')


boutonPoke.addEventListener('click', faitUneCartePoke);

