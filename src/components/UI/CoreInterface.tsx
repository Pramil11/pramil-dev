import { useState } from "react";

type CoreSection =
  | "about"
  | "building"
  | "interests"
  | "fun"
  | null;

export default function CoreInterface() {
  const [active, setActive] = useState(false);
  const [section, setSection] = useState<CoreSection>(null);

  const openCore = () => {
    setActive(true);
    setSection(null);
  };

  const closeCore = () => {
    setSection(null);
    setActive(false);
  };

  return (
    <div
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        z-20
        pointer-events-none
      "
    >

      {/* ================================================= */}
      {/* CORE SYSTEM */}
      {/* ================================================= */}

      <div
        className={`
          relative
          w-[300px]
          h-[300px]
          flex
          items-center
          justify-center
          transition-all
          duration-700
          ${active ? "scale-110" : "scale-100"}
        `}
      >

        {/* ================================================= */}
        {/* OUTER RING */}
        {/* ================================================= */}

        <div
          className={`
            absolute
            inset-0
            rounded-full
            border
            border-amber-300/30
            ${active ? "animate-spin" : ""}
          `}
          style={{
            animationDuration: "18s",
          }}
        />

        {/* ================================================= */}
        {/* SECOND RING */}
        {/* ================================================= */}

        <div
          className={`
            absolute
            inset-[18px]
            rounded-full
            border
            border-amber-400/20
            border-dashed
            ${active ? "animate-spin" : ""}
          `}
          style={{
            animationDuration: "12s",
            animationDirection: "reverse",
          }}
        />

        {/* ================================================= */}
        {/* THIRD RING */}
        {/* ================================================= */}

        <div
          className="
            absolute
            inset-[38px]
            rounded-full
            border
            border-white/10
          "
        />

        {/* ================================================= */}
        {/* ORBITING DATA POINTS */}
        {/* ================================================= */}

        <div
          className="
            absolute
            top-[18px]
            left-1/2
            -translate-x-1/2
            w-2
            h-2
            rounded-full
            bg-amber-300
            shadow-[0_0_12px_rgba(251,191,36,0.9)]
          "
        />

        <div
          className="
            absolute
            bottom-[22px]
            left-[35px]
            w-1.5
            h-1.5
            rounded-full
            bg-cyan-300
            shadow-[0_0_10px_rgba(103,232,249,0.8)]
          "
        />

        <div
          className="
            absolute
            top-[82px]
            right-[15px]
            w-1.5
            h-1.5
            rounded-full
            bg-purple-300
            shadow-[0_0_10px_rgba(196,181,253,0.8)]
          "
        />

        {/* ================================================= */}
        {/* MAIN CORE */}
        {/* ================================================= */}

        {!active && (

          <button
            onClick={openCore}
            className="
              pointer-events-auto
              relative
              w-[150px]
              h-[150px]
              rounded-full
              flex
              flex-col
              items-center
              justify-center
              text-center
              transition-all
              duration-500
              hover:scale-105
              cursor-pointer
            "
            style={{
              background:
                "radial-gradient(circle, rgba(255,210,80,0.22), rgba(8,8,12,0.82) 68%)",

              border:
                "1px solid rgba(255,190,60,0.45)",

              boxShadow:
                "0 0 25px rgba(255,190,50,0.18), inset 0 0 25px rgba(255,190,50,0.08)",
            }}
          >

            <div
              className="
                text-amber-300
                text-2xl
                mb-1
              "
            >
              ✦
            </div>

            <div
              className="
                text-[11px]
                tracking-[0.28em]
                text-amber-300
                font-semibold
              "
            >
              PRAMIL
            </div>

            <div
              className="
                text-[9px]
                tracking-[0.32em]
                text-white/50
                mt-1
              "
            >
              CORE
            </div>

            <div
              className="
                mt-3
                text-[8px]
                tracking-[0.2em]
                uppercase
                text-white/40
              "
            >
              ENTER CORE
            </div>

          </button>

        )}

        {/* ================================================= */}
        {/* ACTIVE CORE */}
        {/* ================================================= */}

        {active && !section && (

          <div
            onClick={closeCore}
            className="
              pointer-events-auto
              relative
              w-[190px]
              h-[190px]
              rounded-full
              flex
              flex-col
              items-center
              justify-center
              text-center
              cursor-pointer
              hover:scale-105
              transition-all
              duration-300
            "
            style={{
              background:
                "radial-gradient(circle, rgba(255,210,80,0.28), rgba(8,8,12,0.94) 65%)",

              border:
                "1px solid rgba(255,190,60,0.55)",

              boxShadow:
                "0 0 45px rgba(255,190,50,0.45), inset 0 0 35px rgba(255,190,50,0.15)",
            }}
          >

            <div className="text-amber-300 text-2xl mb-2">
              ✦
            </div>

            <div
              className="
                text-[10px]
                tracking-[0.28em]
                text-amber-300
                font-semibold
              "
            >
              PRAMIL
            </div>

            <div
              className="
                text-[8px]
                tracking-[0.35em]
                text-white/40
                mt-1
              "
            >
              CORE ACTIVE
            </div>

            {/* ABOUT */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSection("about");
              }}
              className="
                absolute
                -top-5
                left-1/2
                -translate-x-1/2
                w-12
                h-12
                rounded-full
                bg-black/80
                border
                border-amber-300/30
                text-[8px]
                text-amber-300
                hover:bg-amber-300/10
                transition
              "
            >
              MY WAY
            </button>

            {/* BUILDING */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSection("building");
              }}
              className="
                absolute
                -bottom-5
                left-1/2
                -translate-x-1/2
                w-12
                h-12
                rounded-full
                bg-black/80
                border
                border-cyan-300/30
                text-[7px]
                text-cyan-300
                hover:bg-cyan-300/10
                transition
              "
            >
              FAVOURITES
            </button>

            {/* INTERESTS */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSection("interests");
              }}
              className="
                absolute
                left-[-18px]
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-black/80
                border
                border-purple-300/30
                text-[7px]
                text-purple-300
                hover:bg-purple-300/10
                transition
              "
            >
              VALUES
            </button>

            {/* FUN */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSection("fun");
              }}
              className="
                absolute
                right-[-18px]
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-black/80
                border
                border-emerald-300/30
                text-[7px]
                text-emerald-300
                hover:bg-emerald-300/10
                transition
              "
            >
              FUN FACT
            </button>

          </div>

        )}

        {/* ================================================= */}
        {/* INFORMATION CENTER */}
        {/* ================================================= */}

        {active && section && (

          <div
            className="
              pointer-events-auto
              relative
              w-[240px]
              min-h-[190px]
              rounded-3xl
              p-5
              text-white
            "
            style={{
              background:
                "linear-gradient(145deg, rgba(18,16,10,0.96), rgba(5,6,10,0.95))",

              border:
                "1px solid rgba(255,190,60,0.35)",

              backdropFilter:
                "blur(18px)",

              boxShadow:
                "0 20px 50px rgba(0,0,0,0.55), 0 0 30px rgba(255,190,50,0.12)",
            }}
          >

            {section === "about" && (
                <>
                    <div className="text-[8px] tracking-[0.3em] text-amber-300">
                    CORE / MY WAY
                    </div>

                    <h2 className="mt-3 text-lg font-semibold">
                    Keep Moving Forward
                    </h2>

                    <p className="mt-3 text-xs leading-5 text-white/60">
                    My way of living is simple: try, learn, try again,
                    and keep moving forward.
                    </p>

                    <p className="mt-3 text-xs leading-5 text-white/50">
                    Not everything works the first time. I believe in
                    working hard, learning from mistakes, and continuing
                    even when the path becomes difficult.
                    </p>

                    <div
                    className="
                        mt-4
                        rounded-xl
                        border
                        border-amber-300/10
                        bg-amber-300/5
                        p-3
                    "
                    >
                    <div className="text-[9px] text-amber-300">
                        MY WAY
                    </div>

                    <div className="mt-2 text-xs text-white/70">
                        Try again.
                        <br />
                        Keep moving.
                        <br />
                        Work hard.
                    </div>
                    </div>
                </>
                )}

            {/* BUILDING */}

            {section === "building" && (
                <>
                    <div className="text-[8px] tracking-[0.3em] text-cyan-300">
                    CORE / FAVOURITES
                    </div>

                    <h2 className="mt-3 text-lg font-semibold">
                    A Few of My Favourites
                    </h2>

                    <p className="mt-3 text-xs leading-5 text-white/60">
                    A few things that can easily pull me away from
                    the screen and into my own world.
                    </p>

                    <div className="mt-4 space-y-2">

                    <div className="rounded-xl border border-cyan-300/10 bg-cyan-300/5 p-3">
                        <div className="text-lg">
                        🥟
                        </div>

                        <div className="mt-1 text-[10px] text-cyan-300">
                        FAVORITE FOOD
                        </div>

                        <div className="mt-1 text-sm text-white/80">
                        Momo
                        </div>
                    </div>


                    <div className="rounded-xl border border-cyan-300/10 bg-cyan-300/5 p-3">
                        <div className="text-lg">
                        ⚔️
                        </div>

                        <div className="mt-1 text-[10px] text-cyan-300">
                        FAVORITE ANIME
                        </div>

                        <div className="mt-1 text-sm text-white/80">
                        Attack on Titan
                        </div>
                    </div>


                    <div className="rounded-xl border border-cyan-300/10 bg-cyan-300/5 p-3">
                        <div className="text-lg">
                        🏏
                        </div>

                        <div className="mt-1 text-[10px] text-cyan-300">
                        FAVORITE SPORT
                        </div>

                        <div className="mt-1 text-sm text-white/80">
                        Cricket
                        </div>
                    </div>

                    </div>
                </>
                )}

            {/* INTERESTS */}

            {section === "interests" && (
                <>
                    <div className="text-[8px] tracking-[0.3em] text-purple-300">
                    CORE / VALUES
                    </div>

                    <h2 className="mt-3 text-lg font-semibold">
                    What I Believe
                    </h2>

                    <p className="mt-3 text-xs leading-5 text-white/60">
                    A few principles that shape how I see people,
                    learning, work, and the world around me.
                    </p>

                    <div className="mt-4 space-y-2">

                    <div className="rounded-lg border border-purple-300/10 bg-purple-300/5 p-2.5">
                        <div className="text-[10px] text-purple-300 font-semibold">
                        UNITY
                        </div>
                        <div className="mt-1 text-[9px] text-white/50">
                        Different people and ideas can become stronger
                        when they come together.
                        </div>
                    </div>

                    <div className="rounded-lg border border-purple-300/10 bg-purple-300/5 p-2.5">
                        <div className="text-[10px] text-purple-300 font-semibold">
                        SIMPLICITY
                        </div>
                        <div className="mt-1 text-[9px] text-white/50">
                        Keep things clear, understand the basics,
                        and avoid unnecessary complexity.
                        </div>
                    </div>

                    <div className="rounded-lg border border-purple-300/10 bg-purple-300/5 p-2.5">
                        <div className="text-[10px] text-purple-300 font-semibold">
                        PATIENCE
                        </div>
                        <div className="mt-1 text-[9px] text-white/50">
                        Good things take time. Keep learning and
                        trust the process.
                        </div>
                    </div>

                    <div className="rounded-lg border border-purple-300/10 bg-purple-300/5 p-2.5">
                        <div className="text-[10px] text-purple-300 font-semibold">
                        HARMONY WITH NATURE
                        </div>
                        <div className="mt-1 text-[9px] text-white/50">
                        Progress should exist alongside nature,
                        not against it.
                        </div>
                    </div>

                    </div>
                </>
                )}

            {/* FUN FACT */}

            {section === "fun" && (
                <>
                    <div className="text-[8px] tracking-[0.3em] text-emerald-300">
                    CORE / FUN FACT
                    </div>

                    <h2 className="mt-3 text-lg font-semibold">
                    One Episode Is Never One Episode
                    </h2>

                    <p className="mt-3 text-xs leading-5 text-white/60">
                    If I start watching a new anime and really get into
                    it, stopping halfway is not really an option.
                    </p>

                    <div
                    className="
                        mt-4
                        rounded-xl
                        border
                        border-emerald-300/10
                        bg-emerald-300/5
                        p-3
                    "
                    >
                    <div className="text-[9px] text-emerald-300">
                        FUN FACT
                    </div>

                    <div className="mt-2 text-xs leading-5 text-white/70">
                        I will keep watching until I finish it.
                        <br />
                        One more episode?
                        <br />
                        Probably another five. 😄
                    </div>
                    </div>

                    <div className="mt-3 text-[9px] text-white/35">
                    JUST ONE MORE EPISODE... ✦
                    </div>
                </>
                )}

            {/* BACK */}

            <button
              onClick={() => setSection(null)}
              className="
                mt-5
                text-[9px]
                tracking-[0.15em]
                text-amber-300/70
                hover:text-amber-300
                transition
              "
            >
              ← BACK TO CORE
            </button>

          </div>

        )}

      </div>


      {/* ================================================= */}
      {/* CORE LABEL */}
      {/* ================================================= */}

      {!section && (
        <div
          className="
            absolute
            top-[calc(100%+10px)]
            left-1/2
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
              text-white/40
            "
          >
            CENTRAL INTELLIGENCE
          </div>

          <div
            className="
              mt-1
              text-[10px]
              tracking-[0.2em]
              text-amber-300/70
            "
          >
            AI • SOFTWARE • INTELLIGENT SYSTEM
          </div>

        </div>
      )}


      {/* ================================================= */}
      {/* CLOSE CORE */}
      {/* ================================================= */}
        
    </div>
  );
}