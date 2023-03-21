const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalResult = document.querySelector('.modal .title span')
const ButtonClose = document.querySelector('.modal button.close')

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    const res = BMI(weight, height)
    const result = `Your BMI is : ${res} `

    modalResult.innerText = result
    Modal.open()
}

function BMI(weight, height) {
    return (weight/(height **2)).toFixed(2)
} 

ButtonClose.onclick = () =>{
    Modal.close()
}

const Modal ={
    open(){
        modalWrapper.classList.add('open')
    },
    close(){
        modalWrapper.classList.remove('open')
    }
}