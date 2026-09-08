import {useEffect, useState} from "react";
import {usePlanetStore} from "../../store/planetStore";

export default function IntroSequence(){

const title="WELCOME TO PRAMILVERSE";


const [text,setText]=useState("");

const [phase,setPhase]=useState(0);

const [show,setShow]=useState(true);

const setIntroFinished =
usePlanetStore(
state=>state.setIntroFinished
);


useEffect(()=>{


let index=0;


const start=setTimeout(()=>{


const typing=setInterval(()=>{


setText(
title.slice(0,index)
);


index++;


if(index>title.length){

clearInterval(typing);


setTimeout(()=>{

setPhase(1);

},1000);


}


},120);



},1500);



return ()=>clearTimeout(start);



},[]);





useEffect(()=>{


if(phase===1){


setTimeout(()=>{


setPhase(2);


},3500);



}


if(phase===2){


setTimeout(()=>{


setShow(false);

setIntroFinished(true);


},500);


}



},[phase]);





if(!show)
return null;



return (

<div

className={`

fixed
inset-0
z-50
flex
items-center
justify-center

transition-all
duration-[2500ms]

${phase===2
?
"bg-transparent scale-[1.8] opacity-0"
:
"bg-gradient"
}

`}

>


<div

className={`

text-center

transition-all
duration-[5000ms]

${phase===2
?
"scale-[clamp(1.4,8vw,2)]"
:
"scale-100"
}

`}

>


<h1

className="

text-[clamp(1.8rem,5vw,2.25rem)]

font-bold

tracking-[0.3em]

text-yellow-400

"

>

{text}


</h1>





{

phase>=1 &&

(

<p

className="

mt-[clamp(1.5rem,4vh,2.5rem)]

text-[clamp(1rem,3vw,1.5rem)]

text-gray-300

leading-relaxed

"

>

A universe of Artificial Intelligence,
<br/>

Projects and Innovation

</p>


)

}



</div>


</div>


)

}