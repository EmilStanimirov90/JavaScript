function solve() {
  const textEL = document.getElementById('text')
  const namingConventionEl = document.getElementById('naming-convention')
  const resultEl = document.getElementById('result')

  const text = textEL.value
  const namingConvention = namingConventionEl.value

  const convertToPascalCase = (text) =>
    text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
  
  const convertor = {
    'Pascal Case': convertToPascalCase,
    'Camel Case' : (text) => convertToPascalCase(text).charAt(0).toLowerCase() + convertToPascalCase(text).slice(1)

  }

  if (!convertor[namingConvention]) {
    resultEl.textContent = 'Error!'
    
  } else {
    resultEl.textContent = convertor[namingConvention](text)

  }

  
}