export function header(title) {
    const headerEl = document.createElement("header");
    headerEl.innerHTML = `
    <div class="header-row">
        <div class="header-content">
        <h1>Nathan Lee</h1>
        <nav id="nav-links">
            <a href="index.html">Home</a>
            <a href="hobbies.html">Hobbies</a>
            <a href="projects.html">Projects</a>
        </nav>
        </div>
        <label id="dark-mode-toggle">
        <input type="checkbox" id="dark-checkbox" autocomplete="off" />
        Dark mode
        </label>
        <button id="menu-button">Menu</button>
    </div>
    `;
  
    const button = headerEl.querySelector("#menu-button");
    const nav = headerEl.querySelector("#nav-links");
    const checkbox = headerEl.querySelector("#dark-checkbox");
  
    button.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  
    document.body.addEventListener("click", (e) => {
      if (!headerEl.contains(e.target)) {
        nav.classList.remove("show");
      }
    });

    checkbox.addEventListener("change", () => {
        const isDark = checkbox.checked;
        document.body.classList.toggle("dark-mode", isDark);
        localStorage.setItem("darkMode", isDark ? "true" : "false");
    });
    
    const stored = localStorage.getItem("darkMode");
        if (stored === "true") {
        document.body.classList.add("dark-mode");
        checkbox.checked = true;
    }
  
    return headerEl;
  }
  