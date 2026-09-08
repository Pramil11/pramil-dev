export default function SystemCard() {
  return (
    <div
      className="
        absolute

        top-[clamp(1rem,3vh,2rem)]
        right-[clamp(1rem,3vw,2rem)]

        w-[min(250px,85vw)]

        rounded-2xl

        bg-[#070d1c]/85
        backdrop-blur-xl

        border
        border-purple-400/20

        text-white

        p-[clamp(1rem,2vw,1.25rem)]

        shadow-[0_15px_40px_rgba(0,0,0,0.35)]

        z-20
      "
    >

      <div className="flex items-center justify-between">

        <h3
          className="
            text-[clamp(8px,1vw,10px)]
            tracking-[0.25em]
            uppercase
            text-purple-300/60
          "
        >
          System Time
        </h3>


        <span
          className="
            w-[clamp(6px,1vw,8px)]
            h-[clamp(6px,1vw,8px)]
            rounded-full
            bg-emerald-400
            shadow-[0_0_10px_rgba(52,211,153,0.8)]
          "
        />

      </div>


      <p
        className="
          text-[clamp(1.2rem,3vw,1.5rem)]
          mt-2
          font-semibold
        "
      >
        12:45:32 PM
      </p>


      <p
        className="
          text-[clamp(0.7rem,1.5vw,0.875rem)]
          text-gray-500
          mt-1
        "
      >
        Exploring Since: 2026
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
          Local Telemetry
        </span>


        <span className="text-cyan-400">
          Active
        </span>


      </div>


    </div>
  );
}