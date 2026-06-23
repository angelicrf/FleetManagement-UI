// WorkflowTable.tsx (basic dummy version)
import { useMemo } from 'react';

type Filter = { key: string; value: string };

interface WorkflowTableProps {
  filters: Filter[];
}

export function WorkflowTable({ filters }: WorkflowTableProps) {
  // Dummy data
  const allWorkflows = [
    { id: 51, code: 'DJ', status: 'running', created_at: '2026-06-20' },
    { id: 52, code: 'DJ', status: 'completed', created_at: '2026-06-19' },
    { id: 53, code: 'AB', status: 'failed', created_at: '2026-06-18' },
    { id: 54, code: 'DJ', status: 'running', created_at: '2026-06-21' },
  ];

  // Very basic filtering (you can make this smarter later)
  const filteredWorkflows = useMemo(() => {
    return allWorkflows.filter((workflow) => {
      return filters.every((filter) => {
        if (filter.key === 'code_equal_to') {
          return workflow.code === filter.value;
        }
        // Add more filter logic here as needed
        return true;
      });
    });
  }, [filters]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Code</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Created</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredWorkflows.length > 0 ? (
            filteredWorkflows.map((wf) => (
              <tr key={wf.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{wf.id}</td>
                <td className="px-6 py-4 font-mono text-sm">{wf.code}</td>
                <td className="px-6 py-4 text-sm capitalize">{wf.status}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{wf.created_at}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                No workflows match current filters
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
