import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// mesh.position.x = 1;
// mesh.position.x = 1;
mesh.position.z = 0;

mesh.position.normalize();
//this will make x,y,z 1
mesh.scale.x = 1.5;
mesh.rotation.y = Math.PI;
mesh.position.set(0.7, -0.6, 1);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};
//Groups
const grp = new THREE.Group();
scene.add(grp);
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: "blue",
  })
);
grp.add(cube1);
/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
console.log(mesh.position.distanceTo(camera.position));
/**
 * Renderer
 */
camera.lookAt(mesh.position);
// camera.lookAt(new THREE.Vector3(0, 0, 0));
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
