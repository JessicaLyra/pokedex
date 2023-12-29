<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pokémon API Example</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js"></script>
</head>
<body>
<div id="pokedex">
   
  <h1>Pokémon Information</h1>
  
  <label for="pokemonName">Enter Pokémon Name or ID:</label>
  <input type="text" id="pokemonName">
  <button onclick="getPokemonInfo()">Get Info</button>
  <img src="img/pokedex.png" alt="" srcset="">

  <div id="pokemonNome"></div>
  <div id="pokemon-image"></div>
  <div id="pokemonInfo"></div>
</div>

</body>
</html>
