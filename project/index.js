const animeListUrl = "https://animechan.vercel.app/api/quotes/anime?title=naruto"
const randomUrl = "https://animechan.vercel.app/api/random"
const animeSearchButton = document.querySelector("#animeSearchButton")
const userInput = document.querySelector('#user-input')
const randomQuoteButton = document.querySelector('#randomQuoteButton')

//EVENT LISTENERS
//event listener for clicking submit button for form
animeSearchButton.addEventListener('click', () => {
	fetch (animeListUrl)
    	.then(response => response.json())
		.then (animeListArr => nameCharacterSearch(animeListArr))
})

//event listener for clicking random quote
randomQuoteButton.addEventListener('click', () => {
	fetch (randomUrl)
		.then(response => response.json())
		.then(randomArr => randomQuoteSearch(randomArr))
})


//FUNCTIONS
//funtion for searching by name and character (seperate?)
let nameCharacterSearch = animeListArr => {
	for (const animeObjList of animeListArr) {
		const {anime, character, quote} = animeObjList;
	}
}
//function for searching random
let randomQuoteSearch = randomArr => {
	// console.log(randomArr)
}