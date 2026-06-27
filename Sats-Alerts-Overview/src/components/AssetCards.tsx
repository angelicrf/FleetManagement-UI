import React from 'react';

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
  return (
    <div className="grid w-3/4 grid-cols-2 content-start gap-3 overflow-y-auto">
      <div className="card p-3">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-medium">Permanent Failures</h3>
          <button className="text-slate-400 transition-colors hover:text-white" aria-label="Open failures">
            <i className="fa-solid fa-up-right-from-square text-xs" />
          </button>
        </div>
        <div className="max-h-32 space-y-0.5 overflow-y-auto rounded bg-slate-950 p-2 font-mono text-xs text-slate-300">
          {permanentFailures.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      </div>

      <div className="card p-3">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-medium">Failure Mode Details</h3>
        </div>
        <div className="flex h-32 items-center justify-center rounded bg-slate-950 text-xs text-slate-500">No data</div>
      </div>

      <div className="card p-3">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-medium">Special Operational Concerns</h3>
        </div>
        <div className="flex h-24 items-center justify-center rounded bg-slate-950 text-xs text-slate-500">No data</div>
        <div className="mt-2 text-[10px] text-slate-500">
          Last Updated: 2026-02-02 18:57 UTC
          <br />
          By: Bella Wynocker
        </div>
      </div>

      <div className="card p-3">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-medium">Suppressed Alerts</h3>
          <button className="text-slate-400 transition-colors hover:text-white" aria-label="Open suppressed alerts">
            <i className="fa-solid fa-up-right-from-square text-xs" />
          </button>
        </div>
        <div className="flex h-24 items-center justify-center rounded bg-slate-950 text-xs text-slate-500">None Found</div>
      </div>

      <div className="card col-span-2 p-3">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-medium">Software Version</h3>
          <div className="flex items-center gap-2 text-slate-400">
            <button className="transition-colors hover:text-white" aria-label="Add version">
              <i className="fa-solid fa-plus text-xs" />
            </button>
            <button className="transition-colors hover:text-white" aria-label="View version history">
              <i className="fa-solid fa-clock-rotate-left text-xs" />
            </button>
            <button className="transition-colors hover:text-white" aria-label="Open versions">
              <i className="fa-solid fa-up-right-from-square text-xs" />
            </button>
          </div>
        </div>

        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-700 text-slate-400">
              <th className="w-24 py-1.5 text-left font-medium">Type</th>
              <th className="py-1.5 text-left font-medium">Value</th>
              <th className="w-32 py-1.5 text-left font-medium">Since</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {softwareVersions.map((row, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-1.5 py-1.5">
                  <i className="fa-solid fa-circle-info text-[10px] text-blue-400" />
                  {row.type}
                </td>
                <td className="py-1.5 font-mono text-[11px]">{row.value}</td>
                <td className="py-1.5 text-slate-400">{row.since ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(AssetCards);
