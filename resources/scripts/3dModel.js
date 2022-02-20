// Option 1: Import the entire three.js core library.
import {
  Scene,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  PointLight,
} from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const elem = document.querySelector('.canvas');
let car;
const scene = new Scene();
const camera = new PerspectiveCamera(
  35,
  elem.clientWidth / elem.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 10);

const pointLigth = new PointLight(0xffffff, 1);
const pointLigth2 = new PointLight(0xffffff, 1);
pointLigth.position.set(-40, 20, -200);
pointLigth2.position.set(40, 20, 200);
scene.add(pointLigth);
scene.add(pointLigth2);

const renderer = new WebGLRenderer({ antialias: true, alpha: true });
const { clientWidth, clientHeight } = elem;
renderer.setSize(clientWidth, clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
elem.appendChild(renderer.domElement);

const loader = new GLTFLoader();

loader.load(window.file2.url, function (gltf) {
  scene.add(gltf.scene);
  car = gltf.scene.children[0];
  renderer.render(scene, camera);
  animate();
});

function animate() {
  requestAnimationFrame(animate);

  car.rotation.z += 0.01;

  renderer.render(scene, camera);
}

const resize = () => {
  const { clientWidth, clientHeight } = elem;
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(clientWidth, clientHeight);
};

window.addEventListener('resize', resize);
