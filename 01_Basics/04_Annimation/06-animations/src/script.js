import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 700,
  height: 500,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
// let time = Date.now();
const clock = new THREE.Clock();

gsap.to(mesh.position, {
  x: 2,
  duration: 1,
  delay: 2,
});
//Animations
const tick = () => {
  //   //time
  //   const currentTime = Date.now();
  //   const deltaTime = currentTime - time;
  //   //delta time -> 1s
  //   time = currentTime;

  //Clock
  //   const elapsedTime = clock.getElapsedTime();

  //   //

  //   //update bject
  //   camera.position.y = Math.sin(elapsedTime);
  //   camera.position.x = Math.cos(elapsedTime);
  //   camera.lookAt(mesh.position);
  //   mesh.rotation.y = elapsedTime;
  //   mesh.rotation.x = elapsedTime;

  //render
  renderer.render(scene, camera);
  //call the function for every framer
  window.requestAnimationFrame(tick);
};
tick();
