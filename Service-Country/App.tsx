// App.tsx or main page
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { WorkflowTable } from './WorkflowTable';
import { FilterBar } from './FilterBar';

export default function WorkflowsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Parse the same format as the real URL
  const filters = useMemo(() => {
    const raw = searchParams.get('filters');
    try {
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }, [searchParams]);

  const updateFilters = (newFilters: any[]) => {
    const params = new URLSearchParams(searchParams);
    params.set('filters', JSON.stringify(newFilters));
    setSearchParams(params);
  };

  return (
    <div className="flex h-screen flex-col">
      {/* Top nav / header (copy the real one visually) */}
      <header className="...">NOC Workflows</header>

      <div className="flex flex-1">
        {/* Sidebar if the real page has one */}
        
        <main className="flex-1 p-4">
          <FilterBar 
            filters={filters} 
            onChange={updateFilters} 
          />
          
          <WorkflowTable 
            filters={filters} 
          />
        </main>
      </div>
    </div>
  );
}
