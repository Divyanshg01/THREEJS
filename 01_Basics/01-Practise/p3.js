const canvas = document.querySelector("canvas");

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "green",
});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const sizes = {
  width: 700,
  height: 700,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.z = 3;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(700, 700);

renderer.render(scene, camera);
