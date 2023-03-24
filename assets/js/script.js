import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'
import {BMI, notANumber} from'./utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    const alertError = notANumber(weight) || notANumber(height)

    if (alertError){
        AlertError.open()
        return;
    }
   


    const res = BMI(weight, height)
    const result = `Your BMI is : ${res} `

    Modal.modalResult.innerText = result
    Modal.open()
}




