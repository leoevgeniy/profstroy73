import '../index.html';
import '../css/index.scss';
import './otzivarr';
import './modal';
import modal from './modal'
function fontsize() {
    let phone = document.querySelectorAll('.phone')

    phone.forEach(pho => {
        console.log(pho.parentElement.offsetWidth)
        pho.style.fontSize = pho.parentElement.offsetWidth > 960 ? pho.parentElement.offsetWidth *0.025 :pho.parentElement.offsetWidth *0.03
        pho.style.paddingLeft = pho.parentElement.offsetWidth *0.01
        pho.style.paddingRight = pho.parentElement.offsetWidth *0.01
    })
    let phonesvg = document.querySelectorAll('.header__line svg')
    phonesvg.forEach(pho => {
        pho.style.height = pho.parentElement.offsetHeight *0.8

    })
    let ourproducts = document.querySelector('.our-products');
    let main = document.querySelector('main');
    ourproducts.style.fontSize = main.offsetWidth * 0.04
    let block = document.querySelectorAll('main .info');
    let text = document.querySelectorAll('main .info span');
    let pixels = document.querySelectorAll('main .info .pixel');
    let titleblock = document.querySelector('main .sections')
    let title = document.querySelector('main .sections p')
    title.style.fontSize = titleblock.offsetWidth / 41
    let noavansblock = document.querySelector('main .title')
    noavansblock.style.marginTop = noavansblock.offsetWidth * 0.03
    let noavans = document.querySelector('main .title .no-avans')
    noavans.style.fontSize = noavansblock.offsetWidth / 28
    noavans.style.marginTop = noavansblock.offsetWidth / 10
    noavans.style.marginRight = noavansblock.offsetWidth / 40
    block.forEach((info) => {
        let w = info.offsetWidth;
        info.style.marginLeft = w * 0.25

        text.forEach((span) => {
            span.style.fontSize = w / 12 + "px";
            span.style.top = w / 10 + "px";
            span.style.marginLeft = w / 10 + "px";

        })
        pixels.forEach((pixel) => {
            pixel.style.width = w / 24 + "px";
            pixel.style.height = w / 22 + "px";

        })
    })
    let button = document.querySelector('.callme');
    button.style.marginTop = noavansblock.offsetWidth * 0.2
    button.style.width = noavansblock.offsetWidth * 0.54
    button.style.height = noavansblock.offsetWidth * 0.14
    button.style.fontSize = button.offsetWidth * 0.07
    let skidkabutton = document.querySelector('.skidka-button');
    skidkabutton.style.marginTop = noavansblock.offsetWidth * 0.2
    skidkabutton.style.width = noavansblock.offsetWidth * 0.54
    skidkabutton.style.height = noavansblock.offsetWidth * 0.14
    skidkabutton.style.fontSize = button.offsetWidth * 0.07
    let skidka = document.querySelectorAll('.skidka')
    skidka.forEach(ski => {
        ski.style.fontSize = ski.parentElement.offsetWidth * 0.05
    })
    const footertitle = document.querySelector('footer .title')
    footertitle.style.fontSize = footertitle.parentElement.offsetWidth * 0.02
    const contactstitle = document.querySelectorAll('footer .p-title')
    contactstitle.forEach(title => {
        title.style.fontSize = document.querySelector('footer').offsetWidth * 0.03

    })
    const contactsp = document.querySelectorAll('footer .p-footer')
    contactsp.forEach(title => {
        title.style.fontSize = contactstitle[0].offsetWidth * 0.1

    })

}
window.onload = fontsize;
window.onresize = fontsize;
// window.addEventListener('DOMContentLoaded', () => {
//     modal();
// });


