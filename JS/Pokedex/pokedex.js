const pokePhoto = document.getElementById("pokeImg");
const stati = document.getElementById("poke-stats");
const moves = document.getElementById("poke-moves");
const types = document.getElementById("poke-types");

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeNamein = pokeNameInput.value;
    pokeNamein = pokeNamein.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNamein}`;
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.dream_world.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let poketipos = data.types;
            poketipo(poketipos);
            console.log(poketipos);
            let pokestat = data.stats;
            pokeStats(pokestat);
            console.log(pokestat);
            let pokemovi = data.moves.slice(0,4);
            pokeMovis(pokemovi);
            console.log(pokemovi);
        }
    })
    .catch(Error => noEncontrado())
}

const pokeImage = (url) => {
    pokePhoto.src = url;
}


const poketipo = (type) =>{
    types.innerHTML = '';
    type.forEach(typ => {
        const typTextElement = document.createElement("div");
        typTextElement.textContent = typ.type.name
        types.appendChild(typTextElement);

    });
}

const pokeMovis =(movis) =>{
    moves.innerHTML = '';
    movis.forEach(mov => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        moves.classList.add('moves');
        statElement.classList.add('movisN');
        statElementName.classList.add('movisN');
        statElementName.textContent = mov.move.name;
        statElement.appendChild(statElementName);
        moves.appendChild(statElement);
    });
}
const pokeStats = (stats) =>{
    stati.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElement.classList.add('stats');
        statElementName.classList.add('nameS');
        statElementAmount.classList.add('amountS');
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        stati.appendChild(statElement);
    });
}

const noEncontrado = ()=> {
    pokePhoto.src= "./img/psyduck.png";
    types.innerHTML='';
    moves.innerHTML='';
    stati.innerHTML='';

}
