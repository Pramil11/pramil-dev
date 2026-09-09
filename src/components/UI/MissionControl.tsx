import { motion } from "framer-motion";
import { usePlanetStore } from "../../store/planetStore";
import "./MissionControl.css";

const destinations = [
    {
        name: "Sun",
        icon: "☀",
        title: "About Me",
        description: "My story, journey and identity",
        color: "#fbbf24",
        code: "CORE-01"
    },
    {
        name: "Mercury",
        icon: "☿",
        title: "Learning Archive",
        description: "Education and milestones",
        color: "#a8a29e",
        code: "ARCH-02"
    },
    {
        name: "Venus",
        icon: "♀",
        title: "Creative Space",
        description: "Ideas, experiments and creativity",
        color: "#f59e0b",
        code: "IDEA-03"
    },
    {
        name: "Earth",
        icon: "◉",
        title: "AI Playground",
        description: "Interactive AI experiments",
        color: "#38bdf8",
        code: "LAB-04"
    },
    {
        name: "Mars",
        icon: "♂",
        title: "Experience",
        description: "Career, skills and experience",
        color: "#f87171",
        code: "EXP-05"
    },
    {
        name: "Jupiter",
        icon: "♃",
        title: "Project Galaxy",
        description: "AI systems and engineering missions",
        color: "#d4a373",
        code: "PROJ-06"
    },
    {
        name: "Saturn",
        icon: "♄",
        title: "Research Lab",
        description: "Research and discoveries",
        color: "#fde68a",
        code: "RES-07"
    },
    {
        name: "Uranus",
        icon: "♅",
        title: "Innovation Zone",
        description: "New ideas and future systems",
        color: "#67e8f9",
        code: "INNO-08"
    },
    {
        name: "Neptune",
        icon: "♆",
        title: "Future Horizon",
        description: "Vision, goals and what comes next",
        color: "#60a5fa",
        code: "FUT-09"
    }
];


