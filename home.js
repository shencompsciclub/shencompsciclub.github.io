const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose");

    let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
            body.classList.toggle("dark");
        }

//code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    // js code to keep user on selected mode

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode", "light-mode");
    }else{
        localStorage.setItem("mode", "dark-mode");
    }
});

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


