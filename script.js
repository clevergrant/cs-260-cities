document.getElementById(`cityField`).addEventListener(`keyup`, event => {
	event.preventDefault()
	const url = `http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=${document.getElementById(`cityField`).value}`

	console.log(url)

	fetch(url)
		.then(res => res.json()).then(json => {

			console.log(json)
			console.log(json[0])
			console.log(`Got ` + json[0].city)

			let everything
			everything = `<ul>`

			for (let i = 0; i < json.length; i++)
				everything += `<li> ` + json[i].city

			everything += `</ul>`
			document.getElementById(`txtHint`).innerHTML = everything
		})
})