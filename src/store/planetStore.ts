import {create} from "zustand";


type PlanetData={

name:string;

position:[
number,
number,
number
];

};


type Store={


targetPlanet:PlanetData|null;


selectedPlanet:PlanetData|null;

exploreMode:boolean;

setTargetPlanet:(planet:PlanetData)=>void;

introFinished:boolean;

setIntroFinished:(value:boolean)=>void;

openPanel:()=>void;


closePlanet:()=>void;

setExploreMode:(value:boolean)=>void;
};



export const usePlanetStore=create<Store>((set)=>({


targetPlanet:null,


selectedPlanet:null,

exploreMode:false,

setTargetPlanet:(planet)=>
set({

targetPlanet:planet,
exploreMode:true
}),

introFinished:false,


setIntroFinished:(value)=>set({

introFinished:value

}),

openPanel:()=>set((state)=>({

selectedPlanet:state.targetPlanet

})),



closePlanet:()=>set({

selectedPlanet:null,

targetPlanet:null,

exploreMode:false

}),

setExploreMode:(value:boolean)=>

set({

exploreMode:value

})


}));