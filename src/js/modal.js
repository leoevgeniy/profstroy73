// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')
//
// myModal.addEventListener('shown.bs.modal', function () {
//     myInput.focus()
// })
// import dotenv from "dotenv";
// import nodemailer from "nodemailer";
$('#callme').click(() => {
    const name = document.getElementById('name').value
    const phone = document.getElementById('number').value
    // const newdata = {
    //     name:name,
    //     phone: phone
    // }
    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "leoevgeniy@gmail.com",
    //     Password : "Zareval80!",
    //     To : 'support@lltoys.ru',
    //     From : "leoevgeniy@gmail.com",
    //     Subject : "Test email",
    //     Body : `<html><h2>${name}</h2><strong>Просит перезванить на номер ${phone}</strong><br></br><em>Italic</em></html>`
    // }).then(
    //     message => alert(message)
    // );

    console.log(name, phone)

})