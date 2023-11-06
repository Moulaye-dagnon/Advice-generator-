import { fetchUsers} from "./function/api.js"

const content = document.querySelector('.container')
const elementId  =  document.querySelector('.id')
const elementadvice  =  document.querySelector('.advice')

//function to fill  the container
AdviceCreate()


async function AdviceCreate(){
    const link = await fetchUsers( "https://api.adviceslip.com/advice")
    elementId.innerHTML = `ADVICE # ${link.slip.id}`
    elementadvice.innerHTML = `" ${link.slip.advice} "`

}
//add a Event about the button for change the advice
document.querySelector('button').addEventListener('click',()=>{
    AdviceCreate()
})






