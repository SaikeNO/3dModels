import { Scene, PerspectiveCamera, WebGLRenderer, PointLight } from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const elem = document.querySelector('.canvas');
let wraith;
const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  elem.clientWidth / elem.clientHeight,
  0.1,
  100
);
camera.position.set(0, 1, 2);

const pointLigth = new PointLight(0xffffff, 1.5);
pointLigth.position.set(2, 2, 5);
scene.add(pointLigth);

const renderer = new WebGLRenderer({ antialias: true, alpha: true });
const { clientWidth, clientHeight } = elem;
renderer.setSize(clientWidth, clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
elem.appendChild(renderer.domElement);

const loader = new GLTFLoader();

loader.load(
  window.file.url,
  function (glb) {
    scene.add(glb.scene);
    wraith = glb.scene.children[0];

    glb.scene.scale.set(0.03, 0.03, 0.03);
    renderer.render(scene, camera);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + '%');
  },
  function () {
    console.log('Error');
  }
);

function animate() {
  requestAnimationFrame(animate);
}

const resize = () => {
  const { clientWidth, clientHeight } = elem;
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(clientWidth, clientHeight);
};

window.addEventListener('resize', resize);

ScrollTrigger.create({
  trigger: '.l-main',
  start: 'top top',
  end: '60% 50%',
  pin: '.canvas',
  markers: true,
  onUpdate: (self) => {
    wraith.rotation.y = -3.14 * 2 * self.progress;

    renderer.render(scene, camera);
  },
});
