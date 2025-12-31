"use client";

import type { AppIdea } from "@/lib/appIdeas";

type IdeaCardProps = {
  idea: AppIdea;
};

export function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:shadow-[0_40px_80px_-40px_rgba(56,189,248,0.45)] md:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-aurora/80">
          {idea.timeline}
        </span>
        <div className="flex gap-2 text-xs text-slate-400">
          {idea.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800/70 px-3 py-1 font-medium text-aurora/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-white md:text-3xl">{idea.title}</h3>
      <p className="mt-3 text-base leading-relaxed text-slate-300 md:text-lg">{idea.elevatorPitch}</p>

      <div className="mt-6 grid gap-4">
        <IdeaSection title="Key Innovation" copy={idea.keyInnovation} />
        <IdeaSection title="Target Users" copy={idea.targetUsers} />
        <IdeaSection title="Go-To-Market Spark" copy={idea.launchStrategy} />
      </div>

      <dl className="mt-6 grid gap-3 text-sm text-slate-300 md:grid-cols-2 md:text-base">
        <div>
          <dt className="text-aurora/80">Revenue Streams</dt>
          <dd className="mt-1 space-y-1">
            {idea.revenueStreams.map((stream) => (
              <p key={stream} className="flex items-start gap-2">
                <span className="mt-1 size-1.5 rounded-full bg-aurora/70" />
                <span>{stream}</span>
              </p>
            ))}
          </dd>
        </div>
        <div>
          <dt className="text-aurora/80">Virality Triggers</dt>
          <dd className="mt-1 space-y-1">
            {idea.viralityTriggers.map((trigger) => (
              <p key={trigger} className="flex items-start gap-2">
                <span className="mt-1 size-1.5 rounded-full bg-ember/70" />
                <span>{trigger}</span>
              </p>
            ))}
          </dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-aurora/20 bg-aurora/10 p-4 text-sm text-aurora/90 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="font-semibold uppercase tracking-[0.25em] text-aurora/80">Defensible Moat</h4>
          <p className="mt-2 text-slate-200">{idea.moat}</p>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs uppercase text-slate-900">
          {idea.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-slate-200 px-3 py-1 font-semibold tracking-wide text-slate-900/80"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function IdeaSection({ title, copy }: { title: string; copy: string }) {
  return (
    <section>
      <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">{title}</h4>
      <p className="mt-2 text-base text-slate-200">{copy}</p>
    </section>
  );
}
