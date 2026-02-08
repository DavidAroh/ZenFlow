import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MorningBriefing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background-light dark:bg-background-dark font-display antialiased">
      {/* Background overlay (simulating modal backdrop) */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Left Sidebar: Greeting & Wellness Forecast */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-[#e8f7e8] to-[#f0fff0] dark:from-[#1a2e1a] dark:to-[#112111] p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#dce5dc] dark:border-[#2a402a]">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-white dark:bg-white/10 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-orange-400">wb_sunny</span>
              </div>
              <span className="text-text-muted dark:text-gray-400 font-medium text-sm">Tuesday, Oct 24</span>
            </div>
            <h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-8">
              Good Morning,<br />
              <span className="text-primary dark:text-primary">Alex</span>
            </h1>
            {/* Wellness Forecast Card */}
            <div className="bg-white/60 dark:bg-black/20 backdrop-blur-md rounded-xl p-5 border border-primary/20 shadow-sm mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <h2 className="text-text-main dark:text-white font-bold text-lg">Wellness Forecast</h2>
              </div>
              <p className="text-text-main dark:text-gray-200 text-sm leading-relaxed mb-4">
                You worked <span className="font-bold text-red-500">2 hours</span> past your limit yesterday. My recommendation: take a 15-minute walk by 2 PM to reset.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {/* Burnout Stat */}
                <div className="bg-white dark:bg-surface-dark rounded-lg p-3 border border-[#dce5dc] dark:border-[#2a402a]">
                  <div className="flex items-center gap-2 text-text-muted dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <span className="material-symbols-outlined text-[16px]">psychology</span>
                    Burnout
                  </div>
                  <div className="text-text-main dark:text-white font-bold">Low Risk</div>
                </div>
                {/* Energy Stat */}
                <div className="bg-white dark:bg-surface-dark rounded-lg p-3 border border-[#dce5dc] dark:border-[#2a402a]">
                  <div className="flex items-center gap-2 text-text-muted dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                    Energy
                  </div>
                  <div className="text-text-main dark:text-white font-bold">High</div>
                </div>
              </div>
            </div>
          </div>
          {/* Motivational Quote / Footer of sidebar */}
          <div className="hidden md:block">
            <p className="text-text-muted dark:text-gray-500 text-xs italic">
              "Success is the sum of small efforts, repeated day in and day out."
            </p>
          </div>
        </div>
        {/* Right Content: Goals & Schedule */}
        <div className="w-full md:w-3/5 p-8 flex flex-col bg-surface-light dark:bg-surface-dark overflow-y-auto custom-scrollbar">
          {/* Section 1: Top Priorities */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-text-main dark:text-white text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">flag</span>
                Today's Priorities
              </h3>
              <button className="text-xs font-medium text-text-muted dark:text-gray-400 hover:text-primary transition-colors">Edit List</button>
            </div>
            <div className="space-y-3">
              <label className="group flex items-start gap-3 p-3 rounded-lg border border-[#dce5dc] dark:border-[#2a402a] hover:bg-background-light dark:hover:bg-white/5 transition-colors cursor-pointer">
                <input type="checkbox" className="mt-1 h-5 w-5 rounded border-[#dce5dc] border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-primary/20 focus:ring-offset-0 focus:border-primary transition-all" />
                <div className="flex flex-col">
                  <span className="text-text-main dark:text-white font-medium group-hover:text-primary transition-colors">Review Q3 Reports</span>
                  <span className="text-text-muted dark:text-gray-400 text-xs">Due by 5:00 PM</span>
                </div>
              </label>
              <label className="group flex items-start gap-3 p-3 rounded-lg border border-[#dce5dc] dark:border-[#2a402a] hover:bg-background-light dark:hover:bg-white/5 transition-colors cursor-pointer">
                <input type="checkbox" className="mt-1 h-5 w-5 rounded border-[#dce5dc] border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-primary/20 focus:ring-offset-0 focus:border-primary transition-all" />
                <div className="flex flex-col">
                  <span className="text-text-main dark:text-white font-medium group-hover:text-primary transition-colors">Client Call Preparation</span>
                  <span className="text-text-muted dark:text-gray-400 text-xs">For 2:00 PM Meeting</span>
                </div>
              </label>
              <label className="group flex items-start gap-3 p-3 rounded-lg border border-[#dce5dc] dark:border-[#2a402a] hover:bg-background-light dark:hover:bg-white/5 transition-colors cursor-pointer">
                <input type="checkbox" className="mt-1 h-5 w-5 rounded border-[#dce5dc] border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-primary/20 focus:ring-offset-0 focus:border-primary transition-all" />
                <div className="flex flex-col">
                  <span className="text-text-main dark:text-white font-medium group-hover:text-primary transition-colors">Email Cleanup</span>
                  <span className="text-text-muted dark:text-gray-400 text-xs">Inbox Zero Goal</span>
                </div>
              </label>
            </div>
          </div>
          {/* Section 2: Schedule Overview */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-text-main dark:text-white text-xl font-bold flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
              Schedule Overview
            </h3>
            <div className="flex-1 relative pl-2">
              {/* Timeline Vertical Line */}
              <div className="absolute left-[29px] top-2 bottom-2 w-[2px] bg-[#dce5dc] dark:bg-[#2a402a]"></div>
              <div className="space-y-6 relative">
                {/* Event 1 */}
                <div className="flex gap-4 items-start group">
                  <div className="z-10 bg-white dark:bg-surface-dark border-2 border-primary rounded-full p-1.5 mt-1 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-[18px]">groups</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-text-muted dark:text-gray-400 text-xs font-semibold mb-0.5">09:00 AM - 09:30 AM</p>
                    <div className="p-3 bg-background-light dark:bg-white/5 rounded-lg border-l-4 border-primary">
                      <h4 className="text-text-main dark:text-white font-bold text-sm">Daily Standup</h4>
                      <p className="text-text-muted dark:text-gray-400 text-xs mt-1">Zoom • Team Alpha</p>
                    </div>
                  </div>
                </div>
                {/* Event 2 */}
                <div className="flex gap-4 items-start group">
                  <div className="z-10 bg-white dark:bg-surface-dark border-2 border-[#dce5dc] dark:border-[#2a402a] rounded-full p-1.5 mt-1 shadow-sm group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-text-muted dark:text-gray-400 text-[18px]">design_services</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-text-muted dark:text-gray-400 text-xs font-semibold mb-0.5">11:00 AM - 12:00 PM</p>
                    <div className="p-3 bg-white dark:bg-transparent rounded-lg border border-[#dce5dc] dark:border-[#2a402a]">
                      <h4 className="text-text-main dark:text-white font-bold text-sm">Design Review</h4>
                      <p className="text-text-muted dark:text-gray-400 text-xs mt-1">Conference Room B</p>
                    </div>
                  </div>
                </div>
                {/* Event 3 */}
                <div className="flex gap-4 items-start group">
                  <div className="z-10 bg-white dark:bg-surface-dark border-2 border-[#dce5dc] dark:border-[#2a402a] rounded-full p-1.5 mt-1 shadow-sm group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-text-muted dark:text-gray-400 text-[18px]">psychology_alt</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-text-muted dark:text-gray-400 text-xs font-semibold mb-0.5">02:00 PM - 04:00 PM</p>
                    <div className="p-3 bg-white dark:bg-transparent rounded-lg border border-[#dce5dc] dark:border-[#2a402a] border-dashed">
                      <h4 className="text-text-main dark:text-white font-bold text-sm">Deep Work Block</h4>
                      <p className="text-text-muted dark:text-gray-400 text-xs mt-1">Focus Time • Do not disturb</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Action Area */}
          <div className="mt-8 pt-6 border-t border-[#dce5dc] dark:border-[#2a402a] flex flex-col sm:flex-row gap-4 justify-between items-center">
            <button className="text-sm font-medium text-text-muted dark:text-gray-400 hover:text-text-main dark:hover:text-white underline decoration-dashed underline-offset-4 transition-colors">
              Snooze for 10 mins
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-hover text-text-main font-bold text-base rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <span>Start My Day</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
        {/* Close Icon Absolute */}
        <button onClick={() => navigate('/')} className="absolute top-4 right-4 p-2 text-text-muted dark:text-gray-400 hover:text-text-main dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors z-20">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
}
