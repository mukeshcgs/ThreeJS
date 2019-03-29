import 'babel-polyfill';
//Files
import '../css/main.scss';

//jQuery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

//Libs
import 'gsap'
import { Tone } from 'tone';
import { TimelineMax, Power4 } from 'gsap';
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';

import 'animation.gsap';
import 'debug.addIndicators';


var winW = window.innerWidth;
var winH = window.innerHeight;

var controller = new ScrollMagic.Controller();

//Code
$(document).ready(function () {
});
// init controller
$(".project").each(function () {
	var $overlay = $(this).find(".overlay"),
		$projectInfo = $(this).find(".project-info"),
		$smallTitle = $(this).find(".small-title"),
		$projectLink = $(this).find("project-link"),
		$h5 = $(this).find("h5")

	var animateIn = new TimelineMax();

	animateIn
		.fromTo($overlay, 2, { scale: 1.5, skewX: 30 }, { skewX: 0, xPercent: 100, transformOrigin: "0% 100%", ease: Power4.easeOut })
		.from($projectInfo, 1, { scaleY: 0, transformOrigin: "bottom left" }, "-=0.5")
		.from($smallTitle, 0.3, { autoAlpha: 0, y: 30, ease: Power4.easeOut })
		.from($projectLink, 0.3, { autoAlpha: 0, y: 30, ease: Power4.easeOut })
		.from($h5, 0.3, { autoAlpha: 0, y: 30, ease: Power4.easeOut })
	console.log(this);

	//make a scrollmagic scene
	var scene = new ScrollMagic.Scene({
		triggerElement: this,
	}).addIndicators().setTween(animateIn).addTo(controller)
})



console.log("%cMade with ❤︎️ by Mukesh — Designer by profession, an artist by passion. — mukeshthankar.com", "background:#000;color:#fff;padding:0.5em 1em;line-height:2;");
