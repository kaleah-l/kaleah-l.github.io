//Author: Kaleah Leisher
//Date: 9/15/24
"use strict";
var gl;
var points;
var colors;
var sliderVal = 1;

function init()
{
    var canvas = document.getElementById( "gl-canvas" );

    gl = canvas.getContext('webgl2');
    if ( !gl ) { alert( "WebGL isn't available" ); }

    points=[
        
    ]
}

function line(a,b) {
    positions.push(vec2 (-1.0,0.0));
    position.push(vec2 (1.0,0.0));
}