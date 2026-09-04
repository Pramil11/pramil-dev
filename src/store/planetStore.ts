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

selectedPlanet:PlanetData|null;

setPlanet:
(planet:PlanetData)=>void;


};



export const usePlanetStore=create<Store>(
(set)=>({

selectedPlanet:null,


setPlanet:(planet)=>
set({

selectedPlanet:planet

})


})
);