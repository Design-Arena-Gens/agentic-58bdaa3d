import { IdeasExplorer } from "@/components/IdeasExplorer";
import { appIdeas } from "@/lib/appIdeas";

const strategicVectors = [
  {
    title: "Hybrid Realities",
    description:
      "Spatial computing mainstreams in 2026 hardware refresh cycles. Products blending AR overlays with tangible outcomes earn outsized cultural share."
  },
  {
    title: "Civic & Cultural Demand",
    description:
      "People crave tools that reinforce belonging—whether in hyper-local neighborhoods or global diasporas. Virality comes from community impact receipts."
  },
  {
    title: "LLM-Powered Co-Creation",
    description:
      "LLMs become co-founders, turning chaotic group chats and creator fandoms into launchpads. The future belongs to teams who tame the swarm."
  }
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%)]" />
      <header className="mx-auto max-w-6xl px-6 pt-20 text-center md:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-aurora/40 bg-aurora/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-aurora/70">
          <span className="size-2 animate-pulse rounded-full bg-aurora"></span>
          Viral Launchpad · 2026
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          The 2026 Viral App Idea Atlas
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
          Six breakthrough concepts engineered for virality, defensibility, and culture-shaping impact.
          Built with bleeding-edge tech, anchored in real-world pain, primed for the feeds.
        </p>
      </header>

      <section className="mx-auto mt-16 max-w-6xl px-6">
        <div className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:grid-cols-3">
          {strategicVectors.map((vector) => (
            <div
              key={vector.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-800/60 bg-slate-950/40 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{vector.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{vector.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6">
        <div className="flex flex-col gap-6 rounded-3xl border border-aurora/20 bg-gradient-to-br from-slate-900/80 via-slate-900 to-slate-950 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-aurora/70">Strategic Lens</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Viral Momentum Scorecard
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-300 md:text-lg">
              Each concept blends high shareability loops, sticky product value, and monetization routes
              that survive beyond the hype cycle. Use the search and tag filters to map your founder
              advantage.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-200">
            <InsightMetric label="Average virality triggers per idea" value="3.0" />
            <InsightMetric label="Distinct revenue streams mapped" value="18" />
            <InsightMetric label="Launch windows aligned to" value="Peak 2025-26 trend curves" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <IdeasExplorer ideas={appIdeas} />
      </section>
    </div>
  );
}

function InsightMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 px-5 py-4">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
