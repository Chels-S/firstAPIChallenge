const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

const pokeNameOne = document.getElementById('theFirstName');
const pokeNameTwo = document.getElementById('theSecondName');
const attackNameFirst = document.getElementById('theFirstAttack');
const attackNameSecond = document.getElementById('theSecondAttack');

const nameOne= document.getElementById('firstPokemon');
const nameTwo = document.getElementById('secondPokemon');
nameOne.style.color = "blue";
nameTwo.style.color = "red";

const pokeOneImage = document.getElementById('imageOne');
const pokeTwoImage= document.getElementById('imageTwo');



fetch(baseURL)

.then(function(response){
    return response.json();
})
.then(function(json){

console.log(json);
let firstChoice = json.results[6].name;
let secondChoice = json.results[3].name;


console.log(firstChoice);
console.log(secondChoice);
pokeNameOne.innerText=firstChoice;
pokeNameTwo.innerText=secondChoice;



fetch(json.results[6].url)
.then(function(response){
    return response.json();
})
.then(function(secondFetch){
    let firstImage = secondFetch.sprites.front_default;


    pokeOneImage.src=firstImage;
    

    displayPokemonFirst(secondFetch);
    
    
    
    console.log(secondFetch);
    console.log(firstImage);

    
    
})

fetch(json.results[3].url)
.then(function(response){
    return response.json();
})
.then(function(thirdFetch){
    
    let secondImage = thirdFetch.sprites.back_default;
    pokeTwoImage.src=secondImage;

    console.log(thirdFetch)

    displayPokemonSecond(thirdFetch);

})



function displayPokemonFirst(pokeMoves) {
    console.log("test response: ", pokeMoves);

        
    let firstMove = document.createElement('li');
    let secondMove = document.createElement('li');
    let thirdMove = document.createElement('li');
    let fourthMove = document.createElement('li');
    firstMove.innerText = pokeMoves.moves[19].move.name;
    secondMove.innerText =pokeMoves.moves[30].move.name;
    thirdMove.innerText =pokeMoves.moves[17].move.name;
    fourthMove.innerText =pokeMoves.moves[3].move.name;

        attackNameFirst.appendChild(firstMove);
        attackNameFirst.appendChild(secondMove);
        attackNameFirst.appendChild(thirdMove);
        attackNameFirst.appendChild(fourthMove);
    
   
}

function displayPokemonSecond(pokeMoves) {
    console.log("test response: ", pokeMoves);

        
    let firstMove = document.createElement('li');
    let secondMove = document.createElement('li');
    let thirdMove = document.createElement('li');
    let fourthMove = document.createElement('li');
    firstMove.innerText = pokeMoves.moves[19].move.name;
    secondMove.innerText =pokeMoves.moves[30].move.name;
    thirdMove.innerText =pokeMoves.moves[17].move.name;
    fourthMove.innerText =pokeMoves.moves[3].move.name;

        attackNameSecond.appendChild(firstMove);
        attackNameSecond.appendChild(secondMove);
        attackNameSecond.appendChild(thirdMove);
        attackNameSecond.appendChild(fourthMove);
    
  
}



})












// pokemonName.appendChild(pokemonOne);


// let people = json.results;
// let pokemonOne = people[3].name;
// let pokemonTwo = people[10].name;
// console.log(pokemonOne);
// console.log(pokemonTwo);




// // pathway
// // - results > [] > url > acess that url > sprites > back_defualt and front_default for images (also try to incorporate a random shiny aspect) 
// // Pull 1 move