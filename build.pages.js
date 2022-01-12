const fs = require('fs');
const path = require('path');

const extensionRegex = /(?:\.([^.]+))?$/;
const templateDirectory = 'template/post.vue'
const contentDirectory = 'content'
const targetDirectory = 'pages'
const markdownExtension = '.md'
const vueExtension = '.vue'

const content = getTemplateContent(templateDirectory)
const contentFiles = getDirectoryFiles(contentDirectory)

contentFiles
    .filter(file => getExtension(file) == markdownExtension)
    .forEach(markdownFile => {
        const markdownFileParsed = path.parse(markdownFile)
        const markdownFileDir = markdownFileParsed.dir
            .replace(contentDirectory, "")
            .substring(1)
        const finalDirectiory = markdownFile.toLowerCase()
            .replace(contentDirectory, targetDirectory)
            .replace(markdownExtension, vueExtension)

        const resultCommunicat = createOrReplaceFile(finalDirectiory, content, { path: `${markdownFileDir}/${markdownFileParsed.name}` })

        console.log(resultCommunicat)
    })

console.log(`\nBUILD FINISHED\n`)
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

function createOrReplaceFile(directory, content, jsonVariables) {
    const localization = path.dirname(directory)
    const keys = Object.keys(jsonVariables)
    var text = content

    keys.forEach(key => {
        const value = jsonVariables[key]
        const typeOfValue = typeof value

        switch (true) {
            case typeOfValue === 'string':
                text = text.replace(key, `'${value}'`)
                break;
            case typeOfValue === 'number':
                text = text.replace(key, `${value}`)
                break;
            default:
                text = text.replace(key, `${value}`)
        }
    })

    if (!fs.existsSync(localization)) {
        fs.mkdirSync(localization, { recursive: true })
    }

    fs.writeFileSync(directory, text, (err) => {
        return `${directory} - FAILED (Reason: ${err})`
    });

    return `${directory} - CREATED`
}

function getTemplateContent(directory) {
    return fs.readFileSync(directory, 'utf-8')
}