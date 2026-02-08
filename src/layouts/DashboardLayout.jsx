import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden font-display text-text-main">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-y-auto relative scroll-smooth">
        <Outlet />
      </div>
    </div>
  );
}
