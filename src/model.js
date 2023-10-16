import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const ModelViewer = () => {
  
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const loader = new GLTFLoader();
  const cameraPosition = new THREE.Vector3(0, 1.5, 5); // Initial camera position
  const movementSpeed = 0.1;
  const rotationSpeed = 0.02; // Rotation speed
  const directionalLightIntensity = 1; // Initial light intensity
  const directionalLight = new THREE.DirectionalLight(0xffffff, directionalLightIntensity);
  const pointLight = new THREE.PointLight(0xffffff, 1, 10); // Add a point light

  // Set up camera position
  camera.position.copy(cameraPosition);

  // Add directional light
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // Set the background color of the scene to white
  scene.background = new THREE.Color(0xffffff);

  // Load the 3D model
  useEffect(() => {
    loader.load('/models/Park.gltf', (gltf) => {
      const model = gltf.scene;
      model.scale.set(1, 1, 1); 
      scene.add(model);

      // Add ambient light with higher intensity to brighten the scene
      const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Higher intensity
      scene.add(ambientLight);

      // Position the point light to better illuminate the scene
      pointLight.position.set(2, 3, 2);
      scene.add(pointLight);
    }, undefined, (error) => {
      console.error(error);
    });
  });

  // Add event listeners for camera and lighting controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          cameraPosition.z -= movementSpeed;
          break;
        case 'ArrowDown':
          cameraPosition.z += movementSpeed;
          break;
        case 'ArrowLeft':
          cameraPosition.x -= movementSpeed;
          break;
        case 'ArrowRight':
          cameraPosition.x += movementSpeed;
          break;
        case 'q':
          camera.rotateY(rotationSpeed);
          break;
        case 'e':
          camera.rotateY(-rotationSpeed);
          break;
        case '+':
          directionalLight.intensity += 0.1; // Increase directional light intensity
          break;
        case '-':
          directionalLight.intensity -= 0.1; // Decrease directional light intensity
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Set up the rendering canvas
  useEffect(() => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
  });

  // Animation/rendering loop
  const animate = () => {
    requestAnimationFrame(animate);

    // Update the camera position
    camera.position.copy(cameraPosition);

    renderer.render(scene, camera);
  };

  animate();

  return <div ref={containerRef} />;
};

export default ModelViewer;
