function monthNow() {
	date = new Date(); // Gets the time right now
	return [date.getFullYear(), date.getMonth()]; // Splits it into month and year components
}

elytra.component("calendar", { // Tells elytra.js that we want a custom element named calendar
	init(data) { // Defines a function that handles creation of the custom element
		var events = {};
		for(var [date, label] of Object.entries(JSON.parse(data))) { // Loops through every event in the dates object
			parts = date.split("/").map(Number); // Converts the date from a string to list
			events[new Date(2000 + parts[2], parts[0] - 1, parts[1])] = label; // Constructs a date object and maps the event to it
		}
		var html = "<p>SUN</p><p>MON</p><p>TUE</p><p>WED</p><p>THU</p><p>FRI</p><p>SAT</p>"; // These are the day headings
		var [year, month] = monthNow(); // Gets both the current year and month
		var first = new Date(year, month, 1).getDay(); // Gets the first day of the current month
		var lastBefore = new Date(year, month, 0).getDate(); // Gets the day before the first day of the month or the last day of the previous month
		var lastDate = new Date(year, month + 1, 0); // Gets the last day of the current month
		var lastDay = lastDate.getDay(); // Gets the day of week
		var last = lastDate.getDate(); // Get the day of month
		for(var i = first; i > 0; i--) // Loops through the excess days from the previous month
			html += `<div class="fade"><h3>${lastBefore - i}</h3><p>${events[new Date(year, month, -i)] ?? ""}</p></div>`; // Adds the events to the html using null coalescing operator
		for(var i = 1; i <= last; i++) // Loops though the days of the current month
			html += `<div><h3>${i}</h3><p>${events[new Date(year, month, i)] ?? ""}</p></div>`; // Adds the events to the html using null coalescing operator
		for(var i = 1; i < 7 - lastDay; i++) // Loops through the excess days from the next month
			html += `<div class="fade"><h3>${i}</h3><p>${events[new Date(year, month + 1, i)] ?? ""}</p></div>`; // Adds the events to the html using null coalescing operator
		return html; // Returns the html to elytra.js for creation of custom elements
	}
});
