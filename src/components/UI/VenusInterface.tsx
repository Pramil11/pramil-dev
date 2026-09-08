import { useState } from "react";
import type { ElementType } from "react";

import {
  Brain,
  Bot,
  Code2,
  Database,
  Globe,
  BarChart3,
  Cpu,
  Network,
  Sparkles,
  X,
} from "lucide-react";

import { usePlanetStore } from "../../store/planetStore";


// ============================================================
// TYPES
// ============================================================

type Skill = {
  id: string;
  name: string;
  description: string;
};

type SubSkillPosition = {
  skill: Skill;
  x: number;
  y: number;
};

type SkillGroup = {
  id: string;
  name: string;
  icon: ElementType;

  // Position of MAIN skill
  x: number;
  y: number;

  // Position of SUB skills
  subSkills: SubSkillPosition[];

  description: string;
};


// ============================================================
// SKILL DATA
// ============================================================

const skillGroups: SkillGroup[] = [

  // ==========================================================
  // AI / MACHINE LEARNING
  // ==========================================================

  {
    id: "ai",
    name: "AI / MACHINE LEARNING",
    icon: Brain,

    x: 50,
    y: 24,

    description:
      "My work with artificial intelligence includes machine learning, deep learning, natural language processing, and building intelligent systems.",

    subSkills: [
      {
        skill: {
          id: "python",
          name: "Python",
          description:
            "My primary programming language for AI, machine learning, data processing, backend development, and experimentation.",
        },
        x: 43,
        y: 13,
      },

      {
        skill: {
          id: "pytorch",
          name: "PyTorch",
          description:
            "Used for deep learning experiments and developing neural-network based systems.",
        },
        x: 50,
        y: 10,
      },

      {
        skill: {
          id: "machine-learning",
          name: "Machine Learning",
          description:
            "Building models that learn patterns from data and applying them to real-world problems.",
        },
        x: 65,
        y: 15,
      },

      {
        skill: {
          id: "deep-learning",
          name: "Deep Learning",
          description:
            "Working with neural networks and modern deep learning approaches.",
        },
        x: 35,
        y: 15,
      },

      {
        skill: {
          id: "nlp",
          name: "NLP",
          description:
            "Working with language, text processing, and systems that interact with human language.",
        },
        x: 57,
        y: 13,
      },
    ],
  },


  // ==========================================================
  // LLMs / AGENTS
  // ==========================================================

  {
    id: "agents",
    name: "LLMs & AI AGENTS",
    icon: Bot,

    x: 75,
    y: 35,

    description:
      "Exploring large language models and agentic systems that can reason through tasks, use tools, and complete multi-step workflows.",

    subSkills: [
      {
        skill: {
          id: "llms",
          name: "LLMs",
          description:
            "Working with large language models as components of intelligent applications.",
        },
        x: 87,
        y: 29,
      },

      {
        skill: {
          id: "ai-agents",
          name: "AI Agents",
          description:
            "Designing systems that can reason, make decisions, use tools, and complete multi-step tasks.",
        },
        x: 91,
        y: 35,
      },

      {
        skill: {
          id: "langgraph",
          name: "LangGraph",
          description:
            "Used to structure stateful and multi-step agent workflows.",
        },
        x: 88,
        y: 41,
      },

      {
        skill: {
          id: "mcp",
          name: "MCP",
          description:
            "Exploring ways for intelligent systems to connect with tools, data, and external services.",
        },
        x: 82,
        y: 45,
      },
    ],
  },


  // ==========================================================
  // SOFTWARE ENGINEERING
  // ==========================================================

  {
    id: "software",
    name: "SOFTWARE ENGINEERING",
    icon: Code2,

    x: 25,
    y: 35,

    description:
      "Software engineering forms the foundation behind the systems I build, from algorithms and APIs to complete applications.",

    subSkills: [
      {
        skill: {
          id: "cpp",
          name: "C++",
          description:
            "Used for programming foundations, algorithms, data structures, and systems thinking.",
        },
        x: 9,
        y: 29,
      },

      {
        skill: {
          id: "git",
          name: "Git",
          description:
            "Used for version control, collaboration, and managing software projects.",
        },
        x: 6,
        y: 35,
      },

      {
        skill: {
          id: "rest",
          name: "REST APIs",
          description:
            "Building connections between application components and backend services.",
        },
        x: 10,
        y: 41,
      },
    ],
  },


  // ==========================================================
  // DATA
  // ==========================================================

  {
    id: "data",
    name: "DATA & DATABASES",
    icon: Database,

    x: 27,
    y: 65,

    description:
      "Working with structured data, relational databases, data processing, and analytical workflows.",

    subSkills: [
      {
        skill: {
          id: "postgresql",
          name: "PostgreSQL",
          description:
            "A relational database I use for application data and structured systems.",
        },
        x: 10,
        y: 59,
      },

      {
        skill: {
          id: "sql",
          name: "SQL",
          description:
            "Used for querying, transforming, analyzing, and managing structured data.",
        },
        x: 7,
        y: 65,
      },

      {
        skill: {
          id: "pandas",
          name: "Pandas",
          description:
            "Used for cleaning, transforming, exploring, and analyzing data.",
        },
        x: 12,
        y: 72,
      },

      {
        skill: {
          id: "numpy",
          name: "NumPy",
          description:
            "Used for numerical computing and scientific workflows.",
        },
        x: 20,
        y: 76,
      },
    ],
  },


  // ==========================================================
  // WEB
  // ==========================================================

  {
    id: "web",
    name: "WEB & APPLICATIONS",
    icon: Globe,

    x: 74,
    y: 65,

    description:
      "Building interactive applications across frontend, backend, APIs, and modern web technologies.",

    subSkills: [
      {
        skill: {
          id: "react",
          name: "React",
          description:
            "Used to build interactive interfaces and component-based applications.",
        },
        x: 90,
        y: 59,
      },

      {
        skill: {
          id: "javascript",
          name: "JavaScript",
          description:
            "Used for application logic and interactive web experiences.",
        },
        x: 94,
        y: 65,
      },

      {
        skill: {
          id: "fastapi",
          name: "FastAPI",
          description:
            "Used to build Python backend services and APIs.",
        },
        x: 89,
        y: 72,
      },

      {
        skill: {
          id: "node",
          name: "Node.js",
          description:
            "Used for backend services and JavaScript-based application development.",
        },
        x: 81,
        y: 76,
      },

      {
        skill: {
          id: "vite",
          name: "Vite",
          description:
            "Used for fast modern frontend development and project tooling.",
        },
        x: 82,
        y: 57,
      },
    ],
  },


  // ==========================================================
  // ANALYTICS
  // ==========================================================

  {
    id: "analytics",
    name: "ANALYTICS & TOOLS",
    icon: BarChart3,

    x: 50,
    y: 75,

    description:
      "Turning data into useful information through analysis, visualization, reporting, and development tools.",

    subSkills: [
      {
        skill: {
          id: "powerbi",
          name: "Power BI",
          description:
            "Used to create dashboards and communicate data-driven insights.",
        },
        x: 39,
        y: 85,
      },

      {
        skill: {
          id: "tableau",
          name: "Tableau",
          description:
            "Used for interactive data visualization and exploration.",
        },
        x: 46,
        y: 87,
      },

      {
        skill: {
          id: "docker",
          name: "Docker",
          description:
            "Used to package applications and create consistent development environments.",
        },
        x: 54,
        y: 87,
      },

      {
        skill: {
          id: "github",
          name: "GitHub",
          description:
            "Used for source control, collaboration, and managing software projects.",
        },
        x: 61,
        y: 85,
      },
    ],
  },
];


