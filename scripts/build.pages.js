const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const extensionRegex = /(?:\.([^.]+))?$/;
const templateDirectory = 'template/post.vue'
const templateRouter = 'template/router.vue'
const contentDirectory = 'content'
const targetDirectory = 'pages'
const markdownExtension = '.md'
const vueExtension = '.vue'

const content = getContent(templateDirectory)
const contentFiles = getDirectoryFiles(contentDirectory)

contentFiles
    .filter(file => getExtension(file) == markdownExtension)
    .forEach(markdownFile => {
        try {
            const markdownVariables = yaml.load(
                getContent(markdownFile)
                    .split('---')[1]
            )

            validation(markdownVariables)

            const markdownFileParsed = path.parse(markdownFile)
            const markdownFileDir = markdownFileParsed.dir
                .replace(contentDirectory, "")
                .substring(1)
            const routerContent = getContent(templateRouter)
            const router = replaceSentences(routerContent, { params: markdownVariables.route })

            const finalDirectiory = markdownFile.toLowerCase()
                .replace(contentDirectory, targetDirectory)
                .replace(markdownExtension, vueExtension)
            const finalContent = replaceSentences(
                content,
                {
                    contentLocalization: `'${markdownFileDir}/${markdownFileParsed.name}'`,
                    router: router,
                    postRoute: markdownVariables.route.path, 
                    postTitle: markdownVariables.title
                }
            )

            const result = createOrReplaceFile(
                finalDirectiory,
                finalContent
            )

            console.log(result)
        } catch (err) {
            console.log(`\nBUILD FINISHED - FAILED\n`)

            throw err;
        }
    })

console.log(`\nBUILD FINISHED - SUCCEED\n`)

function validation(jsonVariables) {
    switch (true) {
        case typeof jsonVariables.title != 'string':
            throw TypeError(`Markdown must contains title variable as string!!!`)
        case typeof jsonVariables.description != 'string':
            throw TypeError(`Markdown must contains description variable as string!!!`)
        case typeof jsonVariables.route != 'object':
            throw TypeError(`Markdown must contains route variable as object!!!`)
        case typeof jsonVariables.img != 'string':
            throw TypeError(`Markdown must contains img variable as string!!!`)
    }
}

function getDirectoryFiles(directory) {
    return fs.readdirSync(directory)
        .flatMap(file => {
            const dir = `${directory}/${file}`
            const isFile = fs.statSync(dir).isFile()

            if (isFile) {
                return dir
            } else {
                return getDirectoryFiles(`${directory}/${file}`)
            }
        })
}

function getExtension(name) {
    return extensionRegex.exec(name)[0]
}

function replaceSentences(content, jsonVariables) {
    const keys = Object.keys(jsonVariables)
    let text = content

    keys.forEach(key => {
        const value = jsonVariables[key]
        const typeOfValue = typeof value

        switch (true) {
            case typeOfValue == 'object':
                text = text.replace(key, JSON.stringify(value))
                break;
            case typeOfValue == 'undefined':
                text = text.replace(key, '')
                break;
            default:
                text = text.replace(key, value)
        }
    })

    return text
}

function createOrReplaceFile(directory, content) {
    const localization = path.dirname(directory)

    if (!fs.existsSync(localization)) {
        fs.mkdirSync(localization, { recursive: true })
    }

    fs.writeFileSync(directory, content, (err) => {
        return `${directory} - FAILED (Reason: ${err})`
    });

    return `${directory} - CREATED`
}

function getContent(directory) {
    return fs.readFileSync(directory, 'utf-8')
}