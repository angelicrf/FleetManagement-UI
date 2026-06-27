import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterBar } from './components/FilterBar';
import { WorkflowTable } from './components/WorkflowTable';

type Filter = {
	key: string;
	value: string;
};

export default function WorkflowsPage() {
	const [searchParams, setSearchParams] = useSearchParams();

	const filters = useMemo(() => {
		const raw = searchParams.get('filters');
		try {
			return raw ? (JSON.parse(raw) as Filter[]) : [];
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
		setSearchParams(params);
	};

	return (
		<div className="flex h-screen flex-col bg-gray-100">
			<header className="border-b border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800">
				NOC Workflows
			</header>

			<div className="flex flex-1">
				<main className="flex-1 p-4">
					<FilterBar filters={filters} onFiltersChange={updateFilters} />
					<WorkflowTable filters={filters} />
				</main>
			</div>
		</div>
	);
}
