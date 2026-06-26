// ======================
// App.tsx
// ======================
import React, { useState, useCallback, useMemo } from 'react';
import TopNavbar from './components/TopNavbar';
import AssetTabs from './components/AssetTabs';
import AlertsTable from './components/AlertsTable';
import OverviewSidebar from './components/OverviewSidebar';
import AssetCards from './components/AssetCards';
import IncidentPanel from './components/IncidentPanel';
import { ActiveTab } from './types';

// Make sure Font Awesome is loaded in your index.html or via CDN
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [timelineWidth, setTimelineWidth] = useState(50);

  const handleTabChange = useCallback((tab: ActiveTab) => {
    setActiveTab(tab);
  }, []);

  const handleTimelineWidthChange = useCallback((width: number) => {
    setTimelineWidth(width);
  }, []);

  const handleReportOutage = useCallback(() => {
    console.log('Report Outage clicked');
    // Open modal or navigate
  }, []);

  const handleSearch = useCallback((query: string) => {
    console.log('Search:', query);
  }, []);

  // Memoize left panel width calculation
  const leftPanelStyle = useMemo(() => ({
    width: `${100 - timelineWidth}%`,
  }), [timelineWidth]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 text-sm font-sans">
      {/* Top Navigation */}
      <TopNavbar
        onReportOutage={handleReportOutage}
        onSearch={handleSearch}
      />

      {/* Asset Tabs / Secondary Nav */}
      <AssetTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        timelineWidth={timelineWidth}
        onTimelineWidthChange={handleTimelineWidthChange}
      />

      {/* Main Content - 50/50 split controlled by timelineWidth */}
      <div className="flex h-[calc(100vh-88px)]">
        {/* LEFT SIDE */}
        <div
          className="flex flex-col border-r border-slate-800 overflow-hidden transition-all duration-300"
          style={leftPanelStyle}
        >
          <AlertsTable />

          <div className="flex flex-1 overflow-hidden p-3 gap-3">
            <OverviewSidebar />
            <AssetCards />
          </div>
        </div>

        {/* RIGHT SIDE - Incident Panel */}
        <IncidentPanel timelineWidth={timelineWidth} />
      </div>
    </div>
  );
};

export default App;
