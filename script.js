const platforms = ["All", "Twitch", "YouTube",];

let categories = ["All"];
let activePlatform = "All";
let activeCategory = "All";
let commandData = [];

const searchInput = document.getElementById("search");
const commandGrid = document.getElementById("commands");
const count = document.getElementById("result-count");
const empty = document.getElementById("empty-state");
const dialog = document.getElementById("command-dialog");
const dialogContent = document.getElementById("dialog-content");

async function loadCommands() {
    try {
        const response = await fetch("./commands.json", {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const database = await response.json();

        commandData = database.commands || [];

        categories = [
            "All",
            ...new Set(commandData.map(c => c.category))
        ];

        render();

    } catch (error) {
        console.error("Failed to load commands:", error);

        commandGrid.hidden = true;
        empty.hidden = false;

        empty.innerHTML = `
            <h2>Unable to load commands</h2>
            <p>Please check the commands.json file.</p>
        `;

        count.textContent = "DATABASE ERROR";
    }
}

function makeFilters(id, values, active, setter) {
    const root = document.getElementById(id);

    root.innerHTML = "";

    values.forEach(value => {
        const button = document.createElement("button");

        button.className =
            "filter-btn" +
            (value === active ? " active" : "");

        button.textContent = value;
        button.type = "button";

        button.addEventListener("click", () => {
            setter(value);
        });

        root.appendChild(button);
    });
}

function render() {
    const term = searchInput.value
        .trim()
        .toLowerCase();

    const matches = commandData.filter(command => {
        const matchesPlatform =
            activePlatform === "All" ||
            command.platforms.includes(activePlatform);

        const matchesCategory =
            activeCategory === "All" ||
            command.category === activeCategory;

        const searchable = [
            command.name,
            command.displayName,
            command.description,
            command.usage,
            command.category
        ].join(" ").toLowerCase();

        return matchesPlatform &&
               matchesCategory &&
               searchable.includes(term);
    });

    commandGrid.innerHTML = "";

    matches.forEach(command => {
        const card = document.createElement("article");

        card.className = "command-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");

        const tags = command.platforms
            .map(p => `<span>${escapeHtml(p)}</span>`)
            .join("");

        card.innerHTML = `
            <div class="card-top">
                <span class="command-name">
                    ${escapeHtml(command.displayName || command.name)}
                </span>

                <span class="category-tag">
                    ${escapeHtml(command.category)}
                </span>
            </div>

            <p class="command-description">
                ${escapeHtml(command.description)}
            </p>

            <div class="card-bottom">
                <span>VIEW DETAILS ↗</span>

                <span class="platform-mini">
                    ${tags}
                </span>
            </div>
        `;

        card.addEventListener("click", () => {
            showDetails(command);
        });

        card.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                showDetails(command);
            }
        });

        commandGrid.appendChild(card);
    });

    count.textContent =
        `${matches.length} COMMAND${matches.length === 1 ? "" : "S"}`;

    empty.hidden = matches.length !== 0;
    commandGrid.hidden = matches.length === 0;

    makeFilters(
        "platform-filters",
        platforms,
        activePlatform,
        value => {
            activePlatform = value;
            render();
        }
    );

    makeFilters(
        "category-filters",
        categories,
        activeCategory,
        value => {
            activeCategory = value;
            render();
        }
    );
}

function showDetails(command) {
    dialogContent.innerHTML = `
        <p class="eyebrow">COMMAND DETAILS</p>

        <h2 class="dialog-command">
            ${escapeHtml(command.displayName || command.name)}
        </h2>

        <p class="dialog-description">
            ${escapeHtml(command.description)}
        </p>

        <p class="detail-label">USAGE</p>

        <div class="usage">
            <span>${escapeHtml(command.usage)}</span>

            <button class="copy-button" id="copy-usage">
                COPY
            </button>
        </div>

        <p class="detail-label">AVAILABLE PLATFORMS</p>

        <div class="detail-meta">
            ${command.platforms
                .map(p => `<span>${escapeHtml(p)}</span>`)
                .join("")}
        </div>

        <p class="detail-label">PERMISSION & COOLDOWN</p>

        <div class="detail-meta">
            <span>${escapeHtml(command.permission)}</span>
            <span>${escapeHtml(command.cooldown)}</span>
        </div>
    `;

    dialog.showModal();

    document.getElementById("copy-usage")
        .addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(
                    command.usage
                );

                document.getElementById("copy-usage")
                    .textContent = "COPIED";

            } catch {
                document.getElementById("copy-usage")
                    .textContent = "FAILED";
            }
        });
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[char]));
}

searchInput.addEventListener("input", render);

document.getElementById("clear-filters")
    .addEventListener("click", () => {
        activePlatform = "All";
        activeCategory = "All";
        searchInput.value = "";
        render();
    });

document.addEventListener("keydown", event => {
    if (
        event.key === "/" &&
        !["INPUT", "TEXTAREA"].includes(
            document.activeElement.tagName
        )
    ) {
        event.preventDefault();
        searchInput.focus();
    }
});

document.getElementById("year").textContent =
    new Date().getFullYear();

loadCommands();
