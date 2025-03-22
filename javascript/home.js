const body = document.body,
    nav = document.querySelector("nav"),
    modeToggle = document.find["dark-light"][0],
    searchToggle = document.find.searchToggle[0],
    sidebarOpen = document.find.sidebarOpen[0],
    sidebarClose = document.find.sidebarClose[0];

var modes = ["light-mode", "dark-mode"];

elytra.add("model", {
    mode: localStorage.getItem("mode") ?? "light-mode"
});

elytra.model.mode.watcher = value => {
    var operation = ["remove", "add"][modes.indexOf(value)];
    modeToggle.classList[operation]("active");
    body.classList[operation]("dark");
    localStorage.setItem("mode", value);
};

//code to toggle dark and light mode
modeToggle.addEventListener("click",
    () => elytra.model.mode = modes[1 - modes.indexOf(elytra.model.mode.value)]
);

//code to toggle search box
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});

//code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
        let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});


