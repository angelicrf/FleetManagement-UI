// ======================
// types.ts (shared types)
// ======================
import type { ReactNode } from 'react';

export interface TimelineItem {
  id: string;
  type: 'evaluation' | 'automation' | 'alert' | 'comment' | 'action' | 'procedure';
  timestamp: string;
  author?: string;
  title?: string;
  status?: string;
  content: ReactNode;
  isExpanded?: boolean;
}

export interface OverviewField {
  label: string;
  value: string | ReactNode;
  isAlert?: boolean;
}

export type ActiveTab = 'overview' | 'gnc' | 'payload' | 'power' | 'incidents';
export type SubTab = 'evaluations' | 'comments' | 'actions' | 'alerts' | 'notifications' | 'procedures';
