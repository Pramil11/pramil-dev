import { usePlanetStore } from "../store/planetStore";
import { planetData } from "../data/planetData";

export default function PlanetPanel() {
  const planet = usePlanetStore(
    (state) => state.selectedPlanet
  );

  const close = usePlanetStore(
    (state) => state.closePlanet
  );

  if (!planet) return null;

  const data =
    planetData[
      planet.name as keyof typeof planetData
    ];

  /*
   * =====================================================
   * SUN / ABOUT ME
   * =====================================================
   */

  if (planet.name === "Sun") {
    return (
      <div className="fixed inset-0 z-50 pointer-events-none">

        {/* ================================================= */}
        {/* TOP LEFT - ABOUT ME */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-auto
            absolute
            left-8
            top-8
            w-[500px]
            h-[400px]
            rounded-[24px]
            p-6
            text-white
          "
          style={{
            background:
              "linear-gradient(145deg, rgba(20,16,12,0.90), rgba(5,6,10,0.82))",

            border:
              "1px solid rgba(255,190,70,0.30)",

            backdropFilter:
              "blur(18px)",

            WebkitBackdropFilter:
              "blur(18px)",

            boxShadow:
              "0 20px 60px rgba(0,0,0,0.45), 0 0 30px rgba(255,180,50,0.08)",
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
                "linear-gradient(90deg, transparent, #fbbf24, transparent)",
              boxShadow:
                "0 0 12px rgba(251,191,36,0.7)",
            }}
          />

          <div
            className="
              text-[10px]
              tracking-[0.3em]
              uppercase
              text-amber-400
            "
          >
            ● SUN / CORE-01
          </div>

          <div className="mt-5">

            <h1 className="text-3xl font-bold">
              Pramil Shrestha
            </h1>

            <p
              className="
                mt-2
                text-xs
                tracking-[0.18em]
                uppercase
                text-amber-300/80
              "
            >
              AI • SOFTWARE • INTELLIGENT SYSTEMS
            </p>

          </div>

          <div className="mt-3 h-[210px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-400/30 scrollbar-track-transparent">

            <p
                className="
                text-sm
                leading-6
                text-white/65
                "
            >
                I am a Computer Science graduate passionate about
                building intelligent systems that solve real-world
                problems and turn ideas into useful applications.
            </p>

            <p
                className="
                mt-4
                text-sm
                leading-6
                text-white/60
                "
            >
                My interests sit at the intersection of Artificial
                Intelligence, software engineering, intelligent agents,
                and data-driven systems. I enjoy understanding how
                things work, experimenting with new ideas, and turning
                what I learn into something people can actually use.
            </p>

            <p
                className="
                mt-4
                text-sm
                leading-6
                text-white/60
                "
            >
                I am especially interested in systems that can reason,
                adapt, automate repetitive work, and make technology
                more useful for people.
            </p>

            </div>

          <button
            className="
              mt-3    
              rounded-xl
              px-6
              py-2.5
              text-xs
              font-semibold
              text-black
              transition
              hover:scale-[1.03]
            "
            style={{
              background:
                "linear-gradient(135deg, #fbbf24, #f59e0b)",
            }}
          >
            VIEW RESUME →
          </button>

        </div>


        {/* ================================================= */}
        {/* TOP RIGHT - ROOTS / WHERE I BEGIN */}
        {/* ================================================= */}

        <div
        className="
            pointer-events-auto
            absolute
            right-8
            top-8
            w-[500px]
            h-[400px]
            rounded-[24px]
            p-6
            text-white
            overflow-hidden
        "
        style={{
            background:
            "linear-gradient(145deg, rgba(20,16,12,0.90), rgba(5,6,10,0.82))",

            border:
            "1px solid rgba(255,190,70,0.30)",

            backdropFilter:
            "blur(18px)",

            WebkitBackdropFilter:
            "blur(18px)",

            boxShadow:
            "0 20px 60px rgba(0,0,0,0.45), 0 0 30px rgba(255,180,50,0.08)",
        }}
        >

        {/* TOP GLOW */}

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
                "linear-gradient(90deg, transparent, #fbbf24, transparent)",

            boxShadow:
                "0 0 12px rgba(251,191,36,0.7)",
            }}
        />


        {/* HEADER */}

        <div
            className="
            text-[10px]
            tracking-[0.3em]
            uppercase
            text-amber-400
            "
        >
            ● ROOTS / WHERE I BEGIN
        </div>


        <div className="mt-5">

            <h1 className="text-3xl font-bold">
            From the Himalayas
            </h1>

            <p className="mt-2 text-sm text-white/45">
            Where I come from has shaped how I see the world.
            </p>

        </div>


        {/* DIVIDER */}

        <div
            className="
            mt-5
            h-px
            bg-gradient-to-r
            from-amber-400/40
            to-transparent
            "
        />


        {/* SCROLLABLE CONTENT */}

        <div
            className="
            mt-4
            h-[230px]
            overflow-y-auto
            pr-3
            scrollbar-thin
            scrollbar-thumb-amber-400/30
            scrollbar-track-transparent
            "
        >

            {/* ORIGIN */}

            <p
            className="
                text-sm
                leading-6
                text-white/65
            "
            >
            I come from{" "}
            <span className="text-amber-300">
                Kushma, Parbat, Nepal
            </span>
            , a place surrounded by hills, rivers, deep valleys,
            and the Himalayan landscape.
            </p>


            {/* NEPAL */}

            <p
            className="
                mt-4
                text-sm
                leading-6
                text-white/60
            "
            >
            Growing up in Nepal gave me an appreciation for both
            simplicity and resilience. The landscape is beautiful,
            but life in the hills also teaches you to adapt, be
            patient, and find your own way forward.
            </p>


            {/* PERSONALITY */}

            <p
            className="
                mt-4
                text-sm
                leading-6
                text-white/60
            "
            >
            Those surroundings shaped part of how I approach
            problems today. I like exploring, learning independently,
            and staying curious about what lies beyond what I
            already know.
            </p>


            {/* KUSHMA CARD */}

            <div
            className="
                mt-5
                rounded-xl
                border
                border-amber-300/10
                bg-amber-300/[0.04]
                px-4
                py-3
            "
            >

            <div
                className="
                text-[9px]
                tracking-[0.25em]
                uppercase
                text-amber-400/80
                "
            >
                KUSHMA / PARBAT
            </div>

            <p
                className="
                mt-2
                text-[11px]
                leading-5
                text-white/50
                "
            >
                A mountain town in western Nepal surrounded by
                dramatic hills, rivers, valleys and the wider
                Himalayan landscape.
            </p>

            </div>


            {/* WHAT IT TAUGHT ME */}

            <div
            className="
                mt-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                px-4
                py-3
            "
            >

            <div
                className="
                text-[9px]
                tracking-[0.25em]
                uppercase
                text-amber-400/80
                "
            >
                WHAT IT TAUGHT ME
            </div>


            <div className="mt-3 grid grid-cols-3 gap-2">

                <div
                className="
                    rounded-lg
                    border
                    border-white/10
                    px-2
                    py-2
                    text-center
                "
                >
                <div className="text-xs text-amber-300">
                    Adapt
                </div>

                <div className="mt-1 text-[9px] text-white/35">
                    Find a way
                </div>
                </div>


                <div
                className="
                    rounded-lg
                    border
                    border-white/10
                    px-2
                    py-2
                    text-center
                "
                >
                <div className="text-xs text-amber-300">
                    Explore
                </div>

                <div className="mt-1 text-[9px] text-white/35">
                    Stay curious
                </div>
                </div>


                <div
                className="
                    rounded-lg
                    border
                    border-white/10
                    px-2
                    py-2
                    text-center
                "
                >
                <div className="text-xs text-amber-300">
                    Persist
                </div>

                <div className="mt-1 text-[9px] text-white/35">
                    Keep moving
                </div>
                </div>

            </div>

            </div>


            {/* CLOSING */}

            <div
            className="
                mt-4
                pb-2
                text-center
                text-[9px]
                tracking-[0.2em]
                uppercase
                text-white/25
            "
            >
            ROOTED IN THE HILLS • CURIOUS ABOUT THE WORLD
            </div>

        </div>

        </div>


        {/* ================================================= */}
{/* BOTTOM LEFT - BEYOND THE CODE */}
{/* ================================================= */}

<div
  className="
    pointer-events-auto
    absolute
    left-8
    bottom-8
    w-[500px]
    h-[400px]
    rounded-[24px]
    p-5
    text-white
    overflow-hidden
  "
  style={{
    background:
      "linear-gradient(145deg, rgba(20,16,12,0.90), rgba(5,6,10,0.82))",

    border:
      "1px solid rgba(255,190,70,0.30)",

    backdropFilter:
      "blur(18px)",

    WebkitBackdropFilter:
      "blur(18px)",

    boxShadow:
      "0 20px 60px rgba(0,0,0,0.45), 0 0 30px rgba(255,180,50,0.08)",
  }}
>

  {/* TOP GLOW */}

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
        "linear-gradient(90deg, transparent, #fbbf24, transparent)",

      boxShadow:
        "0 0 12px rgba(251,191,36,0.7)",
    }}
  />


  {/* HEADER */}

  <div
    className="
      text-[10px]
      tracking-[0.3em]
      uppercase
      text-amber-400
    "
  >
    ● BEYOND THE CODE
  </div>


  <div className="mt-5">

    <h1 className="text-2xl font-bold">
      What I Love Outside Technology
    </h1>

    <p
      className="
        mt-2
        text-sm
        text-white/45
      "
    >
      The things I enjoy when I step away from the screen.
    </p>

  </div>


  {/* DIVIDER */}

  <div
    className="
      mt-5
      h-px
      bg-gradient-to-r
      from-amber-400/40
      to-transparent
    "
  />


  {/* ================================================= */}
  {/* SCROLLING CONTENT */}
  {/* ================================================= */}

  <div
  className="
    absolute
    left-6
    right-6
    top-[150px]
    bottom-5
    overflow-y-auto
    pr-3
    scrollbar-thin
    scrollbar-thumb-amber-400/30
    scrollbar-track-transparent
  "
