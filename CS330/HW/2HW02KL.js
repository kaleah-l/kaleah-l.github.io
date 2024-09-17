//Author: Kaleah Leisher
//Date: 9/15/24
"use strict";
var gl;
var vertices;
var sliderVal = 1;

init();

function init()
{
    var canvas = document.getElementById( "gl-canvas" );

    gl = canvas.getContext('webgl2');
    if ( !gl ) { alert( "WebGL isn't available" ); }


    
    //  Configure WebGL

    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    //  Load shaders and initialize attribute buffers

    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Load the data into the GPU

    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer

    var positionLoc = gl.getAttribLocation( program, "aPosition" );
    gl.vertexAttribPointer( positionLoc, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( positionLoc );

    document.getElementById("slider").onchange = function(event) {
        sliderVal = parseInt(event.target.value);
        render();
    };

    render();
};

function render() {
    
    var sliderVal = parseInt(document.getElementById("slider").value);

    points=[];

    var sqrt = (Math.sqrt(3))/2;
    vertices=[
        vec2(-1.0,0.0),
        vec2(1.0,0.0)
    ];


    points.push(vertices[0]);
    points.push(vertices[46]);
    

    gl.bufferSubData( gl.ARRAY_BUFFER, 0, flatten(points));
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.LINE_STRIP, 0, points.length );
}