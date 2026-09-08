import { useState } from "react";
import { usePlanetStore } from "../../store/planetStore";

type Milestone = {
  year: string;
  title: string;
  place: string;
  icon: string;
  description: string;
  detail: string;
  current?: boolean;
  future?: boolean;
};

const milestones: Milestone[] = [
  {
    year: "BEFORE 2022",
    title: "The Beginning",
    place: "Nepal",
    icon: "🇳🇵",
    description:
      "Completed my high school education in Nepal before beginning my journey abroad.",
    detail:
      "This was where my academic journey began. Before technology became my path, curiosity and learning were already a big part of my life.",
  },

  {
    year: "AUG 2022",
    title: "First Chapter",
    place: "University of Idaho",
    icon: "🎓",
    description:
      "Started my Computer Science journey in the United States.",
    detail:
      "I came to the United States in August 2022 and began studying Computer Science at the University of Idaho. It was the beginning of a completely new chapter in my life.",
  },

  {
    year: "MAY 2023",
    title: "A Different Chapter",
    place: "City College of San Francisco",
    icon: "🌉",
    description:
      "Transferred to City College of San Francisco and experienced a new environment.",
    detail:
      "From May 2023 to August 2024, I studied in San Francisco. Moving to a completely different environment gave me a new perspective and became an important part of my undergraduate journey.",
  },

  {
    year: "AUG 2024",
    title: "Back to Idaho",
    place: "University of Idaho",
    icon: "🐾",
    description:
      "Returned to the University of Idaho to continue my Computer Science degree.",
    detail:
      "I returned to Idaho in August 2024 and continued working toward my bachelor's degree in Computer Science. Coming back allowed me to build on the foundation I had started earlier.",
  },

  {
    year: "AUG 2025",
    title: "Discovering AI",
    place: "Artificial Intelligence",
    icon: "🤖",
    description:
      "Started going deeper into Artificial Intelligence and intelligent systems.",
    detail:
      "During the final stage of my bachelor's journey, I became increasingly focused on Artificial Intelligence, machine learning, intelligent systems, and building applications that could solve real-world problems.",
  },

  {
    year: "MAY 2026",
    title: "Graduation",
    place: "B.S. Computer Science • AI Specialization",
    icon: "✦",
    description:
      "Graduated with a Bachelor of Science in Computer Science with an AI specialization.",
    detail:
      "After years of learning, experimenting, building projects, and exploring AI, I completed my undergraduate journey at the University of Idaho in May 2026.",
  },

  {
    year: "AUG 2026",
    title: "Going Deeper",
    place: "M.Eng. Artificial Intelligence",
    icon: "🧠",
    description:
      "Started a Master of Engineering in Artificial Intelligence at the University of Idaho.",
    detail:
      "This is where I am now. I am continuing deeper into Artificial Intelligence, intelligent systems, research, and the process of turning ideas into meaningful technology.",
    current: true,
  },

  {
    year: "MAY 2027",
    title: "Next Chapter",
    place: "Unknown",
    icon: "✦",
    description:
      "The next chapter has not been written yet.",
    detail:
      "I don't know exactly where the next chapter will take me. That is part of the journey. I am leaving the destination open and continuing to learn, build, and explore.",
    future: true,
  },
];

