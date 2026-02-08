import { Outlet } from 'react-router-dom';

export default function SimpleLayout() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-text-main">
      <Outlet />
    </div>
  );
}
