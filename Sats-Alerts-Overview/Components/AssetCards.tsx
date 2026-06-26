// ======================
// components/AssetCards.tsx
// ======================
import React, { useMemo } from 'react';

interface SoftwareVersion {
  type: string;
  value: string;
  since?: string;
}

interface AssetCardsProps {
  permanentFailures?: string[];
  softwareVersions?: SoftwareVersion[];
}

const AssetCards: React.FC<AssetCardsProps> = ({
  permanentFailures = [
    'deorbit_authorized',
    'disable_attitude_aware_pro',
    'edr_satnet1_failed',
    'force_orbit_transfer_onst',
    'limit_max_burn_duration_t',
    'lswitch1_failed',
    'prop1_degraded_p_tank_sen',
    'sada1_failed',
  ],
  softwareVersions = [
    { type: 'Override', value: 'None' },
    {
      type: 'Assigned',
      value: '20260610.91496.12-change-47902-lclark4-artifact.21',
      since: '2026-06-18 18:46 UTC',
    },
    {
      type: 'Running',
      value: '20260324.84081',
      since: '2026-03-26 21:36 UTC',
    },
  ],
}) => {
  const cards = useMemo(() => [
    {
      title: 'Permanent Failures',
      hasExpand: true,
      content: (
        <div className="bg-slate-950 rounded p-2 text-xs font-mono text-slate-300 space-y-0.5 max-h-32 overflow-y-auto">
          {permanentFailures.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      ),
    },
    {
      title: 'Failure Mode Details',
      content: (
        <div className="bg-slate-950 rounded h-32 flex items-center justify-center text-slate-500 text-xs">
          No data
        </div>
      ),
    },
    {
      title: 'Special Operational Concerns',
      content: (
        <>
          <div className="bg-slate-950 rounded h-24 flex items-center justify-center text-slate-500 text-xs">
            No data
          </div>
          <div className="mt-2 text-[10px] text-slate-500">
            Last Updated: 2026-02-02 18:57 UTC<br />
            By: Bella Wynocker
          </div>
        </>
      ),
    },
    {
      title: 'Suppressed Alerts',
      hasExpand: true,
      content: (
        <div className="bg-slate-950 rounded h-24 flex items-center justify-center text-slate-500 text-xs">
          None Found
        </div>
      ),
    },
  ], [permanentFailures]);

  return (
    <div className="w-3/4 grid grid-cols-2 gap-3 content-start overflow-y-auto">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-slate-900/80 border border-slate-700/60 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-sm">{card.title}</h3>
            {card.hasExpand && (
              <button className="text-slate-400 hover:text-white transition-colors">
                <i className="fa-solid fa-up-right-from-square text-xs" />
              </button>
            )}
          </div>
          {card.content}
        </div>
      ))}

      {/* Software Version - spans 2 columns */}
      <div className="bg-slate-900/80 border border-slate-700/60 rounded-lg p-3 col-span-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-sm">Software Version</h3>
          <div className="flex items-center gap-2 text-slate-400">
            <button className="hover:text-white transition-colors">
              <i className="fa-solid fa-plus text-xs" />
            </button>
            <button className="hover:text-white transition-colors">
              <i className="fa-solid fa-clock-rotate-left text-xs" />
            </button>
            <button className="hover:text-white transition-colors">
              <i className="fa-solid fa-up-right-from-square text-xs" />
            </button>
          </div>
        </div>

        <table className="w-full text-xs">
          <thead>
            <tr className="text-slate-400 border-b border-slate-700">
              <th className="text-left py-1.5 font-medium w-24">Type</th>
              <th className="text-left py-1.5 font-medium">Value</th>
              <th className="text-left py-1.5 font-medium w-32">Since</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {softwareVersions.map((row, idx) => (
              <tr key={idx}>
                <td className="py-1.5 flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-info text-blue-400 text-[10px]" />
                  {row.type}
                </td>
                <td className="py-1.5 font-mono text-[11px]">{row.value}</td>
                <td className="py-1.5 text-slate-400">{row.since || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(AssetCards);
