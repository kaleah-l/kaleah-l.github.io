//Author: Kaleah Leisher
//Date: 9/10/24

"use strict";
var gl;
var points;
init();

function init()
{
    var canvas = document.getElementById( "gl-canvas" );

    gl = canvas.getContext('webgl2');
    if ( !gl ) { alert( "WebGL isn't available" ); }

    var sqrt = (Math.sqrt(3))/2;
    points=[
    vec2(-1.0,0.0),

    vec2(-79/81,0.0),
    vec2(-78/81, ((2/81)*sqrt)),
    vec2(-77/81,0.0),
    
    vec2(-25/27,0.0),
    vec2(-8/9, ((2/27)*sqrt)),
    vec2(-23/27,0.0),

    vec2(-67/81,0.0),
    vec2(-66/81, ((2/81)*sqrt)),
    vec2(-65/81,0.0),

    vec2(-7/9,0.0),
    vec2(-2/3, ((2/9)*sqrt)),
    vec2(-5/9,0.0),

    vec2(-43/81,0.0),
    vec2(-42/81, ((2/81)*sqrt)),
    vec2(-41/81,0.0),

    vec2(-13/27,0.0),
    vec2(-4/9, ((2/27)*sqrt)),
    vec2(-11/27,0.0),

    vec2(-31/81,0.0),
    vec2(-30/81, ((2/81)*sqrt)),
    vec2(-29/81,0.0),

    vec2(-1/3,0.0),
    vec2(0.0, ((2/3)*sqrt)),
    vec2(1/3,0.0),

    vec2(29/81,0.0),
    vec2(30/81, ((2/81)*sqrt)),
    vec2(31/81,0.0),
    
    vec2(11/27,0.0),
    vec2(4/9, ((2/27)*sqrt)),
    vec2(13/27,0.0),

    vec2(41/81,0.0),
    vec2(42/81, ((2/81)*sqrt)),
    vec2(43/81,0.0),

    vec2(5/9,0.0),
    vec2(2/3, ((2/9)*sqrt)),
    vec2(7/9,0.0),

    vec2(65/81,0.0),
    vec2(66/81, ((2/81)*sqrt)),
    vec2(67/81,0.0),

    vec2(23/27,0.0),
    vec2(8/9, ((2/27)*sqrt)),
    vec2(25/27,0.0),

    vec2(77/81,0.0),
    vec2(78/81, ((2/81)*sqrt)),
    vec2(79/81,0.0),

    vec2(1.0,0.0)
    ];
    
    //
    //  Configure WebGL
    //
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    //  Load shaders and initialize attribute buffers

    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Load the data into the GPU

    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer

    var positionLoc = gl.getAttribLocation( program, "aPosition" );
    gl.vertexAttribPointer( positionLoc , 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( positionLoc );

    document.getElementById("slider").onchange = function(event) {
        sliderVal = parseInt(event.target.value);
        render();
    };

    render();
};

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );

    gl.drawArrays( gl.POINTS, 0, points.length );
    gl.drawArrays( gl.LINE_STRIP, 0, points.length );
    gl.drawArrays( gl.POINTS, 0, sliderVal );
    gl.drawArrays( gl.LINES, 0, sliderVal );
    //gl.drawArrays( gl.LINE_STRIP, 0, points.length );
    //gl.drawArrays( gl.LINE_LOOP, 0, points.length );
}