function changeTitle(text) {
    document.querySelector(".title-bar .title-text").textContent = text ?? document.querySelector("head title").textContent;
}

function titleBarControls(opt) {
    if (opt === "close") {
        window.close();
    } else if (opt === "help") {
        // Code For Help;
    }
}

changeTitle();