import React from 'react';

export default function TrackWell() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark scroll-smooth">
      <div className="max-w-[1400px] w-full mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">Good Morning, Alex</h2>
            <p className="text-gray-500 dark:text-text-secondary text-base">Here is your wellness report for today.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors">
              <span className="material-symbols-outlined text-white" style={{fontSize: '20px'}}>calendar_today</span>
              <span className="text-white text-sm font-medium">Today</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-background-dark font-bold transition-colors">
              <span className="material-symbols-outlined" style={{fontSize: '20px'}}>play_arrow</span>
              <span className="text-sm">Start Focus</span>
            </button>
          </div>
        </div>
        {/* Top Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Burnout Gauge Card */}
          <div className="relative flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-primary" style={{fontSize: '96px'}}>vital_signs</span>
            </div>
            <div className="flex justify-between items-start z-10">
              <div>
                <p className="text-gray-500 dark:text-text-secondary text-sm font-medium uppercase tracking-wider">Burnout Risk</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">Low Risk</h3>
              </div>
              <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold">-5% vs last week</span>
            </div>
            {/* Visual Gauge Representation */}
            <div className="mt-6 relative h-24 w-full flex items-end justify-center">
              <div className="absolute bottom-0 w-48 h-24 rounded-t-full border-[12px] border-border-dark border-b-0 box-content"></div>
              <div className="absolute bottom-0 w-48 h-24 rounded-t-full border-[12px] border-primary border-b-0 border-r-transparent border-l-transparent box-content" style={{transform: 'rotate(-45deg)', transformOrigin: 'bottom center'}}></div>
              <div className="absolute bottom-0 flex flex-col items-center">
                <span className="text-3xl font-black text-gray-900 dark:text-white">12<span className="text-sm font-medium text-text-secondary">%</span></span>
                <span className="text-xs text-text-secondary mt-1">Balanced</span>
              </div>
            </div>
          </div>
          {/* Hours Worked Card */}
          <div className="flex flex-col p-6 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <span className="material-symbols-outlined" style={{fontSize: '24px'}}>schedule</span>
                </div>
                <p className="text-gray-500 dark:text-text-secondary text-sm font-medium">Hours Worked</p>
              </div>
              <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-bold">+12%</span>
            </div>
            <div className="flex items-baseline gap-2 mt-auto">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">5h 20m</h3>
              <span className="text-sm text-text-secondary">/ 8h goal</span>
            </div>
            <div className="w-full bg-border-dark h-2 rounded-full mt-4 overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full" style={{width: '66%'}}></div>
            </div>
          </div>
          {/* Current Mood Card */}
          <div className="flex flex-col p-6 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <span className="material-symbols-outlined" style={{fontSize: '24px'}}>mood</span>
                </div>
                <p className="text-gray-500 dark:text-text-secondary text-sm font-medium">Current Mood</p>
              </div>
              <span className="px-2 py-1 rounded bg-slate-700 text-text-secondary text-xs font-bold">Stable</span>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Calm</h3>
              <span className="material-symbols-outlined text-purple-400 animate-pulse" style={{fontSize: '40px'}}>self_improvement</span>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="h-2 flex-1 rounded-full bg-purple-500"></span>
              <span className="h-2 flex-1 rounded-full bg-border-dark"></span>
              <span className="h-2 flex-1 rounded-full bg-border-dark"></span>
              <span className="h-2 flex-1 rounded-full bg-border-dark"></span>
              <span className="h-2 flex-1 rounded-full bg-border-dark"></span>
            </div>
          </div>
        </div>
        {/* Main Chart Section */}
        <div className="w-full rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Weekly Rhythm</h3>
              <p className="text-sm text-gray-500 dark:text-text-secondary">Productivity (Hours) vs Mood Correlation</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-xs text-text-secondary">Productivity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="text-xs text-text-secondary">Mood</span>
              </div>
              <select className="bg-background-dark border border-border-dark text-white text-xs rounded-lg px-2 py-1 outline-none focus:border-primary">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
          </div>
          {/* Chart Container */}
          <div className="relative w-full h-64">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-xs text-text-secondary pointer-events-none">
              <div className="border-b border-border-dark w-full h-0"></div>
              <div className="border-b border-border-dark w-full h-0"></div>
              <div className="border-b border-border-dark w-full h-0"></div>
              <div className="border-b border-border-dark w-full h-0"></div>
              <div className="border-b border-border-dark w-full h-0"></div>
            </div>
            {/* Chart SVG */}
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
              {/* Gradient Defs */}
              <defs>
                <linearGradient id="prodGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#13ec5b" stopOpacity="0.2"></stop>
                  <stop offset="100%" stopColor="#13ec5b" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              {/* Productivity Area */}
              <path d="M0,150 Q100,100 200,120 T400,80 T600,100 T800,60 V200 H0 Z" fill="url(#prodGradient)"></path>
              {/* Productivity Line */}
              <path d="M0,150 Q100,100 200,120 T400,80 T600,100 T800,60" fill="none" stroke="#13ec5b" strokeLinecap="round" strokeWidth="3"></path>
              {/* Mood Line (Dashed) */}
              <path d="M0,100 Q100,120 200,90 T400,140 T600,80 T800,110" fill="none" stroke="#3b82f6" strokeDasharray="6,6" strokeLinecap="round" strokeWidth="3"></path>
              {/* Points */}
              <circle cx="200" cy="120" fill="#111813" r="4" stroke="#13ec5b" strokeWidth="2"></circle>
              <circle cx="400" cy="80" fill="#111813" r="4" stroke="#13ec5b" strokeWidth="2"></circle>
              <circle cx="600" cy="100" fill="#111813" r="4" stroke="#13ec5b" strokeWidth="2"></circle>
            </svg>
          </div>
          {/* X-Axis Labels */}
          <div className="flex justify-between mt-2 px-2 text-xs font-medium text-text-secondary">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-8">
          {/* Daily AI Insight */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-xl bg-cover bg-center border border-gray-200 dark:border-border-dark group" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7m7tTDSeHzrlPGguLRsJr7Dd1zQCLfW03_iOD69qavSOEuzIfe4nc9g_YFyi9ehZE05O29Vzpye-cX-Zh1bZBuejEe7RmIDSFUUSKAJUsyfTnBfjMCZ1IX9XICT2O4hOV5MlZKM7MO9-XO-RWg06Eh4OeAVzlW-58FqndMdScey8axLBSM8pz5mVNSe2HRvfNUph_yj8Dq_iMMb7o3fEhKWwaaQdF2K5Ar9faanFh_pZAhyEL5XuHXxH7PVnk3nld3pdyzVhFnS0")'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
            <div className="relative z-10 p-6 flex flex-col justify-center h-full gap-4">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined" style={{fontSize: '24px'}}>psychology</span>
                <span className="text-sm font-bold uppercase tracking-wider">Daily AI Insight</span>
              </div>
              <h3 className="text-2xl font-bold text-white max-w-lg leading-tight">
                Based on your typing speed and error rate, you seem fatigued.
              </h3>
              <p className="text-gray-300 max-w-md">
                Consider ending your deep work session early to maintain long-term balance. A 15-minute walk is recommended.
              </p>
              <div className="flex gap-3 pt-2">
                <button className="px-4 py-2 bg-primary text-[#111813] text-sm font-bold rounded-lg hover:bg-primary-hover transition-colors">
                  View Wellness Tips
                </button>
                <button className="px-4 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-bold rounded-lg hover:bg-white/20 transition-colors">
                  Dismiss
                </button>
              </div>
            </div>
          </div>
          {/* Quick Actions / Mini List */}
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
              <h4 className="text-gray-900 dark:text-white font-bold mb-3 text-sm">Upcoming Breaks</h4>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-background-light dark:bg-background-dark mb-2">
                <div className="p-2 bg-orange-500/10 rounded text-orange-400">
                  <span className="material-symbols-outlined" style={{fontSize: '20px'}}>coffee</span>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-sm font-medium">Afternoon Coffee</p>
                  <p className="text-text-secondary text-xs">15:00 - 15:15</p>
                </div>
                <span className="ml-auto text-xs text-text-secondary">In 20m</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-background-light dark:bg-background-dark">
                <div className="p-2 bg-blue-500/10 rounded text-blue-400">
                  <span className="material-symbols-outlined" style={{fontSize: '20px'}}>visibility</span>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-sm font-medium">Eye Rest</p>
                  <p className="text-text-secondary text-xs">Every 20 mins</p>
                </div>
                <button className="ml-auto text-text-secondary hover:text-primary">
                  <span className="material-symbols-outlined" style={{fontSize: '20px'}}>play_circle</span>
                </button>
              </div>
            </div>
            <div className="flex-1 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark flex flex-col justify-center items-center text-center gap-2">
              <div className="p-3 bg-primary/10 rounded-full text-primary mb-1">
                <span className="material-symbols-outlined" style={{fontSize: '28px'}}>sentiment_satisfied</span>
              </div>
              <p className="text-gray-900 dark:text-white font-bold">Log your mood</p>
              <p className="text-text-secondary text-xs px-4">Tracking how you feel helps us improve your schedule.</p>
              <button className="mt-2 w-full py-2 rounded-lg border border-border-dark hover:bg-border-dark text-text-secondary hover:text-white text-sm font-medium transition-colors">
                Log Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
