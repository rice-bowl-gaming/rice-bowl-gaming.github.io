let firstLoadWidget = 1;
let widgetOpen = 0;
let crate; // Add this variable

document.addEventListener("DOMContentLoaded", () => {
    let button = document.createElement("button");
    button.setAttribute("id", "discord");
    document.body.appendChild(button);
    button.addEventListener("click", () => {
        if(firstLoadWidget) {
            toast({ title: "Click Me To Load GX-GamesChat!", message: "This Should Work\nClick here to load GX-GamesChat (Discord)." }, loadWidget);
        }
    })
})

function loadWidget() {
    if(firstLoadWidget) {
        firstLoadWidget = 0;
        loadScript("https://cdn.jsdelivr.net/npm/@widgetbot/crate@3", loadCrate);
    }
}

function loadCrate() {
    crate = new Crate({
        server: '1426041062094536757',
        channel: '1426042531929391104', 
        color: "#8B0000"
        // Removed the glyph line - this was causing it to open Discord
    });
    crate.toggle(true);
    
    // Optional: remove the default button if you want
    setTimeout(() => {
        let element = document.querySelector('[aria-label="Discord chat embed"]');
        if(element) {
            element.remove();
        }
    }, 100);
}
