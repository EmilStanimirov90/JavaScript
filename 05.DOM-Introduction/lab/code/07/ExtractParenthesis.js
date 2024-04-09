function extract(content) {
    const textEl = document.getElementById(content)

    const matches = textEl.textContent.matchAll(/\(([a-zA-Z ]+)\)/g)

    let result = []

    for (let match of matches){
        result.push(match[1])

    }

    result = result.join("; ")
    return result
}