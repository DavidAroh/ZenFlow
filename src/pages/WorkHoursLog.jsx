import React, { useState, useEffect } from 'react';

export default function WorkHoursLog() {
  const [timerActive, setTimerActive] = useState(true);
  const [time, setTime] = useState(15795); // 04:23:15 in seconds

  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-text-main dark:text-white mb-2">Work Hours Log</h1>
          <p className="text-gray-500 dark:text-text-muted">Track your time, manage sessions, and monitor burnout levels.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-border-dark border border-gray-200 dark:border-[#3e5245] rounded-lg hover:bg-gray-50 dark:hover:bg-[#3e5245] transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">download</span>
            Export CSV
          </button>
          <button className="px-4 py-2 text-sm font-bold text-background-dark bg-primary rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">add</span>
            New Entry
          </button>
        </div>
      </div>
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Timer Card (Main Action) */}
        <div className="col-span-1 lg:col-span-2 bg-white dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-border-dark relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-9xl text-primary">timer</span>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 ${!timerActive && 'hidden'}`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${timerActive ? 'bg-primary' : 'bg-gray-400'}`}></span>
                </span>
                <span className={`${timerActive ? 'text-primary' : 'text-gray-400'} font-bold tracking-wide text-sm uppercase`}>
                  {timerActive ? 'Currently Working' : 'Timer Paused'}
                </span>
              </div>
              <div className="font-mono text-6xl md:text-7xl font-bold tracking-tighter text-text-main dark:text-white tabular-nums">
                {formatTime(time)}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Started at 09:00 AM</p>
            </div>
            <div className="flex flex-col items-center gap-4 w-full md:w-auto">
              <button
                onClick={() => setTimerActive(false)}
                className="w-full md:w-48 h-14 bg-accent-danger text-white rounded-xl font-bold text-lg hover:bg-[#ff5252] transition-all transform hover:scale-105 shadow-lg shadow-accent-danger/20 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">stop_circle</span>
                Punch Out
              </button>
              <button
                onClick={() => setTimerActive(!timerActive)}
                className="w-full md:w-48 h-12 bg-gray-100 dark:bg-border-dark text-gray-700 dark:text-gray-200 rounded-xl font-medium text-sm hover:bg-gray-200 dark:hover:bg-[#3e5245] transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">{timerActive ? 'pause' : 'play_arrow'}</span>
                {timerActive ? 'Take Break' : 'Resume'}
              </button>
            </div>
          </div>
        </div>
        {/* Quick Stats */}
        <div className="col-span-1 grid grid-rows-2 gap-6">
          {/* Weekly Progress */}
          <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-border-dark flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Weekly Total</p>
                <h3 className="text-3xl font-bold text-text-main dark:text-white">32.5 <span className="text-base font-normal text-gray-400">/ 40h</span></h3>
              </div>
              <span className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">calendar_view_week</span>
              </span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-border-dark rounded-full h-2.5 overflow-hidden">
              <div className="bg-primary h-2.5 rounded-full" style={{width: '81%'}}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">81% of weekly goal completed</p>
          </div>
          {/* Burnout Risk */}
          <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-border-dark flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Burnout Risk</p>
                <h3 className="text-3xl font-bold text-accent-warning">Moderate</h3>
              </div>
              <span className="p-2 bg-accent-warning/10 rounded-lg text-accent-warning">
                <span className="material-symbols-outlined">vital_signs</span>
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="material-symbols-outlined text-accent-warning text-sm">warning</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">2 days &gt; 10h this week</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Manual Entry & History List */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          {/* Manual Entry Form */}
          <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-border-dark">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">edit_calendar</span>
              <h3 className="text-lg font-bold text-text-main dark:text-white">Manual Entry</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Date</label>
                <input className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-border-dark rounded-lg px-3 py-2 text-sm text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" type="date" defaultValue="2023-10-27" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Start Time</label>
                <input className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-border-dark rounded-lg px-3 py-2 text-sm text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" type="time" defaultValue="09:00" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400">End Time</label>
                <input className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-border-dark rounded-lg px-3 py-2 text-sm text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" type="time" defaultValue="17:00" />
              </div>
              <button className="h-[38px] bg-slate-800 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                Add Log
              </button>
            </div>
          </div>
          {/* Recent Activity List */}
          <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-gray-100 dark:border-border-dark overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-border-dark flex justify-between items-center">
              <h3 className="text-lg font-bold text-text-main dark:text-white">Recent Activity</h3>
              <button className="text-primary text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-background-dark text-xs uppercase text-gray-500 dark:text-gray-400">
                    <th className="px-6 py-4 font-semibold">Date</th>
                    <th className="px-6 py-4 font-semibold">Session Time</th>
                    <th className="px-6 py-4 font-semibold">Duration</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-border-dark text-sm text-gray-700 dark:text-gray-300">
                  <tr className="hover:bg-gray-50 dark:hover:bg-border-dark/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-text-main dark:text-white">Today, Oct 26</td>
                    <td className="px-6 py-4">09:00 AM - Present</td>
                    <td className="px-6 py-4 font-mono text-primary font-bold">In Progress</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">Active</span></td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">more_horiz</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-border-dark/50 transition-colors border-l-4 border-l-transparent border-l-accent-warning">
                    <td className="px-6 py-4 font-medium text-text-main dark:text-white">Yesterday, Oct 25</td>
                    <td className="px-6 py-4">08:30 AM - 08:45 PM</td>
                    <td className="px-6 py-4 font-mono">12h 15m</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-warning/10 text-accent-warning border border-accent-warning/20">
                        Overworked
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">more_horiz</span></button>
                    </td>
                  </tr>
                   <tr className="hover:bg-gray-50 dark:hover:bg-border-dark/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-text-main dark:text-white">Oct 24</td>
                    <td className="px-6 py-4">09:00 AM - 05:00 PM</td>
                    <td className="px-6 py-4 font-mono">08h 00m</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400">Completed</span></td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">more_horiz</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Calendar View (Static) */}
        <div className="xl:col-span-1 bg-white dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-border-dark h-fit">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-text-main dark:text-white">October 2023</h3>
            <div className="flex gap-2">
              <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-border-dark text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-border-dark text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <span key={day} className="text-xs text-gray-400 font-medium py-2">{day}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {[28, 29, 30].map(d => (
              <div key={d} className="aspect-square flex items-center justify-center rounded-lg text-gray-300 dark:text-gray-600 text-sm">{d}</div>
            ))}
            {Array.from({length: 31}, (_, i) => i + 1).map(d => (
              <div key={d} className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm font-medium cursor-pointer ${
                d === 26
                  ? 'bg-primary text-background-dark font-bold shadow-lg shadow-primary/20'
                  : 'bg-gray-50 dark:bg-border-dark/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-border-dark'
              }`}>
                {d}
                {[1, 2, 3, 5, 7, 8, 10, 11, 15, 16, 17, 18, 19, 22, 23, 24].includes(d) && (
                   <span className={`block w-1 h-1 rounded-full mt-1 bg-primary`}></span>
                )}
                {d === 26 && <span className="block w-1 h-1 rounded-full bg-background-dark mt-1"></span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
