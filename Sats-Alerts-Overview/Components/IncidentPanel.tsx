// ======================
// components/IncidentPanel.tsx
// ======================
import React, { useState, useMemo, useCallback } from 'react';
import { SubTab, TimelineItem } from '../types';

interface IncidentPanelProps {
  incidentId?: string;
  timelineWidth?: number;
}

const IncidentPanel: React.FC<IncidentPanelProps> = ({
  incidentId = 'INC-33995',
  timelineWidth = 50,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('evaluations');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['1', '2', '5']));

  const toggleExpand = useCallback((id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const subTabs = useMemo(() => [
    { id: 'evaluations' as SubTab, label: 'Evaluations', icon: 'fa-list' },
    { id: 'comments' as SubTab, label: 'Comments' },
    { id: 'actions' as SubTab, label: 'Actions' },
    { id: 'alerts' as SubTab, label: 'Alerts' },
    { id: 'notifications' as SubTab, label: 'Notifications' },
    { id: 'procedures' as SubTab, label: 'Procedures' },
  ], []);

  const timelineItems = useMemo<TimelineItem[]>(() => [
    {
      id: '1',
      type: 'evaluation',
      timestamp: '2026-06-24 19:08 UTC',
      author: 'David Peterson',
      content: (
        <div className="mt-2 text-xs space-y-1">
          <div><span className="text-slate-400">STATE</span> New → Closed</div>
          <div className="text-orange-400">Comment: RIP</div>
        </div>
      ),
    },
    {
      id: '2',
      type: 'automation',
      timestamp: '2026-06-20 18:48 UTC',
      author: 'NOC Incident Worker Atl',
      content: (
        <div className="mt-2 text-xs">
          <div className="text-orange-400 mb-1">Comment:</div>
          <div className="text-slate-300 leading-relaxed">
            Automation: Force closing the following alerts at 2026-06-20T18:48:00.006593Z since satellite marked launched=True and enabled=False:
            <ul className="list-disc ml-4 mt-1 text-slate-400">
              <li>dfd84294-d852-c332-6fec-890b149ced3a</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: '3',
      type: 'alert',
      timestamp: '2026-06-18 19:57 UTC',
      title: 'calculon',
      status: 'Inactive',
      content: (
        <div className="flex items-center gap-2 text-xs">
          <span className="font-medium text-orange-300">calculon</span>
          <span className="text-slate-400">No remaining transitions</span>
          <span className="bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded text-[10px]">Inactive</span>
        </div>
      ),
    },
    {
      id: '4',
      type: 'alert',
      timestamp: '2026-06-18 19:57 UTC',
      title: 'calculon',
      status: 'Inactive',
      content: (
        <div className="flex items-center gap-2 text-xs">
          <span className="font-medium text-orange-300">calculon</span>
          <span className="text-slate-400">No remaining transitions</span>
          <span className="bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded text-[10px]">Inactive</span>
        </div>
      ),
    },
    {
      id: '5',
      type: 'automation',
      timestamp: '2026-06-18 19:57 UTC',
      author: 'NOC Incident Worker Sea',
      content: (
        <div className="mt-2 text-xs space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-slate-500 text-[10px] mb-0.5">CATEGORY</div>
              <div>Vehicle Safehold → Stuck in Retrograde</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] mb-0.5">PRIORITY</div>
              <div>Medium → High</div>
            </div>
          </div>
          <div>
            <div className="text-orange-400 mb-1">Comment:</div>
            <div className="space-y-1">
              <div>
                <span className="text-blue-400 font-medium">Automation Name:</span>{' '}
                <a href="#" className="text-blue-400 hover:underline">Fleet Management</a>
              </div>
              <div className="text-slate-300">
                <span className="font-medium">Alerts:</span>
                <ul className="list-disc ml-4 mt-0.5 text-slate-400">
                  <li>satfc1 long_duration_safehold</li>
                  <li>calculon No remaining transitions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: '6',
      type: 'comment',
      timestamp: '2026-06-17 14:22 UTC',
      author: 'Angelique Refahiyat',
      content: (
        <div className="mt-2 text-xs">
          <div className="text-emerald-400">Comment:</div>
          <div className="text-slate-300">Satellite attitude recovered after reboot. Monitoring for recurrence.</div>
        </div>
      ),
    },
    {
      id: '7',
      type: 'action',
      timestamp: '2026-06-17 11:45 UTC',
      author: 'System',
      content: (
        <div className="mt-2 text-xs">
          <div className="text-purple-400">Action taken:</div>
          <div className="text-slate-300">Executed safehold recovery procedure (v2.3)</div>
        </div>
      ),
    },
  ], []);

  const getIcon = useCallback((type: TimelineItem['type']) => {
    switch (type) {
      case 'evaluation': return { icon: 'fa-file-lines', bg: 'bg-blue-600/20', color: 'text-blue-400' };
      case 'automation': return { icon: 'fa-gear', bg: 'bg-slate-700', color: 'text-slate-300' };
      case 'alert': return { icon: 'fa-triangle-exclamation', bg: 'bg-orange-600/20', color: 'text-orange-400' };
      case 'comment': return { icon: 'fa-comment', bg: 'bg-emerald-600/20', color: 'text-emerald-400' };
      case 'action': return { icon: 'fa-play', bg: 'bg-purple-600/20', color: 'text-purple-400' };
      default: return { icon: 'fa-circle', bg: 'bg-slate-700', color: 'text-slate-300' };
    }
  }, []);

  return (
    <div className="w-1/2 flex flex-col overflow-hidden" style={{ width: `${timelineWidth}%` }}>
      {/* Incident Header */}
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold">{incidentId}</h2>
          <button className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-600 hover:bg-blue-500 rounded transition-colors">
            Links <i className="fa-solid fa-chevron-down text-[10px]" />
          </button>
        </div>
        <button className="flex items-center gap-1 px-3 py-1.5 text-xs bg-blue-600 hover:bg-blue-500 rounded font-medium transition-colors">
          Incident <i className="fa-solid fa-chevron-down text-[10px]" />
        </button>
      </div>

      {/* Metadata Row */}
      <div className="px-4 py-2 border-b border-slate-800 grid grid-cols-7 gap-2 text-[11px]">
        <div>
          <div className="text-slate-500 mb-0.5 flex items-center gap-1">AUTOMATION <i className="fa-solid fa-circle-info text-[9px]" /></div>
          <div className="text-blue-400">Fleet Management</div>
        </div>
        <div>
          <div className="text-slate-500 mb-0.5 flex items-center gap-1">STATE <i className="fa-solid fa-circle-info text-[9px]" /></div>
          <div><span className="bg-emerald-600/20 text-emerald-400 px-1.5 py-0.5 rounded text-[10px]">Closed</span></div>
        </div>
        <div>
          <div className="text-slate-500 mb-0.5 flex items-center gap-1">SNOOZED UNTIL <i className="fa-solid fa-circle-info text-[9px]" /></div>
          <div>-</div>
        </div>
        <div>
          <div className="text-slate-500 mb-0.5 flex items-center gap-1">PRIORITY <i className="fa-solid fa-circle-info text-[9px]" /></div>
          <div><span className="bg-red-600/20 text-red-400 px-1.5 py-0.5 rounded text-[10px]">High</span></div>
        </div>
        <div>
          <div className="text-slate-500 mb-0.5 flex items-center gap-1">TEAM <i className="fa-solid fa-circle-info text-[9px]" /></div>
          <div>Vehicle GNC</div>
        </div>
        <div>
          <div className="text-slate-500 mb-0.5 flex items-center gap-1">OWNER <i className="fa-solid fa-circle-info text-[9px]" /></div>
          <div>-</div>
        </div>
        <div>
          <div className="text-slate-500 mb-0.5 flex items-center gap-1">CATEGORY <i className="fa-solid fa-circle-info text-[9px]" /></div>
          <div>Stuck in Retrograde</div>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="px-4 py-2 border-b border-slate-800 flex items-center gap-1 overflow-x-auto">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`px-2.5 py-1 text-xs rounded flex items-center gap-1 transition-colors ${
              activeSubTab === tab.id
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            {tab.icon && <i className={`fa-solid ${tab.icon} text-[10px]`} />}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Action Bar */}
      <div className="px-4 py-2 border-b border-slate-800 flex items-center gap-2">
        <button className="w-7 h-7 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded transition-colors">
          <i className="fa-solid fa-plus text-xs" />
        </button>
        <button className="px-3 py-1 text-xs bg-slate-800 hover:bg-slate-700 rounded transition-colors">Evaluate</button>
        <button className="px-3 py-1 text-xs bg-slate-800 hover:bg-slate-700 rounded transition-colors">Other Action</button>
        <button className="px-3 py-1 text-xs bg-slate-800 hover:bg-slate-700 rounded transition-colors">Procedure</button>
      </div>

      {/* Timeline List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {timelineItems.map((item) => {
          const isExpanded = expandedItems.has(item.id);
          const iconData = getIcon(item.type);

          return (
            <div
              key={item.id}
              className={`bg-slate-900/80 border border-slate-700/60 rounded-lg transition-all ${
                isExpanded ? 'ring-1 ring-blue-500/30' : ''
              }`}
            >
              <div
                className="flex items-start gap-3 p-3 cursor-pointer hover:bg-slate-800/40"
                onClick={() => toggleExpand(item.id)}
              >
                <div className={`mt-0.5 w-6 h-6 rounded-full ${iconData.bg} flex items-center justify-center flex-shrink-0`}>
                  <i className={`fa-solid ${iconData.icon} ${iconData.color} text-xs`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-400">{item.timestamp}</span>
                      <span className="font-medium capitalize">{item.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.author && <span className="text-xs text-slate-400">{item.author}</span>}
                      <i className="fa-solid fa-ellipsis text-slate-500" />
                    </div>
                  </div>

                  {/* Always show compact content for alerts, full for others when expanded */}
                  {(item.type === 'alert' || isExpanded) && item.content}
                </div>

                <i
                  className={`fa-solid fa-chevron-down text-slate-500 text-xs mt-1 transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(IncidentPanel);
