export default function Sidebar(){

return (

<div

className="
absolute

top-[clamp(1rem,3vh,2rem)]
left-[clamp(1rem,3vw,2rem)]

w-[min(16rem,85vw)]

rounded-2xl

bg-black/60

backdrop-blur-xl

border

border-white/10

text-white

p-[clamp(1rem,2vw,1.5rem)]

"

>


<h1

className="
text-[clamp(1.25rem,3vw,1.5rem)]
font-bold
text-yellow-400
"

>

PRAMILVERSE

</h1>



<p

className="
text-[clamp(0.65rem,1.5vw,0.75rem)]
text-gray-400
mb-[clamp(1.5rem,4vh,2rem)]
"

>

EXPLORE. DISCOVER. INNOVATE.

</p>



<div 

className="
space-y-[clamp(0.75rem,2vh,1.25rem)]
text-[clamp(0.85rem,1.5vw,1rem)]
"

>


<div>🌌 Galaxy Map</div>

<div>🚀 Projects</div>

<div>🔬 Research</div>

<div>🤖 AI Lab</div>

<div>📄 Resume</div>

<div>👤 About Me</div>

<div>✉ Contact Station</div>


</div>


</div>

)

}