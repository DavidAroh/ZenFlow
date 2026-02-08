import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FocusMode() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(1499); // 24:59
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progress = ((1500 - timeLeft) / 1500) * 283; // 283 is circumference of circle r=45 (2*pi*45 ~ 282.7)

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display min-h-screen flex flex-col overflow-hidden">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/5 px-8 py-4 z-20 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-md">
        <div className="flex items-center gap-4 text-white">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-3xl">spa</span>
          </div>
          <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight">FocusFlow</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex size-10 items-center justify-center rounded-full bg-gray-200 dark:bg-[#1a2e25] text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-[#253f33] transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button className="flex size-10 items-center justify-center rounded-full bg-gray-200 dark:bg-[#1a2e25] text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-[#253f33] transition-colors">
            <span className="material-symbols-outlined">person</span>
          </button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCErti8yW8Bi4MhrYCUH0kTOl9_q-r91Fckdhp9hLzHFATowzrL3qiIdOkFDvjupX4q0yqQsK1wrcHSP_3bLPkxHJx9GyqpfUjNy3uLLTq8qIHS9HejZNY3DINORLmQighv5b8I1vkmmhDOOVQpjXF98981SMeyegtHoUcLIEYk3HemGsfo7ixOhrX1Ar9wy43V28cresxGplgfrAOXw7Ap3fNwRv6ZgenJKwSwxSASudB0fQwffMuRmtVTSWnlbkiWCchR3mlHf8M")'}}></div>
        </div>
      </header>
      <main className="flex-1 flex flex-col lg:flex-row relative z-10">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[100px] mix-blend-screen"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
          <div className="relative flex items-center justify-center mb-12">
            <svg className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] -rotate-90 transform drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" viewBox="0 0 100 100">
              <circle className="text-gray-200 dark:text-[#1a2e25]" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="2"></circle>
              <circle
                className="text-primary transition-all duration-1000 ease-linear"
                cx="50" cy="50" fill="none" r="45" stroke="currentColor"
                strokeDasharray="283"
                strokeDashoffset={283 - progress} // Calculate offset
                strokeLinecap="round" strokeWidth="2"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-6xl md:text-8xl font-thin tracking-tighter tabular-nums text-text-main dark:text-white">{formatTime(timeLeft)}</span>
              <span className="mt-4 text-sm font-medium tracking-widest uppercase text-emerald-500/80 dark:text-emerald-400">Growth Mode</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsActive(!isActive)}
              className="group flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gray-200 dark:bg-[#1a2e25] text-text-main dark:text-white font-medium hover:bg-gray-300 dark:hover:bg-[#253f33] transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">{isActive ? 'pause' : 'play_arrow'}</span>
              <span>{isActive ? 'Pause' : 'Resume'}</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="group flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 font-medium hover:bg-emerald-500/20 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">stop</span>
              <span>End Session</span>
            </button>
          </div>
        </div>
        <aside className="w-full lg:w-[400px] border-l border-white/5 bg-background-light/30 dark:bg-background-dark/30 backdrop-blur-sm p-6 lg:p-10 flex flex-col gap-8 relative z-20">
          <div className="bg-white/5 backdrop-blur-md border border-white/5 p-5 rounded-2xl flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-text-main dark:text-white font-semibold">
                <span className="material-symbols-outlined text-primary">eco</span>
                Deep Growth Mode
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Nurture focus & mute noise</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-[#1a2e25] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 pl-1">Current Task</h3>
            <div className="bg-white/5 backdrop-blur-md border border-white/5 p-5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">High Impact</span>
                <button className="text-gray-400 hover:text-white">
                  <span className="material-symbols-outlined text-sm">edit</span>
                </button>
              </div>
              <h4 className="text-xl font-bold text-text-main dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">Draft Q3 Strategy</h4>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <span className="material-symbols-outlined text-sm">folder</span>
                <span>Project: Sustainable Growth</span>
              </div>
              <div className="mt-4 w-full bg-gray-200 dark:bg-[#1a2e25] h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{width: '45%'}}></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span>45% Complete</span>
                <span>Est. 2h remaining</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 pl-1">Upcoming Breaks</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex flex-col items-center justify-center size-12 rounded-xl bg-[#1a2e25] text-primary shrink-0">
                  <span className="material-symbols-outlined">self_improvement</span>
                </div>
                <div className="flex-1">
                  <p className="text-text-main dark:text-white font-medium">Nature Walk</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">10 min session • Outdoors</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-text-main dark:text-white">10:45</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">AM</p>
                </div>
              </div>
              {/* Other breaks... */}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/5 p-4 rounded-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 animate-[spin_10s_linear_infinite]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCF7dW_0flt-Iez0xPNTTF8QL6cWVS0i5CXvwfpLVRmOfB2rQFc7juRFdmKhrnDIEv0HexSIqyFl9eLQzGE7JKjFAr67dqtszsK_wXBAxbEB2K9Bn-vpgTPZPHUDkK0SAb7HnNyY9AT5TWnvgDg6lGPq1nYAQj0c-naefUTX76QBTbffHJqk0MAPjGrB9p0Ul2lAGEID9N5xlFomNDg2ns-pHbYwOnQ2ylo4-rcMBsC5RBqc7rV4x4meJXiWZzjlD1gWNUA0j707CE")'}}></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-text-main dark:text-white">Forest Rain</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">Nature Sounds</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-text-main dark:text-white">
              <button className="hover:text-primary"><span className="material-symbols-outlined text-xl">skip_previous</span></button>
              <button className="hover:text-primary"><span className="material-symbols-outlined text-xl">pause_circle</span></button>
              <button className="hover:text-primary"><span className="material-symbols-outlined text-xl">skip_next</span></button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
