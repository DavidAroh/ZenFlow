import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { name: 'Wellness Insights', path: '/', icon: 'dashboard' },
    { name: 'Work Log', path: '/work-log', icon: 'schedule' },
    { name: 'Tasks', path: '/tasks', icon: 'view_kanban' },
    { name: 'TrackWell', path: '/track-well', icon: 'bar_chart' },
    { name: 'Focus Mode', path: '/focus-mode', icon: 'timer' },
    { name: 'Break', path: '/break', icon: 'self_improvement' },
    { name: 'Briefing', path: '/morning-briefing', icon: 'wb_sunny' },
    { name: 'Mood', path: '/mood-check', icon: 'mood' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 flex-shrink-0 border-r border-border-dark hidden md:flex flex-col bg-background-dark justify-between p-4 h-screen sticky top-0 overflow-y-auto">
      <div className="flex flex-col gap-6">
        {/* User Profile */}
        <div className="flex items-center gap-3 px-2">
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 bg-gray-700 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAL_1Fj7QUDdo6MGsM3YrJ_7RaWHBlYUY_muKQ6X-OWQmbSiz4saoA4z6Dk5EYal9xkv3H-8swCeFL25rqjS4mbZMaUA3OpCzt-dbKio5F614Rtu5sLGwW8I_GE9MlQIUbONHXPgOMflImVf_Neqr1PGwk3GrcH8gjcUrwmeu1AZM9QbP9kjH9JIbJU0TC9rdRmGtOHYsH0W6ouhRWgCgCxCe4hXQb4DccA4sBuqZ1yvJsl45lcUirEZPIRyo5wKrbdjJgNMJKE7tU")'}}></div>
          <div className="flex flex-col overflow-hidden">
            <h1 className="text-white text-base font-medium leading-normal truncate">Sarah Chen</h1>
            <p className="text-text-muted text-sm font-normal leading-normal truncate">Pro Plan</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group ${
                isActive(link.path)
                  ? 'bg-border-dark'
                  : 'hover:bg-border-dark'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive(link.path) ? 'text-white' : 'text-text-muted group-hover:text-white'}`}>
                {link.icon}
              </span>
              <p className={`${isActive(link.path) ? 'text-white' : 'text-text-muted group-hover:text-white'} text-sm font-medium leading-normal`}>
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-border-dark">
         <Link
            to="/settings"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group ${
              isActive('/settings')
                ? 'bg-border-dark'
                : 'hover:bg-border-dark'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive('/settings') ? 'text-white' : 'text-text-muted group-hover:text-white'}`}>
              settings
            </span>
            <p className={`${isActive('/settings') ? 'text-white' : 'text-text-muted group-hover:text-white'} text-sm font-medium leading-normal`}>
              Settings
            </p>
          </Link>
      </div>
    </div>
  );
}
