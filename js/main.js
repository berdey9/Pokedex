const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon";
for (let i = 1; i <= 151; i++) {
  fetch(URL + i)
    .then((response) => response.json())
    .then((data) => mostrarPokemon(data));
}
const mostrarPokemon = (data) => {
  document.createElement("div");
  div.classList.add("pokemon");
  div.innerHtml = `<p class="pokemon-id-back">#025</p>
            <div class="pokemon-imagen">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                alt="pikachu"
              />
              <div class="pokemon-info">
                <div class="nombre-contenedor">
                  <p class="pokemon-id">#025</p>
                  <h2 class="pokemon-nombre">Pikachu</h2>
                  <div class="pokemon-tipos">
                    <p class="electric tipo">Electric</p>
                    <p class="fighting tipo">Fighting</p>
                  </div>
                  <div class="pokemon-stats">
                    <p class="stat">4M</p>
                    <p class="stat">60KG</p>
                  </div>
                </div>
              </div>
            </div>`;
};

/*<div class="pokemon">
            <p class="pokemon-id-back">#025</p>
            <div class="pokemon-imagen">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                alt="pikachu"
              />
              <div class="pokemon-info">
                <div class="nombre-contenedor">
                  <p class="pokemon-id">#025</p>
                  <h2 class="pokemon-nombre">Pikachu</h2>
                  <div class="pokemon-tipos">
                    <p class="electric tipo">Electric</p>
                    <p class="fighting tipo">Fighting</p>
                  </div>
                  <div class="pokemon-stats">
                    <p class="stat">4M</p>
                    <p class="stat">60KG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>*/
