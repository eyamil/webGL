#version 300 es

in vec4 a_position;
uniform vec4 u_scale;
uniform vec4 u_center;
out vec2 complex;
 
vec4 transform(vec4 preimage) {
    return((preimage - u_center)/u_scale);
}

void main() {
    complex = a_position.xy;
    gl_Position = transform(a_position);
}