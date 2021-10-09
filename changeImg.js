
let entries = document.getElementsByClassName("smallImage");

for (let i = 0 ; i < entries.length ; i++) {
	entries[i].addEventListener("mouseover", (event) => {
		let chosen = event.target.id;
		document.getElementById(chosen).classList.add("largeImage");

		document.getElementById(chosen).addEventListener("mouseout", () => {
			document.getElementById(chosen).classList.remove("largeImage");
		});
	});

	entries[i].addEventListener("touchstart", (event) => {
		let match = event.target.id;
		document.getElementById(match).classList.add("largeImage");

		document.getElementById(match).addEventListener("touchend", () => {
			document.getElementById(match).classList.remove("largeImage");
		});
	});
}