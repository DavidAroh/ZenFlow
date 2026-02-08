import React from 'react';

export default function ZenFocus() {
  return (
    <div className="flex h-full w-full overflow-hidden relative">
      {/* Sidebar Navigation (Collapsed on small screens) */}
      <aside className="hidden md:flex flex-col w-16 lg:w-64 border-r border-gray-200 dark:border-border-dark bg-white dark:bg-background-dark py-6 gap-2 shrink-0">
        <div className="px-4 lg:px-6 pb-4">
          <button className="w-full flex items-center justify-center lg:justify-start gap-3 bg-primary hover:bg-primary-hover text-gray-900 font-bold py-3 px-4 rounded-xl transition-all shadow-[0_0_15px_rgba(19,236,91,0.3)]">
            <span className="material-symbols-outlined">add</span>
            <span className="hidden lg:inline">New Task</span>
          </button>
        </div>
        <div className="flex flex-col gap-1 px-2">
          <a href="#" className="flex items-center gap-3 px-3 lg:px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-card-hover text-gray-900 dark:text-white">
            <span className="material-symbols-outlined">view_kanban</span>
            <span className="hidden lg:inline font-medium">Board View</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 lg:px-4 py-2.5 rounded-lg text-gray-600 dark:text-text-secondary hover:bg-gray-50 dark:hover:bg-card-hover transition-colors">
            <span className="material-symbols-outlined">format_list_bulleted</span>
            <span className="hidden lg:inline font-medium">List View</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 lg:px-4 py-2.5 rounded-lg text-gray-600 dark:text-text-secondary hover:bg-gray-50 dark:hover:bg-card-hover transition-colors">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="hidden lg:inline font-medium">Calendar</span>
          </a>
        </div>
        <div className="mt-8 px-4 lg:px-6 hidden lg:block">
          <p className="text-xs font-bold text-gray-400 dark:text-text-secondary uppercase tracking-wider mb-3">Your Wellness</p>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-50 dark:bg-card-dark p-3 rounded-xl border border-gray-100 dark:border-border-dark">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-500 dark:text-text-secondary">Focus Score</span>
                <span className="text-xs font-bold text-primary">85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-card-dark p-3 rounded-xl border border-gray-100 dark:border-border-dark">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-500 dark:text-text-secondary">Burnout Risk</span>
                <span className="text-xs font-bold text-green-500">Low</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-full rounded-full bg-green-500"></div>
                <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 opacity-30"></div>
                <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Kanban Board Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
        {/* Quick Add Bar */}
        <div className="px-6 py-6 w-full max-w-5xl mx-auto z-10">
          <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-200 dark:border-border-dark p-1.5 flex flex-col sm:flex-row items-center gap-2">
            <div className="flex-1 w-full flex items-center px-3 h-10 sm:h-12">
              <span className="material-symbols-outlined text-gray-400 dark:text-text-secondary mr-3">bolt</span>
              <input className="w-full bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-text-secondary text-sm sm:text-base" placeholder="Quick add: e.g. 'Review quarterly budget by Friday #highstress'" type="text" />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto px-2 pb-2 sm:pb-0 justify-end">
              <select className="bg-gray-50 dark:bg-background-dark border-none text-xs text-gray-600 dark:text-text-secondary rounded-lg px-2 py-1.5 focus:ring-0 cursor-pointer h-9">
                <option>High Stress</option>
                <option>Medium Stress</option>
                <option defaultValue>Low Stress</option>
              </select>
              <button className="bg-slate-900 dark:bg-primary text-white dark:text-slate-900 px-4 h-9 rounded-lg text-sm font-bold shadow-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                Add Task
              </button>
            </div>
          </div>
        </div>

        {/* Board Columns Container */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden px-6 pb-6 scrollbar-hide">
          <div className="flex h-full gap-6 min-w-max">
            {/* Column 1: Backlog */}
            <div className="flex flex-col w-80 h-full rounded-xl bg-gray-100/50 dark:bg-black/20 border border-transparent dark:border-border-dark">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-slate-400"></span>
                  <h3 className="font-bold text-gray-700 dark:text-slate-200">Backlog</h3>
                  <span className="bg-gray-200 dark:bg-card-hover text-gray-600 dark:text-text-secondary px-2 py-0.5 rounded text-xs font-medium">4</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-3 pb-3 flex flex-col gap-3 scrollbar-hide">
                {/* Task Card */}
                <div className="group bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border border-gray-200 dark:border-border-dark hover:border-gray-300 dark:hover:border-slate-600 cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider">Low Stress</span>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-primary">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-slate-100 mb-1">Update team roster</h4>
                  <p className="text-xs text-gray-500 dark:text-text-secondary mb-3 line-clamp-2">Add the two new interns to the system and assign permissions.</p>
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-border-dark pt-3">
                    <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500 text-xs">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span>Oct 24</span>
                    </div>
                    <div className="size-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold">JD</div>
                  </div>
                </div>
                {/* Task Card */}
                <div className="group bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border border-gray-200 dark:border-border-dark hover:border-gray-300 dark:hover:border-slate-600 cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 rounded-md bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-[10px] font-bold uppercase tracking-wider">Med Stress</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-slate-100 mb-1">Weekly Sync Prep</h4>
                  <p className="text-xs text-gray-500 dark:text-text-secondary mb-3 line-clamp-2">Gather updates from engineering and design teams.</p>
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-border-dark pt-3">
                    <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500 text-xs">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span>Oct 25</span>
                    </div>
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-6" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlsB-sn95ta0H4bQ-wFBwB9G8NKlMCluiwL5nm04s8of1Q8GQSQeZQ22t6bgN1L2WvhyJdkkYiAgfz48OSolL0tRHWtDJBWGE_LYfAmC9Lt4iik8xqkzKBWyL_4YoudLEO7p0hb41cPSFoQiUxB47un6ATIlgKtOxoXGI9aEYQBjdbyE37yanL39Gw2FA7RAS29cnyZmroDM53tKxlWT462JUqAZmd4pOLOKtHqp8HDjp-Ymab7Risn98noofkXx301Jik1k817aY")'}}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Column 2: To Do */}
            <div className="flex flex-col w-80 h-full rounded-xl bg-gray-100/50 dark:bg-black/20 border border-transparent dark:border-border-dark">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-500"></span>
                  <h3 className="font-bold text-gray-700 dark:text-slate-200">To Do</h3>
                  <span className="bg-gray-200 dark:bg-card-hover text-gray-600 dark:text-text-secondary px-2 py-0.5 rounded text-xs font-medium">3</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-3 pb-3 flex flex-col gap-3 scrollbar-hide">
                {/* Task Card (High Stress) */}
                <div className="group bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border border-l-4 border-l-red-500 border-y-gray-200 border-r-gray-200 dark:border-y-border-dark dark:border-r-border-dark hover:border-gray-300 dark:hover:border-slate-600 cursor-pointer transition-all relative overflow-hidden">
                  {/* AI Recommendation Overlay Hint */}
                  <div className="absolute top-0 right-0 p-2">
                    <span className="material-symbols-outlined text-primary text-[18px] animate-pulse" title="AI Recommendation available">auto_awesome</span>
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 rounded-md bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider">High Stress</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-slate-100 mb-1">Q4 Financial Report</h4>
                  <p className="text-xs text-gray-500 dark:text-text-secondary mb-3 line-clamp-2">Compile all departmental spend and forecast for next year. Requires deep focus.</p>
                  {/* AI Insight Block */}
                  <div className="bg-gradient-to-r from-green-900/10 to-transparent dark:from-green-900/20 p-2 rounded-lg mb-3 flex gap-2 items-start border border-green-500/10">
                    <span className="material-symbols-outlined text-primary text-[14px] mt-0.5">psychology</span>
                    <p className="text-[10px] text-gray-600 dark:text-slate-300 leading-tight">AI Suggestion: Schedule this for your peak focus hours (9am-11am).</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-border-dark pt-3">
                    <div className="flex items-center gap-1 text-red-500 text-xs font-medium">
                      <span className="material-symbols-outlined text-[16px]">priority_high</span>
                      <span>Due Tomorrow</span>
                    </div>
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-6 ring-2 ring-primary" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpm1tXYA_o06FUULbi7_j7XTZqWGn3OELddrAYw_9OiMjc96utcNPUobiTyA8FrQbvjYiALwsJjCk8LFTBQUgH1CErQlTEcaeBqums8rGjFlqnkNQP2mfsh-DyDOlVRb0y8ZxZjKVLZmIz_dawTIFP0Mmthg5curnuBffYfIGs5ICRy8tRHG-_AeejHXizhm1-9-gIjs6Xbpa6oMNl1nxC2QZWp4wxZNectsWro_kMNBkLKkon33c31xJSVE7Lw-SBlj03qmWISDo")'}}></div>
                  </div>
                </div>
                <div className="group bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border border-gray-200 dark:border-border-dark hover:border-gray-300 dark:hover:border-slate-600 cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 rounded-md bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-[10px] font-bold uppercase tracking-wider">Med Stress</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-slate-100 mb-1">Client Presentation</h4>
                  <p className="text-xs text-gray-500 dark:text-text-secondary mb-3">Draft slides for the new marketing strategy pitch.</p>
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-border-dark pt-3">
                    <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500 text-xs">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span>Oct 27</span>
                    </div>
                    <div className="size-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] font-bold">MK</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Column 3: In Progress */}
            <div className="flex flex-col w-80 h-full rounded-xl bg-gray-100/50 dark:bg-black/20 border border-transparent dark:border-border-dark">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                  <h3 className="font-bold text-gray-700 dark:text-slate-200">In Progress</h3>
                  <span className="bg-gray-200 dark:bg-card-hover text-gray-600 dark:text-text-secondary px-2 py-0.5 rounded text-xs font-medium">1</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-3 pb-3 flex flex-col gap-3 scrollbar-hide">
                <div className="group bg-white dark:bg-card-dark p-4 rounded-xl shadow-lg border border-primary/50 cursor-pointer transition-all ring-1 ring-primary/20">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider">Low Stress</span>
                    <span className="material-symbols-outlined text-primary text-[20px] animate-spin-slow">progress_activity</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-slate-100 mb-1">Email Newsletter</h4>
                  <p className="text-xs text-gray-500 dark:text-text-secondary mb-3">Writing copy for the monthly product update.</p>
                  <div className="w-full bg-gray-100 dark:bg-black/40 rounded-full h-1.5 mb-3">
                    <div className="bg-primary h-1.5 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-border-dark pt-3">
                    <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500 text-xs">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span>Today</span>
                    </div>
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-6" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQK3xxW8MfjsBXCoF853jiOAYPVZViGByfhtlpis2akYUa0Q0Nf5kr2MC2Fv_fqDXkMcx2RkkFFruKclT30p2E9guH1gy6-U87C_DkrsyR0HubdV9OwZHOebazsmFvYEZql-Fe090KBjO82JdE8gVO5zheOG2VLEQ2vldjNKeMY0w5Lze2BJuoMVAaXhkd69sKEfoziYE2Segtg7zT_pMMP9Uh5MceknBMG7KI2t397f3p4pwSqjD-0-t9svZ8QAU_EsEkcD8JUCg")'}}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Column 4: Done */}
            <div className="flex flex-col w-80 h-full rounded-xl bg-gray-100/50 dark:bg-black/20 border border-transparent dark:border-border-dark">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-slate-400"></span>
                  <h3 className="font-bold text-gray-700 dark:text-slate-200">Done</h3>
                  <span className="bg-gray-200 dark:bg-card-hover text-gray-600 dark:text-text-secondary px-2 py-0.5 rounded text-xs font-medium">5</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-3 pb-3 flex flex-col gap-3 scrollbar-hide opacity-60 hover:opacity-100 transition-opacity">
                {/* Done items... */}
                <div className="group bg-slate-50 dark:bg-card-dark p-4 rounded-xl border border-gray-200 dark:border-border-dark hover:border-gray-300 dark:hover:border-slate-600 cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider">Low Stress</span>
                    <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                  </div>
                  <h4 className="font-semibold text-gray-700 dark:text-slate-300 line-through mb-1">Morning Standup</h4>
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-border-dark pt-3 mt-2">
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span>Oct 23</span>
                    </div>
                    <div className="size-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-bold">AL</div>
                  </div>
                </div>
                <div className="group bg-slate-50 dark:bg-card-dark p-4 rounded-xl border border-gray-200 dark:border-border-dark hover:border-gray-300 dark:hover:border-slate-600 cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 rounded-md bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-[10px] font-bold uppercase tracking-wider">Med Stress</span>
                    <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                  </div>
                  <h4 className="font-semibold text-gray-700 dark:text-slate-300 line-through mb-1">Vendor Invoice Review</h4>
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-border-dark pt-3 mt-2">
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span>Oct 22</span>
                    </div>
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-6" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDp8FbVKFSJ-uzV98Imy9kkf2WeVjmpcmI88rSukcdgMimx1sN9DgtWaIJjz4vsIv82kqFHBXiyWDDEGouoVj4xgVBO1_g7Dj2zg2m2XICPY1vSHwAHjlSbyKSDQdT_22AcamepFqfXYm9JD9kGY0sTsclfKK7UJvQD62u4rvvhinvS0WmmdCXfpH0q5ua0RCRr3wJLYC_9K9-Tnn_Tcgc6cziqBAnvcFfpFppjSOGibF4Y8x-y6LVOEkelt6UPbscqfRA7RrDRIow")'}}></div>
                  </div>
                </div>
              </div>
            </div>
             {/* Add Column Placeholder */}
            <div className="flex flex-col w-12 h-full items-center pt-12 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="size-12 rounded-full border-2 border-dashed border-gray-400 dark:border-text-secondary flex items-center justify-center text-gray-400 dark:text-text-secondary hover:border-primary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
          </div>
        </div>
        {/* Floating Action Button (Mobile) */}
        <button className="md:hidden absolute bottom-6 right-6 size-14 bg-primary text-gray-900 rounded-full shadow-lg flex items-center justify-center z-50">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>
    </div>
  );
}
