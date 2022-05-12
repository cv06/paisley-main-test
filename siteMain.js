
const header = document.querySelector("#header")
fetch("/Assets/main-doc-body/header.html")
	.then(res => res.text())
	.then(data => {
	header.innerHTML=data
})

const footer = document.querySelector("#footer")
fetch("/Assets/main-doc-body/footer.html")
	.then(res => res.text())
	.then(data => {
		footer.innerHTML = data
	})
