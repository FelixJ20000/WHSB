class SlidableElement extends HTMLDivElement {
    createdCallback() {
	console.log("It's actually working... lol");
	if(this.dataset.hidden) {
	    this.styles.display = "none";
	} else {
	    this.styles.display = "block";
	}
    }
    scrollIntoView() {
	console.log("Time of truth");
	if(this.styles.display = "none") {
	    this.styles.display = "block";
	} else {
	    this.styles.display = "none";
	}
    }
}
console.log("At least the code's being run");

document.register("x-slidable", {
    prototype: SlidableElement.prototype
});