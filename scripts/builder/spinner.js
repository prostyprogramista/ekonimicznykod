export function getSpinner() {
    const container = document.createElement("div")

    container.classList.add("load-spinner")

    for(let i = 0; i < 12; i++) {
        container.appendChild(document.createElement("div"))
    }

    return container
}