export function wrapLiElements() {
    let liElements = document.body.getElementsByTagName('li');

    for (let i = 0; i < liElements.length; i++) {
        const newParagraph = document.createElement('p');
        const liElement = liElements[i];

        newParagraph.append(...liElement.childNodes)
        liElement.replaceChildren(newParagraph);
    }
}

export function buildMultipleCodeBlock() {
    let codeElements = document.body.getElementsByClassName(
        'nuxt-content-highlight'
    );
    let codeElementAmount = codeElements.length;
    let codeBlocks = [[]];

    for (let i = 0, numberOfCodeBlock = 0; i < codeElementAmount; i++) {
        const element = codeElements[i];
        let isCodeBlockNext = element.nextElementSibling?.classList.contains('nuxt-content-highlight') || false;

        codeBlocks[numberOfCodeBlock].push({
            element: element,
            elementButton: document.createElement("button"),
            elementHeight: element.clientHeight + 'px',
        });

        if (
            i + 1 < codeElementAmount &&
            !isCodeBlockNext
        ) {
            numberOfCodeBlock++;

            codeBlocks.push([]);
        }
    }

    codeBlocks.forEach((codeBlock) => {
        const codeWrapper = document.createElement('div');
        const codeContentSection = document.createElement('div');
        const codeButtonSection = document.createElement('div');

        codeWrapper.classList.add('code-block');
        codeButtonSection.classList.add('code-button-section');
        codeContentSection.classList.add('code-content');

        for (let i = 0; i < codeBlock.length; i++) {
            const { element, elementButton, elementHeight } = codeBlock[i];
            const parent = element.parentNode;

            elementButton.classList.add('code-button');

            let language = '';
            const languageCodeBlockClasses = element.firstChild.classList;

            for (let i = 0; i < languageCodeBlockClasses.length; i++) {
                const languageNameSearch = 'language-';
                const languageNameLenght = languageNameSearch.length;
                const languageCodeBlockClass = languageCodeBlockClasses[i];
                const isLanguageClass = languageCodeBlockClass.includes(languageNameSearch);


                if (isLanguageClass) {
                    language = languageCodeBlockClass.substring(languageNameLenght);
                }
            }

            elementButton.innerHTML = language.toUpperCase();
            elementButton.onclick = () => {
                if (!element.classList.contains('show-code')) {
                    codeContentSection.style.height = elementHeight;

                    codeBlock.forEach((it) => {
                        if (it.element.classList.contains('show-code')) {
                            it.element.classList.toggle('hide-code');
                            it.element.classList.toggle('show-code');
                            it.elementButton.classList.toggle('active-code-button');
                        }
                    });

                    element.classList.toggle('hide-code');
                    element.classList.toggle('show-code');
                    elementButton.classList.toggle('active-code-button');
                }
            };

            if (i == 0) {
                parent.replaceChild(codeWrapper, element);

                codeContentSection.style.height = elementHeight;
                codeWrapper.appendChild(codeButtonSection);
                codeWrapper.appendChild(codeContentSection);

                elementButton.classList.add('active-code-button');
                element.classList.add('show-code');
            } else {
                parent.removeChild(element);

                element.classList.add('hide-code');
            }

            codeButtonSection.appendChild(elementButton);
            codeContentSection.appendChild(element);
        }
    });
}

export function buildPanels() {
    const blockquotes = [...document.body.getElementsByTagName(
        'blockquote'
    )];

    for(let i = 0; i < blockquotes.length; i++) {
        const block = blockquotes[i]
        const parent = block.parentNode

        const isAccept = block.outerText.startsWith('Accept:')
        const isInfo = block.outerText.startsWith('Info:')
        const isWarning = block.outerText.startsWith('Warning:')
        const isError = block.outerText.startsWith('Error:')
        
        let panelType

        if(isAccept) {
            panelType = 'accept'
        }
        if(isInfo) {
            panelType = 'info'
        }
        if(isWarning) {
            panelType = 'warning'
        }
        if(isError) {
            panelType = 'error'
        }

        if(panelType !== undefined) {
            removePhraseFromNode(block.childNodes, `${panelType.charAt(0).toUpperCase() + panelType.slice(1)}:`)

            const panel = createPanel(panelType, block.childNodes)
            parent.replaceChild(panel, block)
        }
    }
}

function createPanel(type, contentNodes) {
    const mainContainer = document.createElement('div')

    //icon
    const iconContainer = document.createElement('div')
    const iconBackground = document.createElement('div')
    const iconShadow = document.createElement('div')
    const icon = document.createElement('img')
    //content
    const contentContainer = document.createElement('div')
    const contentParagraph = document.createElement('p')
    
    //added classes
    mainContainer.classList.add('panel', type)
    iconContainer.classList.add('icon', type)
    iconBackground.classList.add(type + '-icon-background')
    iconShadow.classList.add(type + '-icon-shadow')
    icon.classList.add(type + '-icon')
    contentContainer.classList.add('content')

    //icon
    iconShadow.appendChild(icon)
    iconBackground.appendChild(iconShadow)
    iconContainer.appendChild(iconBackground)
    mainContainer.appendChild(iconContainer)

    //content
    contentParagraph.append(...contentNodes)
    contentContainer.appendChild(contentParagraph)
    mainContainer.appendChild(contentContainer)

    return mainContainer
}

function removePhraseFromNode(nodes, phrase) {
    for(let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        
        if(node.nodeName == '#text') {
            if(node.nodeValue.startsWith(phrase)) {
                node.nodeValue = node.nodeValue.replace(phrase, '')

                return
            }
        } else {
            if(node.childNodes.length > 0) {
                removePhraseFromNode(node.childNodes, phrase)
            }
        }
    }
}