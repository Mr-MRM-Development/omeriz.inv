function titleControls(option) {
    if (option === "help") {
        const helpContent = `Hello, This Help Content`;
        
        alert(helpContent);
    } else if (option === "close") {
        window.close()
    }
}

function loadTitle(text) {
    document.querySelector(".title-bar .title-text").textContent = text ?? document.querySelector("head title").textContent;
}

loadTitle();