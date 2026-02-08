import React, { useState } from 'react';

export default function MoodCheckIn() {
  const [mood, setMood] = useState(3);
  const [energy, setEnergy] = useState('medium');

  const getMoodEmoji = (value) => {
    switch (parseInt(value)) {
      case 1: return '😫';
      case 2: return '😕';
      case 3: return '😐';
      case 4: return '🙂';
      case 5: return '🤩';
      default: return '😐';
    }
  };

  const getMoodLabel = (value) => {
    switch (parseInt(value)) {
      case 1: return 'Awful';
      case 2: return 'Bad';
      case 3: return 'Okay';
      case 4: return 'Good';
      case 5: return 'Excellent';
      default: return 'Okay';
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white antialiased min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-border-dark px-6 lg:px-10 py-4 bg-white dark:bg-background-dark z-10">
        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_543)">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
              </g>
              <defs>
                <clipPath id="clip0_6_543"><rect fill="white" height="48" width="48"></rect></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Mindful</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-6">
            <a href="#" className="text-gray-600 dark:text-text-muted hover:text-primary transition-colors text-sm font-medium">Dashboard</a>
            <a href="#" className="text-gray-600 dark:text-text-muted hover:text-primary transition-colors text-sm font-medium">Journal</a>
            <a href="#" className="text-gray-600 dark:text-text-muted hover:text-primary transition-colors text-sm font-medium">Insights</a>
          </nav>
          <div className="h-8 w-px bg-gray-200 dark:bg-border-dark"></div>
          <div className="flex items-center gap-3">
            <button className="flex size-9 items-center justify-center rounded-full bg-gray-100 dark:bg-surface-dark text-gray-500 dark:text-text-muted hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-gray-100 dark:ring-border-dark" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-nd5Oi0tXPVZtkGPsattpCRPIs7J9pSwVakOZEwkEcZu8-7U9K-uwjrOQVpCvNdtRY_iBfyCR30N3cZyZGkSQVRQBb3CXToMpD3k5loEzhhOum0cXCroIwlKhZ9Jl1p5MN3DJTalz7HoM1ldF5uPFaF-4PoDAaruNx_BXxZxYKVDbq2aAwPxcRogKY8y6HBpBj2OILggrpHFkvxAfufwUTLE0uVyrFDexz07s1r7jymx696NA3N1L1BXwrCvNwP6-Cf9A7Bjw5oY")'}}></div>
          </div>
        </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-grow flex justify-center py-8 lg:py-12 px-4 md:px-8">
        <div className="w-full max-w-3xl flex flex-col gap-8">
          {/* Greeting & Hero */}
          <section className="flex flex-col gap-2 mb-4">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
              Good morning, Alex.
            </h1>
            <p className="text-lg text-gray-500 dark:text-text-muted">
              Take a moment to check in with yourself. Your mental hygiene matters.
            </p>
          </section>
          {/* Check-in Card */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-xl dark:shadow-none border border-gray-100 dark:border-border-dark overflow-hidden">
            {/* Progress Header */}
            <div className="px-6 py-4 border-b border-gray-100 dark:border-border-dark flex justify-between items-center bg-gray-50 dark:bg-[#161f19]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Daily Check-in</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-text-muted uppercase tracking-wider">Streak</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/20 text-primary text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px]">local_fire_department</span> 12 Days
                </span>
              </div>
            </div>
            <form className="p-6 md:p-10 flex flex-col gap-10">
              {/* 1. Mood Slider Section */}
              <div className="flex flex-col gap-6">
                <label className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="flex items-center justify-center size-6 rounded bg-primary/20 text-primary text-xs font-bold">1</span>
                  How are you feeling right now?
                </label>
                <div className="bg-gray-50 dark:bg-background-dark rounded-xl p-6 md:p-8 relative group">
                  {/* Emoji Visualization */}
                  <div className="flex justify-between mb-8 px-2">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <div
                        key={val}
                        onClick={() => setMood(val)}
                        className={`flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ${mood === val ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-100'}`}
                      >
                        <span className={`text-4xl ${mood === val ? 'grayscale-0 drop-shadow-[0_0_15px_rgba(19,236,91,0.4)]' : 'grayscale group-hover:grayscale-0'}`}>
                          {getMoodEmoji(val)}
                        </span>
                        <span className={`text-xs font-medium ${mood === val ? 'text-primary font-bold' : 'text-text-muted'}`}>
                          {getMoodLabel(val)}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Custom Range Slider */}
                  <div className="relative w-full h-8 flex items-center">
                    <input
                      className="w-full absolute z-20 opacity-0 cursor-pointer h-full"
                      type="range"
                      min="1"
                      max="5"
                      value={mood}
                      onChange={(e) => setMood(parseInt(e.target.value))}
                    />
                    {/* Track Background */}
                    <div className="w-full h-2 bg-gray-200 dark:bg-border-dark rounded-full overflow-hidden relative z-10">
                      {/* Filled Track */}
                      <div
                        className="h-full bg-primary rounded-full absolute top-0 left-0 transition-all duration-150"
                        style={{ width: `${((mood - 1) / 4) * 100}%` }}
                      ></div>
                    </div>
                    {/* Thumb (Visual Only) */}
                    <div
                      className="absolute size-6 bg-white border-4 border-primary rounded-full shadow-lg z-10 pointer-events-none transition-all duration-150"
                      style={{ left: `calc(${((mood - 1) / 4) * 100}% - 12px)` }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* 2. Energy Level Section */}
              <div className="flex flex-col gap-6">
                <label className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="flex items-center justify-center size-6 rounded bg-primary/20 text-primary text-xs font-bold">2</span>
                  Current energy level?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Low Energy Option */}
                  <label className="cursor-pointer relative group">
                    <input
                      type="radio"
                      name="energy"
                      value="low"
                      className="peer sr-only"
                      checked={energy === 'low'}
                      onChange={() => setEnergy('low')}
                    />
                    <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-background-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:shadow-[0_0_0_1px_#13ec5b]">
                      <div className="size-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                        <span className="material-symbols-outlined">battery_low</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">Low</span>
                        <span className="text-xs text-text-muted">Feeling drained</span>
                      </div>
                    </div>
                  </label>
                  {/* Medium Energy Option */}
                  <label className="cursor-pointer relative group">
                    <input
                      type="radio"
                      name="energy"
                      value="medium"
                      className="peer sr-only"
                      checked={energy === 'medium'}
                      onChange={() => setEnergy('medium')}
                    />
                    <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-background-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:shadow-[0_0_0_1px_#13ec5b]">
                      <div className="size-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                        <span className="material-symbols-outlined">battery_horiz_075</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">Medium</span>
                        <span className="text-xs text-text-muted">Steady pace</span>
                      </div>
                    </div>
                  </label>
                  {/* High Energy Option */}
                  <label className="cursor-pointer relative group">
                    <input
                      type="radio"
                      name="energy"
                      value="high"
                      className="peer sr-only"
                      checked={energy === 'high'}
                      onChange={() => setEnergy('high')}
                    />
                    <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-background-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:shadow-[0_0_0_1px_#13ec5b]">
                      <div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                        <span className="material-symbols-outlined">battery_full</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">High</span>
                        <span className="text-xs text-text-muted">Ready to go</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              {/* 3. Reflection Section */}
              <div className="flex flex-col gap-4">
                <label className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2" htmlFor="journal">
                  <span className="flex items-center justify-center size-6 rounded bg-primary/20 text-primary text-xs font-bold">3</span>
                  What's on your mind?
                </label>
                <div className="relative">
                  <textarea className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-border-dark rounded-xl p-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all" id="journal" placeholder="Deadlines, excitement, fatigue, or just random thoughts..." rows="4"></textarea>
                  <div className="absolute bottom-3 right-3 text-xs text-text-muted bg-gray-50 dark:bg-background-dark px-1">
                    0/280
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['Work Stress', 'Poor Sleep', 'Excited', 'Grateful'].map(tag => (
                    <button key={tag} className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-border-dark bg-transparent text-xs text-text-muted hover:text-primary hover:border-primary/50 transition-colors" type="button">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              {/* Actions */}
              <div className="pt-4 border-t border-gray-100 dark:border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                  <span>AI insights ready after check-in</span>
                </div>
                <button className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-hover text-background-dark font-bold text-sm rounded-lg transition-all shadow-[0_0_20px_rgba(19,236,91,0.3)] hover:shadow-[0_0_25px_rgba(19,236,91,0.5)] transform hover:-translate-y-0.5 active:translate-y-0" type="button">
                  Log Check-in
                </button>
              </div>
            </form>
          </div>
          {/* Previous days preview (Context) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-75">
            <div className="bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-border-dark flex items-center justify-between">
              <div>
                <p className="text-xs text-text-muted mb-1">Yesterday</p>
                <p className="text-sm font-semibold text-white">Productive but tired</p>
              </div>
              <div className="size-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                <span className="material-symbols-outlined text-[18px]">battery_horiz_050</span>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-border-dark flex items-center justify-between">
              <div>
                <p className="text-xs text-text-muted mb-1">Weekly Average</p>
                <p className="text-sm font-semibold text-white">Mood Trending Up</p>
              </div>
              <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
