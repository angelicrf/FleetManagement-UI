// ======================
// components/OverviewSidebar.tsx
// ======================
import React, { useMemo } from 'react';
import { OverviewField } from '../types';

interface OverviewSidebarProps {
  fields?: OverviewField[];
  tags?: string[];
}

const OverviewSidebar: React.FC<OverviewSidebarProps> = ({
  fields,
  tags = [
    '7 5 min power aware heuristic (725), all satellites.automated (16K),',
    'coverage critical sats 20230109 (1.4K),',
    'dead phase of flight sats.automated (1.6K),',
    'dead satellites.automated (1.7K),',
    'deorbit authorized permanent.aut',
  ],
}) => {
  const defaultFields = useMemo<OverviewField[]>(() => [
    { label: 'Vehicle revision', value: 'v1p5p1' },
    {
      label: 'Last contact',
      value: (
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
          2026-06-18 19:57 UTC
        </span>
      ),
      isAlert: true,
    },
    { label: 'SMA altitude (km)', value: '197' },
    { label: 'Payload priority', value: '0' },
    {
      label: 'Enabled',
      value: (
        <span className="flex items-center gap-1 text-red-400">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
          false
        </span>
      ),
      isAlert: true,
    },
    { label: 'User beams enabled', value: <span className="text-emerald-400">true</span> },
    {
      label: 'Payload enabled',
      value: (
        <span className="flex items-center gap-1 text-red-400">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
          false
        </span>
      ),
      isAlert: true,
    },
    { label: 'Limit Availability to Unreliable', value: 'false' },
    { label: 'JSPOC ephemeris export enabled', value: 'false' },
    { label: 'Launch Group', value: 'group4_11' },
    { label: 'Launch Time', value: '2022-02-25 12:00 UTC' },
  ], []);

  const displayFields = fields || defaultFields;

  return (
    <div className="w-1/4 flex flex-col gap-3 overflow-y-auto">
      {/* Overview Card */}
      <div className="bg-slate-900/80 border border-slate-700/60 rounded-lg p-3">
        <h3 className="font-medium mb-3 text-sm">Overview</h3>
        <div className="space-y-2 text-xs">
          {displayFields.map((field, idx) => (
            <div key={idx} className="flex justify-between">
              <span className="text-slate-400">{field.label}</span>
              <span>{field.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags Card */}
      <div className="bg-slate-900/80 border border-slate-700/60 rounded-lg p-3">
        <h3 className="font-medium mb-2 text-sm">Tags</h3>
        <div className="text-xs text-slate-300 leading-relaxed space-y-1">
          {tags.map((tag, idx) => (
            <div key={idx}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(OverviewSidebar);
