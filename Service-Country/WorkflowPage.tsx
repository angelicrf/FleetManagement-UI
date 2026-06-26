// WorkflowsPage.tsx
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { Navbar } from './Navbar';
import { FilterControls } from './FilterControls';
import { WorkItemsTable } from './WorkItemsTable';

type Filter = {
  key: string;
  value: string;
};

export default function WorkItemsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

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

  const updateFilters = (newFilters: Filter[]) => {
    const params = new URLSearchParams(searchParams);
    if (newFilters.length > 0) {
      params.set('filters', JSON.stringify(newFilters));
    } else {
      params.delete('filters');
    }
    setSearchParams(params, { replace: true });
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('filters');
    setSearchParams(params, { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <FilterControls 
            filters={filters} 
            onFiltersChange={updateFilters} 
            onClearFilters={clearFilters}
          />

          <WorkItemsTable filters={filters} />
        </div>
      </main>
    </div>
  );
}
