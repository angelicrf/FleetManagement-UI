import React, { useMemo } from 'react';
import type { OverviewField } from '../types';

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
  const defaultFields = useMemo<OverviewField[]>(
    () => [
      { label: 'Vehicle revision', value: 'v1p5p1' },
      {
        label: 'Last contact',
        value: (
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            2026-06-18 19:57 UTC
          </span>
        ),
      },
      { label: 'SMA altitude (km)', value: '197' },
      { label: 'Payload priority', value: '0' },
      {
        label: 'Enabled',
        value: (
          <span className="flex items-center gap-1 text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            false
          </span>
        ),
      },
      { label: 'User beams enabled', value: <span className="text-emerald-400">true</span> },
      {
        label: 'Payload enabled',
        value: (
          <span className="flex items-center gap-1 text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            false
          </span>
        ),
      },
      { label: 'Limit Availability to Unreliable', value: 'false' },
      { label: 'JSPOC ephemeris export enabled', value: 'false' },
      { label: 'Launch Group', value: 'group4_11' },
      { label: 'Launch Time', value: '2022-02-25 12:00 UTC' },
    ],
    []
  );

  const displayFields = fields ?? defaultFields;

  return (
    <div className="flex w-1/4 flex-col gap-3 overflow-y-auto">
      <div className="card p-3">
        <h3 className="mb-3 text-sm font-medium">Overview</h3>
        <div className="space-y-2 text-xs">
          {displayFields.map((field, idx) => (
            <div key={idx} className="flex justify-between gap-3">
              <span className="text-slate-400">{field.label}</span>
              <span className="text-right">{field.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-3">
        <h3 className="mb-2 text-sm font-medium">Tags</h3>
        <div className="space-y-1 text-xs leading-relaxed text-slate-300">
          {tags.map((tag, idx) => (
            <div key={idx}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(OverviewSidebar);
