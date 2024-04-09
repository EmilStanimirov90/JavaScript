function sumTable() {
    const tdEls = document.querySelectorAll('tr td:last-of-type:not(#sum')
    const totalEl = document.getElementById('sum')
    let result = 0

    for ( let el of tdEls){
        result += Number(el.textContent)
    }

    totalEl.textContent = result


}