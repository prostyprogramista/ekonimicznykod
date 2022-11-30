export function getComment(details) {
    const mainContainer = document.createElement("div")

    const nameContainer = document.createElement('div')
    const contentContainer = document.createElement('div')
    const preName = document.createElement('img')
    const preContent = document.createElement('div')
    const name = document.createElement('p')
    const content = document.createElement('p')

    name.innerText = details.userName
    content.innerText = details.content

    preName.src = '~/static/icons/favicon/favicon-32x32.png'

    nameContainer.appendChild(preName)
    nameContainer.appendChild(name)
    contentContainer.appendChild(preContent)
    contentContainer.appendChild(content)
    mainContainer.appendChild(nameContainer)
    mainContainer.appendChild(contentContainer)

    return mainContainer
}