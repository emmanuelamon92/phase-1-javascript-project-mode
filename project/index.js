const animeListUrlByTitle = "https://animechan.vercel.app/api/quotes/anime?title="
const animeListUrlByCharacter = "https://animechan.vercel.app/api/quotes/character?name="
const randomUrl = "https://animechan.vercel.app/api/random"
const animeSearchButtonByTitle = document.querySelector("#animeSearchButtonByTitle")
const animeSearchButtonByCharacter = document.querySelector("#animeSearchButtonByCharacter")
const userInput = document.querySelector('#user-input')
const randomQuoteButton = document.querySelector('#randomQuoteButton')

//FETCH FUNCTIONS

//Function to handle any errors before prompt asks user for information
function fetchStatusHandler(response) {
	if (response.status === 200) {
	  return response;
	} else {
	  throw new Error(response.statusText);
	}
}
//

//Function to handle random quote fetch
let randomQuoteFetch = () => {
	fetch (randomUrl)
		.then(response => response.json())
		.then(randomQuoteObject => randomQuoteSearch(randomQuoteObject))
}
//

//Function to handle user inputed quote if they select to search by title
let userQuoteFetchByTitle = () => {
	fetch (animeListUrlByTitle + userInput.value)
		.then(fetchStatusHandler)
    	.then(response => response.json())
		.then (animeListArr => userQuoteSearch(animeListArr))
		.catch( () => {
			alert('Sorry No Quotes!!')
		})
}
//

//Function to handle user inputed quote if they select to search by character
let userQuoteFetchByCharacter = () => {
	fetch (animeListUrlByCharacter + userInput.value)
		.then(fetchStatusHandler)
    	.then(response => response.json())
		.then (animeListArr => userQuoteSearch(animeListArr))
		.catch( () => {
			alert('Sorry No Quotes!!')
		})
}
//

//SEARCH FUNCTIONS

//Function for searching random quotes
let randomQuoteSearch = randomQuoteObject =>{
	addQuoteToDom(randomQuoteObject)
}
//

//Funtion for searching quotes by title
let userQuoteSearch = animeListArr => {	
	//FEATURE - ask user for number 1-10 for how many quotes they want and use to add to DOM 
	const userNumberInput = parseInt(prompt(`How many quotes would you like?\n
											We have up to 10 you can choose from!!!`)) 
	if (userNumberInput <= 0 || userNumberInput > 10 || typeof userNumberInput !== 'number'){
		alert(`Not a valid Entry! You typed in "${userNumberInput}". Try again!`)
	}
	addQuotesToDom(animeListArr, userNumberInput)
	//
}
//

//DOM MANIPULATION FUNCTIONS

//Function to add quotes to DOM
let addQuotesToDom = (animeListArr, userNumberInput) => {
	if(typeof userNumberInput === 'number'){
		for (let i = 0; i <= userNumberInput - 1; i++){
			const {anime, character, quote} = animeListArr[i]
			console.log(animeListArr[i])
			console.log(`${counter}. Here is a quote from the character ${character.toUpperCase()}
of the anime ${anime.toUpperCase()}: "${quote}"`)
			counter++
		}
	}
}
let counter = 1
//

//Function to add random Quote to DOM
let addQuoteToDom = (randomQuoteObject) => {
	const {anime, character, quote} = randomQuoteObject;
	console.log(`Here is a quote from the character ${character.toUpperCase()}
of the anime ${anime.toUpperCase()}: "${quote}"`)
}
//

//EVENT LISTENERS

//Event listener for clicking to get quotes by title
animeSearchButtonByTitle.addEventListener('click', e => {e.preventDefault(); return userQuoteFetchByTitle();})
//

//Event listener for clicking to get quotes by character
animeSearchButtonByCharacter.addEventListener('click', e => {e.preventDefault(); return userQuoteFetchByCharacter();})
//

//Event listener for clicking to get random quote
randomQuoteButton.addEventListener('click', () => randomQuoteFetch())
//
