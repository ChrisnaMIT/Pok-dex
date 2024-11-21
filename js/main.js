const boutonPoke = document.querySelector('.boutonPoke')
const colonne =document.querySelector('.colonne')


boutonPoke.addEventListener('click', faitUneCartePoke);
console.log('test1')

function faitUneCartePoke() {
    fetch('https://pokebuildapi.fr/api/v1/pokemon')
        .then(res => res.json())
        .then(data => {

            const randomPoke = data[Math.floor(Math.random() * data.length)]; // permet de choisir aléatoirement un pokemon

            const cardPoke =
                `
            <div class="card" style="width: 18rem; height: 480px" >
              <img src="${randomPoke.image}" class="card-img-top" alt=""> 
              <div class="card-body">
                <h5 class="card-title">${randomPoke.name}</h5>
                <p class="card-text"></p>
              </div>
            </div>

                `;
            colonne.innerHTML += faitUneCartePoke(); // permet de mettre à la suite les cartes quand j'appuie sur le bouton
        })

}
console.log('test2')




