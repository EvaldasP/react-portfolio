import Particles from 'react-tsparticles';
import './App.css';
import { particlesConfig } from './utils/particlesConfig';
import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import Navbar from './components/Navbar';

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        // Optional props
        width="100vw"
        height="100vh"
      />
      <Navbar />
      <p>Hello, world!</p>
    </div>
  );
}

export default App;
