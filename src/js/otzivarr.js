import {otziv} from "./otziv";

let oppened = false
class otzivCard {
    constructor(name, descr, stars) {
        this.name = name;
        this.descr = descr;
        this.stars = stars;
        this.parent = document.querySelector('.otziv-array');
    }

    render() {

        const element = document.createElement('div');
        // if (this.classes.length === 0) {
        //     this.element = 'menu__item';
        //     element.classList.add(this.element);
        // } else {
        //     this.classes.forEach(className => element.classList.add(className));
        // }
        element.classList.add('col-lg-4')
        element.classList.add('col-md-6')
        element.classList.add('col-12')
        element.classList.add('text-start')
        element.classList.add('my-3')
        let otzivstars = ''
        const star = '<div id="star"></div>'

        for (let i = 1; i <= this.stars; i++) {
            otzivstars += star
        }
        element.innerHTML = `
                    <h4 class="fs-lg-4, fs-5">${this.name}</h4>
                    <div class="stars d-flex">${otzivstars}</div>
                    <div class="fs-lg-6 fs-6 otziv">${this.descr}</div>

            `;
        this.parent.append(element);

    }

}

otziv.map((item, i) => {
    if (i<6) {
        new otzivCard(item.name, item.otziv, item.stars).render()}
})
$(".arrow-4").click(function() {
    while (document.querySelector('.otziv-array').firstChild) {
        document.querySelector('.otziv-array').removeChild(document.querySelector('.otziv-array').firstChild)
    }
    $(this).toggleClass("open");
    oppened = !oppened
    if (oppened) {
        otziv.map((item, i) => {
            new otzivCard(item.name, item.otziv, item.stars).render()
        })}
    else {
        otziv.map((item, i) => {
            if (i<6) {
                new otzivCard(item.name, item.otziv, item.stars).render()}
        })
    }
});





