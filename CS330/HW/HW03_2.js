var canvas;
var gl;
var positions;
var bufferId;
var triangleA;
var triangleB;
var triangleA;

var delay = 100;
var toggleMorph = true;

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

    out = []

    out=triangleA;

    //  Configure WebGL

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    //  Load shaders and initialize attribute buffers

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // Load the data into the GPU

    //bufferIdA = gl.createBuffer();
    //bufferIdB = gl.createBuffer();
    //gl.bindBuffer(gl.ARRAY_BUFFER, bufferIdA);
    //gl.bindBuffer(gl.ARRAY_BUFFER, bufferIdB);
    //gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(triangleA));
    //gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(triangleB));

    bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, 8*Math.pow(3, 6), gl.STATIC_DRAW);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(out));

    // Associate out shader variables with our data buffer

    var positionLoc = gl.getAttribLocation(program, "aPosition");
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);

    //var positionLoc = gl.getAttribLocation(program, "bPosition");
    //gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
    //gl.enableVertexAttribArray(positionLoc);


    //from lab 7
    //tLoc = gl.getUniformLocation( program, "ut" );

    // Toggle Button
    //var Btn = document.getElementById("toggleBtn");
    //Btn.addEventListener("click", toggleMorph);

    // Change morph on or off
    //function toggleMorph {
    //    if (toggleMorph == false){
    //        toggleMorph == true;
    //    } else {
    //        toggleMorph == false;
    //    }
    //}

    // while (toggleMorph == true) {
        
    // }

    render();
};

function render()
{

    //use uniform to set and send t

    //How do I set t?

    // if (t==0) {

    // } else if (t==1) {

    // } else {

    // }

    //from lab 7
    //(Unsure of this) -> theta += (rotation ? 0.1 : 0.0);
    //gl.uniform1f(tLoc, t);

    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.LINE_LOOP, 0, out.length);
    //gl.drawArrays( gl.LINE_LOOP, 0, triangleB.length);

    setTimeout(
        function (){requestAnimationFrame(render);}, delay
    );
}
