elytra.component("value", {
	props: ["name", "icon"],
	init(data) {
		return `<h2>${this.name}</h2><div><img src="${this.icon}"></div><p>${data}</p>`;
	}
});