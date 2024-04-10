function generateReport() {
    const thEls =document.querySelectorAll('table thead th')
    const trEls = document.querySelectorAll('table tbody tr')
    const outputEl = document.getElementById('output')

    const colums =  Array
         .from(thEls)
         .map((thEl) => {
            const checkboxEl = thEl.querySelector('input[type=checkbox]')
            return {
                name: thEl.textContent.toLowerCase().trim(),
                active: checkboxEl.checked
            }
            
         }, {})

    const reportData = Array
         .from(trEls)
         .map(trEl => {
            const tdEls = trEl.querySelectorAll('td')

            const result =Array
                .from(tdEls)
                .reduce((data, tdEl, i) => {
                    if(!colums[i].active){
                        return data
                    }
                    const columName = colums[i].name
                    data[columName] = tdEl.textContent

                    return data
                }, {})

            return result
         })
    
         outputEl.value = JSON.stringify(reportData, null, 2)
}