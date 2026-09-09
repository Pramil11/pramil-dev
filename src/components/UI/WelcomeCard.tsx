export default function WelcomeCard() {
  return (
    <div
      className="
        relative

        w-full
        max-w-[400px]

        rounded-2xl

        bg-[#070d1c]/85
        backdrop-blur-xl

        border
        border-cyan-400/20

        text-white

        p-[clamp(0.75rem,1.5vw,1rem)]

        shadow-[0_15px_40px_rgba(0,0,0,0.35)]

        z-20
      "
    >

      <div className="flex items-center gap-2 mb-3">

        <span
          className="
            w-[clamp(6px,1vw,8px)]
            h-[clamp(6px,1vw,8px)]
            rounded-full
            bg-cyan-400
            shadow-[0_0_8px_rgba(34,211,238,0.8)]
          "
        />

        <span
          className="
            text-[clamp(8px,1vw,10px)]
            tracking-[0.25em]
            uppercase
            text-cyan-300/60
          "
        >
          Mission Briefing
        </span>

      </div>


      <h2
        className="
          text-[clamp(1rem,2vw,1.25rem)]
          font-bold
        "
      >
        Welcome, Explorer! 👋
      </h2>


      <p
        className="
          text-[clamp(0.75rem,1.5vw,1rem)]
          text-gray-400
          mt-3
          leading-relaxed
        "
      >
        The universe is vast and full of possibilities.

        <br />

        Choose a destination to begin your journey.
      </p>


      <div
        className="
          mt-[clamp(0.75rem,2vh,1rem)]

          pt-[clamp(0.5rem,1vh,0.75rem)]

          border-t
          border-white/10

          flex
          justify-between

          text-[clamp(7px,1vw,9px)]

          tracking-[0.2em]

          uppercase
        "
      >

        <span className="text-gray-500">
          Navigation System
        </span>


        <span className="text-emerald-400">
          ● Ready
        </span>


      </div>


    </div>
  );
}