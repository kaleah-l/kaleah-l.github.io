//Author: Kaleah Leisher
//Date: 9/15/24
"use strict";
var gl;
var points;
var colors;
var sliderVal = 1;

init();

function init()
{
    var canvas = document.getElementById( "gl-canvas" );

    gl = canvas.getContext('webgl2');
    if ( !gl ) { alert( "WebGL isn't available" ); }

    var sqrt = (Math.sqrt(3))/2;
    vertices=[
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
    if(sliderVal === 0) {
        points.push(vertices[0]);
    } else if (sliderVal.valueOf === 1) {
        points.push(vertices[22]);
        points.push(vertices[23]);
        points.push(vertices[24]);
        points.push(vertices[46]);
    } else if (sliderVal.valueOf === 2) {
        points.push(vertices[10]);
        points.push(vertices[11]);
        points.push(vertices[12]);
        points.push(vertices[22]);
        points.push(vertices[23]);
        points.push(vertices[24]);
        points.push(vertices[34]);
        points.push(vertices[35]);
        points.push(vertices[36]);
        points.push(vertices[46]);
    } else if (sliderVal.valueOf === 3) {
        points.push(vertices[4]);
        points.push(vertices[5]);
        points.push(vertices[6]);
        points.push(vertices[10]);
        points.push(vertices[11]);
        points.push(vertices[12]);
        points.push(vertices[22]);
        points.push(vertices[23]);
        points.push(vertices[24]);
        points.push(vertices[34]);
        points.push(vertices[35]);
        points.push(vertices[36]);
        points.push(vertices[40]);
        points.push(vertices[41]);
        points.push(vertices[42]);
        points.push(vertices[46]);
    } else {
        points.push(vertices[1]);
        points.push(vertices[2]);
        points.push(vertices[3]);
        points.push(vertices[4]);
        points.push(vertices[5]);
        points.push(vertices[6]);
        points.push(vertices[7]);
        points.push(vertices[8]);
        points.push(vertices[9]);
        points.push(vertices[10]);
        points.push(vertices[11]);
        points.push(vertices[12]);
        points.push(vertices[13]);
        points.push(vertices[14]);
        points.push(vertices[15]);
        points.push(vertices[16]);
        points.push(vertices[17]);
        points.push(vertices[18]);
        points.push(vertices[19]);
        points.push(vertices[20]);
        points.push(vertices[21]);
        points.push(vertices[22]);
        points.push(vertices[23]);
        points.push(vertices[24]);
        points.push(vertices[25]);
        points.push(vertices[26]);
        points.push(vertices[27]);
        points.push(vertices[28]);
        points.push(vertices[29]);
        points.push(vertices[30]);
        points.push(vertices[31]);
        points.push(vertices[32]);
        points.push(vertices[33]);
        points.push(vertices[34]);
        points.push(vertices[35]);
        points.push(vertices[36]);
        points.push(vertices[37]);
        points.push(vertices[38]);
        points.push(vertices[39]);
        points.push(vertices[40]);
        points.push(vertices[41]);
        points.push(vertices[42]);
        points.push(vertices[43]);
        points.push(vertices[44]);
        points.push(vertices[45]);
        points.push(vertices[46]);
    }

    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, flatten(points));
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.LINE_STRIP, 0, points.length );
}