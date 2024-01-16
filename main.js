const stringEl = document.getElementById('stringEl')
const ulEl = document.getElementById('ul')
const submit = document.getElementById('submitBtn')

submit.addEventListener('click', (e) => convert(e))
const convert = (e) => {
  e.preventDefault() 
  let strings = stringEl.value
  
 if(!strings || !strings.includes(',')) {
   alert('Fikl the box with appropriate data before proceeding') 
   return
} 
ulEl.innerHTML = ''
  const strArr = strings.split(',').flatMap(el => el.split(". ")) 
  strArr.map(el => {
    if(el){
    const li = document.createElement('li')
    li.append(el.toUpperCase())
    ulEl.append(li)
    } 
  })
}