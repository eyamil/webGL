#version 300 es

precision mediump float;
 
in vec2 complex;
out vec4 outColor;

float threshhold = 1000.0;

vec2 square(vec2 arg) {
    return(vec2(arg.x*arg.x-arg.y*arg.y, 2.0*arg.x*arg.y));
}


void main() {
    vec2 init = vec2(0,0);
    float iter = 0.0;
    while (length(init) < 2.0 && iter < threshhold) {
        init = square(init) + complex;
        iter += 1.0;
    }

    if (iter == 0.0) {
        outColor = vec4(1,0,0,1);
    }
    else {
        if (iter != threshhold) {
            float phase = log2(iter)/log2(threshhold);
            outColor = 1.0/2.0*(vec4(1,1,1,1) + vec4(sin(6.28*phase),sin(6.28*phase+2.09),sin(6.28*phase+4.18),1));
        }
        else {
            outColor = vec4(1,1,1,1);
        }
    }
}