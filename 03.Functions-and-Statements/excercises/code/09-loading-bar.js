function solve(percentNumber){

    function createLoadingBar(numberOfsymbols){
        
        const loadingBar = new Array(10).fill('.')
        return loadingBar
    }
    function convertNumberToLoadingSymbol(percentNumber){
        return percentNumber / 10
    }
    function fillLoadingBar(numberOfSymbols, loadingBar){
        
        for (i = 0; i < numberOfSymbols; i++){
            loadingBar[i] = '%'
        }
        return loadingBar
    }

    function isLoaded(percentNumber){
        return percentNumber / 10 === 10
    }

    function printLoadingBarAndMessage(loadingBar, isLoaded){
        if (isLoaded){
            
            console.log('100% Complete!');
            console.log('[%%%%%%%%%%]');
        }else{
            console.log(`${percentNumber}% [${loadingBar.join('')}]`);
            console.log('Still loading...');
        }
    }

    const convertedNumber = convertNumberToLoadingSymbol(percentNumber)
    const loadingBar = createLoadingBar(convertedNumber)
    const filledLoadingBar = fillLoadingBar(convertedNumber, loadingBar)

    printLoadingBarAndMessage(filledLoadingBar, isLoaded(percentNumber))

    
}

solve(30)
solve(50)
solve(100)