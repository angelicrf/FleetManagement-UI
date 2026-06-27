import { useState } from 'react';
import AssetTabs from './AssetTabs';
import TopNavbar from './TopNavbar';
import type { ActiveTab } from '../types';
import AlertsTable from './AlertsTable';
import OverviewSidebar from './OverviewSidebar';
import AssetCards from './AssetCards';
import IncidentPanel from './IncidentPanel';

export default function OverviewPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [timelineWidth, setTimelineWidth] = useState(50);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <TopNavbar />
      <AssetTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        timelineWidth={timelineWidth}
        onTimelineWidthChange={setTimelineWidth}
      />

      <main className="flex h-[calc(100vh-88px)] overflow-hidden">
        <section className="flex flex-col overflow-hidden border-r border-slate-800" style={{ width: `${100 - timelineWidth}%` }}>
          <AlertsTable />

          <div className="flex flex-1 gap-3 overflow-hidden p-3">
            <OverviewSidebar />
            <AssetCards />
          </div>
        </section>

        <IncidentPanel timelineWidth={timelineWidth} />
      </main>
    </div>
  );
}
