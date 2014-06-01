// // Place all the behaviors and hooks related to the matching controller here.
// // All this logic will automatically be available in application.js.

// if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

// var container, stats;
// var camera, scene, renderer, particles, geometry, material, i, h, color, sprite, size;
// var mouseX = 0, mouseY = 0;

// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;

// init();
// animate();

// function init() {

//   container = document.findElementById( '#home' );
//   document.body.appendChild( container );

//   camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 2, 2000 );
//   camera.position.z = 1000;

//   scene = new THREE.Scene();
//   scene.fog = new THREE.FogExp2( 0x000000, 0.001 );

//   geometry = new THREE.Geometry();

//   sprite = THREE.ImageUtils.loadTexture( "textures/sprites/disc.png" );

//   for ( i = 0; i < 10000; i ++ ) {

//     var vertex = new THREE.Vector3();
//     vertex.x = 2000 * Math.random() - 1000;
//     vertex.y = 2000 * Math.random() - 1000;
//     vertex.z = 2000 * Math.random() - 1000;

//     geometry.vertices.push( vertex );

//   }

//   material = new THREE.ParticleSystemMaterial( { size: 35, sizeAttenuation: false, map: sprite, transparent: true } );
//   material.color.setHSL( 1.0, 0.3, 0.7 );

//   particles = new THREE.ParticleSystem( geometry, material );
//   particles.sortParticles = true;
//   scene.add( particles );

//   //

//   renderer = new THREE.WebGLRenderer( { clearAlpha: 1 } );
//   renderer.setSize( window.innerWidth, window.innerHeight );
//   container.appendChild( renderer.domElement );

//   //

//   stats = new Stats();
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.top = '0px';
//   container.appendChild( stats.domElement );

//   //

//   document.addEventListener( 'mousemove', onDocumentMouseMove, false );
//   document.addEventListener( 'touchstart', onDocumentTouchStart, false );
//   document.addEventListener( 'touchmove', onDocumentTouchMove, false );

//   //

//   window.addEventListener( 'resize', onWindowResize, false );

// }