>

    {/* HOBBIES */}

    <div className="grid grid-cols-2 gap-2.5">


      {/* CHESS */}

      <div
        className="
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          p-2.5
          transition
          hover:border-amber-300/30
          hover:bg-amber-300/[0.04]
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              w-11
              h-11
              rounded-xl
              flex
              items-center
              justify-center
              bg-amber-300/10
              border
              border-amber-300/20
              text-xl
            "
          >
            ♟
          </div>

          <div>

            <h3 className="font-semibold">
              Chess
            </h3>

            <p className="text-[10px] text-white/40">
              Strategy & thinking
            </p>

          </div>

        </div>

        <p className="mt-2 text-[10px] leading-4 text-white/45">
          Strategy, patience, and thinking several moves ahead.
        </p>

      </div>


      {/* CRICKET */}

      <div
        className="
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          p-2.5
          transition
          hover:border-amber-300/30
          hover:bg-amber-300/[0.04]
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              w-11
              h-11
              rounded-xl
              flex
              items-center
              justify-center
              bg-amber-300/10
              border
              border-amber-300/20
              text-xl
            "
          >
            🏏
          </div>

          <div>

            <h3 className="font-semibold">
              Cricket
            </h3>

            <p className="text-[10px] text-white/40">
              Competition
            </p>

          </div>

        </div>

        <p className="mt-2 text-[10px] leading-4 text-white/45">
          Playing, watching matches, and enjoying the competition.
        </p>

      </div>


      {/* VOLLEYBALL */}

      <div
        className="
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          p-2.5
          transition
          hover:border-amber-300/30
          hover:bg-amber-300/[0.04]
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              w-11
              h-11
              rounded-xl
              flex
              items-center
              justify-center
              bg-amber-300/10
              border
              border-amber-300/20
              text-xl
            "
          >
            🏐
          </div>

          <div>

            <h3 className="font-semibold">
              Volleyball
            </h3>

            <p className="text-[10px] text-white/40">
              Teamwork & energy
            </p>

          </div>

        </div>

        <p className="mt-2 text-[10px] leading-4 text-white/45">
          Fast-paced games, teamwork, and the energy of playing.
        </p>

      </div>


      {/* ANIME */}

      <div
        className="
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          p-2.5
          transition
          hover:border-amber-300/30
          hover:bg-amber-300/[0.04]
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              w-11
              h-11
              rounded-xl
              flex
              items-center
              justify-center
              bg-amber-300/10
              border
              border-amber-300/20
              text-xl
            "
          >
            ✦
          </div>

          <div>

            <h3 className="font-semibold">
              Anime
            </h3>

            <p className="text-[10px] text-white/40">
              Stories & imagination
            </p>

          </div>

        </div>

        <p className="mt-2 text-[10px] leading-4 text-white/45">
          Stories, characters, creativity, and worlds beyond reality.
        </p>

      </div>

    </div>


    {/* ================================================= */}
    {/* WHEN I'M NOT BUILDING */}
    {/* ================================================= */}

    <div
      className="
        mt-3
        rounded-xl
        border
        border-amber-300/10
        bg-amber-300/[0.04]
        px-4
        py-2.5
      "
    >

      <div
        className="
          text-[10px]
          tracking-[0.25em]
          uppercase
          text-amber-400/80
        "
      >
        WHEN I'M NOT BUILDING
      </div>

      <p
        className="
          mt-1.5
          text-[11px]
          leading-4
          text-white/50
        "
      >
        You will probably find me playing a game,
        watching cricket, following an anime,
        playing chess, or simply spending time
        with friends and family.
      </p>

    </div>


    {/* ================================================= */}
    {/* A LITTLE MORE ABOUT ME */}
    {/* ================================================= */}

    <div
      className="
        mt-3
        rounded-xl
        border
        border-white/10
        bg-white/[0.02]
        px-4
        py-3
      "
    >

      <div
        className="
          text-[10px]
          tracking-[0.25em]
          uppercase
          text-amber-400/80
        "
      >
        OFF THE SCREEN
      </div>

      <p
        className="
          mt-1.5
          text-[11px]
          leading-4
          text-white/50
        "
      >
        I like having things that take me away from
        code and into completely different worlds.
        Sometimes that means competition, sometimes
        stories, and sometimes just enjoying the moment.
      </p>

    </div>


    {/* ================================================= */}
    {/* SMALL PERSONAL LINE */}
    {/* ================================================= */}

    <div
      className="
        mt-3
        pb-2
        text-center
        text-[9px]
        tracking-[0.2em]
        uppercase
        text-white/25
      "
    >
      DIFFERENT INTERESTS • SAME CURIOSITY
    </div>

  </div>

