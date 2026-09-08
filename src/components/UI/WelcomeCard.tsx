export default function WelcomeCard() {
  return (
    <div
      className="
        absolute
        top-8
        left-[365px]
        w-[400px]

        rounded-2xl

        bg-[#070d1c]/85
        backdrop-blur-xl

        border
        border-cyan-400/20

        text-white

        p-4

        shadow-[0_15px_40px_rgba(0,0,0,0.35)]

        z-20
      "
    >

      <div className="flex items-center gap-2 mb-3">
        <span
          className="
            w-2
            h-2
            rounded-full
            bg-cyan-400
            shadow-[0_0_8px_rgba(34,211,238,0.8)]
          "
        />

        <span
          className="
            text-[10px]
            tracking-[0.25em]
            uppercase
            text-cyan-300/60
          "
        >
          Mission Briefing
        </span>
      </div>

      <h2 className="text-xl font-bold">
        Welcome, Explorer! 👋
      </h2>

      <p className="text-gray-400 mt-3 leading-relaxed">
        The universe is vast and full of possibilities.

        <br />

        Choose a destination to begin your journey.
      </p>

      <div
        className="
          mt-4
          pt-3
          border-t
          border-white/10
          flex
          justify-between
          text-[9px]
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