const url2 = "https://animechan.vercel.app/api/quotes/anime?title=naruto"

fetch (url2)
    .then(response => response.json())
	.then (animeArr => {
		// console.log(animeArr)
		for (const animeObjList of animeArr) {
			const {anime, character, quote} = animeObjList;
			// console.log(anime)
			// console.log(character)
			// console.log(quote) cl
		}
})