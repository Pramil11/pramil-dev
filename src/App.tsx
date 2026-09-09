import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense } from "react";

import SolarSystem from "./components/SolarSystem";
import SpaceBackground from "./components/SpaceBackground";
import CameraController from "./components/CameraController";
import PlanetPanel from "./components/PlanetPanel";

import { usePlanetStore } from "./store/planetStore";

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
{/* THREE JS WORLD */}
{/* ========================= */}


<Canvas

className="absolute inset-0"

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



<ambientLight intensity={0.25}/>


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





{/* ========================= */}
{/* RESPONSIVE UI LAYER */}
{/* ========================= */}



<div

className="
absolute
inset-0
z-20

pointer-events-none

p-4


grid

grid-cols-[minmax(240px,330px)_1fr_minmax(220px,280px)]

grid-rows-[auto_1fr_auto]

gap-4


max-xl:grid-cols-[260px_1fr_minmax(200px,250px)]


max-lg:grid-cols-2


max-md:flex

max-md:flex-col

max-md:overflow-y-auto

"

>






{/* ========================= */}
{/* NORMAL GALAXY HUD */}
{/* ========================= */}



{

!selectedPlanet && (

<>





{/* LEFT PANEL */}

<div

className="
pointer-events-auto

row-span-2

flex

items-start

"

>

<MissionControl />

</div>







{/* CENTER TOP */}

<div

className="
pointer-events-auto

flex

justify-center

items-start


max-lg:col-span-1

"

>

<WelcomeCard />

</div>







{/* RIGHT PANEL */}

<div

className="
pointer-events-auto

flex

justify-end

items-start

"

>

<SystemCard />

</div>








{/* BOTTOM CARDS */}

<div

className="
pointer-events-auto

col-span-3

flex

justify-center

items-end


max-lg:col-span-2


max-md:col-span-1

"

>

<BottomCards />

</div>





</>

)

}







{/* ========================= */}
{/* PLANET PANEL */}
{/* ========================= */}



{

selectedPlanet &&

selectedPlanet.name !== "Mercury" &&

selectedPlanet.name !== "Venus" &&

selectedPlanet.name !== "Mars" &&

(

<PlanetPanel />

)

}







{/* ========================= */}
{/* SUN */}
{/* ========================= */}



{

selectedPlanet?.name === "Sun" &&

(

<>

<button

onClick={closePlanet}

className="

fixed

top-4

left-1/2

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


bg-black/60


border

border-yellow-400/30


backdrop-blur-xl


hover:scale-110


transition-all

"

>

✕

</button>



<CoreInterface />

</>

)

}







{/* ========================= */}
{/* MERCURY */}
{/* ========================= */}



{

selectedPlanet?.name === "Mercury" &&

(

<MercuryInterface />

)

}







{/* ========================= */}
{/* VENUS */}
{/* ========================= */}



{

selectedPlanet?.name === "Venus" &&

(

<VenusInterface />

)

}







{/* ========================= */}
{/* MARS */}
{/* ========================= */}



{

selectedPlanet?.name === "Mars" &&

(

<MarsInterface />

)

}



</div>






<IntroSequence />


</div>

);

}


export default App;