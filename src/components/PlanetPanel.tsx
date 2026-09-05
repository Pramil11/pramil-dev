import {usePlanetStore} from "../store/planetStore";
import { planetData } from "../data/planetData";


export default function PlanetPanel(){


const planet =
usePlanetStore(
state=>state.selectedPlanet
);


const close =
usePlanetStore(
state=>state.closePlanet
);



if(!planet)
return null;



const data =
planetData[
planet.name as keyof typeof planetData
];



return(


<div

className="
absolute
right-10
top-1/2
-translate-y-1/2
w-[420px]
h-[520px]
rounded-3xl
overflow-hidden
text-white
"

style={{

background:
"linear-gradient(145deg, rgba(20,20,40,0.85), rgba(0,0,0,0.75))",

backdropFilter:"blur(25px)",

border:
"1px solid rgba(255,255,255,0.2)",

boxShadow:
"0 0 50px rgba(120,80,255,0.25)"

}}

>


{/* top close */}

<button

onClick={close}

className="
absolute
right-5
top-5
text-xl
opacity-70
hover:opacity-100
"

>

✕


</button>




<div className="p-8">


<h1

className="
text-5xl
font-bold
"

>

{data.icon} {data.title}

</h1>



<h2

className="
text-xl
mt-2
text-yellow-300
"

>

{data.subtitle}

</h2>




<div

className="
mt-8
h-px
bg-white/20
"

/>



<p

className="
mt-6
text-gray-300
leading-relaxed
"

>

{data?.description}

</p>

<div className="mt-8 space-y-3">

{
data.sections.map((item)=>(

<div

key={item}

className="
p-4
rounded-2xl
bg-white/10
border
border-white/10
hover:bg-white/20
transition
"

>

{item}

</div>

))

}

</div>

</div>


</div>



)


}