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
import MercuryInterface from "./components/UI/MercuryInterface";
import VenusInterface from "./components/UI/VenusInterface";
import MarsInterface from "./components/UI/MarsInterface";

function App(){
  const selectedPlanet =
  usePlanetStore(
  state=>state.selectedPlanet
  );
  const closePlanet =
  usePlanetStore(
    state=>state.closePlanet
  )
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

{/* ================================================= */}
{/* NORMAL PLANET PANEL */}
{/* ================================================= */}

{selectedPlanet &&
 selectedPlanet.name !== "Mercury" &&
 selectedPlanet.name !== "Venus" &&
 selectedPlanet.name !== "Mars" && (
<PlanetPanel />
)}


{/* ================================================= */}
{/* SUN / CORE */}
{/* ================================================= */}

{selectedPlanet?.name === "Sun" && (
  <>
    {/* CLOSE SUN / RETURN TO GALAXY */}

    <button
      onClick={closePlanet}
      className="
        fixed
        left-1/2
        top-8
        -translate-x-1/2
        z-[60]
        pointer-events-auto
        w-10
        h-10
        rounded-full
        flex
        items-center
        justify-center
        text-white/80
        text-lg
        cursor-pointer
        transition-all
        duration-300
        hover:scale-110
        hover:text-white
      "
      style={{
        background: "rgba(15,15,20,0.75)",
        border: "1px solid rgba(255,190,70,0.35)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow:
          "0 0 20px rgba(255,190,50,0.12)",
      }}
    >
      ✕
    </button>

    <CoreInterface />
  </>
)}


{/* ================================================= */}
{/* MERCURY / JOURNEY */}
{/* ================================================= */}

{selectedPlanet?.name === "Mercury" && (
  <MercuryInterface />
)}
{/* ================================================= */}
{/* VENUS / SKILLS */}
{/* ================================================= */}

{selectedPlanet?.name === "Venus" && (
  <VenusInterface />
)}

{/* ================================================= */
/* MARS / EXPERIENCE */
/* ================================================= */}

{selectedPlanet?.name === "Mars" && (
  <MarsInterface />
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