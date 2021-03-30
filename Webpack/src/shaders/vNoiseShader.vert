// #ifdef GL_SL
// precision mediump float;
// #endif
/////////////////////////////////////////////////////////////////////////////
// varying vec2 vUv;
// void main(){
    //     vUv=uv;
    //     gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
// }
/////////////////////////////////////////////////////////////////////////////

// uniform vec2 u_resolution;
// uniform vec2 u_mouse;
// uniform float u_time;

// float random(vec2 st){
    //     return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
// }

// void main(){
    
    //     vec2 st=gl_FragCoord.xy/u_resolution.xy;
    
    //     float rnd=random(st);
    
    //     gl_FragColor=vec4(vec3(rnd),.1);
    
// }

/////////////////////////////////////////////////////////////////////////////
uniform float u_time;
varying vec2 vUv;
varying vec3 vPosition;
uniform sampler2D texture1;
float PI=3.14150265389793238;

void main(){
    vUv=uv;
    vec4 mvPosition=modelViewMatrix*vec4(position,1.);
    gl_PointSize=10.*(1./-mvPosition.z);
    gl_Position=projectionMatrix*mvPosition;
}