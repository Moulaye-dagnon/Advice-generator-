import { fetchUsers} from "./function/api.js"

const link = await fetchUsers( "https://api.adviceslip.com/advice")
const content = document.querySelector('.container')
const elementId  =  document.querySelector('.id')
const elementadvice  =  document.querySelector('.advice')
elementId.innerHTML = `ADVICE # ${link.slip.id}`
elementadvice.innerHTML = `" ${link.slip.advice} "`
document.querySelector('button').addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.reload()
})






