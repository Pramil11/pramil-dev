import { useEffect, useState } from "react";
import {
  Radio,
  Satellite,
  GraduationCap,
  Compass,
  Wrench,
  Activity,
  type LucideIcon,
} from "lucide-react";

import { usePlanetStore } from "../../store/planetStore";

type Mission = {
  id: string;
  title: string;
  subtitle: string;
  institution: string;
  icon: LucideIcon;
  description: string;
  responsibilities: string[];
  learned: string[];
};

const missions: Mission[] = [
  {
    id: "csac",
    title: "Computer Science Tutor",
    subtitle: "Teaching & Technical Guidance",
    institution: "University of Idaho · CSAC",
    icon: GraduationCap,

    description:
      "Worked with students at the Computer Science Assistance Center, helping them understand programming and computer science concepts rather than simply giving them the answer.",

    responsibilities: [
      "Explain programming and computer science concepts",
      "Help students understand how to approach problems",
      "Guide students through debugging and problem-solving",
      "Adapt explanations to different learning styles",
      "Encourage students to develop solutions independently",
    ],

    learned: [
      "Technical communication",
      "Problem-solving guidance",
      "Teaching complex concepts",
      "Patience and adaptability",
    ],
  },

  {
    id: "mentor",
    title: "Undergraduate Capstone Technical Mentor",
    subtitle: "Engineering Guidance & Mentorship",
    institution: "University of Idaho",
    icon: Wrench,

    description:
      "Mentored undergraduate software teams by helping them reason through technical decisions, architecture, databases, APIs, debugging, and engineering practices.",

    responsibilities: [
      "Guide system architecture decisions",
      "Discuss database and API design",
      "Help teams evaluate technology choices",
      "Guide debugging and technical problem solving",
      "Encourage modular and maintainable software design",
    ],

    learned: [
      "Technical mentorship",
      "System-level thinking",
      "Engineering communication",
      "Guiding without taking ownership",
    ],
  },
];

