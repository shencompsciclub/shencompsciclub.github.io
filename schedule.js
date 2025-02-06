function monthNow() {
	date = new Date();
	return [date.getFullYear(), date.getMonth()];
}

elytra.component("calendar", {
	init(data) {
		var events = {};
		for(var [date, label] of Object.entries(JSON.parse(data))) {
			parts = date.split("/").map(Number);
			events[new Date(2000 + parts[2], parts[0] - 1, parts[1])] = label;
		}
		var html = "<p>SUN</p><p>MON</p><p>TUE</p><p>WED</p><p>THU</p><p>FRI</p><p>SAT</p>";
		var [year, month] = monthNow();
		var first = new Date(year, month, 1).getDay();
		var lastBefore = new Date(year, month, 0).getDate();
		var last = new Date(year, month + 1, 0).getDate();
		for(var i = first; i > 0; i--)
			html += `<div class="old"><h3>${lastBefore - i}</h3><p>${events[new Date(year, month, -i)] ?? ""}</p></div>`;
		for(var i = 1; i <= last; i++)
			html += `<div><h3>${i}</h3><p>${events[new Date(year, month, i)] ?? ""}</p></div>`;
		return html;
	}
});