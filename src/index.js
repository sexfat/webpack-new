import  "./sass/style.scss";
import $ from 'jquery';
import Tweenmax from "gsap";


$('.box').addClass("box-width");
const box  =  $('.box');
Tweenmax.to('.box' , 1 ,{
  x: 100
})







console.log('oks');