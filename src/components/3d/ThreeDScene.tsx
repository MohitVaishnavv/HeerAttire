import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, ContactShadows } from '@react-three/drei';
import { Group } from 'three';

interface ModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const Model: React.FC<ModelProps> = ({ 
  modelPath, 
  scale = 1, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0] 
}) => {
  const groupRef = useRef<Group>(null);
  
  // This is a placeholder as we don't have actual models
  // In a real app, you would load the model from modelPath
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(t / 4) / 8;
      groupRef.current.position.y = Math.sin(t / 1.5) / 10;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <mesh scale={scale}>
        <boxGeometry args={[1, 1.5, 0.2]} />
        <meshStandardMaterial color="#8c7656" />
      </mesh>
    </group>
  );
};

interface ThreeDSceneProps {
  modelPath?: string;
  scale?: number;
  autoRotate?: boolean;
  backgroundColor?: string;
}

const ThreeDScene: React.FC<ThreeDSceneProps> = ({
  modelPath = '/models/shirt.glb',
  scale = 2,
  autoRotate = true,
  backgroundColor = 'transparent'
}) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: backgroundColor }}
      >
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Model 
            modelPath={modelPath} 
            scale={scale} 
            position={[0, -0.5, 0]} 
          />
        </PresentationControls>
        
        <ContactShadows 
          position={[0, -1.5, 0]} 
          opacity={0.4} 
          scale={5} 
          blur={2} 
        />
        
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;