function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
   async function getPokemonInfo() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    
    try {
      const response = await fetch(url);
      const pokemonData = await response.json();
  
      // Exibindo informações do Pokémon
      const pokemonInfo = document.getElementById('pokemonInfo');
      const pokemonImage = document.getElementById('pokemon-image');
      const pokemonNome = document.getElementById('pokemonNome');
      console.log(pokemonData);
  
      // Criando uma lista de habilidades
      const abilitiesList = pokemonData.abilities.map(ability => capitalizeFirstLetter(ability.ability.name)).join(', ');
  
      pokemonInfo.innerHTML = `
        <p id="identificacao-pokemon">ID: ${pokemonData.id}</p>
        <p id ="altura-pokemon">Altura: ${pokemonData.height}</p>
        <p id="largura-pokemon">Largura: ${pokemonData.weight}</p>
        <p id="habilidades-pokemon">Habilidades: ${abilitiesList}</p>
      `
      pokemonImage.innerHTML = `
      <img id="imagem-pokemon"src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">`

      pokemonNome.innerHTML = `
      <h2 id="pokemonNome">${pokemonData.name.toUpperCase()}</h2>`
      
      ;
     
    } catch (error) {
      console.error('Error fetching data:', error);
      const pokemonInfo = document.getElementById('pokemonInfo');
      pokemonInfo.innerHTML = `<p>Error fetching Pokémon information. Please try again.</p>`;
    }
  }