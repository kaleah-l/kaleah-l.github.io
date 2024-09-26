
var canvas;
var gl;
var positions;
var bufferId;
var triangleA;
var triangleB;
var triangleA;
var toggleMorph;

init();

function init()
{
    canvas = document.getElementById("gl-canvas");

    gl = canvas.getContext('webgl2');
    if (!gl) alert("WebGL 2.0 isn't available");

    //defining shape arrays

    triangleA = [
        vec2(-0.5,-0.6),
        vec2(0,0.8),
        vec2(0,0.8),
        vec2(0.6,-0.3),
        vec2(0.6,-0.3),
        vec2(-0.5,-0.6)
    ];

    triangleB = [
        vec2(-0.2,-0.3),
        vec2(0.3,0.4),
        vec2(0.3,0.4),
        vec2(0.8,-0.6),
        vec2(0.8,-0.6),
        vec2(-0.2,-0.3)
    ];

    //  Configure WebGL

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    //  Load shaders and initialize attribute buffers

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // Load the data into the GPU

    bufferIdA = gl.createBuffer();
    bufferIdB = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferIdA);
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferIdB);
    gl.bufferData(gl.ARRAY_BUFFER, 8*Math.pow(3, 6), gl.STATIC_DRAW);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(triangleA));
    //gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(triangleB));

    // Associate out shader variables with our data buffer

    var positionLoc = gl.getAttribLocation(program, "aPosition");
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);

    toggleMorph = 0;

    // Toggle Button
    //var Btn = document.getElementById("toggleBtn");
    //Btn.addEventListener("click", toggleMorph);

    // Change morph on or off
    //function toggleMorph {
    //    if (toggleMorph == 0){
    //        toggleMorph == 1;
    //    } else {
    //        toggleMorph == 0;
    //    }
    //}

    // while (toggleMorph == 1) {
        
    // }

    render();
};

function render()
{
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.LINE_LOOP, 0, triangleA.length);
    //gl.drawArrays( gl.LINE_LOOP, 0, triangleB.length);
}
