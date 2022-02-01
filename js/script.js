// let scene,camera,renderer;

// scene=new THREE.Scene()
// scene.background= new THREE.Color(0xff0000) 

// camera= new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight);
// camera.position.set(0,100,800);

// renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth,window.innerHeight);
// document.body.appendChild(renderer.domElement)

// var controls = new THREE.OrbitControls(camera,renderer.domElement)
// controls.update()
// let abint = new THREE.AmbientLight(0xFF0000,4)
// scene.add(abint)

// const loader = new THREE.GLTFLoader();

// loader.load( './boat/scene.gltf', function ( gltf ) {
//     scene.add(gltf.scene)
// })

// // window.addEventListener('resize',function(){
// //     renderer.setSize(window.innerWidth,window.innerHeight);
// //     camera.aspect= window.innerWidth/window.innerHeight
// // })

// function animate(){
//     requestAnimationFrame(animate);
//     renderer.render(scene,camera)
// }

// animate()
