import React from 'react';

export default function WellnessInsights() {
  return (
    <div className="flex-1 flex flex-col h-full relative">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 sticky top-0 bg-background-dark/90 backdrop-blur-md z-10 border-b border-border-dark">
        <div>
          <h2 className="text-white text-3xl font-bold leading-tight">Wellness Insights</h2>
          <p className="text-text-muted text-sm mt-1">Real-time analysis of your work habits and energy levels.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-border-dark hover:bg-surface-darker text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Report
          </button>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-[#052e12] px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-[0_0_15px_rgba(19,236,91,0.3)]">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            Quick Boost
          </button>
        </div>
      </header>
      <main className="flex-1 px-8 py-6 flex flex-col gap-8 max-w-7xl mx-auto w-full">
        {/* Alert Banner */}
        <div className="w-full rounded-xl bg-gradient-to-r from-[#2a1215] to-surface-dark border border-alert-high/30 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-alert-high/5 group-hover:bg-alert-high/10 transition-colors"></div>
          <div className="flex items-start gap-4 z-10">
            <div className="p-3 rounded-full bg-alert-high/20 text-alert-high shrink-0 animate-pulse">
              <span className="material-symbols-outlined text-3xl">warning</span>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-1">High Burnout Risk Detected (85%)</h3>
              <p className="text-[#cfd8d2] text-sm leading-relaxed max-w-xl">
                Your activity patterns suggest critical fatigue levels. You've worked <strong>12 hours overtime</strong> this week with average sleep dropping below 5 hours.
              </p>
            </div>
          </div>
          <div className="flex gap-3 z-10 w-full md:w-auto">
            <button className="flex-1 md:flex-none whitespace-nowrap bg-transparent border border-[#fa5538] text-[#fa5538] hover:bg-[#fa5538]/10 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
              Dismiss
            </button>
            <button className="flex-1 md:flex-none whitespace-nowrap bg-[#fa5538] hover:bg-[#e0482e] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-alert-high/20">
              Take Action
            </button>
          </div>
        </div>
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Metrics (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Overall Score Card */}
            <div className="bg-surface-dark rounded-xl p-6 border border-border-dark">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-semibold">Current State</h3>
                <span className="text-xs bg-border-dark text-text-muted px-2 py-1 rounded">Last 7 Days</span>
              </div>
              <div className="flex flex-col items-center justify-center py-4 relative">
                {/* Circular Progress Representation */}
                <div className="relative size-48">
                  <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Circle */}
                    <path className="text-border-dark" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                    {/* Progress Circle */}
                    <path className="text-alert-high drop-shadow-[0_0_8px_rgba(250,85,56,0.6)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="85, 100" strokeLinecap="round" strokeWidth="3"></path>
                  </svg>
                  {/* Inner Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black text-white">85</span>
                    <span className="text-xs uppercase tracking-widest text-[#fa5538] font-bold mt-1">Critical</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-surface-darker p-3 rounded-lg text-center">
                  <p className="text-text-muted text-xs mb-1">Weekly Trend</p>
                  <p className="text-alert-high font-bold flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-sm">trending_up</span> +15%
                  </p>
                </div>
                <div className="bg-surface-darker p-3 rounded-lg text-center">
                  <p className="text-text-muted text-xs mb-1">Est. Recovery</p>
                  <p className="text-white font-bold">3 Days</p>
                </div>
              </div>
            </div>
            {/* Detailed Risk Factors */}
            <div className="bg-surface-dark rounded-xl p-6 border border-border-dark flex flex-col gap-5">
              <h3 className="text-white font-semibold">Risk Factors</h3>
              {/* Factor 1 */}
              <div className="group">
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-muted text-lg">schedule</span>
                    <span className="text-[#cfd8d2] text-sm font-medium">Overtime Hours</span>
                  </div>
                  <span className="text-white text-sm font-bold">+12h</span>
                </div>
                <div className="h-2 w-full bg-border-dark rounded-full overflow-hidden">
                  <div className="h-full bg-alert-high w-[85%] rounded-full group-hover:brightness-110 transition-all"></div>
                </div>
                <p className="text-[#fa5538] text-xs mt-1 font-medium">20% over limit</p>
              </div>
              {/* Factor 2 */}
              <div className="group">
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-muted text-lg">bedtime</span>
                    <span className="text-[#cfd8d2] text-sm font-medium">Sleep Debt</span>
                  </div>
                  <span className="text-white text-sm font-bold">5h Avg</span>
                </div>
                <div className="h-2 w-full bg-border-dark rounded-full overflow-hidden">
                  <div className="h-full bg-alert-med w-[65%] rounded-full group-hover:brightness-110 transition-all"></div>
                </div>
                <p className="text-[#ffb02e] text-xs mt-1 font-medium">Getting low</p>
              </div>
              {/* Factor 3 */}
              <div className="group">
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-muted text-lg">computer</span>
                    <span className="text-[#cfd8d2] text-sm font-medium">Screen Time</span>
                  </div>
                  <span className="text-white text-sm font-bold">10h Today</span>
                </div>
                <div className="h-2 w-full bg-border-dark rounded-full overflow-hidden">
                  <div className="h-full bg-alert-med w-[72%] rounded-full group-hover:brightness-110 transition-all"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: AI Insights (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Header for Section */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                AI Recommendations
              </h3>
              <button className="text-text-muted hover:text-white text-sm font-medium transition-colors">Customize Preferences</button>
            </div>
            {/* Top Recommendation (Hero Card) */}
            <div className="bg-[#162e20] border border-primary/20 rounded-xl overflow-hidden flex flex-col md:flex-row relative">
              {/* Left: Image */}
              <div className="md:w-1/3 min-h-[200px] md:min-h-full bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADYlu9Vo67PQIusdn9WMLaBNOkex_QBeomtZ-_hZRP0l2KEEZaUX0rqs4gdd39qImvcOwBKEmj9DqRkpLYu3vpGfs-lz8EWWNyS7kJ5jgIA4Hkc-eFz0av4g1ZlLBEBLEKeClmXRl5-id3rl5q1hFvNzO9YapeWBonoGsbnrhb2add9r3QNOtEFPp0JlgONp9Mcl2ku_HIDB45x-6RDfeT2Ov10V_LgBl_x1jylMev7VIvLDOhm1lMGxf6wcwfa8U81rYievEXTiE")'}}>
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#162e20] to-transparent"></div>
              </div>
              {/* Right: Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">Top Priority</span>
                  <span className="text-text-muted text-xs">Based on 4h continuous activity</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Disconnect & Recharge</h4>
                <p className="text-[#cfd8d2] mb-6 text-sm leading-relaxed">
                  Your cognitive load is peaking. Stepping away for a 15-minute nature walk will restore focus more effectively than pushing through.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="bg-primary hover:bg-primary-hover text-[#052e12] px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">directions_walk</span>
                    Start 15min Walk
                  </button>
                  <button className="bg-border-dark hover:bg-surface-darker text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">snooze</span>
                    Remind in 10m
                  </button>
                </div>
              </div>
            </div>
            {/* Secondary Recommendations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-surface-dark rounded-xl p-5 border border-border-dark hover:border-surface-darker transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 bg-border-dark rounded-lg text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">edit_calendar</span>
                  </div>
                  <button className="text-text-muted hover:text-white">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <h4 className="text-white font-bold text-lg mb-1">Calendar Optimization</h4>
                <p className="text-text-muted text-sm mb-4">You have 3 back-to-back meetings tomorrow. AI suggests rescheduling one.</p>
                <button className="w-full py-2 rounded-lg border border-border-dark hover:border-primary/50 hover:bg-surface-darker text-white text-sm font-medium transition-all flex items-center justify-center gap-2">
                  Review Schedule
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-dark rounded-xl p-5 border border-border-dark hover:border-surface-darker transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 bg-border-dark rounded-lg text-[#ffb02e] group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">nightlight</span>
                  </div>
                  <button className="text-text-muted hover:text-white">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <h4 className="text-white font-bold text-lg mb-1">Sleep Hygiene</h4>
                <p className="text-text-muted text-sm mb-4">Screen usage late at night is affecting your sleep score. Try "Wind Down" mode.</p>
                <button className="w-full py-2 rounded-lg border border-border-dark hover:border-primary/50 hover:bg-surface-darker text-white text-sm font-medium transition-all flex items-center justify-center gap-2">
                  Activate Wind Down
                  <span className="material-symbols-outlined text-sm">toggle_on</span>
                </button>
              </div>
            </div>
            {/* Mood Check-in Strip */}
            <div className="bg-surface-dark rounded-xl p-5 border border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <span className="material-symbols-outlined">mood</span>
                </div>
                <div>
                  <h5 className="text-white font-semibold">How are you feeling right now?</h5>
                  <p className="text-text-muted text-xs">Your input improves AI accuracy.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="size-10 rounded-full bg-border-dark hover:bg-[#fa5538]/20 hover:text-[#fa5538] flex items-center justify-center transition-colors text-2xl" title="Stressed">😫</button>
                <button className="size-10 rounded-full bg-border-dark hover:bg-[#ffb02e]/20 hover:text-[#ffb02e] flex items-center justify-center transition-colors text-2xl" title="Tired">😴</button>
                <button className="size-10 rounded-full bg-border-dark hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors text-2xl" title="Okay">😐</button>
                <button className="size-10 rounded-full bg-border-dark hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors text-2xl" title="Good">🙂</button>
                <button className="size-10 rounded-full bg-border-dark hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors text-2xl" title="Energized">⚡</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