// ============================================================
// COMPONENT
// ============================================================

export default function VenusInterface() {

  const closePlanet =
    usePlanetStore((state) => state.closePlanet);

  // Controls ONLY the sub-skill network.
  // Main skills and their connection to the core are always visible.
  const [active, setActive] =
    useState(false);

  const [selectedGroup, setSelectedGroup] =
    useState<SkillGroup | null>(null);

  const [selectedSkill, setSelectedSkill] =
    useState<Skill | null>(null);


  // ==========================================================
  // ACTIVATE / COLLAPSE SUB-SKILL NETWORK
  // ==========================================================

  const activateCore = () => {

    setActive((current) => {

      const nextState = !current;

      // When collapsing the network,
      // clear selected information.
      if (!nextState) {
        setSelectedGroup(null);
        setSelectedSkill(null);
      }

      return nextState;
    });

  };


  // ==========================================================
  // SELECT MAIN SKILL
  // ==========================================================

  const selectGroup = (
    group: SkillGroup
  ) => {

    setSelectedGroup(group);
    setSelectedSkill(null);

  };


  // ==========================================================
  // SELECT SUB SKILL
  // ==========================================================

  const selectSkill = (
    skill: Skill,
    group: SkillGroup
  ) => {

    setSelectedGroup(group);
    setSelectedSkill(skill);

  };


  return (

    <div
      className="
        fixed
        inset-0
        z-[50]
        pointer-events-none
      "
    >


      {/* ==================================================== */}
      {/* CLOSE */}
      {/* ==================================================== */}

      <button
        onClick={closePlanet}
        className="
          fixed
          top-7
          left-1/2
          -translate-x-1/2
          z-[100]
          w-10
          h-10
          rounded-full
          flex
          items-center
          justify-center
          pointer-events-auto
          text-white/70
          hover:text-white
          hover:scale-110
          transition-all
        "
        style={{
          background:
            "rgba(25,18,14,0.85)",

          border:
            "1px solid rgba(210,155,105,0.35)",

          backdropFilter:
            "blur(12px)",

          boxShadow:
            "0 0 20px rgba(190,110,55,0.15)",
        }}
      >

        <X size={18} />

      </button>


      {/* ==================================================== */}
      {/* LEFT INFORMATION PANEL */}
      {/* ==================================================== */}

      <div
        className="
          absolute
          left-7
          top-30
          bottom-7
          w-[350px]
          h-[750px]
          rounded-[25px]
          p-7
          pointer-events-auto
          overflow-hidden
        "
        style={{
          background:
            "linear-gradient(145deg, rgba(28,19,15,0.96), rgba(9,8,9,0.94))",

          border:
            "1px solid rgba(201,139,91,0.35)",

          backdropFilter:
            "blur(18px)",

          boxShadow:
            "0 20px 60px rgba(0,0,0,0.45)",
        }}
      >

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
              "linear-gradient(90deg, transparent, #c78d5c, transparent)",
          }}
        />


        <div
          className="
            text-[10px]
            tracking-[0.32em]
            text-[#c99a75]
          "
        >
          ♀ VENUS / CAPABILITY
        </div>


        <h1
          className="
            mt-5
            text-[34px]
            leading-tight
            font-bold
            text-white
          "
        >
          What I Build With
        </h1>


        <p
          className="
            mt-4
            text-sm
            leading-6
            text-white/55
          "
        >
          My technical skills come together
          across artificial intelligence,
          software engineering, data, and
          modern applications.
        </p>


        <p
          className="
            mt-4
            text-sm
            leading-6
            text-white/45
          "
        >
          I do not see these technologies as
          isolated tools. I enjoy understanding
          how they connect and using them
          together to turn an idea into
          something useful.
        </p>


        <div
          className="my-7 h-px"
          style={{
            background:
              "linear-gradient(90deg, rgba(199,141,92,0.5), transparent)",
          }}
        />


        <div
          className="
            text-[10px]
            tracking-[0.28em]
            text-[#c99a75]
          "
        >
          EXPLORE THE SYSTEM
        </div>


        <p
          className="
            mt-4
            text-sm
            leading-6
            text-white/45
          "
        >
          {active
            ? "The skill network is active. Explore the branches and discover the technologies behind what I build."
            : "The core skills form the foundation. Activate Venus to reveal the technologies connected to each one."}
        </p>


        {selectedGroup && (

          <div
            className="
              mt-7
              p-5
              rounded-2xl
            "
            style={{
              background:
                "rgba(190,120,70,0.07)",

              border:
                "1px solid rgba(205,150,100,0.18)",
            }}
          >

            <div
              className="
                text-[9px]
                tracking-[0.25em]
                text-[#c99a75]
              "
            >
              ACTIVE BRANCH
            </div>


            <div
              className="
                mt-2
                text-lg
                font-semibold
                text-white
              "
            >
              {selectedGroup.name}
            </div>


            <p
              className="
                mt-3
                text-xs
                leading-5
                text-white/45
              "
            >
              {selectedGroup.description}
            </p>

          </div>
        )}


        <div
          className="
            absolute
            bottom-7
            left-7
            right-7
          "
        >

          <div
            className="
              text-[9px]
              tracking-[0.3em]
              text-[#8e684f]
            "
          >
            CONNECT • EXPLORE • BUILD
          </div>

        </div>

      </div>


      {/* ==================================================== */}
      {/* CENTRAL VENUS SYSTEM */}
      {/* ==================================================== */}

      <div
        className="
          absolute
          left-[380px]
          right-[380px]
          top-0
          bottom-0
          pointer-events-none
        "
      >


        {/* ================================================== */}
        {/* CONNECTION NETWORK */}
        {/* ================================================== */}

        <svg
          className="
            absolute
            inset-0
            w-full
            h-full
            z-[10]
            overflow-visible
            pointer-events-none
          "
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >

          {/* ================================================= */}
          {/* PERMANENT CORE → MAIN SKILL CONNECTIONS */}
          {/* ================================================= */}

          {skillGroups.map((group) => (

            <g
              key={`core-connection-${group.id}`}
            >

              {/* Soft permanent glow */}

              <line
                x1="50"
                y1="50"
                x2={group.x}
                y2={group.y}
                stroke="rgba(218,165,113,0.10)"
                strokeWidth="0.8"
                strokeLinecap="round"
              />


              {/* Main permanent branch */}

              <line
                x1="50"
                y1="50"
                x2={group.x}
                y2={group.y}
                stroke={
                  selectedGroup?.id === group.id
                    ? "rgba(228,181,133,0.72)"
                    : "rgba(190,125,75,0.38)"
                }
                strokeWidth="0.22"
                strokeLinecap="round"
              />

            </g>

          ))}


          {/* ================================================= */}
          {/* ACTIVE MAIN SKILL → SUB-SKILL BRANCHES */}
          {/* ================================================= */}

          {active && skillGroups.map((group) => (

            <g
              key={`sub-network-${group.id}`}
            >

              {group.subSkills.map(
                ({ skill, x, y }) => (

                  <g
                    key={`${group.id}-${skill.id}`}
                  >

                    {/* Soft glow */}

                    <line
                      x1={group.x}
                      y1={group.y}
                      x2={x}
                      y2={y}
                      stroke="rgba(226,166,108,0.15)"
                      strokeWidth="0.85"
                      strokeLinecap="round"
                      pathLength="1"
                      className="venus-branch-grow"
                    />


                    {/* Actual branch */}

                    <line
                      x1={group.x}
                      y1={group.y}
                      x2={x}
                      y2={y}
                      stroke="rgba(218,165,113,0.72)"
                      strokeWidth="0.22"
                      strokeLinecap="round"
                      pathLength="1"
                      className="venus-branch-grow"
                    />

                  </g>

                )
              )}

            </g>

          ))}

        </svg>


        {/* ================================================== */}
        {/* MAIN SKILLS */}
        {/* ================================================== */}

        {skillGroups.map((group) => {

          const Icon = group.icon;

          const isSelected =
            selectedGroup?.id === group.id;

          return (

            <button
              key={group.id}
              onClick={() =>
                selectGroup(group)
              }
              className="
                absolute
                z-[30]
                -translate-x-1/2
                -translate-y-1/2
                flex
                items-center
                gap-2
                rounded-xl
                px-3
                py-2
                whitespace-nowrap
                pointer-events-auto
                transition-all
                duration-300
                hover:scale-105
              "
              style={{
                left: `${group.x}%`,
                top: `${group.y}%`,

                background:
                  isSelected
                    ? "rgba(190,125,75,0.30)"
                    : "rgba(20,13,10,0.90)",

                border:
                  isSelected
                    ? "1px solid rgba(235,184,134,0.85)"
                    : "1px solid rgba(205,145,95,0.32)",

                boxShadow:
                  isSelected
                    ? "0 0 28px rgba(220,155,95,0.38)"
                    : "0 0 16px rgba(160,90,45,0.12)",
              }}
            >

              <div
                className="
                  w-7
                  h-7
                  rounded-lg
                  flex
                  items-center
                  justify-center
                "
                style={{
                  background:
                    "rgba(205,145,90,0.12)",
                }}
              >

                <Icon
                  size={14}
                  className="text-[#d8aa83]"
                />

              </div>


              <span
                className="
                  text-[9px]
                  tracking-[0.15em]
                  text-[#d8b393]
                "
              >
                {group.name}
              </span>

            </button>

          );

        })}


        {/* ================================================== */}
        {/* SUB SKILLS */}
        {/* ================================================== */}

        {skillGroups.map((group) => (

          group.subSkills.map(
            ({ skill, x, y }) => (

              <button
                key={`${group.id}-${skill.id}`}
                onClick={() =>
                  selectSkill(
                    skill,
                    group
                  )
                }
                className={`
                  absolute
                  z-[25]
                  -translate-x-1/2
                  -translate-y-1/2
                  px-3
                  py-1.5
                  rounded-lg
                  text-[9px]
                  whitespace-nowrap
                  pointer-events-auto
                  transition-all
                  duration-700
                  ease-[cubic-bezier(.16,1,.3,1)]

                  ${
                    active
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0 pointer-events-none"
                  }
                `}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,

                  background:
                    selectedSkill?.id === skill.id
                      ? "rgba(224,169,113,0.32)"
                      : "rgba(13,9,7,0.88)",

                  border:
                    selectedSkill?.id === skill.id
                      ? "1px solid rgba(235,186,137,0.85)"
                      : "1px solid rgba(205,145,95,0.24)",

                  color:
                    selectedSkill?.id === skill.id
                      ? "#f0cfad"
                      : "rgba(255,255,255,0.58)",

                  boxShadow:
                    selectedSkill?.id === skill.id
                      ? "0 0 18px rgba(225,160,95,0.28)"
                      : "0 0 8px rgba(150,80,40,0.08)",
                }}
              >

                {skill.name}

              </button>

            )

          )

        ))}


        {/* ================================================== */}
        {/* VENUS CORE */}
        {/* ================================================== */}

        <button
          onClick={activateCore}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            z-[50]
            w-[165px]
            h-[165px]
            rounded-full
            flex
            flex-col
            items-center
            justify-center
            pointer-events-auto
            transition-all
            duration-700
            hover:scale-[1.04]
          "
          style={{
            background:
              "radial-gradient(circle at 38% 30%, rgba(221,170,116,0.80), rgba(107,57,29,0.75) 42%, rgba(15,9,7,0.96) 76%)",

            border:
              active
                ? "1px solid rgba(238,190,143,0.90)"
                : "1px solid rgba(205,145,94,0.50)",

            boxShadow:
              active
                ? "0 0 60px rgba(221,157,95,0.50), inset 0 0 35px rgba(255,213,170,0.14)"
                : "0 0 35px rgba(190,110,60,0.22), inset 0 0 35px rgba(0,0,0,0.45)",
          }}
        >

          <Sparkles
            size={22}
            className="
              text-[#e3b586]
              mb-3
            "
          />


          <div
            className="
              text-[12px]
              tracking-[0.42em]
              text-[#e2bb98]
            "
          >
            VENUS
          </div>


          <div
            className="
              mt-2
              text-[9px]
              tracking-[0.32em]
              text-white/50
            "
          >
            {active
              ? "CORE ACTIVE"
              : "SKILL CORE"}
          </div>


          <div
            className="
              mt-3
              text-[8px]
              tracking-[0.20em]
              text-[#c99a75]
            "
          >
            {active
              ? "CLICK TO COLLAPSE"
              : "CLICK TO ACTIVATE"}
          </div>

        </button>


        {/* ================================================== */}
        {/* BOTTOM LABEL */}
        {/* ================================================== */}

        <div
          className="
            absolute
            bottom-5
            left-1/2
            -translate-x-1/2
            z-[35]
            text-center
          "
        >

          <div
            className="
              text-[9px]
              tracking-[0.4em]
              text-[#9d7254]
            "
          >
            TECHNOLOGY • CONNECTION • POSSIBILITY
          </div>

        </div>

      </div>


      {/* ==================================================== */}
      {/* RIGHT INFORMATION PANEL */}
      {/* ==================================================== */}

      <div
        className="
          absolute
          right-7
          top-50
          bottom-7
          w-[350px]
          h-[600px]
          rounded-[25px]
          p-7
          pointer-events-auto
          overflow-hidden
        "
        style={{
          background:
            "linear-gradient(145deg, rgba(28,19,15,0.96), rgba(9,8,9,0.94))",

          border:
            "1px solid rgba(201,139,91,0.35)",

          backdropFilter:
            "blur(18px)",

          boxShadow:
            "0 20px 60px rgba(0,0,0,0.45)",
        }}
      >

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
              "linear-gradient(90deg, transparent, #c78d5c, transparent)",
          }}
        />


        {/* ================================================== */}
        {/* DEFAULT RIGHT PANEL */}
        {/* ================================================== */}

        {!selectedGroup && (

          <>

            <div
              className="
                text-[10px]
                tracking-[0.30em]
                text-[#c99a75]
              "
            >
              VENUS / SKILL SYSTEM
            </div>


            <h2
              className="
                mt-6
                text-3xl
                font-bold
                text-white
              "
            >
              Skill Core
            </h2>


            <div
              className="
                mt-2
                text-xs
                text-[#bb8d6b]
              "
            >
              My Technical Universe
            </div>


            <div
              className="my-7 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(200,140,90,0.45), transparent)",
              }}
            />


            <div
              className="
                text-[10px]
                tracking-[0.28em]
                text-[#c99a75]
              "
            >
              START HERE
            </div>


            <p
              className="
                mt-5
                text-sm
                leading-7
                text-white/50
              "
            >
              The six core capabilities form
              the foundation of my technical
              work.
            </p>


            <div
              className="
                mt-7
                p-5
                rounded-2xl
              "
              style={{
                background:
                  "rgba(190,120,70,0.07)",

                border:
                  "1px solid rgba(205,150,100,0.18)",
              }}
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <Network
                  size={18}
                  className="text-[#c99a75]"
                />

                <div>

                  <div
                    className="
                      text-[10px]
                      tracking-[0.20em]
                      text-[#c99a75]
                    "
                  >
                    ACTIVATE THE CORE
                  </div>

                  <div
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-white/40
                    "
                  >
                    Click Venus to reveal
                    the technologies connected
                    to each capability.
                  </div>

                </div>

              </div>

            </div>

          </>

        )}


        {/* ================================================== */}
        {/* SELECTED MAIN SKILL */}
        {/* ================================================== */}

        {selectedGroup && !selectedSkill && (

          <>

            <div
              className="
                text-[10px]
                tracking-[0.30em]
                text-[#c99a75]
              "
            >
              ACTIVE CAPABILITY
            </div>


            <div
              className="
                mt-6
                flex
                items-center
                gap-4
              "
            >

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
                    "rgba(197,139,89,0.12)",

                  border:
                    "1px solid rgba(210,154,105,0.28)",
                }}
              >

                <selectedGroup.icon
                  size={25}
                  className="text-[#dfb184]"
                />

              </div>


              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {selectedGroup.name}
                </h2>


                <div
                  className="
                    text-xs
                    text-[#bb8d6b]
                    mt-1
                  "
                >
                  {
                    selectedGroup.subSkills.length
                  } connected elements
                </div>

              </div>

            </div>


            <div
              className="my-7 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(200,140,90,0.45), transparent)",
              }}
            />


            <div
              className="
                text-[10px]
                tracking-[0.28em]
                text-[#c99a75]
              "
            >
              ABOUT THIS CAPABILITY
            </div>


            <p
              className="
                mt-5
                text-sm
                leading-7
                text-white/55
              "
            >
              {selectedGroup.description}
            </p>


            <div className="mt-8">

              <div
                className="
                  text-[10px]
                  tracking-[0.25em]
                  text-[#c99a75]
                "
              >
                CONNECTED TECHNOLOGIES
              </div>


              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {selectedGroup.subSkills.map(
                  ({ skill }) => (

                    <button
                      key={skill.id}
                      onClick={() =>
                        selectSkill(
                          skill,
                          selectedGroup
                        )
                      }
                      className="
                        px-3
                        py-2
                        rounded-lg
                        text-xs
                        text-white/55
                        hover:text-white
                        transition-all
                      "
                      style={{
                        background:
                          "rgba(190,120,70,0.08)",

                        border:
                          "1px solid rgba(205,150,100,0.18)",
                      }}
                    >
                      {skill.name}
                    </button>

                  )
                )}

              </div>

            </div>

          </>

        )}


        {/* ================================================== */}
        {/* SELECTED SUB SKILL */}
        {/* ================================================== */}

        {selectedSkill && (

          <>

            <div
              className="
                text-[10px]
                tracking-[0.30em]
                text-[#c99a75]
              "
            >
              SELECTED SKILL
            </div>


            <div
              className="
                mt-6
                flex
                items-center
                gap-4
              "
            >

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
                    "rgba(197,139,89,0.13)",

                  border:
                    "1px solid rgba(210,154,105,0.35)",
                }}
              >

                <Cpu
                  size={25}
                  className="text-[#dfb184]"
                />

              </div>


              <div>

                <h2
                  className="
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  {selectedSkill.name}
                </h2>


                <div
                  className="
                    text-xs
                    text-[#bb8d6b]
                    mt-1
                  "
                >
                  {selectedGroup?.name}
                </div>

              </div>

            </div>


            <div
              className="my-7 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(200,140,90,0.45), transparent)",
              }}
            />


            <div
              className="
                text-[10px]
                tracking-[0.28em]
                text-[#c99a75]
              "
            >
              ABOUT THIS SKILL
            </div>


            <p
              className="
                mt-5
                text-sm
                leading-7
                text-white/55
              "
            >
              {selectedSkill.description}
            </p>


            <div className="mt-8">

              <div
                className="
                  text-[10px]
                  tracking-[0.25em]
                  text-[#c99a75]
                "
              >
                PART OF
              </div>


              <div
                className="
                  mt-3
                  rounded-xl
                  px-4
                  py-3
                "
                style={{
                  background:
                    "rgba(190,120,70,0.07)",

                  border:
                    "1px solid rgba(205,150,100,0.18)",
                }}
              >

                <span
                  className="
                    text-sm
                    text-white/60
                  "
                >
                  {selectedGroup?.name}
                </span>

              </div>

            </div>

          </>

        )}


        <div
          className="
            absolute
            bottom-7
            left-7
            right-7
          "
        >

          <div
            className="
              text-[9px]
              tracking-[0.3em]
              text-[#8e684f]
            "
          >
            VENUS • CAPABILITY SYSTEM
          </div>

        </div>

      </div>

    </div>

  );
}