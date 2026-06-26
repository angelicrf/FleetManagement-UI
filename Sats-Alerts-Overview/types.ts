// ======================
// types.ts (shared types)
// ======================
export interface TimelineItem {
  id: string;
  type: 'evaluation' | 'automation' | 'alert' | 'comment' | 'action' | 'procedure';
  timestamp: string;
  author?: string;
  title?: string;
  status?: string;
  content: React.ReactNode;
  isExpanded?: boolean;
}

export interface OverviewField {
  label: string;
  value: string | React.ReactNode;
  isAlert?: boolean;
}

export type ActiveTab = 'overview' | 'gnc' | 'payload' | 'power' | 'incidents';
export type SubTab = 'evaluations' | 'comments' | 'actions' | 'alerts' | 'notifications' | 'procedures';
