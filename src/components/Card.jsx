import { motion } from "framer-motion";

export default function Card({ title, about, icon, index = 0 }) {
  return (
    <motion.article
      className="group relative rounded-2xl p-6 bg-linear-to-br from-white/4 via-white/2 to-transparent border border-white/6 backdrop-blur-md shadow-lg hover:shadow-2xl transition-shadow"
      tabIndex={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      role="region"
      aria-label={title}
    >
      <div className="flex sm:flex-row flex-col items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-tr from-cyan-400/10 via-fuchsia-400/10 to-purple-400/10 ring-1 ring-white/8 group-hover:scale-105 transform transition-transform">
          <span className="text-cyan-300 block">{icon}</span>
        </div>

        <div className="flex-1">
          <h3 className="text-lg text-left font-semibold text-white leading-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm text-left text-slate-300">{about}</p>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-slate-400">Fast · Reliable</div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute -right-6 -top-6 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity"
      >
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 10 C24 2 36 2 40 10 C44 18 36 24 30 28 C24 32 14 30 10 24 C6 18 8 12 20 10 Z"
            fill="rgba(255,182,193,0.08)"
          />
          <path
            d="M60 20 C64 12 76 12 80 20 C84 28 76 34 70 38 C64 42 54 40 50 34 C46 28 48 22 60 20 Z"
            fill="rgba(199,159,255,0.06)"
          />
        </svg>
      </div>
    </motion.article>
  );
}
