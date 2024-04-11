function attachGradientEvents() {
    const gradientEl = document.getElementById('gradient')
    const resultEl = document.getElementById('result')

    gradientEl.addEventListener('mousemove', (event) => {
        let cursorLocation = event.offsetX
        let elWidth = gradientEl.clientWidth
        const percentGradient = Math.floor((cursorLocation /elWidth) *100)
        
        resultEl.textContent = `${percentGradient}%`
        
    })
}