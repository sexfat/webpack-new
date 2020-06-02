import  "./sass/style.scss";
// import $ from 'jquery';
import Tweenmax from "gsap";

import fontawesome from "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import regular from "@fortawesome/fontawesome-free/scss/regular.scss";
import solid from "@fortawesome/fontawesome-free/scss/solid.scss";
import brands from "@fortawesome/fontawesome-free/scss/brands.scss";






$('.box').addClass("box-width");
const box  =  $('.box');
Tweenmax.to('.box' , 1 ,{
  x: 200,
  y: 800,
  repeat: 1,
  yoyo :  true
})


console.log('index ok');