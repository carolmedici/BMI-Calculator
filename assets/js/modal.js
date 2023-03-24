export const Modal ={

modalWrapper : document.querySelector('.modal-wrapper'),
modalResult : document.querySelector('.modal .title span'),
ButtonClose : document.querySelector('.modal button.close'),
open(){
        this.modalWrapper.classList.add('open')
},
close(){
        this.modalWrapper.classList.remove('open')
},
}


Modal.ButtonClose.onclick = () =>{
    Modal.close()
}

addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
    console.log(event)
    if(event.key === 'Escape'){
        Modal.close()
    }
}      