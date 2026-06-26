// ======================
// components/TopNavbar.tsx
// ======================
import React, { useMemo, useCallback } from 'react';

interface TopNavbarProps {
  currentTime?: string;
  userName?: string;
  onReportOutage?: () => void;
  onSearch?: (query: string) => void;
}

const TopNavbar: React.FC<TopNavbarProps> = ({
  currentTime = '2026-06-26 21:35 UTC',
  userName = 'ANGELIQUE REFAHIYAT',
  onReportOutage,
  onSearch,
}) => {
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
  }, [onSearch]);

  const handleReportOutage = useCallback(() => {
    onReportOutage?.();
  }, [onReportOutage]);

  const menuItems = useMemo(() => [
    { label: 'PROCESS', hasDropdown: true },
    { label: 'STATUS', hasDropdown: true },
    { label: 'CONFIG', hasDropdown: true },
  ], []);

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="flex items-center justify-between px-4 h-11">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs font-medium">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="px-2 py-1 hover:bg-slate-800 rounded flex items-center gap-1 transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <i className="fa-solid fa-chevron-down text-[10px] opacity-60" />
                )}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search Assets"
              onChange={handleSearch}
              className="bg-slate-800 border border-slate-700 rounded-md pl-8 pr-3 py-1.5 text-xs w-48 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-2.5 top-2 text-slate-400 text-xs" />
          </div>

          <button
            onClick={handleReportOutage}
            className="bg-red-600 hover:bg-red-500 text-white text-xs font-medium px-3 py-1.5 rounded transition-colors"
          >
            Report Outage
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-xs">
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-medium">
            STARLINK
          </span>
          <span className="text-slate-400">{currentTime}</span>
          <span className="font-medium">{userName}</span>
        </div>
      </div>
    </header>
  );
};

export default React.memo(TopNavbar);