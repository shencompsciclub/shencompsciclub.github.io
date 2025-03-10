elytra.component("player", {
	props: ["src", "bio", "email"],
	init(name) {
		var html = `<img src="${this.src}"><p>${name}</p>`;
		if(this.bio)
			html += `<p>${this.bio}</p>`;
		if(this.email)
			html += `<a href="mailto:${this.email}">${this.email}</a>`;
		return html;
	}
});
