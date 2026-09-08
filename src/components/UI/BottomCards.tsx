export default function BottomCards() {
  return (
    <div
      className="
        absolute
        bottom-8
        left-[365px]
        right-8
        flex
        gap-6
      "
    >

      {/* NOW PLAYING */}
      <div
        className="
          flex-1
          relative
          overflow-hidden

          bg-gradient-to-br
          from-[#0b172c]/90
          via-[#081222]/85
          to-[#120d25]/90

          backdrop-blur-xl

          border
          border-cyan-400/20

          rounded-2xl

          p-6

          text-white

          shadow-[0_15px_40px_rgba(0,0,0,0.45),0_0_25px_rgba(56,189,248,0.05)]

          transition-all
          duration-300

          hover:border-cyan-400/45
          hover:-translate-y-1
          hover:shadow-[0_20px_45px_rgba(0,0,0,0.5),0_0_30px_rgba(56,189,248,0.1)]
        "
      >

        {/* Top accent */}
        <div
          className="
            absolute
            top-0
            left-6
            right-6
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
            opacity-60
          "
        />

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
              bg-cyan-400
              shadow-[0_0_10px_rgba(34,211,238,0.9)]
            "
          />

          <h3
            className="
              text-[10px]
              tracking-[0.25em]
              uppercase
              text-cyan-300/60
            "
          >
            Now Playing
          </h3>

        </div>


        <p
          className="
            text-xl
            mt-3
            font-medium
            tracking-wide
            text-white
          "
        >
          Interstellar Theme
        </p>


        <div
          className="
            mt-4
            flex
            items-center
            gap-1
            opacity-50
          "
        >

          <span className="w-1 h-3 bg-cyan-400 rounded-full" />
          <span className="w-1 h-5 bg-cyan-400 rounded-full" />
          <span className="w-1 h-2 bg-cyan-400 rounded-full" />
          <span className="w-1 h-4 bg-cyan-400 rounded-full" />
          <span className="w-1 h-6 bg-cyan-400 rounded-full" />
          <span className="w-1 h-3 bg-cyan-400 rounded-full" />

        </div>

      </div>


      {/* ACTIVE MISSION */}
      <div
        className="
          flex-1
          relative
          overflow-hidden

          bg-gradient-to-br
          from-[#0c182f]/90
          via-[#091322]/85
          to-[#160d29]/90

          backdrop-blur-xl

          border
          border-purple-400/20

          rounded-2xl

          p-6

          text-white

          shadow-[0_15px_40px_rgba(0,0,0,0.45),0_0_25px_rgba(139,92,246,0.05)]

          transition-all
          duration-300

          hover:border-purple-400/45
          hover:-translate-y-1
          hover:shadow-[0_20px_45px_rgba(0,0,0,0.5),0_0_30px_rgba(139,92,246,0.1)]
        "
      >

        {/* Top accent */}
        <div
          className="
            absolute
            top-0
            left-6
            right-6
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-purple-400
            to-transparent
            opacity-60
          "
        />

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
              bg-purple-400
              shadow-[0_0_10px_rgba(168,85,247,0.9)]
            "
          />

          <h3
            className="
              text-[10px]
              tracking-[0.25em]
              uppercase
              text-purple-300/60
            "
          >
            Active Mission
          </h3>

        </div>


        <p
          className="
            text-xl
            mt-3
            font-medium
            tracking-wide
            text-white
          "
        >
          Explore Project Planet
        </p>


        <div
          className="
            mt-4
            h-[2px]
            w-full
            bg-white/5
            overflow-hidden
          "
        >

          <div
            className="
              h-full
              w-[65%]
              bg-gradient-to-r
              from-purple-500
              to-cyan-400
              opacity-70
            "
          />

        </div>

      </div>


      {/* SYSTEM STATUS */}
      <div
        className="
          flex-1
          relative
          overflow-hidden

          bg-gradient-to-br
          from-[#0b192d]/90
          via-[#081322]/85
          to-[#0e1628]/90

          backdrop-blur-xl

          border
          border-emerald-400/20

          rounded-2xl

          p-6

          text-white

          shadow-[0_15px_40px_rgba(0,0,0,0.45),0_0_25px_rgba(52,211,153,0.05)]

          transition-all
          duration-300

          hover:border-emerald-400/45
          hover:-translate-y-1
          hover:shadow-[0_20px_45px_rgba(0,0,0,0.5),0_0_30px_rgba(52,211,153,0.1)]
        "
      >

        {/* Top accent */}
        <div
          className="
            absolute
            top-0
            left-6
            right-6
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-emerald-400
            to-transparent
            opacity-60
          "
        />

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
              shadow-[0_0_10px_rgba(52,211,153,0.9)]
            "
          />

          <h3
            className="
              text-[10px]
              tracking-[0.25em]
              uppercase
              text-emerald-300/60
            "
          >
            System Status
          </h3>

        </div>


        <p
          className="
            text-xl
            mt-3
            font-medium
            tracking-wide
            text-white
          "
        >
          Planets Explored 8/8
        </p>


        {/* Progress */}
        <div
          className="
            mt-4
            flex
            items-center
            gap-2
          "
        >

          <div
            className="
              flex-1
              h-1
              rounded-full
              bg-white/5
              overflow-hidden
            "
          >

            <div
              className="
                h-full
                w-full
                bg-emerald-400/70
                shadow-[0_0_8px_rgba(52,211,153,0.6)]
              "
            />

          </div>

          <span
            className="
              text-[9px]
              text-emerald-400/70
              tracking-wider
            "
          >
            100%
          </span>

        </div>

      </div>

    </div>
  );
}