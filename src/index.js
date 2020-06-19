import  "./sass/style.scss";
// import $ from 'jquery';
import Tweenmax from "gsap";

import  './img/1151.jpg';


$('.box').addClass("box-width");
const box  =  $('.box');
Tweenmax.to('.box' , 1 ,{
  x: 200,
  y: 100,
  repeat: 1,
  yoyo :  true
})


console.log('index ok');