function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
      return shader;
    }
   
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
  }

function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }
   
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }
  
  // Helper Functions:
  WebGL2RenderingContext.prototype.createVertexPipeline = function(name, program, size, 
    type, use = WebGL2RenderingContext.STATIC_DRAW, normalize = false, 
    stride = 0, offset = 0) {
        const attribLoc = this.getAttribLocation(program, name);
        const glBuffer = this.createBuffer();
        const vao = this.createVertexArray();
        this.bindVertexArray(vao);
        this.enableVertexAttribArray(attribLoc);

        this.fillVertexPipeline = function (data) {
            this.bindBuffer(this.ARRAY_BUFFER, glBuffer);
            this.bufferData(this.ARRAY_BUFFER, data, use);
            this.vertexAttribPointer(attribLoc, size, type, normalize, stride, offset);
        }

        return(this.fillVertexPipeline.bind(this));
    }

    WebGL2RenderingContext.prototype.setupParameterPipeline = function(name, program, setterfn) {
        const uniformLoc = this.getUniformLocation(program, name);
        return(setterfn.bind(this, uniformLoc));
    }