// uniform float amount;
// uniform sampler2D tDiffuse;
// varying vec2 vUv;

// float random(vec2 p)
// {
    //     vec2 K1=vec2(
        //         23.14069263277926,// e^pi (Gelfond's constant)
        //         2.665144142690225// 2^sqrt(2) (Gelfondâ€“Schneider constant)
    //     );
    //     return fract(cos(dot(p,K1))*12345.6789);
// }

// void main(){
    
    //     vec4 color=texture2D(tDiffuse,vUv);
    //     vec2 uvRandom=vUv;
    //     uvRandom.y*=random(vec2(uvRandom.y,amount));
    //     color.rgb+=random(uvRandom)*.3;
    //     gl_FragColor=vec4(color);
// }
/////////////////////////////////////////////////////////////////////////////
uniform float u_time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 u_resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI=3.14150265389793238;

void main(){
    gl_FragColor=vec4(1.);
}