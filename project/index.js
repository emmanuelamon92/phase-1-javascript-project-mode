const animeListUrl = "https://animechan.vercel.app/api/quotes/anime?title=naruto"
const randomUrl = "https://animechan.vercel.app/api/random"
const animeSearchButton = document.querySelector("#animeSearchButton")
const userInput = document.querySelector('#user-input')
const randomQuoteButton = document.querySelector('#randomQuoteButton')
//................

//EVENT LISTENERS

//Event listener for clicking submit button for form
animeSearchButton.addEventListener('click', e => {
	e.preventDefault();
	return userQuoteFetch;
})

//Event listener for clicking random quote
randomQuoteButton.addEventListener('click', () => randomQuoteFetch)
//.................

//FUNCTIONS

//Function to handle fetch
let userQuoteFetch = () => {
	return fetch (animeListUrl)
    	.then(response => response.json())
		.then (animeListArr => nameCharacterSearch(animeListArr))
}

let randomQuoteFetch = () => {
	return fetch (randomUrl)
		.then(response => response.json())
		.then(randomArr => randomQuoteSearch(randomArr))
}

//Funtion for searching by name and character (seperate?)
let nameCharacterSearch = animeListArr => {
	console.log(animeListArr)
	// for (const animeObjList of animeListArr) {
	// 	const {anime, character, quote} = animeObjList;
	// }
}

//Function for searching random
let randomQuoteSearch = randomArr => {
	console.log(randomArr)
}