// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')
//
// myModal.addEventListener('shown.bs.modal', function () {
//     myInput.focus()
// })
import {clients} from "./clients.json";

const callme = document.getElementById('callme')

// callme.addEventListener('click', () => {
// })

$('#callme').click(() => {
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    clients.append({'name':name, 'phone': phone})
    console.log(name, phone)
})