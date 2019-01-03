#version 300 es
 
uniform vec4 u_scale;
uniform vec4 u_center;
 
vec4 transform(vec4 preimage) {
    return((preimage - u_center)/u_scale);
}

in vec4 a_position;

void main() {
    gl_Position = transform(a_position);
}