export default function MissionControl(){


    const setTargetPlanet =
        usePlanetStore(
            state => state.setTargetPlanet
        );


    const targetPlanet =
        usePlanetStore(
            state => state.targetPlanet
        );

    const handleDestination = (
        destination: typeof destinations[number]
    ) => {

        setTargetPlanet({

            name: destination.name,

            position:
                destination.name === "Sun"
                    ? [0, 0, 0]
                    : getPlanetPosition(destination.name)

        });

    };



    return (

        <motion.div

            initial={{
                opacity: 0,
                x: -30
            }}

            animate={{
                opacity: 1,
                x: 0
            }}

            transition={{
                duration: 0.8
            }}

            className="
                mission-control-panel
                relative
                z-[100]
                w-full
                max-w-[330px]
                max-h-full
                rounded-[28px]
                overflow-hidden
                text-white
            "

            style={{

                boxShadow:
                    "0 20px 80px rgba(0,0,0,0.45)",

            }}

        >


            {/* Holographic top line */}

            <div

                className="
                    h-[2px]
                    w-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                "

            />



            <div className="p-[clamp(0.75rem,2vw,1.25rem)]">


                {/* Header */}

                <div className="flex items-start justify-between">


                    <div>


                        <div

                            className="
                                flex
                                items-center
                                gap-2
                            "

                        >

                            <span

                                className="
                                    w-2
                                    h-2
                                    rounded-full
                                    bg-emerald-400
                                    shadow-[0_0_12px_rgba(52,211,153,0.8)]
                                "

                            />


                            <span

                                className="
                                    text-[10px]
                                    tracking-[0.25em]
                                    text-emerald-300/80
                                "

                            >

                                SYSTEM ONLINE

                            </span>


                        </div>



                        <h1

                            className="
                                mt-2
                                text-[clamp(1.4rem,3vw,1.875rem)]
                                font-bold
                                tracking-wide
                            "

                        >

                            PRAMILVERSE

                        </h1>



                        <p

                            className="
                                mt-1
                                text-[10px]
                                tracking-[0.3em]
                                text-white/40
                            "

                        >

                            GALAXY COMMAND

                        </p>


                    </div>



                    <div

                        className="
                            text-[9px]
                            text-white/30
                            tracking-widest
                            text-right
                        "

                    >

                        PV-01
                        <br />
                        ONLINE

                    </div>


                </div>



                {/* Intro message */}

                <div

                    className="
                        mt-5
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.035]
                        p-4
                    "

                >


                    <motion.div

                        animate={{
                            x: ["-100%", "300%"]
                        }}

                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}

                        className="
                            absolute
                            top-0
                            left-0
                            h-px
                            w-24
                            bg-gradient-to-r
                            from-transparent
                            via-cyan-300/60
                            to-transparent
                        "

                    />



                    <p

                        className="
                            text-[10px]
                            uppercase
                            tracking-[0.25em]
                            text-white/40
                        "

                    >

                        Navigation Protocol

                    </p>


                    <p

                        className="
                            mt-2
                            text-sm
                            text-white/80
                            leading-relaxed
                        "

                    >

                        Choose a destination and
                        explore another part of my universe.

                    </p>


                </div>



                {/* Destinations */}

                <div className="mt-5">


                    <div

                        className="
                            flex
                            items-center
                            justify-between
                            mb-3
                        "

                    >

                        <span

                            className="
                                text-[10px]
                                tracking-[0.25em]
                                text-white/40
                            "

                        >

                            DESTINATIONS

                        </span>


                        <span

                            className="
                                text-[9px]
                                text-white/30
                            "

                        >

                            09 WORLDS

                        </span>


                    </div>



                    <div

                        className="
                            space-y-1
                            max-h-[min(510px,45vh)]
                            overflow-y-auto
                            pr-1
                            scrollbar-thin
                        "

                    >


                        {destinations.map((item) => {


                            const active =
                                targetPlanet?.name === item.name;



                            return (

                                <motion.button

                                    key={item.name}

                                    type="button"

                                    onClick={() =>
                                        handleDestination(item)
                                    }

                                    whileHover={{
                                        x: 5
                                    }}

                                    whileTap={{
                                        scale: 0.98
                                    }}

                                    className={`
                                        mission-destination
                                        group
                                        relative
                                        w-full
                                        text-left
                                        rounded-xl
                                        p-[clamp(0.6rem,1vw,0.75rem)]
                                        transition-all
                                        duration-300
                                        overflow-hidden
                                        ${
                                            active
                                                ? "mission-destination-active"
                                                : ""
                                        }
                                    `}

                                >


                                    {/* Active indicator */}

                                    <motion.div

                                        animate={{
                                            opacity:
                                                active ? 1 : 0
                                        }}

                                        className="
                                            absolute
                                            left-0
                                            top-2
                                            bottom-2
                                            w-[2px]
                                        "

                                        style={{
                                            backgroundColor:
                                                item.color
                                        }}

                                    />



                                    <div

                                        className="
                                            flex
                                            items-center
                                            gap-3
                                        "

                                    >


                                        {/* Planet icon */}

                                        <div

                                            className="
                                                relative
                                                flex
                                                items-center
                                                justify-center
                                                w-[clamp(2rem,3vw,2.25rem)]
                                                h-[clamp(2rem,3vw,2.25rem)]
                                                rounded-full
                                                border
                                                border-white/10
                                                bg-black/30
                                            "

                                            style={{

                                                color:
                                                    item.color

                                            }}

                                        >

                                            <span

                                                className="
                                                    text-[clamp(1rem,2vw,1.25rem)]
                                                "

                                            >

                                                {item.icon}

                                            </span>


                                            {active && (

                                                <motion.span

                                                    animate={{
                                                        scale:
                                                            [1, 1.4, 1],
                                                        opacity:
                                                            [0.4, 0, 0.4]
                                                    }}

                                                    transition={{
                                                        duration: 1.8,
                                                        repeat: Infinity
                                                    }}

                                                    className="
                                                        absolute
                                                        inset-0
                                                        rounded-full
                                                        border
                                                    "

                                                    style={{
                                                        borderColor:
                                                            item.color
                                                    }}

                                                />

                                            )}

                                        </div>



                                        {/* Information */}

                                        <div className="flex-1 min-w-0">


                                            <div

                                                className="
                                                    flex
                                                    items-center
                                                    justify-between
                                                    gap-2
                                                "

                                            >

                                                <span

                                                    className="
                                                        text-sm
                                                        font-semibold
                                                    "

                                                >

                                                    {item.name}

                                                </span>


                                                <span

                                                    className="
                                                        text-[8px]
                                                        tracking-widest
                                                        text-white/25
                                                    "

                                                >

                                                    {item.code}

                                                </span>

                                            </div>



                                            <p

                                                className="
                                                    text-[10px]
                                                    text-white/40
                                                    mt-0.5
                                                    truncate
                                                "

                                            >

                                                {item.title}

                                            </p>



                                            <div

                                                className="
                                                    max-h-0
                                                    opacity-0
                                                    overflow-hidden
                                                    group-hover:max-h-8
                                                    group-hover:opacity-100
                                                    transition-all
                                                    duration-300
                                                "

                                            >

                                                <p

                                                    className="
                                                        text-[9px]
                                                        text-white/50
                                                        mt-1
                                                    "

                                                >

                                                    {item.description}

                                                </p>

                                            </div>


                                        </div>



                                        {/* Arrow */}

                                        <span

                                            className="
                                                text-white/20
                                                group-hover:text-white/70
                                                group-hover:translate-x-1
                                                transition-all
                                            "

                                        >

                                            →

                                        </span>


                                    </div>


                                </motion.button>

                            );

                        })}


                    </div>


                </div>



                {/* Footer */}

                <div

                    className="
                        mt-4
                        pt-4
                        border-t
                        border-white/10
                        flex
                        items-center
                        justify-between
                    "

                >

                    <div>


                        <p

                            className="
                                text-[9px]
                                tracking-[0.2em]
                                text-white/30
                            "

                        >

                            GALAXY STATUS

                        </p>


                        <p

                            className="
                                text-xs
                                text-white/70
                                mt-1
                            "

                        >

                            08 PLANETS • ONLINE

                        </p>


                    </div>



                    <div

                        className="
                            flex
                            items-center
                            gap-1.5
                        "

                    >

                        <span

                            className="
                                w-1.5
                                h-1.5
                                rounded-full
                                bg-emerald-400
                            "

                        />

                        <span

                            className="
                                text-[9px]
                                text-emerald-300/70
                            "

                        >

                            READY

                        </span>

                    </div>


                </div>


            </div>


        </motion.div>

    );

}


/*
    These positions match the positions
    already used in SolarSystem.tsx.
*/

function getPlanetPosition(
    name:string
):[number,number,number] {


    const positions:
        Record<string,[number,number,number]>
        = {

        Mercury:[-3,2,-3],

        Venus:[4,3,1],

        Earth:[-6,4,2],

        Mars:[-2,-5,1],

        Jupiter:[-9,-3.3,3],

        Saturn:[10,0.4,0],

        Uranus:[6.5,-8,0],

        Neptune:[0,7,-2]

    };


    return positions[name] ?? [0,0,0];

}