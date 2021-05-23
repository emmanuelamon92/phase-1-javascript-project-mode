const animeListUrlByTitle = "https://animechan.vercel.app/api/quotes/anime?title="
const animeListUrlByCharacter = "https://animechan.vercel.app/api/quotes/character?name="
const randomUrl = "https://animechan.vercel.app/api/random"
const animeSearchButtonByTitle = document.querySelector("#animeSearchButtonByTitle")
const animeSearchButtonByCharacter = document.querySelector("#animeSearchButtonByCharacter")
const randomQuoteButton = document.querySelector('#randomQuoteButton')
const searchResults = document.querySelector('.searchResults')
const fragment = document.createDocumentFragment();



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
	const userInputTitle = prompt('What anime would you like a quote from?')
	fetch (animeListUrlByTitle + userInputTitle)
		.then(fetchStatusHandler)
    	.then(response => response.json())
		.then (animeListArr => userQuoteSearch(animeListArr))
		.catch( () => {
			alert('Sorry No Quotes Available!! Title')
		})
}
//

//Function to handle user inputed quote if they select to search by character
let userQuoteFetchByCharacter = () => {
	const userInputCharacter = prompt('Which anime character would you like a quote from?')
	fetch (animeListUrlByCharacter + userInputCharacter)
		.then(fetchStatusHandler)
    	.then(response => response.json())
		.then (animeListArr => userQuoteSearch(animeListArr))
		.catch( () => {
			// debugger;
			alert('Sorry No Quotes Available!! Character')
		})
}
//

//SEARCH FUNCTIONS

//Function for searching random quotes
let randomQuoteSearch = randomQuoteObject => {
	addRandomQuoteToDom(randomQuoteObject)
}
//

//Funtion for searching quotes by title
let userQuoteSearch = animeListArr => {
	//FEATURE - ask user for number 1-10 for how many quotes they want and use to add to DOM
	const userNumberInput = parseInt(prompt(`How many quotes would you like?\n
We have up to ${animeListArr.length} you can choose from!!!`))
	if (userNumberInput <= 0 || userNumberInput > 10 || typeof userNumberInput !== 'number'){
		alert(`Not a valid Entry! You typed in "${userNumberInput}". Try again!`)
	}
	addSearchQuotesToDom(animeListArr, userNumberInput)
	//
}
//

//DOM MANIPULATION FUNCTIONS
let counter = 1

//Function to add quotes to DOM
let addSearchQuotesToDom = (animeListArr, userNumberInput) => {
	if(typeof userNumberInput === 'number'){

		for (let i = 0; i <= userNumberInput - 1; i++){
			const {anime, character, quote} = animeListArr[i]
			const animeInfoObj = {'Title': anime,'Character': character,'Quote': quote}

			//creating the ul element
			const ulQuoteCard = document.createElement('ul')
			ulQuoteCard.id = `quoteCardId${counter}`;
			searchResults.append(ulQuoteCard)
			//

			//creatine the li element
			for (const key in animeInfoObj){
				const li = document.createElement('li')
				li.textContent = `${key}: ${animeInfoObj[key]}`;
				fragment.append(li)
			}
			ulQuoteCard.append(fragment)
			//

			counter++
		}
	}
}
//

//Function to add random Quote to DOM
let addRandomQuoteToDom = (randomQuoteObject) => {
	const {anime, character, quote} = randomQuoteObject;
	const animeInfoObj = {'Title': anime,'Character': character,'Quote': quote}

	//creating the ul element
	const ulQuoteCard = document.createElement('ul')
	ulQuoteCard.id = `quoteCardId${counter}`;
	searchResults.append(ulQuoteCard)
	//

	//creatine the li element
	for (const key in animeInfoObj){
		const li = document.createElement('li')
		li.textContent = `${key}: ${animeInfoObj[key]}`;
		fragment.append(li)
	}
	ulQuoteCard.append(fragment)
	//

// 	console.log(`${counter}. Here is a quote from the character ${character.toUpperCase()}
// of the anime ${anime.toUpperCase()}: "${quote}"`)
	counter++
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
