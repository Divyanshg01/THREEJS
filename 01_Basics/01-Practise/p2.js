const canvas = document.querySelector("canvas");

const scene = new THREE.Scene();

const geo = new THREE.BoxGeometry();

const material = new THREE.MeshBasicMaterial({
  color: "brown",
});

const mesh = new THREE.Mesh(geo, material);

scene.add(mesh);

const sizes = {
  height: 1000,
  width: 1000,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(1000, 1000);
renderer.render(scene, camera);
