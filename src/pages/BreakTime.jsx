import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BreakTime() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main antialiased min-h-screen flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-gray-800 px-6 lg:px-10 py-4 bg-white dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 text-text-main dark:text-white">
          <div className="size-8 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
            <span className="material-symbols-outlined text-2xl">eco</span>
          </div>
          <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">FocusFlow</h2>
        </div>
        <div className="flex flex-1 justify-end gap-4 lg:gap-8">
          <div className="hidden md:flex items-center gap-9">
            <a href="#" className="text-text-main dark:text-white text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors border-b-2 border-transparent hover:border-green-600 dark:hover:border-green-400 pb-0.5">Dashboard</a>
            <a href="#" className="text-text-main dark:text-white text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors border-b-2 border-transparent hover:border-green-600 dark:hover:border-green-400 pb-0.5">Analytics</a>
            <a href="#" className="text-text-main dark:text-white text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors border-b-2 border-transparent hover:border-green-600 dark:hover:border-green-400 pb-0.5">Settings</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-green-600 text-white text-sm font-bold shadow-sm hover:bg-green-700 transition-colors ring-2 ring-transparent focus:ring-green-500">
              <span className="truncate">Profile</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white dark:ring-gray-800" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7PhUO--q3zhglKW_NV2yqKEzJSr3JvzTnESS7tDCZon1h1OwdzhOym1SQyPCukU8sxpu-OW_RRvo4mf3ZM6N9lQGwTxjJE5Wlgj-_QeU0lBViDgj8i-n59fJCXB06cyblQGrb8ndihICVTevQozFGE_ybsKVRpm6Qq867FKpMHcnwmuPV3vK5ZjooIRG_UCCnaXDk1Rk3Fhzl2SzYBEQd8G3fN4TzCytFqPSk-Z8Y5hyOaQkBhifsCj1_alSKYd6wsLAbi_E8_dg")'}}></div>
          </div>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-6 lg:p-10">
        <div className="w-full max-w-5xl flex flex-col gap-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white dark:bg-[#1a2e1a] rounded-3xl p-8 shadow-sm border border-green-50 dark:border-green-900/20">
            <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/30 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
                  <span className="material-symbols-outlined text-sm mr-1">battery_charging_full</span> Recharge Mode
                </span>
              </div>
              <h1 className="text-text-main dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Time to Recharge
              </h1>
              <p className="text-text-secondary dark:text-gray-300 text-lg font-medium leading-relaxed">
                You've focused hard for the last 50 minutes. Let's take a short break to reset your mind and body.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-background-light dark:bg-background-dark rounded-2xl p-6 min-w-[280px] shadow-inner border border-gray-100 dark:border-gray-800">
              <div className="text-green-700 dark:text-green-400 text-sm font-bold uppercase tracking-wider mb-2">Recommended Break</div>
              <div className="flex items-baseline gap-1 text-text-main dark:text-white">
                <span className="text-6xl font-bold tracking-tighter tabular-nums text-green-800 dark:text-green-100">05</span>
                <span className="text-2xl font-bold text-green-800/60 dark:text-green-100/60">:00</span>
              </div>
              <div className="flex gap-2 mt-4 w-full">
                <button className="flex-1 flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 active:scale-95">
                  <span className="material-symbols-outlined text-lg">play_arrow</span> Start
                </button>
                <button aria-label="Add time" className="flex items-center justify-center size-10 rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-text-main dark:text-white text-2xl font-bold tracking-tight">Choose your activity</h2>
              <a href="#" className="text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center gap-1 transition-transform hover:translate-x-1">
                View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-[#1a2e1a] shadow-sm border border-green-50 dark:border-green-900/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-200 dark:hover:border-green-800">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <span className="material-symbols-outlined text-8xl text-green-100 dark:text-green-900/40 -mr-4 -mt-4 rotate-12">accessibility_new</span>
                </div>
                <div className="p-6 flex flex-col h-full z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center">
                      <span className="material-symbols-outlined">self_improvement</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400">Physical Reset</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Neck & Shoulder Release</h3>
                  <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    Simple stretches to relieve tension from sitting. Good for posture and circulation.
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">schedule</span> 2 min
                    </div>
                    <button className="rounded-full bg-green-600 text-white px-5 py-2 text-sm font-bold hover:bg-green-700 transition-colors shadow-sm">
                      Start
                    </button>
                  </div>
                </div>
              </div>
              <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-[#1a2e1a] shadow-sm border border-green-50 dark:border-green-900/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-200 dark:hover:border-green-800">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <span className="material-symbols-outlined text-8xl text-green-100 dark:text-green-900/40 -mr-4 -mt-4 rotate-12">spa</span>
                </div>
                <div className="p-6 flex flex-col h-full z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center">
                      <span className="material-symbols-outlined">psychology</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400">Mental Clarity</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Box Breathing</h3>
                  <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    A 4-4-4-4 rhythmic breathing technique to lower stress and regain focus quickly.
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">schedule</span> 2 min
                    </div>
                    <button className="rounded-full bg-green-600 text-white px-5 py-2 text-sm font-bold hover:bg-green-700 transition-colors shadow-sm">
                      Start
                    </button>
                  </div>
                </div>
              </div>
              <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-[#1a2e1a] shadow-sm border border-green-50 dark:border-green-900/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-200 dark:hover:border-green-800">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <span className="material-symbols-outlined text-8xl text-green-100 dark:text-green-900/40 -mr-4 -mt-4 rotate-12">forum</span>
                </div>
                <div className="p-6 flex flex-col h-full z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center">
                      <span className="material-symbols-outlined">favorite</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400">Social Connection</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Gratitude Note</h3>
                  <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    Send a quick thank you message to a friend or colleague to boost serotonin.
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">schedule</span> 1 min
                    </div>
                    <button className="rounded-full bg-green-600 text-white px-5 py-2 text-sm font-bold hover:bg-green-700 transition-colors shadow-sm">
                      Start
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => navigate('/')}
              className="text-sm font-medium text-gray-400 hover:text-green-600 dark:text-gray-500 dark:hover:text-green-400 transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">skip_next</span>
              Skip break and continue working
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
