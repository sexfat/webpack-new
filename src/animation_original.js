//資源載入
import "./sass/animation_original.scss";
import Tweenmax, {
  TimelineLite,
  TimelineMax,
  TweenMax
} from "gsap";
import fontawesome from "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import regular from "@fortawesome/fontawesome-free/scss/regular.scss";
import solid from "@fortawesome/fontawesome-free/scss/solid.scss";
import brands from "@fortawesome/fontawesome-free/scss/brands.scss";


// import  ScrollMagic from 'scrollmagic';
// import "scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js";
// import "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";






//基本移動

var controller = new ScrollMagic.Controller();

TweenMax.set('.a1', {
  x: 200
})

TweenMax.to('.a1', 1, {
  rotationY: 360,
  transformOrigin: "center center",
  transformPerspective: 2200

});

 
var title = TweenMax.to('.b1' , 1 ,{
  x: 350
})


var Scene = new ScrollMagic.Scene({
  triggerElement: '#tripper_01',
  //  triggerHook: 0
}).setTween(title).addIndicators().addTo(controller);


const tlp = new TimelineMax();


var parallax_01 = TweenMax.to('.c1' ,1 ,{
   y: 100
});

var parallax_02 = TweenMax.to('.c2' ,1 ,{
  y: 160
});

var parallax_03 = TweenMax.to('.c3' ,1 ,{
  y: -100
});


tlp.add([parallax_01, parallax_02, parallax_03]);


new ScrollMagic.Scene({

  triggerElement: "#trigger2",
  // triggerHook: 1,
  duration: '100%'
}).setTween(tlp).addIndicators().addTo(controller);


$('.d1').on('click',function(){
  TweenMax.to('.d2' , 1 , {
    x: 100,
    });
    TweenMax.to('.d2-1' , 1 , {
      x: 100
      });
});


$('.d3').on('click',function(){
  TweenMax.to('.d2' , 1 , {
    x: 100,
    opacity: 0
    });
});


$('.d4').on('click',function(){
  TweenMax.to('.d2' , 1 , {
    x: 200,
    opacity: 1
    });
});






