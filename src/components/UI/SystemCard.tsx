export default function SystemCard() {
  return (
    <div
      className="
        absolute
        top-8
        right-8
        w-[250px]

        rounded-2xl

        bg-[#070d1c]/85
        backdrop-blur-xl

        border
        border-purple-400/20

        text-white

        p-5

        shadow-[0_15px_40px_rgba(0,0,0,0.35)]

        z-20
      "
    >

      <div className="flex items-center justify-between">

        <h3
          className="
            text-[10px]
            tracking-[0.25em]
            uppercase
            text-purple-300/60
          "
        >
          System Time
        </h3>

        <span
          className="
            w-2
            h-2
            rounded-full
            bg-emerald-400
            shadow-[0_0_10px_rgba(52,211,153,0.8)]
          "
        />

      </div>

      <p className="text-2xl mt-2 font-semibold">
        12:45:32 PM
      </p>

      <p className="text-sm text-gray-500 mt-1">
        Exploring Since: 2026
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
          Local Telemetry
        </span>

        <span className="text-cyan-400">
          Active
        </span>
      </div>

    </div>
  );
}