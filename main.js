import { fetchUsers} from "./function/api.js"

const content = document.querySelector('.container')
const elementId  =  document.querySelector('.id')
const elementadvice  =  document.querySelector('.advice')

async function a(){
    const link = await fetchUsers( "https://api.adviceslip.com/advice")
    elementId.innerHTML = `ADVICE # ${link.slip.id}`
    elementadvice.innerHTML = `" ${link.slip.advice} "`

}
a()
document.querySelector('button').addEventListener('click',()=>{
    a()
})






