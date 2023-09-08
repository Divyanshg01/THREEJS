console.log(THREE);
//select canvas
const canvas = document.querySelector("canvas");
// console.log(canvas);

//Scene
const scene = new THREE.Scene();

//mesh

const geo = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "blue",
});

const cube = new THREE.Mesh(geo, material);
scene.add(cube);

//Size
const sizes = {
  height: 10,
  width: 10,
};

//camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

camera.position.z = 3;
//Renderer

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(1000, 1000);
renderer.render(scene, camera);
