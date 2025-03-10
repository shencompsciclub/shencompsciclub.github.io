elytra.component("navigation", {
    init(data) {
        return `
        <nav>
            <div class="nav-bar">
                <i class='bx bx-menu sidebarOpen'></i>
                <span class="logo navLogo"><a href="#">Shen Tennis</a></span>

                <div class="menu">
                    <div class="logo-toggle">
                        <span class="logo"><a href="#">Shen Tennis</a></span>
                        <i class='bx bx-x sidebarClose'></i>

                    </div>

                    <ul class="nav-links">
                        <li><a href="./">Home</a></li>
                        <li><a href="./girls.html">Girls</a></li>
                        <li><a href="./boys.html">Boys</a></li>
                        <li><a href="./club.html">Booster Club</a></li>
                        <li><a href="./events.html">Events</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="darkLight-searchBox">
                    <div class="dark-light">
                        <i class='bx bx-moon moon'></i>
                        <i class='bx bx-sun sun'></i>
                    </div>

                    <div class="searchBox">
                        <div class="searchToggle">
                            <i class='bx bx-x cancel'></i>
                            <i class='bx bx-search search'></i>
                        </div>

                        <div class="search-field">
                            <input type="text" placeholder="Search...">
                            <i class='bx bx-search'></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`;
    }
});