</div>

        {/* ================================================= */}
{/* BOTTOM RIGHT - ANOTHER PATH */}
{/* ================================================= */}

<div
  className="
    pointer-events-auto
    absolute
    right-8
    bottom-8
    w-[500px]
    h-[400px]
    rounded-[24px]
    p-6
    text-white
    overflow-hidden
  "
  style={{
    background:
      "linear-gradient(145deg, rgba(20,16,12,0.90), rgba(5,6,10,0.82))",

    border:
      "1px solid rgba(255,190,70,0.30)",

    backdropFilter:
      "blur(18px)",

    WebkitBackdropFilter:
      "blur(18px)",

    boxShadow:
      "0 20px 60px rgba(0,0,0,0.45), 0 0 30px rgba(255,180,50,0.08)",
  }}
>

  {/* TOP GLOW */}

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
        "linear-gradient(90deg, transparent, #fbbf24, transparent)",

      boxShadow:
        "0 0 12px rgba(251,191,36,0.7)",
    }}
  />


  {/* LABEL */}

  <div
    className="
      text-[10px]
      tracking-[0.3em]
      uppercase
      text-amber-400
    "
  >
    ● ANOTHER PATH / WHAT IF?
  </div>


  {/* HEADER */}

  <div className="mt-5">

    <h1 className="text-3xl font-bold">
      If I Chose Differently
    </h1>

    <p className="mt-2 text-sm text-white/45">
       If and only if I choose other profession.
    </p>

  </div>


  {/* DIVIDER */}

  <div
    className="
      mt-5
      h-px
      bg-gradient-to-r
      from-amber-400/40
      to-transparent
    "
  />


  {/* SCROLLABLE CONTENT */}

  <div
    className="
        absolute
        left-6
        right-6
        top-[150px]
        bottom-5
        overflow-y-auto
        pr-3
        scrollbar-thin
        scrollbar-thumb-amber-400/30
        scrollbar-track-transparent
    "
    >

    <p
      className="
        text-sm
        leading-6
        text-white/60
      "
    >
      If I were not building software or working in
      Artificial Intelligence, there are two paths I can
      genuinely imagine myself following. Both come from
      the same thing that has always driven me: curiosity.
    </p>


    {/* ASTROPHYSICS */}

    <div
      className="
        mt-4
        rounded-xl
        border
        border-amber-300/10
        bg-amber-300/[0.04]
        px-4
        py-3
        transition
        hover:bg-amber-300/[0.08]
      "
    >

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            border-amber-300/20
            bg-amber-300/[0.06]
            text-xl
          "
        >
          🌌
        </div>

        <div>

          <h3 className="text-sm font-semibold text-amber-300">
            Astrophysicist
          </h3>

          <p className="mt-1 text-[10px] text-white/40">
            The curiosity that started early
          </p>

        </div>

      </div>

      <p className="mt-3 text-xs leading-5 text-white/50">
        When I was younger, I always wanted to become an
        astrophysicist. I was fascinated by the universe and
        constantly curious about how it works, from stars and
        planets to black holes and neutron stars. The idea
        that there is still so much we do not understand
        about the universe fascinated me.
      </p>

    </div>


    {/* PSYCHOLOGY */}

    <div
      className="
        mt-3
        rounded-xl
        border
        border-white/10
        bg-white/[0.02]
        px-4
        py-3
        transition
        hover:bg-white/[0.05]
      "
    >

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            border-amber-300/20
            bg-amber-300/[0.04]
            text-xl
          "
        >
          🧠
        </div>

        <div>

          <h3 className="text-sm font-semibold text-amber-300">
            Psychologist
          </h3>

          <p className="mt-1 text-[10px] text-white/40">
            A curiosity that developed over time
          </p>

        </div>

      </div>

      <p className="mt-3 text-xs leading-5 text-white/50">
        As I grew older, my curiosity expanded from
        understanding the universe to understanding people.
        I became interested in human psychology, how people
        think and behave, how experiences shape us, and why
        people see the same world in such different ways.
      </p>

    </div>


    {/* CONNECTION */}

    <div
      className="
        mt-3
        rounded-xl
        border
        border-amber-300/10
        bg-gradient-to-r
        from-amber-300/[0.05]
        to-transparent
        px-4
        py-3
      "
    >

      <div
        className="
          text-[9px]
          tracking-[0.25em]
          uppercase
          text-amber-400/80
        "
      >
        TWO WORLDS • ONE CURIOSITY
      </div>

      <p
        className="
          mt-2
          text-xs
          leading-5
          text-white/45
        "
      >
        One asks how the universe works. The other asks how
        the human mind works. Both remind me that there is
        always something more to discover.
      </p>

    </div>


    <div
      className="
        mt-4
        pb-3
        text-center
        text-[9px]
        tracking-[0.2em]
        uppercase
        text-white/25
      "
    >
      LOOKING UP • LOOKING WITHIN
    </div>

  </div>

</div>

      </div>
    );
  }


  /*
   * =====================================================
   * OTHER PLANETS
   * Keep your existing panel for now.
   * =====================================================
   */

  return (
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
        z-50
      "
      style={{
        background:
          "linear-gradient(145deg, rgba(20,20,40,0.85), rgba(0,0,0,0.75))",

        backdropFilter:
          "blur(25px)",

        border:
          "1px solid rgba(255,255,255,0.2)",

        boxShadow:
          "0 0 50px rgba(120,80,255,0.25)",
      }}
    >

      <button
        onClick={close}
        className="
          absolute
          right-5
          top-5
          text-xl
          opacity-70
          hover:opacity-100
          z-10
        "
      >
        ✕
      </button>


      <div className="p-8">

        <h1 className="text-5xl font-bold">
          {data.icon} {data.title}
        </h1>

        <h2 className="text-xl mt-2 text-yellow-300">
          {data.subtitle}
        </h2>

        <div className="mt-8 h-px bg-white/20" />

        <p className="mt-6 text-gray-300 leading-relaxed">
          {data.description}
        </p>

        <div className="mt-8 space-y-3">

          {data.sections.map((item) => (
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
          ))}

        </div>

      </div>

    </div>
  );
}