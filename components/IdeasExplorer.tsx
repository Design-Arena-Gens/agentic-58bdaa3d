"use client";

import { useMemo, useState } from "react";
import type { AppIdea } from "@/lib/appIdeas";
import { IdeaCard } from "./IdeaCard";

type IdeasExplorerProps = {
  ideas: AppIdea[];
};

export function IdeasExplorer({ ideas }: IdeasExplorerProps) {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    ideas.forEach((idea) => idea.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [ideas]);

  const filteredIdeas = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return ideas.filter((idea) => {
      const matchesSearch =
        !normalizedQuery ||
        [
          idea.title,
          idea.elevatorPitch,
          idea.keyInnovation,
          idea.targetUsers,
          idea.tags.join(" "),
          idea.viralityTriggers.join(" "),
          idea.revenueStreams.join(" ")
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((tag) => idea.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [ideas, query, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  return (
    <section className="mt-16 space-y-12">
      <FilterBar
        query={query}
        onQueryChange={setQuery}
        tags={allTags}
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
        resultCount={filteredIdeas.length}
      />
      <div className="grid gap-10 lg:grid-cols-2">
        {filteredIdeas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </section>
  );
}

type FilterBarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  tags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
  resultCount: number;
};

function FilterBar({
  query,
  onQueryChange,
  tags,
  selectedTags,
  onToggleTag,
  resultCount
}: FilterBarProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-900/20 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <label htmlFor="search" className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Search the future
          </label>
          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
            <span className="text-aurora/70">🔍</span>
            <input
              id="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="AI native civic tech, holographic habit, culture passport…"
              className="flex-1 bg-transparent text-base text-slate-100 outline-none placeholder:text-slate-500 md:text-lg"
            />
          </div>
        </div>
        <div className="self-start rounded-2xl border border-aurora/30 bg-aurora/10 px-5 py-4 text-sm text-aurora/80">
          <p className="font-semibold tracking-wide uppercase text-aurora/70">Ideas surfaced</p>
          <p className="mt-1 text-3xl font-bold text-white">{resultCount}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => {
          const active = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onToggleTag(tag)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active
                  ? "bg-aurora text-slate-900 shadow-[0_20px_40px_-20px_rgba(56,189,248,0.95)]"
                  : "border border-slate-700 bg-slate-900/60 text-slate-300 hover:border-aurora/50 hover:text-white"
              }`}
            >
              #{tag}
            </button>
          );
        })}
        {selectedTags.length > 0 && (
          <button
            type="button"
            onClick={() => onToggleTag(selectedTags[selectedTags.length - 1])}
            className="rounded-full border border-ember/60 bg-ember/20 px-4 py-2 text-sm font-semibold text-ember/90 hover:bg-ember/40"
          >
            Undo last tag
          </button>
        )}
      </div>
    </div>
  );
}
