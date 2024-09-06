async function fetchData()
{
    try
    {
        const pokemoneName = document.querySelector('#name').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemoneName}`);

        if(!response.ok)
        {
            throw new Error("Could not fetch resources");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemon = data.name;
        const pokemonName2 = document.querySelector('#name2');
        const imgElement = document.querySelector('#pokemonsprite');
        
        pokemonName2.innerHTML = pokemon;
        pokemonName2.style.fontFamily = "Roboto, sans-serif";
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error)
    {
        console.log(error);
    }
}
