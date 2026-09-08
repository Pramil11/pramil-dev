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


{/* ========================= */}
{/* RESPONSIVE UI LAYER */}
{/* ========================= */}


<div

className="
absolute
inset-0
z-10
pointer-events-none
"

>


<div

className="
w-full
h-full
relative
pointer-events-none
"

>


{selectedPlanet &&
 selectedPlanet.name !== "Mercury" &&
 selectedPlanet.name !== "Venus" &&
 selectedPlanet.name !== "Mars" && (
<PlanetPanel />
)}



{selectedPlanet?.name === "Sun" && (

<>

<button
onClick={closePlanet}

className="
fixed
left-1/2
top-[clamp(1rem,3vh,2rem)]
-translate-x-1/2

z-[60]

pointer-events-auto

w-[clamp(2rem,4vw,2.5rem)]
h-[clamp(2rem,4vw,2.5rem)]

rounded-full

flex
items-center
justify-center

text-white/80

text-[clamp(0.9rem,2vw,1.1rem)]

cursor-pointer

transition-all
duration-300

hover:scale-110
hover:text-white
"

style={{

background:
"rgba(15,15,20,0.75)",

border:
"1px solid rgba(255,190,70,0.35)",

backdropFilter:
"blur(12px)",

WebkitBackdropFilter:
"blur(12px)",

boxShadow:
"0 0 20px rgba(255,190,50,0.12)",

}}

>

✕

</button>


<CoreInterface />

</>

)}





{selectedPlanet?.name === "Mercury" && (

<MercuryInterface />

)}




{selectedPlanet?.name === "Venus" && (

<VenusInterface />

)}





{selectedPlanet?.name === "Mars" && (

<MarsInterface />

)}






{

!selectedPlanet && (

<>

<div className="pointer-events-auto">

<MissionControl />

<WelcomeCard />

<SystemCard />

<BottomCards />

</div>

</>

)

}



</div>

</div>





{/* ========================= */}
{/* THREE JS WORLD */}
{/* ========================= */}


<Canvas

dpr={[1,2]}

camera={{

position:[0,2,8],

fov:50

}}

>


<Suspense fallback={null}>


<SpaceBackground />


<ambientLight intensity={0.15}/>


<directionalLight

position={[5,10,5]}

intensity={2}

/>



<SolarSystem />


<CameraController />



<ambientLight

intensity={0.25}

/>


<pointLight

position={[0,0,0]}

intensity={8}

distance={50}

color="#ffcc66"

/>




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


</div>

);

}


export default App;