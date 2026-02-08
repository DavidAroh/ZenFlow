import React from 'react';

export default function Settings() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white antialiased transition-colors duration-200 min-h-full">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Header - This duplicates layout header somewhat but is specific to this screen design */}
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-3 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">ZenFlow</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Dashboard</a>
            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Analytics</a>
            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Journal</a>
            <a href="#" className="text-sm font-medium text-primary">Settings</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex size-10 items-center justify-center rounded-full bg-gray-200 dark:bg-border-dark text-gray-600 dark:text-white hover:bg-gray-300 dark:hover:bg-card-hover transition-colors relative">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 size-2 rounded-full bg-primary border-2 border-background-light dark:border-background-dark"></span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200 dark:bg-border-dark"></div>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-primary/20" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzPWvFXgTYXFDroE2Jr2nQsy6vEguGv6qMAOHmLpVFsoBc3gy0AJCb_3Qi6ifxaqY8Tei1hpjqssOn_w9j97cdnc2jgR6lvBz1MX85sLDlDTyudUfyKbt7HR_RQHaxGBzyzSSq0bRZKBw2qCDfflLhaSwnyEllBc5PsDV0UcDHgs1aDSxhT3d-_FJJn_wgKxHV3UgjY1XzpehrHFYaP9C3rZzBr76L1D6E_HCUbHno6oDD-rbnIkh5_SvFoOwCteimc7-fY4zaJW8")'}}></div>
          </div>
        </header>
        <main className="flex-1 px-4 pb-20 pt-8 lg:px-40">
          <div className="mx-auto max-w-6xl">
            {/* Page Title */}
            <div className="mb-8 flex flex-col gap-2">
              <h1 className="text-3xl font-black tracking-tight md:text-4xl">Settings & Preferences</h1>
              <p className="text-gray-500 dark:text-text-muted">Manage your profile, integrations, and AI wellness thresholds.</p>
            </div>
            {/* Profile Card */}
            <div className="mb-8 overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10">
              <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="bg-center bg-no-repeat bg-cover rounded-full size-24 ring-4 ring-background-light dark:ring-background-dark" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5dOS1NRobpIMbXQOHx4PqQiOppQATsTGnP2B9m1_D84WGf8wNFjd-QzEZgvxwlb61HbqoO3sKeA2zN1PAMZ0JW8yo_hN2T0adKhn9QV-UAVONvz4lQkVkjyc02ieeNgZ0Fld_kDRq4jBCpDk-_YLBIk5pR64IYHkUuOlKpVXZva9C880T4MUHDm8dc9XwOhCNe9MBb3CxEPbNyYvk5_aGUxq-FhUyifFes1K4CCQY32nNiMFZPN53Wrqo7n6T1h8LVTuCgSfn3ng")'}}></div>
                  <div>
                    <h3 className="text-2xl font-bold">Alex Sterling</h3>
                    <div className="flex flex-col text-sm text-gray-500 dark:text-text-muted sm:flex-row sm:gap-4">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">mail</span>
                        alex.sterling@example.com
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">verified</span>
                        Pro Member
                      </span>
                    </div>
                  </div>
                </div>
                <button className="group flex items-center justify-center gap-2 rounded-lg bg-slate-900 dark:bg-border-dark px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 dark:hover:bg-card-hover">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                  Edit Profile
                </button>
              </div>
            </div>
            {/* Settings Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Burnout Threshold */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 md:col-span-2 lg:col-span-1">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400">
                    <span className="material-symbols-outlined">vital_signs</span>
                  </div>
                  <h3 className="text-lg font-bold">Burnout Alert Threshold</h3>
                </div>
                <p className="mb-8 text-sm text-gray-500 dark:text-text-muted">
                  Adjust AI sensitivity to stress patterns. Higher sensitivity triggers earlier wellness interventions.
                </p>
                <div className="mb-2 flex justify-between text-xs font-medium uppercase tracking-wider text-gray-400">
                  <span>Relaxed</span>
                  <span className="text-primary">Balanced</span>
                  <span>Sensitive</span>
                </div>
                <div className="relative mb-6 h-12 w-full">
                  <input className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-black/40 accent-primary focus:outline-none focus:ring-2 focus:ring-primary/50" max="100" min="0" type="range" defaultValue="65"/>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 dark:bg-black/20 p-3">
                  <span className="material-symbols-outlined text-gray-400">info</span>
                  <p className="text-xs text-gray-500 dark:text-text-muted">Current setting will alert you when stress markers exceed 65% for 4 consecutive hours.</p>
                </div>
              </div>
              {/* Notification Preferences */}
              <div className="rounded-2xl bg-white dark:bg-surface-dark p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 lg:col-span-1">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <span className="material-symbols-outlined">notifications_active</span>
                  </div>
                  <h3 className="text-lg font-bold">Notifications</h3>
                </div>
                <div className="space-y-4">
                  <label className="flex cursor-pointer items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-medium">Push Notifications</span>
                      <span className="text-xs text-gray-500 dark:text-text-muted">Instant alerts on your mobile device</span>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-black/40 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </div>
                  </label>
                  <hr className="border-gray-100 dark:border-white/5" />
                  <label className="flex cursor-pointer items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-medium">Email Digests</span>
                      <span className="text-xs text-gray-500 dark:text-text-muted">Weekly wellness summary</span>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-black/40 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </div>
                  </label>
                  <hr className="border-gray-100 dark:border-white/5" />
                  <label className="flex cursor-pointer items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-medium">Desktop Alerts</span>
                      <span className="text-xs text-gray-500 dark:text-text-muted">Pop-ups during work hours</span>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-black/40 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </div>
                  </label>
                </div>
              </div>
              {/* Integrations */}
              <div className="rounded-2xl bg-white dark:bg-surface-dark p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 lg:col-span-1">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      <span className="material-symbols-outlined">hub</span>
                    </div>
                    <h3 className="text-lg font-bold">Integrations</h3>
                  </div>
                  <button className="text-sm font-bold text-primary hover:text-green-400">View All</button>
                </div>
                <div className="flex flex-col gap-4">
                  {/* Integration Item 1 */}
                  <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-border-dark bg-gray-50 dark:bg-black/20 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtz3h_yUC58837i5c2Bj-BO0I-6__T7zfqTqStWfhpKAzBabIVxBZ6frQWZePnyRrathIdJCXqFqoxi5VhPNbQuYBgAtqxPwUofqjLNWaW7uSPBqZuQo1RjI3W6u3w-WccGW0oYAlSA1AKMdJy-sCg-G7vncEwFfcs0ramtbQ0a0-99ITFklBVO9wM3irgrOek_XzULxa1v9M-LaVrsIg0uwLuW5Yw0DtCmazjIlsDduZgGs_UizjWLsdTyRR_A4H1tFeFR1yCT6Y" alt="Google Calendar Logo" className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Google Calendar</p>
                        <p className="text-xs text-primary flex items-center gap-1">
                          <span className="inline-block size-1.5 rounded-full bg-primary"></span>
                          Synced
                        </p>
                      </div>
                    </div>
                    <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-600 dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined">settings</span>
                    </button>
                  </div>
                  {/* Integration Item 2 */}
                  <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-border-dark bg-gray-50 dark:bg-black/20 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full bg-[#0078D4] text-white shadow-sm">
                        <span className="material-symbols-outlined text-lg">calendar_month</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Outlook</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Not connected</p>
                      </div>
                    </div>
                    <button className="rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent px-3 py-1 text-xs font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-white/5">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
              {/* Privacy & Account */}
              <div className="rounded-2xl bg-white dark:bg-surface-dark p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 lg:col-span-1">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    <span className="material-symbols-outlined">shield_person</span>
                  </div>
                  <h3 className="text-lg font-bold">Account Privacy</h3>
                </div>
                <div className="space-y-3">
                  <button className="flex w-full items-center justify-between rounded-lg p-3 text-left hover:bg-gray-50 dark:hover:bg-black/20 transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">lock_reset</span>
                      <span className="text-sm font-medium">Change Password</span>
                    </div>
                    <span className="material-symbols-outlined text-sm text-gray-400">arrow_forward_ios</span>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-lg p-3 text-left hover:bg-gray-50 dark:hover:bg-black/20 transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">cloud_download</span>
                      <span className="text-sm font-medium">Download My Data</span>
                    </div>
                    <span className="material-symbols-outlined text-sm text-gray-400">arrow_forward_ios</span>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-lg p-3 text-left hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-red-400 group-hover:text-red-500">delete</span>
                      <span className="text-sm font-medium text-red-500">Delete Account</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
