const animeListUrl = "https://animechan.vercel.app/api/quotes/anime?title="
const randomUrl = "https://animechan.vercel.app/api/random"
const animeSearchButton = document.querySelector("#animeSearchButton")
const userInput = document.querySelector('#user-input')
const randomQuoteButton = document.querySelector('#randomQuoteButton')
//................

//FUNCTIONS

//Function to handle fetch
let userQuoteFetch = () => {
	// console.log('im in user search')
	fetch (animeListUrl + userInput.value)
    	.then(response => response.json())
		.then (animeListArr => nameCharacterSearch(animeListArr))
		.catch(error => {
			console.error(error)
			alert('Sorry No Quotes!!')
		})
}

let randomQuoteFetch = () => {
	return fetch (randomUrl)
		.then(response => response.json())
		.then(randomQuoteObject => randomQuoteSearch(randomQuoteObject))
}

//Funtion for searching by name and character (seperate?)
let nameCharacterSearch = animeListArr => {
	for (const animeObjList of animeListArr) {
		const {anime, character, quote} = animeObjList;
		console.log(animeObjList)
		console.log(`Here is a quote from ${character.toUpperCase()} of ${anime.toUpperCase()}: "${quote}"`)		
	}
}

//Function for searching random
let randomQuoteSearch = randomQuoteObject => {
	console.log(randomQuoteObject)
	for (const animeObjList of animeListArr) {
		const {anime, character, quote} = animeObjList;
		console.log(animeObjList)
		console.log(`Here is a quote from ${character.toUpperCase()} of ${anime.toUpperCase()}: "${quote}"`)		
	}

}

//EVENT LISTENERS

//Event listener for clicking submit button for form
animeSearchButton.addEventListener('click', e => {e.preventDefault(); return userQuoteFetch();})

//Event listener for clicking random quote
randomQuoteButton.addEventListener('click', () => randomQuoteFetch())
