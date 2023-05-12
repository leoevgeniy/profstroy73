// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')
//
// myModal.addEventListener('shown.bs.modal', function () {
//     myInput.focus()
// })

// import * as fs from "fs";
import clients from '../clients.json'

// import axios from "axios"

// request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//
//     console.log(body);
// });

$('#callme').click(() => {
    const name = document.getElementById('name').value
    const phone = document.getElementById('number').value
    const newdata = {
        name:name,
        phone: phone
    }
    const options = {
        method: 'POST',
        url: 'https://api.ultramsg.com/instance1150/messages/chat',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        form: {
            token: 'Instance_token',
            to: '79673767234',
            body: `${name} оставил заявку. Его номер ${phone}`,
            priority: '10',
            referenceId: ''
        }
    };
    // let oldclients = {}
    // try {
    //     oldclients = JSON.parse(clients)
    //     oldclients.push(newdata)
    // } catch {
    //     oldclients = newdata
    // }
    // let num=document.getElementById("number").value;
    // let name= document.getElementById("name").value;

    // const win = window.open(`https://wa.me/89673767234?text=${name}%20${phone}`, '_blank');
    // win.focus();

    console.log(name, phone)
    // console.log(oldclients)
})