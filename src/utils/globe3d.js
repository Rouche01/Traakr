import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  MeshBasicMaterial,
  Mesh,
  TextureLoader,
  SphereGeometry,
} from "three";

export const renderGlobe = (refDom) => {
  const renderer = new WebGLRenderer({ alpha: true });
  const WIDTH = refDom.clientWidth;
  const HEIGHT = refDom.clientHeight;

  renderer.setSize(WIDTH, HEIGHT);

  const VIEW_ANGLE = 75;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 1000;

  const RADIUS = 5;
  const SEGMENTS = 32;
  const RINGS = 32;

  const camera = new PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  camera.position.set(0, 0, 10);

  const scene = new Scene();

  const loader = new TextureLoader();

  const geometry = new SphereGeometry(RADIUS, SEGMENTS, RINGS);
  const material = new MeshBasicMaterial({
    map: loader.load("http://localhost:8080/land_ocean_ice_cloud_2048.jpg"),
  });
  const sphere = new Mesh(geometry, material);
  scene.add(sphere);

  refDom.appendChild(renderer.domElement);

  renderer.setPixelRatio(window.devicePixelRatio);

  const animate = () => {
    requestAnimationFrame(animate);

    sphere.rotation.x += 0.009;
    sphere.rotation.y += 0.009;

    renderer.render(scene, camera);
  };

  animate();
};
