export function wrapLiElements() {
    let liElements = document.body.getElementsByTagName('li');

    for (let i = 0; i < liElements.length; i++) {
        let newParagraph = document.createElement('p');
        let liElement = liElements[i];

        liElement.childNodes.forEach(node => {
            newParagraph.appendChild(node);
        })

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
