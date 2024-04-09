function colorize() {
    const list = document.querySelectorAll('table tr:nth-child(2n)')

    for (let el of list){
        el.style.backgroundColor = 'teal'
    }
}