// ======================
// components/AlertsTable.tsx
// ======================
import React, { useMemo } from 'react';

interface AlertRow {
  node: string;
  subsystem: string;
  alert: string;
  startTime: string;
  latestTime: string;
  function: string;
  active: boolean;
}

interface AlertsTableProps {
  alerts?: AlertRow[];
  title?: string;
}

const AlertsTable: React.FC<AlertsTableProps> = ({
  alerts = [],
  title = 'Alerts (Last 24 Hours)',
}) => {
  const hasAlerts = useMemo(() => alerts.length > 0, [alerts]);

  const columns = useMemo(() => [
    'Node', 'Subsystem', 'Alert', 'Start Time', 'Latest Time ↓', 'Function', 'Active'
  ], []);

  return (
    <div className="bg-slate-900/80 border border-slate-700/60 rounded-lg m-3 mb-0 flex flex-col" style={{ height: '220px' }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/60">
        <h3 className="font-medium text-sm">{title}</h3>
        <button className="text-slate-400 hover:text-white transition-colors">
          <i className="fa-solid fa-up-right-from-square text-xs" />
        </button>
      </div>

      <div className="overflow-auto flex-1">
        <table className="w-full text-xs">
          <thead className="bg-slate-800/50 sticky top-0">
            <tr className="text-slate-400">
              {columns.map((col) => (
                <th key={col} className="text-left px-3 py-2 font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {hasAlerts ? (
              alerts.map((alert, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40">
                  <td className="px-3 py-2">{alert.node}</td>
                  <td className="px-3 py-2">{alert.subsystem}</td>
                  <td className="px-3 py-2">{alert.alert}</td>
                  <td className="px-3 py-2">{alert.startTime}</td>
                  <td className="px-3 py-2">{alert.latestTime}</td>
                  <td className="px-3 py-2">{alert.function}</td>
                  <td className="px-3 py-2">
                    {alert.active ? (
                      <span className="text-emerald-400">Yes</span>
                    ) : (
                      <span className="text-slate-500">No</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="hover:bg-slate-800/40">
                <td className="px-3 py-2 text-slate-500" colSpan={7}>
                  No active alerts in the last 24 hours
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(AlertsTable);
