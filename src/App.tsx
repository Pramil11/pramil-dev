import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense } from "react";

import SolarSystem from "./components/SolarSystem";
import SpaceBackground from "./components/SpaceBackground";
import CameraController from "./components/CameraController";
import PlanetPanel from "./components/PlanetPanel";
import {usePlanetStore} from "./store/planetStore";

import MissionControl from "./components/UI/MissionControl";
import WelcomeCard from "./components/UI/WelcomeCard";
import SystemCard from "./components/UI/SystemCard";
import BottomCards from "./components/UI/BottomCards";
import IntroSequence from "./components/UI/IntroSequence";
import CoreInterface from "./components/UI/CoreInterface";


function App(){
  const selectedPlanet =
  usePlanetStore(
  state=>state.selectedPlanet
  );
return (

<div

className="
w-screen
h-screen
overflow-hidden
bg-black
relative
"

>


<Canvas

camera={{

position:[0,2,8],

fov:50

}}

>


<Suspense fallback={null}>


{/* Space background */}

<SpaceBackground />

<ambientLight intensity={0.15}/>

<directionalLight
    position={[5,10,5]}
    intensity={2}
/>

{/* Main planets */}

<SolarSystem />

<CameraController/>


{/* Lighting */}

<ambientLight

intensity={0.25}

/>


<pointLight

position={[0,0,0]}

intensity={8}

distance={50}

color="#ffcc66"

/>



{/* Sun glow */}

<EffectComposer>


<Bloom

intensity={1.8}

luminanceThreshold={0.1}

luminanceSmoothing={0.8}

radius={0.9}

/>


</EffectComposer>


</Suspense>


</Canvas>

<IntroSequence />

<PlanetPanel/>
{selectedPlanet?.name === "Sun" && (
  <CoreInterface />
)}


{/* Interface */}

{
!selectedPlanet && (
<>
<MissionControl />

<WelcomeCard />

<SystemCard />

<BottomCards />
</>
)
}

</div>

);
}


export default App;