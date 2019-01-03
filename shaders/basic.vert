#version 300 es
 
in vec4 a_position;
out vec2 complex;
 
void main() {
    complex = a_position.xy;
    gl_Position = a_position;
}