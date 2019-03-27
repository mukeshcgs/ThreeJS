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
import * as THREE from 'three';

var winW = window.innerWidth;
var winH = window.innerHeight;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, winW / winH, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(winW, winH);
document.body.appendChild(renderer.domElement);

//Create shape
var geometry = new THREE.BoxGeometry(2, 2, 2, 20, 20, 20);

var material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

//Game logic
var update = function () {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}

//Draw Scene
var render = function () {
	renderer.render(scene, camera);
}

//Run game loop (update, render, repeat)
var GameLoop = function () {
	requestAnimationFrame(GameLoop);

	update();
	render();
}
GameLoop();

//Code
// $(document).ready(function () { });

console.log("%cMade with ❤︎️ by Mukesh — Designer by profession, an artist by passion. — mukeshthankar.com", "background:#000;color:#fff;padding:0.5em 1em;line-height:2;");
