// 樣式資源載入
import "./sass/aboutus.scss";
// import $ from 'jquery';
import Tweenmax, {
    TimelineLite,
    TimelineMax,
    TweenMax
} from "gsap";



const tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 1,
});

tl.to('.box_1', 1.2, {
    x: 150,
    ease: Power4.easeOut
}).to('.box_1', .4, {

    x: 500
});




//part 2

tl.fromTo('.a_1', .3, {
    x: -200,
    ease: Power4.easeOut
}, {
    x: 100,
}).fromTo('.a_2', .4, {
    x: -200,
    ease: Power4.easeOut
},{
   x:100
}, '-=.2').to('.a_1' , .8, {
x: 500,
ease: Power4.easeOut
}, '+=.3').to('.a_2', .5 , {
x: 500
},'-=.6');


TweenMax.to("#rect", 1, {morphSVG:"#circle"});








console.log('everything be ok');