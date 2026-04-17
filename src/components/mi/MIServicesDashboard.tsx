import { useState } from "react";
import { Bot, GitBranch, TrendingUp } from "lucide-react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type TabId = "agents" | "workflows" | "roi";

const tabBtnInactive =
  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition-all hover:bg-white/5 hover:text-white";
const tabBtnActive =
  "flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition-all";

export function MIServicesDashboard() {
  const [tab, setTab] = useState<TabId>("agents");

  return (
    <section className="scroll-mt-20 border-y border-white/5 bg-transparent" id="services">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 text-3xl font-medium tracking-tight text-white">Full visibility across the ecosystem</h2>
            <p className="max-w-md text-white">
              Three brands, one thesis: professional infrastructure for people building online. Monitor talent routing, monetization
              workflows, and coaching systems in one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-1 rounded-xl border border-white/5 bg-white/5 p-1.5">
            <button type="button" className={tab === "agents" ? tabBtnActive : tabBtnInactive} onClick={() => setTab("agents")}>
              <Bot className="h-4 w-4" strokeWidth={2} />
              Active Agents
            </button>
            <button
              type="button"
              className={tab === "workflows" ? tabBtnActive : tabBtnInactive}
              onClick={() => setTab("workflows")}
            >
              <GitBranch className="h-4 w-4" strokeWidth={2} />
              Workflows
            </button>
            <button type="button" className={tab === "roi" ? tabBtnActive : tabBtnInactive} onClick={() => setTab("roi")}>
              <TrendingUp className="h-4 w-4" strokeWidth={2} />
              ROI Metrics
            </button>
          </div>
        </div>

        <div className="grid min-h-[500px] grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Left: Copilot */}
          <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-lg lg:col-span-1">
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] p-4">
              <span className="flex items-center gap-2 text-sm font-medium text-white">
                <Icon icon="lucide:sparkles" width={16} />
                Digidle Gateway
              </span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[10px] text-gray-400">Online</span>
              </div>
            </div>
            <div className="mi-scrollbar flex-1 space-y-4 overflow-y-auto p-4 font-mono text-xs">
              <div className="my-2 text-center text-[10px] uppercase tracking-widest text-gray-600">Activity Log</div>
              <div className="flex gap-2">
                <div className="text-gray-500">10:42</div>
                <div className="text-emerald-300">New specialist bid received on Network.</div>
              </div>
              <div className="flex gap-2">
                <div className="text-gray-500">10:43</div>
                <div className="text-gray-300">Creator campaign metrics synced (MSA).</div>
              </div>
              <div className="flex gap-2">
                <div className="text-gray-500">10:44</div>
                <div className="text-gray-300">AI programming batch queued (Modern Athlete).</div>
              </div>
              <div className="flex gap-2">
                <div className="text-gray-500">10:45</div>
                <div className="text-emerald-300">Discord community ping delivered.</div>
              </div>
              <div className="mt-4 border-t border-white/5 pt-4">
                <div className="mb-2 flex items-center gap-2 text-gray-400">
                  <svg className="animate-spin" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Optimizing routing rules…
                </div>
              </div>
            </div>
          </div>

          {/* Right views */}
          <div className="relative flex h-full flex-col gap-4 lg:col-span-3">
            <div className={cn("h-full flex-col gap-4", tab === "agents" ? "flex" : "hidden")}>
              <div className="relative flex-1 overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f] bg-grid p-6 shadow-2xl">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="group rounded-lg border border-white/5 bg-[#111] p-4 transition-all hover:border-emerald-500/30">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-emerald-500/10 text-emerald-400">
                        <Icon icon="lucide:mail" width={20} />
                      </div>
                      <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
                        Active
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-white">Talent Matcher</h3>
                    <p className="mb-4 mt-1 text-xs text-gray-500">Routes bids and vetting across the Network.</p>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[45%] bg-emerald-500" />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                      <span>120 matches today</span>
                      <span>98% fit score</span>
                    </div>
                  </div>

                  <div className="group rounded-lg border border-white/5 bg-[#111] p-4 transition-all hover:border-orange-500/30">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500/10 text-orange-400">
                        <Icon icon="lucide:database" width={20} />
                      </div>
                      <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
                        Active
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-white">Revenue Sync</h3>
                    <p className="mb-4 mt-1 text-xs text-gray-500">MSA monetization signals and spend pacing.</p>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[72%] bg-orange-500" />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                      <span>42 campaigns</span>
                      <span>Latency: 180ms</span>
                    </div>
                  </div>

                  <div className="group rounded-lg border border-white/5 bg-[#111] p-4 transition-all hover:border-cyan-500/30">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-cyan-500/10 text-cyan-400">
                        <Icon icon="lucide:message-square" width={20} />
                      </div>
                      <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
                        Active
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-white">Coach Handoff</h3>
                    <p className="mb-4 mt-1 text-xs text-gray-500">Modern Athlete client journeys &amp; AI touchpoints.</p>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[58%] bg-cyan-500" />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                      <span>860 journeys</span>
                      <span>94% completion</span>
                    </div>
                  </div>

                  <div className="group rounded-lg border border-white/5 bg-[#111] p-4 transition-all hover:border-emerald-500/30">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-emerald-500/10 text-emerald-400">
                        <Icon icon="lucide:trending-up" width={20} />
                      </div>
                      <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
                        Active
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-white">Ecosystem Health</h3>
                    <p className="mb-4 mt-1 text-xs text-gray-500">Cross-brand KPIs and uptime in one view.</p>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[65%] bg-emerald-500" />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                      <span>99.2% uptime</span>
                      <span>Auto-report</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn("h-full flex-col gap-4", tab === "workflows" ? "flex" : "hidden")}>
              <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f] bg-grid p-8 shadow-2xl">
                <div className="relative flex items-center gap-6 md:gap-12">
                  <div className="relative flex flex-col items-center gap-2">
                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#151515] shadow-xl">
                      <Icon icon="simple-icons:typeform" className="text-2xl text-white" />
                    </div>
                    <span className="font-mono text-[10px] text-gray-500">Intake</span>
                  </div>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-white/10 to-emerald-500/50" />
                  <div className="relative flex flex-col items-center gap-2">
                    <div className="absolute -top-3 -right-3 z-20 flex h-5 w-5 items-center justify-center rounded-full border border-[#080808] bg-red-500 text-[10px] font-bold text-white">
                      1
                    </div>
                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-500/50 bg-[#151515] shadow-xl shadow-emerald-500/10">
                      <Icon icon="simple-icons:openai" className="text-2xl text-emerald-400" />
                    </div>
                    <span className="font-mono text-[10px] text-emerald-300">Digidle core</span>
                  </div>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-emerald-500/50 to-white/10" />
                  <div className="relative flex flex-col items-center gap-2">
                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#151515] shadow-xl">
                      <Icon icon="simple-icons:slack" className="text-2xl text-white" />
                    </div>
                    <span className="font-mono text-[10px] text-gray-500">Notify</span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 rounded border border-white/5 bg-black/50 p-2 font-mono text-[10px] text-gray-400 backdrop-blur">
                  Status:
                  <span className="text-emerald-400"> Running</span> | Executions: 1,402
                </div>
              </div>
            </div>

            <div className={cn("h-full flex-col gap-4", tab === "roi" ? "flex" : "hidden")}>
              <div className="relative flex-1 overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f] bg-grid p-6 shadow-2xl">
                <div className="mb-6 flex h-48 w-full items-end gap-3 border-b border-white/10 px-8 pb-1">
                  <div className="group relative h-[20%] w-full rounded-t bg-emerald-500/10">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                      $1.2k
                    </div>
                  </div>
                  <div className="group relative h-[35%] w-full rounded-t bg-emerald-500/20">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                      $3.5k
                    </div>
                  </div>
                  <div className="group relative h-[50%] w-full rounded-t bg-emerald-500/30">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                      $5.1k
                    </div>
                  </div>
                  <div className="group relative h-[75%] w-full rounded-t bg-emerald-500/50">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                      $8.2k
                    </div>
                  </div>
                  <div className="group relative h-[90%] w-full rounded-t bg-emerald-500">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                      $12k
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-8 text-xs text-gray-500">
                  <span>Month 1</span>
                  <span>Month 5</span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-medium text-white">450h</div>
                    <div className="text-[10px] text-gray-500">Manual Work Saved</div>
                  </div>
                  <div>
                    <div className="text-xl font-medium text-white">$12.4k</div>
                    <div className="text-[10px] text-gray-500">Net Cost Savings</div>
                  </div>
                  <div>
                    <div className="text-xl font-medium text-emerald-400">12x</div>
                    <div className="text-[10px] text-gray-500">ROI Multiplier</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