export default function MarsInterface() {
  const closePlanet = usePlanetStore((state) => state.closePlanet);

  const [activated, setActivated] = useState(false);
  const [powering, setPowering] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [selectedMission, setSelectedMission] = useState<string | null>(null);

  /*
   * Start the Mars Base activation sequence.
   *
   * 0s       Core begins charging
   * 0.7s     First mission receives signal
   * 1.4s     Second mission receives signal
   * 2.4s     Network comes online
   * 3.2s     Experience panels appear
   */

  const activateCore = () => {
    if (activated || powering) return;

    setPowering(true);

    window.setTimeout(() => {
      setActivated(true);
    }, 700);

    window.setTimeout(() => {
      setRevealed(true);
      setPowering(false);
    }, 3200);
  };

  useEffect(() => {
    return () => {
      // Timers are intentionally short-lived.
    };
  }, []);

  const selected = missions.find(
    (mission) => mission.id === selectedMission
  );

  const SelectedIcon = selected?.icon;

  return (
    <div className="fixed inset-0 z-[50] pointer-events-none text-white">

      {/* ========================================================= */}
      {/* MARS NETWORK ANIMATIONS                                 */}
      {/* ========================================================= */}

      <style>
        {`
          @keyframes marsPowerLeft {
            0% {
              transform: translate(0, -50%);
              opacity: 0;
            }

            12% {
              opacity: 1;
            }

            80% {
              opacity: 1;
            }

            100% {
              transform: translate(-235px, -50%);
              opacity: 0;
            }
          }

          @keyframes marsPowerRight {
            0% {
              transform: translate(0, -50%);
              opacity: 0;
            }

            12% {
              opacity: 1;
            }

            80% {
              opacity: 1;
            }

            100% {
              transform: translate(235px, -50%);
              opacity: 0;
            }
          }

          @keyframes marsDataLeft {
            0% {
              transform: translate(0, -50%);
              opacity: 0;
            }

            15% {
              opacity: 1;
            }

            80% {
              opacity: 1;
            }

            100% {
              transform: translate(-170px, -50%);
              opacity: 0;
            }
          }

          @keyframes marsDataRight {
            0% {
              transform: translate(0, -50%);
              opacity: 0;
            }

            15% {
              opacity: 1;
            }

            80% {
              opacity: 1;
            }

            100% {
              transform: translate(170px, -50%);
              opacity: 0;
            }
          }

          @keyframes marsPulse {
            0% {
              transform: scale(0.7);
              opacity: 0.25;
            }

            50% {
              transform: scale(1.2);
              opacity: 1;
            }

            100% {
              transform: scale(0.7);
              opacity: 0.25;
            }
          }

          @keyframes marsSignal {
            0% {
              opacity: 0.25;
            }

            50% {
              opacity: 1;
            }

            100% {
              opacity: 0.25;
            }
          }
        `}
      </style>

      {/* ========================================================= */}
      {/* BACKGROUND ATMOSPHERE                                    */}
      {/* ========================================================= */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className={`
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[520px]
            h-[520px]
            rounded-full
            transition-all
            duration-[2500ms]
            ${
              powering || activated
                ? "opacity-100 scale-110"
                : "opacity-40 scale-100"
            }
          `}
          style={{
            background:
              "radial-gradient(circle, rgba(224,100,55,0.18) 0%, rgba(155,60,35,0.08) 38%, transparent 70%)",
          }}
        />

      </div>


      {/* ========================================================= */}
      {/* POWER / DATA NETWORK                                     */}
      {/* ========================================================= */}

      {activated && (
        <div className="absolute inset-0 pointer-events-none z-[6]">

          {/* ===================================================== */}
          {/* MARS BASE → MISSION 01                              */}
          {/* ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              w-[250px]
              h-[2px]
              -translate-x-full
              -translate-y-1/2
              origin-right
            "
            style={{
              background:
                "linear-gradient(to left, rgba(224,100,55,0.85), rgba(224,100,55,0.38), rgba(224,100,55,0.05))",
              boxShadow:
                "0 0 8px rgba(224,100,55,0.45), 0 0 18px rgba(224,100,55,0.15)",
            }}
          >

            <span
              className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                w-2.5
                h-2.5
                rounded-full
                bg-[#ff9a70]
                shadow-[0_0_12px_rgba(255,154,112,0.95)]
              "
              style={{
                animation:
                  "marsPowerLeft 1.8s linear infinite",
              }}
            />

            <span
              className="
                absolute
                right-[20px]
                top-1/2
                -translate-y-1/2
                w-1.5
                h-1.5
                rounded-full
                bg-[#d97852]
              "
              style={{
                animation:
                  "marsPowerLeft 1.8s linear infinite",
                animationDelay: "0.55s",
              }}
            />

          </div>


          {/* ===================================================== */}
          {/* MARS BASE → MISSION 02                              */}
          {/* ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              w-[250px]
              h-[2px]
              -translate-y-1/2
            "
            style={{
              background:
                "linear-gradient(to right, rgba(224,100,55,0.85), rgba(224,100,55,0.38), rgba(224,100,55,0.05))",
              boxShadow:
                "0 0 8px rgba(224,100,55,0.45), 0 0 18px rgba(224,100,55,0.15)",
            }}
          >

            <span
              className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2
                w-2.5
                h-2.5
                rounded-full
                bg-[#ff9a70]
                shadow-[0_0_12px_rgba(255,154,112,0.95)]
              "
              style={{
                animation:
                  "marsPowerRight 1.8s linear infinite",
              }}
            />

            <span
              className="
                absolute
                left-[20px]
                top-1/2
                -translate-y-1/2
                w-1.5
                h-1.5
                rounded-full
                bg-[#d97852]
              "
              style={{
                animation:
                  "marsPowerRight 1.8s linear infinite",
                animationDelay: "0.55s",
              }}
            />

          </div>


          {/* ===================================================== */}
          {/* MISSION 01 → LEFT EXPERIENCE PANEL                  */}
          {/* ===================================================== */}

          {revealed && (
            <>

              <div
                className="
                  absolute
                  left-[440px]
                  top-1/2
                  -translate-y-1/2
                  w-[65px]
                  h-[2px]
                "
                style={{
                  background:
                    "linear-gradient(to left, rgba(224,100,55,0.70), rgba(224,100,55,0.08))",
                  boxShadow:
                    "0 0 7px rgba(224,100,55,0.35)",
                }}
              >

                <span
                  className="
                    absolute
                    right-0
                    top-1/2
                    -translate-y-1/2
                    w-2
                    h-2
                    rounded-full
                    bg-[#ed8157]
                    shadow-[0_0_10px_rgba(237,129,87,0.9)]
                  "
                  style={{
                    animation:
                      "marsDataLeft 2.2s linear infinite",
                  }}
                />

              </div>


              {/* ================================================= */}
              {/* MISSION 02 → RIGHT EXPERIENCE PANEL             */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  right-[440px]
                  top-1/2
                  -translate-y-1/2
                  w-[65px]
                  h-[2px]
                "
                style={{
                  background:
                    "linear-gradient(to right, rgba(224,100,55,0.70), rgba(224,100,55,0.08))",
                  boxShadow:
                    "0 0 7px rgba(224,100,55,0.35)",
                }}
              >

                <span
                  className="
                    absolute
                    left-0
                    top-1/2
                    -translate-y-1/2
                    w-2
                    h-2
                    rounded-full
                    bg-[#ed8157]
                    shadow-[0_0_10px_rgba(237,129,87,0.9)]
                  "
                  style={{
                    animation:
                      "marsDataRight 2.2s linear infinite",
                  }}
                />

              </div>

            </>
          )}


          {/* ===================================================== */}
          {/* EXTRA CORE POWER PULSE                              */}
          {/* ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-4
              h-4
              rounded-full
              pointer-events-none
            "
            style={{
              background:
                "rgba(255,145,105,0.9)",
              boxShadow:
                "0 0 12px rgba(255,145,105,0.8), 0 0 28px rgba(224,100,55,0.45)",
              animation:
                "marsPulse 2s ease-in-out infinite",
            }}
          />

        </div>
      )}


      {/* ========================================================= */}
      {/* CLOSE BUTTON                                             */}
      {/* ========================================================= */}

      <button
        onClick={closePlanet}
        className="
          fixed
          left-1/2
          top-7
          -translate-x-1/2
          z-[80]
          pointer-events-auto
          w-11
          h-11
          rounded-full
          flex
          items-center
          justify-center
          text-white/70
          hover:text-white
          hover:scale-110
          transition-all
          duration-300
        "
        style={{
          background: "rgba(15,10,10,0.82)",
          border: "1px solid rgba(224,100,55,0.35)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: "0 0 25px rgba(224,100,55,0.12)",
        }}
      >
        ×
      </button>


      {/* ========================================================= */}
      {/* TOP GUIDANCE PANEL                                       */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          top-30
          left-1/2
          -translate-x-1/2
          w-[300px]
          pointer-events-auto
        "
      >

        <div
          className="
            rounded-2xl
            px-5
            py-4
            text-center
            backdrop-blur-xl
          "
          style={{
            background: "rgba(20,12,12,0.78)",
            border: "1px solid rgba(224,100,55,0.22)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.28)",
          }}
        >

          <div className="flex items-center justify-center gap-2 mb-2">

            <Radio
              size={13}
              className="text-[#df7048]"
            />

            <span
              className="
                text-[12px]
                tracking-[0.28em]
                uppercase
                text-[#d98965]
                font-semibold
              "
            >
              Mars Field Network
            </span>

          </div>

          <p className="text-[12px] text-white/65 leading-relaxed">
            {powering
              ? "Establishing communication with field missions..."
              : activated
              ? "Experience network online. Missions ready."
              : "Activate the Experience Core to establish the mission network."}
          </p>

        </div>

      </div>


      {/* ========================================================= */}
      {/* LEFT EXPERIENCE PANEL                                    */}
      {/* ========================================================= */}

      <div
        className={`
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          w-[420px]
          h-[800px]
          overflow-hidden
          pointer-events-auto
          transition-all
          duration-[1200ms]
          ${
            revealed
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10 pointer-events-none"
          }
        `}
      >

        <ExperiencePanel
          title="Teaching"
          eyebrow="FIELD MISSION 01"
          mission={missions[0]}
          active={activated}
          selectedMission={selectedMission}
          onSelect={() => setSelectedMission("csac")}
        />

      </div>


      {/* ========================================================= */}
      {/* RIGHT EXPERIENCE PANEL                                   */}
      {/* ========================================================= */}

      <div
        className={`
          absolute
          right-5
          top-1/2
          -translate-y-1/2
          w-[420px]
          h-[800px]
          overflow-hidden
          pointer-events-auto
          transition-all
          duration-[1200ms]
          ${
            revealed
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10 pointer-events-none"
          }
        `}
      >

        <ExperiencePanel
          title="Mentoring"
          eyebrow="FIELD MISSION 02"
          mission={missions[1]}
          active={activated}
          selectedMission={selectedMission}
          onSelect={() => setSelectedMission("mentor")}
        />

      </div>


      {/* ========================================================= */}
      {/* CENTER MARS BASE                                        */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          pointer-events-none
        "
      >

        {/* ===================================================== */}
        {/* OUTER ACTIVATION RINGS                               */}
        {/* ===================================================== */}

        <div
          className={`
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            transition-all
            duration-[1500ms]
            ${
              powering || activated
                ? "w-[300px] h-[300px] opacity-100"
                : "w-[250px] h-[250px] opacity-30"
            }
          `}
          style={{
            borderColor: "rgba(224,100,55,0.25)",
          }}
        />

        <div
          className={`
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            transition-all
            duration-[1800ms]
            ${
              powering
                ? "w-[390px] h-[390px] opacity-80"
                : activated
                ? "w-[430px] h-[430px] opacity-30"
                : "w-[300px] h-[300px] opacity-10"
            }
          `}
          style={{
            borderColor: "rgba(224,100,55,0.18)",
          }}
        />


        {/* ===================================================== */}
        {/* STATIC POWER CONNECTIONS                              */}
        {/* ===================================================== */}

        <div className="absolute inset-0">

          {/* top connection */}

          <div
            className={`
              absolute
              left-1/2
              top-[-145px]
              -translate-x-1/2
              w-px
              h-[145px]
              transition-all
              duration-1000
              ${
                activated
                  ? "opacity-100"
                  : "opacity-25"
              }
            `}
            style={{
              background:
                "linear-gradient(to top, rgba(224,100,55,0.65), transparent)",
            }}
          />

          {/* left connection */}

          <div
            className={`
              absolute
              right-[105px]
              top-1/2
              -translate-y-1/2
              w-[125px]
              h-px
              transition-all
              duration-1000
              ${
                activated
                  ? "opacity-100"
                  : "opacity-25"
              }
            `}
            style={{
              background:
                "linear-gradient(to left, rgba(224,100,55,0.65), transparent)",
            }}
          />

          {/* right connection */}

          <div
            className={`
              absolute
              left-[105px]
              top-1/2
              -translate-y-1/2
              w-[125px]
              h-px
              transition-all
              duration-1000
              ${
                activated
                  ? "opacity-100"
                  : "opacity-25"
              }
            `}
            style={{
              background:
                "linear-gradient(to right, rgba(224,100,55,0.65), transparent)",
            }}
          />

          {/* bottom connection */}

          <div
            className={`
              absolute
              left-1/2
              bottom-[-145px]
              -translate-x-1/2
              w-px
              h-[145px]
              transition-all
              duration-1000
              ${
                activated
                  ? "opacity-100"
                  : "opacity-25"
              }
            `}
            style={{
              background:
                "linear-gradient(to bottom, rgba(224,100,55,0.65), transparent)",
            }}
          />

        </div>


        {/* ===================================================== */}
        {/* MARS BASE CORE                                       */}
        {/* ===================================================== */}

        <button
          onClick={activateCore}
          disabled={activated || powering}
          className={`
            relative
            w-[190px]
            h-[190px]
            rounded-full
            pointer-events-auto
            flex
            flex-col
            items-center
            justify-center
            transition-all
            duration-700
            ${
              powering
                ? "scale-110"
                : activated
                ? "scale-105"
                : "hover:scale-105"
            }
          `}
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(245,151,105,0.75), rgba(96,39,27,0.95) 45%, rgba(22,12,11,0.98) 75%)",
            border: "1px solid rgba(244,143,99,0.45)",
            boxShadow:
              powering || activated
                ? "0 0 40px rgba(224,100,55,0.45), inset 0 0 45px rgba(224,100,55,0.18)"
                : "0 0 30px rgba(224,100,55,0.12), inset 0 0 35px rgba(224,100,55,0.10)",
          }}
        >

          <div
            className={`
              absolute
              inset-[-10px]
              rounded-full
              border
              transition-all
              duration-700
              ${
                powering
                  ? "border-[#ed8055] opacity-100 scale-105"
                  : activated
                  ? "border-[#c96343] opacity-60"
                  : "border-[#7d4a3b] opacity-30"
              }
            `}
          />

          <Satellite
            size={25}
            strokeWidth={1.4}
            className={`
              mb-3
              transition-all
              duration-700
              ${
                powering || activated
                  ? "text-[#ff9a70]"
                  : "text-[#c9856b]"
              }
            `}
          />

          <div
            className="
              text-[10px]
              tracking-[0.4em]
              uppercase
              text-[#e4a083]
              font-semibold
              ml-[0.4em]
            "
          >
            Mars Base
          </div>

          <div
            className="
              mt-2
              text-[8px]
              tracking-[0.28em]
              uppercase
              text-white/45
            "
          >
            Experience Core
          </div>

          <div
            className={`
              mt-4
              text-[8px]
              tracking-[0.22em]
              uppercase
              transition-all
              duration-500
              ${
                powering
                  ? "text-[#ff9a70]"
                  : activated
                  ? "text-[#d97852]"
                  : "text-white/40"
              }
            `}
          >
            {powering
              ? "Powering Network"
              : activated
              ? "Network Online"
              : "Click To Activate"}
          </div>

        </button>


        {/* ===================================================== */}
        {/* MISSION 01                                           */}
        {/* ===================================================== */}

        <MissionNode
          mission={missions[0]}
          position="left"
          activated={activated}
          powering={powering}
          onClick={() =>
            revealed && setSelectedMission("csac")
          }
        />


        {/* ===================================================== */}
        {/* MISSION 02                                           */}
        {/* ===================================================== */}

        <MissionNode
          mission={missions[1]}
          position="right"
          activated={activated}
          powering={powering}
          onClick={() =>
            revealed && setSelectedMission("mentor")
          }
        />

      </div>


      {/* ========================================================= */}
      {/* BOTTOM GUIDANCE PANEL                                   */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          bottom-30
          left-1/2
          -translate-x-1/2
          w-[360px]
          pointer-events-auto
        "
      >

        <div
          className="
            rounded-2xl
            px-5
            py-4
            backdrop-blur-xl
          "
          style={{
            background: "rgba(20,12,12,0.78)",
            border: "1px solid rgba(224,100,55,0.22)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.28)",
          }}
        >

          <div className="flex items-center gap-3">

            <div
              className="
                w-9
                h-9
                rounded-xl
                flex
                items-center
                justify-center
              "
              style={{
                background: "rgba(224,100,55,0.10)",
                border: "1px solid rgba(224,100,55,0.20)",
              }}
            >

              {activated ? (
                <Activity
                  size={16}
                  className="text-[#df7048]"
                />
              ) : (
                <Compass
                  size={16}
                  className="text-[#df7048]"
                />
              )}

            </div>

            <div>

              <div
                className="
                  text-[9px]
                  tracking-[0.25em]
                  uppercase
                  text-[#d98965]
                  font-semibold
                "
              >
                {activated
                  ? "Experience Network"
                  : "Mission Protocol"}
              </div>

              <div className="text-[12px] text-white/55 mt-1">
                {activated
                  ? "Teaching and mentorship missions are now accessible."
                  : "Power the central core before exploring the field missions."}
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ========================================================= */}
      {/* SELECTED MISSION OVERLAY                                 */}
      {/* ========================================================= */}

      {selected && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            pointer-events-auto
            bg-black/35
            backdrop-blur-[3px]
          "
          onClick={() => setSelectedMission(null)}
        >

          <div
            className="
              w-[540px]
              max-h-[80vh]
              overflow-y-auto
              rounded-3xl
              p-7
            "
            onClick={(event) =>
              event.stopPropagation()
            }
            style={{
              background: "rgba(18,11,11,0.96)",
              border:
                "1px solid rgba(224,100,55,0.28)",
              boxShadow:
                "0 30px 100px rgba(0,0,0,0.55), 0 0 45px rgba(224,100,55,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                  "
                  style={{
                    background:
                      "rgba(224,100,55,0.10)",
                    border:
                      "1px solid rgba(224,100,55,0.24)",
                  }}
                >

                  {SelectedIcon && (
                    <SelectedIcon
                      size={22}
                      className="text-[#e07b55]"
                    />
                  )}

                </div>

                <div>

                  <div
                    className="
                      text-[10px]
                      tracking-[0.28em]
                      uppercase
                      text-[#d98965]
                    "
                  >
                    Mars Field Mission
                  </div>

                  <h2 className="text-3xl font-semibold mt-1">
                    {selected.title}
                  </h2>

                  <p className="text-sm text-[#d98965] mt-1">
                    {selected.institution}
                  </p>

                </div>

              </div>

              <button
                onClick={() =>
                  setSelectedMission(null)
                }
                className="
                  w-9
                  h-9
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-white/50
                  hover:text-white
                  transition
                "
              >
                ×
              </button>

            </div>


            <div
              className="h-px my-6"
              style={{
                background:
                  "linear-gradient(to right, rgba(224,100,55,0.35), transparent)",
              }}
            />


            <div>

              <div
                className="
                  text-[10px]
                  tracking-[0.25em]
                  uppercase
                  text-[#c47b5d]
                  mb-3
                "
              >
                Mission Brief
              </div>

              <p className="text-base text-white/75 leading-8">
                {selected.description}
              </p>

            </div>


            <div className="mt-7">

              <div
                className="
                  text-[10px]
                  tracking-[0.25em]
                  uppercase
                  text-[#c47b5d]
                  mb-3
                "
              >
                What I Did
              </div>

              <div className="space-y-2">

                {selected.responsibilities.map(
                  (item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                        px-4
                        py-3
                        rounded-xl
                      "
                      style={{
                        background:
                          "rgba(255,255,255,0.025)",
                        border:
                          "1px solid rgba(255,255,255,0.06)",
                      }}
                    >

                      <span
                        className="
                          mt-2
                          w-2
                          h-2
                          rounded-full
                          bg-[#d97552]
                          shrink-0
                        "
                      />

                      <span className="text-sm text-white/70 leading-6">
                        {item}
                      </span>

                    </div>
                  )
                )}

              </div>

            </div>


            <div className="mt-7">

              <div
                className="
                  text-[10px]
                  tracking-[0.25em]
                  uppercase
                  text-[#c47b5d]
                  mb-3
                "
              >
                What I Developed
              </div>

              <div className="flex flex-wrap gap-2">

                {selected.learned.map(
                  (item) => (
                    <span
                      key={item}
                      className="
                        px-3
                        py-2
                        rounded-lg
                        text-xs
                        text-white/65
                      "
                      style={{
                        background:
                          "rgba(224,100,55,0.07)",
                        border:
                          "1px solid rgba(224,100,55,0.16)",
                      }}
                    >
                      {item}
                    </span>
                  )
                )}

              </div>

            </div>

          </div>

        </div>
      )}


      {/* ========================================================= */}
      {/* FOOTER LABEL                                             */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          bottom-2
          left-1/2
          -translate-x-1/2
          text-[8px]
          tracking-[0.35em]
          uppercase
          text-[#b86f55]/55
        "
      >
        Mars · Experience · Teaching · Mentorship
      </div>

    </div>
  );
}


/* ============================================================= */
/* MISSION NODE                                                 */
/* ============================================================= */

type MissionNodeProps = {
  mission: Mission;
  position: "left" | "right";
  activated: boolean;
  powering: boolean;
  onClick: () => void;
};

function MissionNode({
  mission,
  position,
  activated,
  powering,
  onClick,
}: MissionNodeProps) {

  const Icon = mission.icon;

  const isLeft = position === "left";

  return (
    <button
      onClick={onClick}
      disabled={!activated}
      className={`
        absolute
        top-1/2
        -translate-y-1/2
        w-[230px]
        px-4
        py-4
        rounded-2xl
        text-left
        pointer-events-auto
        transition-all
        duration-[1000ms]
        ${
          isLeft
            ? "right-[250px]"
            : "left-[250px]"
        }
        ${
          activated
            ? "opacity-100 scale-100"
            : "opacity-55 scale-95"
        }
        ${
          activated
            ? "cursor-pointer hover:scale-[1.03]"
            : "cursor-default"
        }
      `}
      style={{
        background: activated
          ? "rgba(38,19,16,0.94)"
          : "rgba(20,12,12,0.72)",

        border: activated
          ? "1px solid rgba(224,100,55,0.38)"
          : "1px solid rgba(255,255,255,0.08)",

        boxShadow: activated
          ? "0 0 35px rgba(224,100,55,0.16)"
          : "0 10px 25px rgba(0,0,0,0.25)",
      }}
    >

      {/* ======================================================= */}
      {/* SIGNAL PULSE                                            */}
      {/* ======================================================= */}

      {powering && (
        <span
          className={`
            absolute
            ${
              isLeft
                ? "right-[-20px]"
                : "left-[-20px]"
            }
            top-1/2
            -translate-y-1/2
            w-3
            h-3
            rounded-full
            bg-[#ed8157]
            animate-ping
          `}
        />
      )}


      <div className="flex items-start gap-3">

        <div
          className="
            w-10
            h-10
            rounded-xl
            flex
            items-center
            justify-center
            shrink-0
          "
          style={{
            background: activated
              ? "rgba(224,100,55,0.12)"
              : "rgba(255,255,255,0.035)",

            border: activated
              ? "1px solid rgba(224,100,55,0.22)"
              : "1px solid rgba(255,255,255,0.07)",
          }}
        >

          <Icon
            size={17}
            className={
              activated
                ? "text-[#e07b55]"
                : "text-white/30"
            }
          />

        </div>


        <div>

          <div
            className="
              text-[8px]
              tracking-[0.25em]
              uppercase
              mb-1
            "
            style={{
              color: activated
                ? "#c77a5d"
                : "rgba(255,255,255,0.3)",
            }}
          >
            Mission {mission.id === "csac" ? "01" : "02"}
          </div>


          <div className="text-xs font-semibold text-white/90">
            {mission.title}
          </div>


          <div className="text-[9px] text-white/40 mt-1">
            {mission.institution}
          </div>

        </div>

      </div>


      <div
        className="
          mt-3
          flex
          items-center
          gap-2
          text-[8px]
          tracking-[0.18em]
          uppercase
        "
        style={{
          color: activated
            ? "#d97852"
            : "rgba(255,255,255,0.25)",
        }}
      >

        <span
          className="
            w-1.5
            h-1.5
            rounded-full
          "
          style={{
            background: activated
              ? "#d97852"
              : "rgba(255,255,255,0.2)",
          }}
        />

        {activated
          ? "Mission Online"
          : "Standby"}

      </div>

    </button>
  );
}


/* ============================================================= */
/* EXPERIENCE PANEL                                            */
/* ============================================================= */

type ExperiencePanelProps = {
  title: string;
  eyebrow: string;
  mission: Mission;
  active: boolean;
  selectedMission: string | null;
  onSelect: () => void;
};

function ExperiencePanel({
  title,
  eyebrow,
  mission,
  active,
  onSelect,
}: ExperiencePanelProps) {

  const Icon = mission.icon;

  return (
    <div
      className="
        rounded-3xl
        p-7
        backdrop-blur-xl
        h-full
      "
      style={{
        background: "rgba(18,10,10,0.88)",
        border: "1px solid rgba(224,100,55,0.22)",
        boxShadow:
          "0 20px 70px rgba(0,0,0,0.35)",
      }}
    >

      <div className="flex items-center gap-2 mb-6">

        <Radio
          size={14}
          className="text-[#d97852]"
        />

        <span
          className="
            text-[10px]
            tracking-[0.3em]
            uppercase
            text-[#c47b5d]
            font-semibold
          "
        >
          {eyebrow}
        </span>

      </div>


      <div className="flex items-start gap-4">

        <div
          className="
            w-14
            h-14
            rounded-2xl
            flex
            items-center
            justify-center
          "
          style={{
            background:
              "rgba(224,100,55,0.09)",
            border:
              "1px solid rgba(224,100,55,0.20)",
          }}
        >

          <Icon
            size={24}
            className="text-[#df7956]"
          />

        </div>


        <div>

          <div className="text-2xl font-semibold leading-tight">
            {title}
          </div>

          <div className="text-sm text-[#cf8062] mt-2">
            {mission.subtitle}
          </div>

          <div className="text-xs text-white/40 mt-1">
            {mission.institution}
          </div>

        </div>

      </div>


      <div
        className="
          h-px
          my-3
        "
        style={{
          background:
            "linear-gradient(to right, rgba(224,100,55,0.28), transparent)",
        }}
      />


      <p className="text-base text-white/65 leading-8">
        {mission.description}
      </p>


      <div className="mt-3">

        <div
          className="
            text-[10px]
            tracking-[0.25em]
            uppercase
            text-[#b97358]
            mb-4
          "
        >
          What I Do
        </div>


        <div className="space-y-2.5">

          {mission.responsibilities.slice(0, 5).map(
            (item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-1
                  px-4
                  py-3
                  rounded-xl
                "
                style={{
                  background:
                    "rgba(255,255,255,0.025)",
                  border:
                    "1px solid rgba(255,255,255,0.05)",
                }}
              >

                <span className="w-2 h-2 shrink-0 rounded-full bg-[#d87854]" />

                <span className="text-sm text-white/65 leading-6">
                  {item}
                </span>

              </div>
            )
          )}

        </div>

      </div>


      <button
        onClick={onSelect}
        disabled={!active}
        className="
          mt-3
          w-full
          py-3.5
          rounded-xl
          text-[11px]
          tracking-[0.2em]
          uppercase
          transition-all
          duration-300
          hover:scale-[1.01]
        "
        style={{
          background:
            "rgba(224,100,55,0.08)",
          border:
            "1px solid rgba(224,100,55,0.18)",
          color: "#d68160",
        }}
      >
        Explore Mission
      </button>

    </div>
  );
}