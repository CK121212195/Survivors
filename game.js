import * as THREE from
'https://unpkg.com/three@0.167/build/three.module.js';

import { PointerLockControls }
from 'https://unpkg.com/three@0.167/examples/jsm/controls/PointerLockControls.js';

const scene = new THREE.Scene();

scene.fog =
new THREE.Fog(0x111111,20,150);

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

document.body.appendChild(
renderer.domElement
);