export default function MercuryInterface() {
  const closePlanet = usePlanetStore(
    (state) => state.closePlanet
  );

  const [activeIndex, setActiveIndex] = useState(6);

  const active = milestones[activeIndex];

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">

      {/* ================================================= */}
      {/* CLOSE */}
      {/* ================================================= */}

      <button
        onClick={closePlanet}
        className="
          pointer-events-auto
          absolute
          top-7
          left-1/2
          -translate-x-1/2
          z-[70]
          w-11
          h-11
          rounded-full
          flex
          items-center
          justify-center
          text-white/70
          text-lg
          cursor-pointer
          transition-all
          duration-300
          hover:text-white
          hover:scale-110
        "
        style={{
          background: "rgba(10,10,16,0.78)",
          border: "1px solid rgba(200,208,214,0.28)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow:
            "0 0 25px rgba(190,200,208,0.10)",
        }}
      >
        ✕
      </button>


      {/* ================================================= */}
      {/* LEFT INTRODUCTION */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-auto
          absolute
          left-8
          top-40
          bottom-8
          w-[400px]
          h-[650px]
          rounded-[24px]
          p-6
          text-white
          overflow-hidden
        "
        style={{
          background:
            "linear-gradient(145deg, rgba(15,17,24,0.94), rgba(5,7,12,0.90))",

          border:
            "1px solid rgba(180,190,205,0.20)",

          backdropFilter: "blur(18px)",

          WebkitBackdropFilter: "blur(18px)",

          boxShadow:
            "0 20px 60px rgba(0,0,0,0.45), 0 0 35px rgba(150,160,180,0.06)",
        }}
      >

        {/* Mercury top glow */}

        <div
          className="
            absolute
            top-0
            left-8
            right-8
            h-[2px]
          "
          style={{
            background:
              "linear-gradient(90deg, transparent, #d1d5db, transparent)",
            boxShadow:
              "0 0 12px rgba(255,255,255,0.25)",
          }}
        />

        <div
          className="
            text-[10px]
            tracking-[0.32em]
            uppercase
            text-slate-300
          "
        >
          ☿ MERCURY / JOURNEY
        </div>

        <h1
          className="
            mt-5
            text-4xl
            font-bold
            tracking-tight
          "
        >
          My Journey
        </h1>

        <h2
          className="
            mt-1
            text-2xl
            font-light
            text-white/55
          "
        >
          So Far
        </h2>

        <p
          className="
            mt-5
            text-sm
            leading-7
            text-white/50
          "
        >
          Small steps. Different places.
          New questions. Every chapter
          became part of the next.
        </p>

        <div
          className="
            mt-6
            h-px
            bg-gradient-to-r
            from-slate-300/30
            to-transparent
          "
        />

        <div className="mt-7">

          <div
            className="
              text-[10px]
              tracking-[0.28em]
              uppercase
              text-slate-300/80
            "
          >
            THE JOURNEY
          </div>

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-white/60
            "
          >
            I started in Nepal, crossed continents,
            changed environments, returned to Idaho,
            discovered Artificial Intelligence, and
            eventually began going deeper into it.
          </p>

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-white/45
            "
          >
            Looking back, the path was not perfectly
            straight. Each change introduced something
            new and helped shape where I am today.
          </p>

        </div>


        {/* Journey principles */}

        <div className="absolute left-7 right-7 bottom-7">

          <div
            className="
              rounded-2xl
              p-4
            "
            style={{
              background:
                "rgba(190,198,205,0.045)",

              border:
                "1px solid rgba(190,198,205,0.13)",
            }}
          >

            <div
              className="
                text-[9px]
                tracking-[0.25em]
                uppercase
                text-slate-300
              "
            >
              WHAT KEPT ME MOVING
            </div>

            <div className="mt-3 flex gap-2 flex-wrap">

              {[
                "Learn",
                "Adapt",
                "Explore",
                "Build",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    px-3
                    py-1.5
                    text-[10px]
                    text-white/55
                  "
                  style={{
                    border:
                      "1px solid rgba(255,255,255,0.10)",
                    background:
                      "rgba(255,255,255,0.025)",
                  }}
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* CENTER ORBITAL TIMELINE */}
      {/* ================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[min(650px,45vw)]
          h-[min(650px,45vw)]
          pointer-events-none
        "
      >

        {/* Soft orbital atmosphere */}

        <div
          className="
            absolute
            inset-[-25px]
            rounded-full
            opacity-30
          "
          style={{
            background:
              "radial-gradient(circle, transparent 55%, rgba(190,198,205,0.045) 68%, transparent 72%)",
          }}
        />


        {/* ================================================= */}
        {/* MAIN ORBIT */}
        {/* ================================================= */}

        <div
          className="
            absolute
            inset-0
            rounded-full
          "
          style={{
            border:
              "1px solid rgba(190,198,205,0.30)",

            boxShadow:
              "0 0 35px rgba(190,198,205,0.05)",
          }}
        />


        {/* Moving orbital glow */}

        <div
          className="
            absolute
            inset-[-1px]
            rounded-full
            mercury-orbit-glow
          "
        />


        {/* Second orbit */}

        <div
          className="
            absolute
            inset-[34px]
            rounded-full
          "
          style={{
            border:
              "1px dashed rgba(255,255,255,0.12)",
          }}
        />


        {/* Inner orbit */}

        <div
          className="
            absolute
            inset-[75px]
            rounded-full
          "
          style={{
            border:
              "1px solid rgba(180,190,205,0.10)",
          }}
        />


        {/* ================================================= */}
        {/* CLOCKWISE DIRECTION ARROWS */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-[-8px]
            -translate-x-1/2
            mercury-arrow
          "
        >
          ◆
        </div>

        <div
          className="
            absolute
            right-[-2px]
            top-1/2
            -translate-y-1/2
            mercury-arrow
          "
        >
          ◆
        </div>

        <div
          className="
            absolute
            left-1/2
            bottom-[-8px]
            -translate-x-1/2
            mercury-arrow
          "
        >
          ◆
        </div>

        <div
          className="
            absolute
            left-[-2px]
            top-1/2
            -translate-y-1/2
            mercury-arrow
          "
        >
          ◆
        </div>


        {/* ================================================= */}
        {/* ORBITAL TICKS */}
        {/* ================================================= */}

        <div className="absolute left-1/2 top-[17px] -translate-x-1/2 w-px h-4 bg-slate-300/30" />

        <div className="absolute right-[17px] top-1/2 -translate-y-1/2 w-4 h-px bg-slate-300/20" />

        <div className="absolute left-1/2 bottom-[17px] -translate-x-1/2 w-px h-4 bg-slate-300/20" />

        <div className="absolute left-[17px] top-1/2 -translate-y-1/2 w-4 h-px bg-slate-300/20" />


        {/* ================================================= */}
        {/* START HERE LABEL */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-[-58px]
            -translate-x-1/2
            text-center
            whitespace-nowrap
          "
        >

          <div
            className="
              text-[9px]
              tracking-[0.35em]
              uppercase
              text-amber-300
              mercury-start-pulse
            "
          >
            START HERE
          </div>

          <div
            className="
              mx-auto
              mt-1
              w-0
              h-0
              border-l-[4px]
              border-r-[4px]
              border-t-[6px]
              border-l-transparent
              border-r-transparent
              border-t-amber-300
            "
          />

        </div>


        {/* ================================================= */}
        {/* TIMELINE NODES */}
        {/* ================================================= */}

        {milestones.map((item, index) => {

          const angle =
            (index / milestones.length) * Math.PI * 2 -
            Math.PI / 2;

          const orbitSize = Math.min(
            650,
            window.innerWidth * 0.45
          );

          const center = orbitSize / 2;

          const radius = center;

          const x =
            center +
            Math.cos(angle) * radius;

          const y =
            center +
            Math.sin(angle) * radius;

          const selected =
            activeIndex === index;

          const isStart = index === 0;

          return (
            <button
              key={item.year}
              onClick={() => setActiveIndex(index)}
              className="
                pointer-events-auto
                absolute
                -translate-x-1/2
                -translate-y-1/2
                group
                cursor-pointer
              "
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
            >

              {/* Start pulse */}

              {isStart && (
                <span
                  className="
                    absolute
                    -inset-3
                    rounded-full
                    border
                    border-amber-300/35
                    mercury-start-ring
                  "
                />
              )}


              {/* Current pulse */}

              {item.current && (
                <>
                  <span
                    className="
                      absolute
                      -inset-3
                      rounded-full
                      border
                      border-emerald-300/25
                      mercury-current-ring
                    "
                  />

                  <span
                    className="
                      absolute
                      -inset-5
                      rounded-full
                      border
                      border-emerald-300/10
                      mercury-current-ring-slow
                    "
                  />
                </>
              )}


              {/* Node */}

              <div
                className="
                  relative
                  w-[clamp(2rem,4vw,3rem)]
                  h-[clamp(2rem,4vw,3rem)]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:scale-110
                "
                style={{
                  background: selected
                    ? "rgba(190,198,205,0.16)"
                    : isStart
                    ? "rgba(251,191,36,0.10)"
                    : item.future
                    ? "rgba(255,255,255,0.025)"
                    : "rgba(10,12,18,0.88)",

                  border: selected
                    ? "1px solid rgba(215,222,226,0.85)"
                    : isStart
                    ? "1px solid rgba(251,191,36,0.60)"
                    : item.future
                    ? "1px dashed rgba(255,255,255,0.20)"
                    : "1px solid rgba(255,255,255,0.20)",

                  boxShadow: selected
                    ? "0 0 28px rgba(205,215,220,0.38)"
                    : isStart
                    ? "0 0 20px rgba(251,191,36,0.20)"
                    : "0 0 12px rgba(0,0,0,0.30)",

                  transform: selected
                    ? "scale(1.18)"
                    : "scale(1)",
                }}
              >

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {item.icon}
                </span>

              </div>


              {/* Label */}

              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  mt-2
                  whitespace-nowrap
                  text-center
                "
              >

                <div
                  className={`
                    text-[12px]
                    tracking-[0.20em]
                    uppercase
                    transition-all
                    duration-300
                    ${
                      selected
                        ? "text-slate-200"
                        : isStart
                        ? "text-amber-300/80"
                        : "text-white/35"
                    }
                  `}
                >
                  {item.year}
                </div>

                <div
                  className={`
                    mt-1
                    text-[10px]
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      selected
                        ? "text-white"
                        : isStart
                        ? "text-white/70"
                        : "text-white/40"
                    }
                  `}
                >
                  {item.title}
                </div>

              </div>

            </button>
          );
        })}


        {/* ================================================= */}
        {/* CENTER MERCURY LABEL */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-center
            pointer-events-none
          "
        >

          <div
            className="
              text-[10px]
              tracking-[0.4em]
              uppercase
              text-slate-250
            "
          >
            MERCURY
          </div>

          <div
            className="
              mt-2
              text-[13px]
              tracking-[0.25em]
              uppercase
              text-slate-250
            "
          >
            MOVEMENT
          </div>

          <div
            className="
              mt-2
              text-[10px]
              tracking-[0.3em]
              uppercase
              text-slate-100
            "
          >
            LEARN • ADAPT • EXPLORE
          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* RIGHT ACTIVE CHAPTER */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-auto
          absolute
          right-[clamp(1rem,3vw,2rem)]
          top-1/2
          -translate-y-1/2
          w-[min(400px,28vw)]
          h-[min(600px,70vh)]
          rounded-[24px]
          p-[clamp(1rem,2vw,1.75rem)]
          text-white
          overflow-hidden
        "
        style={{
          background:
            "linear-gradient(145deg, rgba(16,17,24,0.95), rgba(6,8,13,0.92))",

          border:
            "1px solid rgba(180,190,205,0.20)",

          backdropFilter: "blur(18px)",

          WebkitBackdropFilter: "blur(18px)",

          boxShadow:
            "0 20px 60px rgba(0,0,0,0.45), 0 0 35px rgba(150,160,180,0.06)",
        }}
      >

        {/* top glow */}

        <div
          className="
            absolute
            top-0
            left-8
            right-8
            h-[2px]
          "
          style={{
            background:
              "linear-gradient(90deg, transparent, #80879b, transparent)",
            boxShadow:
              "0 0 12px rgba(97,109,126,0.55)",
          }}
        />


        {/* Chapter */}

        <div
          className="
            text-[10px]
            tracking-[0.3em]
            uppercase
            text-slate-300
          "
        >
          CHAPTER {String(activeIndex + 1).padStart(2, "0")}
        </div>


        {/* Icon */}

        <div
          className="
            mt-7
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            text-3xl
          "
          style={{
            background:
              "linear-gradient(145deg, rgba(190,198,205,0.14), rgba(255,255,255,0.03))",

            border:
              "1px solid rgba(190,198,205,0.24)",

            boxShadow:
              "0 0 30px rgba(190,198,205,0.08)",
          }}
        >
          {active.icon}
        </div>


        {/* Date */}

        <div
          className="
            mt-6
            text-[10px]
            tracking-[0.28em]
            uppercase
            text-slate-300
          "
        >
          {active.year}
        </div>


        {/* Title */}

        <h2
          className="
            mt-3
            text-4xl
            font-bold
            leading-tight
          "
        >
          {active.title}
        </h2>


        {/* Place */}

        <p
          className="
            mt-2
            text-base
            text-white/40
          "
        >
          {active.place}
        </p>


        {/* Divider */}

        <div
          className="
            mt-6
            h-px
            bg-gradient-to-r
            from-slate-300/30
            to-transparent
          "
        />


        {/* Content */}

        <div
          className="
            mt-6
            h-[230px]
            overflow-y-auto
            pr-2
            mercury-content-scroll
          "
        >

          <p
            className="
              text-sm
              leading-7
              text-white/65
            "
          >
            {active.description}
          </p>

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-white/50
            "
          >
            {active.detail}
          </p>

        </div>


        {/* Current */}

        {active.current && (
          <div
            className="
              absolute
              left-7
              right-7
              bottom-7
              rounded-xl
              px-4
              py-3
            "
            style={{
              background:
                "rgba(16,185,129,0.06)",

              border:
                "1px solid rgba(52,211,153,0.18)",
            }}
          >

            <div
              className="
                text-[9px]
                tracking-[0.25em]
                uppercase
                text-emerald-300
              "
            >
              ● YOU ARE HERE
            </div>

            <div
              className="
                mt-1
                text-xs
                text-white/40
              "
            >
              The journey is currently here.
            </div>

          </div>
        )}


        {/* Future */}

        {active.future && (
          <div
            className="
              absolute
              left-7
              right-7
              bottom-7
              rounded-xl
              px-4
              py-3
            "
            style={{
              background:
                "rgba(190,198,205,0.05)",

              border:
                "1px solid rgba(190,198,205,0.16)",
            }}
          >

            <div
              className="
                text-[9px]
                tracking-[0.25em]
                uppercase
                text-slate-300
              "
            >
              ✦ NEXT DESTINATION
            </div>

            <div
              className="
                mt-1
                text-xs
                text-white/40
              "
            >
              Still being written.
            </div>

          </div>
        )}

      </div>


      {/* ================================================= */}
      {/* BOTTOM MERCURY LABEL */}
      {/* ================================================= */}

      <div
        className="
          absolute
          left-1/2
          bottom-6
          -translate-x-1/2
          text-center
          pointer-events-none
        "
      >

        <div
          className="
            text-[9px]
            tracking-[0.35em]
            uppercase
            text-white/25
          "
        >
          MERCURY / MOTION
        </div>

        <div
          className="
            mt-1
            text-[10px]
            tracking-[0.2em]
            text-slate-300/50
          "
        >
          LEARNING • GROWTH • MOVEMENT
        </div>

      </div>


      {/* ================================================= */}
      {/* MERCURY ANIMATION + SCROLLBAR */}
      {/* ================================================= */}

      <style>{`

        /* ----------------------------------------------- */
        /* MOVING ORBITAL LIGHT */
        /* ----------------------------------------------- */

        .mercury-orbit-glow {
          border-radius: 9999px;

          border-top:
            2px solid rgba(215,222,226,0.80);

          border-right:
            2px solid rgba(180,190,198,0.25);

          border-bottom:
            2px solid transparent;

          border-left:
            2px solid transparent;

          filter:
            drop-shadow(0 0 7px rgba(205,215,220,0.50));

          animation:
            mercuryOrbit 9s linear infinite;
        }

        @keyframes mercuryOrbit {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }


        /* ----------------------------------------------- */
        /* DIRECTION ARROWS */
        /* ----------------------------------------------- */

        .mercury-arrow {
          color: rgba(205,215,220,0.70);

          font-size: 7px;

          filter:
            drop-shadow(0 0 5px rgba(205,215,220,0.65));

          animation:
            mercuryArrowPulse 2.5s ease-in-out infinite;
        }

        @keyframes mercuryArrowPulse {

          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }

        }


        /* ----------------------------------------------- */
        /* START NODE */
        /* ----------------------------------------------- */

        .mercury-start-ring {
          animation:
            mercuryStartRing 2.5s ease-out infinite;
        }

        @keyframes mercuryStartRing {

          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }

          100% {
            transform: scale(1.5);
            opacity: 0;
          }

        }


        .mercury-start-pulse {
          animation:
            mercuryStartText 2s ease-in-out infinite;
        }

        @keyframes mercuryStartText {

          0%,
          100% {
            opacity: 0.55;
          }

          50% {
            opacity: 1;
          }

        }


        /* ----------------------------------------------- */
        /* CURRENT NODE */
        /* ----------------------------------------------- */

        .mercury-current-ring {
          animation:
            mercuryCurrentRing 2s ease-out infinite;
        }

        @keyframes mercuryCurrentRing {

          0% {
            transform: scale(0.85);
            opacity: 0.65;
          }

          100% {
            transform: scale(1.4);
            opacity: 0;
          }

        }


        .mercury-current-ring-slow {
          animation:
            mercuryCurrentSlow 4s ease-out infinite;
        }

        @keyframes mercuryCurrentSlow {

          0% {
            transform: scale(0.85);
            opacity: 0.4;
          }

          100% {
            transform: scale(1.7);
            opacity: 0;
          }

        }


        /* ----------------------------------------------- */
        /* SCROLLBAR */
        /* ----------------------------------------------- */

        .mercury-content-scroll::-webkit-scrollbar {
          width: 5px;
        }

        .mercury-content-scroll::-webkit-scrollbar-track {
          background:
            rgba(255,255,255,0.03);

          border-radius:
            999px;
        }

        .mercury-content-scroll::-webkit-scrollbar-thumb {
          background:
            linear-gradient(
              180deg,
              rgba(215,222,226,0.70),
              rgba(130,140,148,0.40)
            );

          border-radius:
            999px;

          box-shadow:
            0 0 8px rgba(205,215,220,0.20);
        }

        .mercury-content-scroll::-webkit-scrollbar-thumb:hover {
          background:
            rgba(220,225,228,0.90);
        }

        .mercury-content-scroll {
          scrollbar-width: thin;

          scrollbar-color:
            rgba(195,205,212,0.65)
            rgba(255,255,255,0.03);
        }

      `}</style>

    </div>
  );
}