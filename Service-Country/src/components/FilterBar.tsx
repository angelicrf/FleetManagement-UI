import { useState } from 'react';

type Filter = { key: string; value: string };

interface FilterBarProps {
	filters: Filter[];
	onFiltersChange: (filters: Filter[]) => void;
}

export function FilterBar({ filters, onFiltersChange }: FilterBarProps) {
	const [newKey, setNewKey] = useState('');
	const [newValue, setNewValue] = useState('');

	const addFilter = () => {
		if (!newKey.trim() || !newValue.trim()) return;

		const newFilter: Filter = {
			key: newKey.trim(),
			value: newValue.trim(),
		};

		onFiltersChange([...filters, newFilter]);
		setNewKey('');
		setNewValue('');
	};

	const removeFilter = (index: number) => {
		const updated = filters.filter((_, i) => i !== index);
		onFiltersChange(updated);
	};

	return (
		<div className="mb-6">
			{/* Active Filters */}
			{filters.length > 0 && (
				<div className="mb-4 flex flex-wrap gap-2">
					{filters.map((filter, index) => (
						<div
							key={index}
							className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1 text-sm"
						>
							<span className="font-medium text-gray-700">{filter.key}</span>
							<span className="text-gray-500">=</span>
							<span className="font-mono text-blue-600">{filter.value}</span>
							<button
								onClick={() => removeFilter(index)}
								className="ml-1 text-gray-400 hover:text-red-500"
							>
								x
							</button>
						</div>
					))}
				</div>
			)}

			{/* Add Filter */}
			<div className="flex items-end gap-2">
				<div>
					<label className="mb-1 block text-xs text-gray-500">Key</label>
					<input
						type="text"
						value={newKey}
						onChange={(e) => setNewKey(e.target.value)}
						placeholder="code_equal_to"
						className="w-48 rounded border border-gray-300 px-3 py-2 text-sm"
					/>
				</div>
				<div>
					<label className="mb-1 block text-xs text-gray-500">Value</label>
					<input
						type="text"
						value={newValue}
						onChange={(e) => setNewValue(e.target.value)}
						placeholder="DJ"
						className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
						onKeyDown={(e) => e.key === 'Enter' && addFilter()}
					/>
				</div>
				<button
					onClick={addFilter}
					className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
				>
					Add Filter
				</button>
			</div>
		</div>
	);
}
