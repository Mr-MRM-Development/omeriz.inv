document.querySelector(".title-bar .title-text").textContent = document.querySelector("head title").textContent;

const { ipcRenderer } = require("electron");
const currentWin = ipcRenderer.getCurrentWindow();

function titleControls(option) {
    if (option === "close") {
        window.close();
    } else if (option === "max") {
        document.documentElement.requestFullscreen();
    } else if (option === "min") {
        currentWin.minimize();
    }
}