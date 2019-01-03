#version 300 es
 
in float a_position;

float test = 0.0;
 
void main() {
    test = 1.0 - test;
    gl_Position = vec4(a_position, 0, 1, 1);
}