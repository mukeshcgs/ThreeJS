import '../css/style.css';
import * as THREE from 'three';
import {
    OrbitControls
} from '@three-ts/orbit-controls';

import fshader from '../shaders/fshader.frag'
import vshader from '../shaders/vshader.vert'

import fshader2 from '../shaders/fshader2.frag'
import vshader2 from '../shaders/vshader2.vert'

import fNnoiseShader from '../shaders/FNoiseShader.frag'
import vNoiseShader from '../shaders/vNoiseShader.vert'

import flower from '../img/flower.jpg'

import gsap from "gsap";
import * as dat from 'dat.gui';

let camera, scene, renderer;
let geometry, material, mesh;
let planeGeometry, planeMaterial, planeMesh;

init();

function init() {
    const gui = new dat.GUI();

    // PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.z = 10;
    var time = 0;
    var isPlaying = true
    scene = new THREE.Scene();

    // geometry = new THREE.IcosahedronGeometry(1, 10);
    //SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
    geometry = new THREE.SphereGeometry(1, 20, 20);


    // PlaneGeometry(width : Float, height : Float, widthSegments : Integer, heightSegments : Integer)
    planeGeometry = new THREE.PlaneGeometry(5, 5, 15, 15);
    //Basic Material color
    // planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
    // Shader Materrial
    let uniforms = {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector4() },
        u_color: { value: new THREE.Color(0x3f51b5) },
        u_time: { value: 0.0 },
        u_mouse: { value: { x: 0.0, y: 0.0 } },
        u_resolution: { value: { x: 0, y: 0 } },
    }
    planeMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        wireframe: true,
        vertexShader: vNoiseShader,
        fragmentShader: fNnoiseShader

    });
    // planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh = new THREE.Points(planeGeometry, planeMaterial);
    scene.add(planeMesh);

    material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        wireframe: true,
        vertexShader: vNoiseShader,
        fragmentShader: fNnoiseShader
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //LIGHT
    const light = new THREE.DirectionalLight(0xdfebff, 0.5);
    const light1 = new THREE.DirectionalLight(0xdfebff, 1);
    light.position.set(50, 200, 100);
    light.position.multiplyScalar(1.3);
    light.castShadow = true;
    scene.add(light1);
    scene.add(light);

    //Renderer
    let myCanvas = document.getElementById('myCanvas');
    renderer = new THREE.WebGLRenderer({
        canvas: myCanvas,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    document.body.appendChild(renderer.domElement);
    let controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.autoRotate = false;

}

function animation(time) {
    // mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;
    // controls.update();
    renderer.render(scene, camera);
}