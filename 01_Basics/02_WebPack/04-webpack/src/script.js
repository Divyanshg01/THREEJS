const canvas = document.querySelector("canvas");
import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();

const geo = new THREE.BoxGeometry(1, 1, 1);
const materials = new THREE.MeshBasicMaterial({
  color: "red",
});

const mesh = new THREE.Mesh(geo, materials);
scene.add(mesh);
const sizes = {
  width: 500,
  height: 500,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);
camera.position.z = 3;
camera.position.x = 1;
const renderer = new THREE.WebGL1Renderer({
  canvas,
});

renderer.setSize(500, 500);
renderer.render(scene, camera);
