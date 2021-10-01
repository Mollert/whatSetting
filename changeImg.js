
const shrinkImgSingle = (select) => {
	document.getElementById(select).style.transition = "transform 0.6s ease";
	document.getElementById(select).style.borderColor = "black";		
	document.getElementById(select).style.transform = "scale(1)";
	document.getElementById(select).style.borderWidth = "0.1rem";
}

const shrinkImgAll = (all) => {
	for (let i = 0 ; i < all.length ; i++) {
		if (document.getElementById(all[i].id).style.borderColor === "firebrick") {

			document.getElementById(all[i].id).style.transition = "transform 0.4s ease";
			document.getElementById(all[i].id).style.transform = "scale(1)";
			document.getElementById(all[i].id).style.transformOrigin = "0 50%";
			document.getElementById(all[i].id).style.borderColor = "black";
			document.getElementById(all[i].id).style.borderWidth = "0.1rem";			
		}
	}
}

const expandImg = (tap) => {
	document.getElementById(tap).style.transition = "transform 1s ease";
	document.getElementById(tap).style.borderWidth = "0.03rem";
	document.getElementById(tap).style.borderColor = "firebrick";
	document.getElementById(tap).style.transform = "scale(10)";
	document.getElementById(tap).style.transformOrigin = "0 50%";
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