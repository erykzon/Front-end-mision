const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeNamein = pokeNameInput.value;
    pokeNamein = pokeNamein.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNamein}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("../Pokedex/img/bad.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.dream_world.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            /* let id = data.id;
            pokeid(id);
            console.log(id); */
            let poketipos = data.types;
            /* .map(typ => typ.type.name); */
            poketipo(poketipos);
            console.log(poketipos);
            let pokestat = data.stats;
            pokeStats(pokestat);
            console.log(pokestat);
            let pokemovi = data.moves.slice(0,4);
            pokeMovis(pokemovi);
            console.log(pokemovi);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const poketipo = (type) =>{
    const types = document.getElementById("poke-types");
    types.innerHTML = '';
    type.forEach(typ => {
        const typTextElement = document.createElement("div");
        typTextElement.textContent = typ.type.name
        types.appendChild(typTextElement);

    });
}

const pokeStats = (stats) =>{
    const types = document.getElementById("poke-stats");
    types.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        types.appendChild(statElement);
    });
}

const pokeMovis =(movis) =>{
    const moves = document.getElementById("poke-moves");
    moves.innerHTML = '';
    movis.forEach(mov => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        statElementName.textContent = mov.move.name;
        statElement.appendChild(statElementName);
        moves.appendChild(statElement);
    });
}