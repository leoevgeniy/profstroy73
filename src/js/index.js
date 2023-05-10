import '../index.html';
import '../css/index.scss';
import {mult, sum} from "../modules/calc";

import main from '../images/main.webp';

const imgWrapper = document.querySelector('.img')

const mainImg = new Image()
mainImg.src = main
mainImg.height = 700
imgWrapper.append(mainImg)

console.log(mult(3,4))
console.log(sum(3,4))