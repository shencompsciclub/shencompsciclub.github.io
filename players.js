elytra.component("player", {
	props: ["src"],
	init(name) {
		return `<img src="${this.src}"><p>${name}</p>`;
	}
});
