uniform float time;
uniform float progress;
uniform sampler2D flower;
uniform vec4 resolution;
// varying vec2 vUv;
varying vec3 vPosition;
float PI=3.141592653389793238;
uniform vec3 u_color;
void main(void){
    gl_FragColor=vec4(u_color,1.);
    // vec4 t=texture2D(flower,vUv);
    // gl_FragColor=t;
}