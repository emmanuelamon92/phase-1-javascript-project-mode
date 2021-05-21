const animeListUrl = "https://animechan.vercel.app/api/quotes/anime?title="
const randomUrl = "https://animechan.vercel.app/api/random"
const animeSearchButton = document.querySelector("#animeSearchButton")
const userInput = document.querySelector('#user-input')
const randomQuoteButton = document.querySelector('#randomQuoteButton')

//FUNCTIONS

//Function to handle user inputed quote fetch
let userQuoteFetch = () => {
	fetch (animeListUrl + userInput.value)
    	.then(response => response.json())
		.then (animeListArr => nameCharacterSearch(animeListArr))
		.catch(error => {
			console.error(error)
			alert('Sorry No Quotes!!')
		})
}

//Function to handle random quote fetch
let randomQuoteFetch = () => {
	fetch (randomUrl)
		.then(response => response.json())
		.then(randomQuoteObject => randomQuoteSearch(randomQuoteObject))
}

//Funtion for searching quotes by anime title
let nameCharacterSearch = animeListArr => {
	//FEATURE 1
	//ask user to pick random number between 1-10???????
	//then place in animeListArr[....]
	// console.log(animeListArr)
	const userNumberInput = parseInt(prompt("How many quotes would you like?\nWe have up to 10 you can choose from!!!")) //ask user for number 1-10 for how many quotes they want.

	if (userNumberInput <= 0 || userNumberInput > 10 || typeof userNumberInput !== 'number'){
		alert(`Not a valid Entry! You typed in "${userNumberInput}". Try again!`)
		// userNumberInput;
	} 
	const {anime, character, quote} = animeListArr[userNumberInput];
	for (let i = 0; i <= userNumberInput - 1; i++){
		console.log(animeListArr[i])

	}
	// console.log(animeListArr[userNumberInput])
	console.log(`Here is a quote from the character ${character.toUpperCase()} of the anime ${anime.toUpperCase()}: "${quote}"`)

	// //FEATURE 2
	// //prints all 10 of the quotes
	// for (const animeObjList of animeListArr) {
	// 	const {anime, character, quote} = animeObjList;
	// 	console.log(animeObjList)
	// 	console.log(`${counter}. Here is a quote from the character ${character.toUpperCase()} of the anime ${anime.toUpperCase()}: "${quote}"`)		
	// 	counter++
	// }
	//FEATURE 3??
	//event listener using 'key' to loop through quotes?
}
let counter = 1


//Function for searching random quotes
let randomQuoteSearch = randomQuoteObject => {
	console.log(randomQuoteObject)
	const {anime, character, quote} = randomQuoteObject;
	console.log(`Here is a quote from the character ${character.toUpperCase()} of the anime ${anime.toUpperCase()}: "${quote}"`)
}


//EVENT LISTENERS

//Event listener for clicking submit button for form
animeSearchButton.addEventListener('click', e => {e.preventDefault(); return userQuoteFetch();})

//Event listener for clicking random quote
randomQuoteButton.addEventListener('click', () => randomQuoteFetch())

//Event listener using 'key' to loop through quotes???
