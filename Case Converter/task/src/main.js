
let textarea = document.querySelector('textarea')


let upperCaseButton = document.getElementById('upper-case')
let lowerCaseButton = document.getElementById('lower-case')
let properCaseButton = document.getElementById('proper-case')
let sentenceCaseButton = document.getElementById('sentence-case')
let downloadButton = document.getElementById('save-text-file')

function upperText() {
    textarea.value = textarea.value.toUpperCase()
}

function lowerText(){
    textarea.value = textarea.value.toLowerCase()
}

function properText(){
    let xs = textarea.value.split(' ')
    for (let i = 0; i < xs.length; i++) {
        xs[i] = xs[i].charAt(0).toUpperCase() + xs[i].slice(1).toLowerCase()
    }
    textarea.value = xs.join(' ')
}

function sentenceText(){
    let xs = textarea.value.split('.')
    for (let i = 0; i < xs.length; i++) {
        xs[i] = xs[i].charAt(0).toUpperCase() + xs[i].slice(1).toLowerCase()
        if (i >= 1) {
            if (xs[i] !== ''){
                xs[i] = xs[i][0] + xs[i].charAt(1).toUpperCase() + xs[i].slice(2).toLowerCase()
            }
        }
    }
    textarea.value = xs.join('.')
}
function download(filename, text) {
    let element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    element.setAttribute('download', filename)

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
}

// Start file download.
function start(){
    download("text.txt", textarea.value)
}

function doText(){
    upperCaseButton.addEventListener('click', upperText)
    lowerCaseButton.addEventListener('click', lowerText)
    properCaseButton.addEventListener("click", properText)
    sentenceCaseButton.addEventListener("click", sentenceText)
    downloadButton.addEventListener("click", start)
}

doText()

