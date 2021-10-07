
const shrinkImgSingle = (select) => {
	document.getElementById(select).style.transform = "scale(1)";	
	document.getElementById(select).style.transition = "transform 0.4s ease-out";
	setTimeout( () => {
		document.getElementById(select).style.borderColor = "black";}, 300);
		document.getElementById(select).style.borderWidth = "0.1rem";		
}

const shrinkImgAll = (all) => {
	for (let i = 0 ; i < all.length ; i++) {
		if (document.getElementById(all[i].id).style.borderColor === "firebrick") {
			shrinkImgSingle(all[i].id);			
		}
	}
}

const expandImg = (tap) => {
	document.getElementById(tap).style.transform = "scale(18)";
	document.getElementById(tap).style.transition = "transform 1s ease";
	document.getElementById(tap).style.borderWidth = "0.001rem";
	document.getElementById(tap).style.borderColor = "firebrick";
}


let entries = document.getElementsByClassName("theImage");

for (let i = 0 ; i < entries.length ; i++) {
	entries[i].addEventListener("mouseover", (event) => {
		let chosen = event.target.id;
		expandImg(chosen);

		document.getElementById(chosen).addEventListener("mouseout", () => {
			shrinkImgAll(entries);
		});
	});

	entries[i].addEventListener("touchstart", (event) => {
		let match = event.target.id;

		if(document.getElementById(match).style.borderColor === "firebrick") {
			shrinkImgSingle(match);
		} else {
			shrinkImgAll(entries);	
			expandImg(match);			
		}
	});
}