import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import SimpleLayout from './layouts/SimpleLayout';

import WellnessInsights from './pages/WellnessInsights';
import WorkHoursLog from './pages/WorkHoursLog';
import MorningBriefing from './pages/MorningBriefing';
import FocusMode from './pages/FocusMode';
import ZenFocus from './pages/ZenFocus';
import TrackWell from './pages/TrackWell';
import BreakTime from './pages/BreakTime';
import Settings from './pages/Settings';
import MoodCheckIn from './pages/MoodCheckIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<WellnessInsights />} />
          <Route path="/work-log" element={<WorkHoursLog />} />
          <Route path="/track-well" element={<TrackWell />} />
        </Route>

        <Route element={<SimpleLayout />}>
          <Route path="/morning-briefing" element={<MorningBriefing />} />
          <Route path="/focus-mode" element={<FocusMode />} />
          <Route path="/tasks" element={<ZenFocus />} />
          <Route path="/break" element={<BreakTime />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/mood-check" element={<MoodCheckIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
