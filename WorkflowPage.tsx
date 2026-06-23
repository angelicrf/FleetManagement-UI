// WorkflowsPage.tsx
import { useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { FilterBar } from './FilterBar';
import { WorkflowTable } from './WorkflowTable';

type Filter = {
  key: string;
  value: string;
};

export default function WorkflowsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Parse filters from URL (same format as the real page)
  const filters: Filter[] = useMemo(() => {
    const raw = searchParams.get('filters');
    if (!raw) return [];

    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, [searchParams]);

  // Update URL when filters change
  const updateFilters = (newFilters: Filter[]) => {
    const params = new URLSearchParams(searchParams);
    if (newFilters.length > 0) {
      params.set('filters', JSON.stringify(newFilters));
    } else {
      params.delete('filters');
    }
    setSearchParams(params, { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Workflows</h1>

        <FilterBar 
          filters={filters} 
          onFiltersChange={updateFilters} 
        />

        <WorkflowTable filters={filters} />
      </div>
    </div>
  );
}
