// ======================
// components/AssetTabs.tsx
// ======================
import React, { useMemo, useCallback } from 'react';
import { ActiveTab } from '../types';

interface AssetTabsProps {
  assetName?: string;
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onLinksClick?: () => void;
  timelineWidth?: number;
  onTimelineWidthChange?: (width: number) => void;
}

const AssetTabs: React.FC<AssetTabsProps> = ({
  assetName = 'satellite3633',
  activeTab,
  onTabChange,
  onLinksClick,
  timelineWidth = 50,
  onTimelineWidthChange,
}) => {
  const tabs = useMemo(() => [
    { id: 'overview' as ActiveTab, label: 'Overview' },
    { id: 'gnc' as ActiveTab, label: 'GNC' },
    { id: 'payload' as ActiveTab, label: 'Payload' },
    { id: 'power' as ActiveTab, label: 'Power' },
    { id: 'incidents' as ActiveTab, label: 'Incidents' },
  ], []);

  const handleTabClick = useCallback((tab: ActiveTab) => {
    onTabChange(tab);
  }, [onTabChange]);

  const handleWidthClick = useCallback(() => {
    // Cycle through common widths or open menu
    const nextWidth = timelineWidth === 50 ? 30 : timelineWidth === 30 ? 70 : 50;
    onTimelineWidthChange?.(nextWidth);
  }, [timelineWidth, onTimelineWidthChange]);

  return (
    <div className="bg-slate-900/90 border-b border-slate-800 px-4">
      <div className="flex items-center justify-between h-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span>{assetName}</span>
            <i className="fa-solid fa-lock text-slate-400 text-xs" />
            <i className="fa-solid fa-skull text-slate-400 text-xs" />
          </div>

          <div className="flex items-center gap-1 ml-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onLinksClick}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-slate-800 hover:bg-slate-700 rounded transition-colors"
          >
            Links <i className="fa-solid fa-chevron-down text-[10px]" />
          </button>
          <button
            onClick={handleWidthClick}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-slate-800 hover:bg-slate-700 rounded transition-colors"
          >
            {timelineWidth}% <i className="fa-solid fa-table-columns text-[10px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AssetTabs);
