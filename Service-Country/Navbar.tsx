import { useState } from 'react';

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-gray-900 text-white border-b border-gray-700">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 h-12">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <div className="w-7 h-7 bg-blue-500 rounded flex items-center justify-center text-sm font-bold">
              S
            </div>
            <span>StarOps</span>
          </div>

          {/* Main Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            <a href="#" className="px-3 py-1.5 rounded hover:bg-gray-800 text-white font-medium">
              Work Items
            </a>
            <a href="#" className="px-3 py-1.5 rounded hover:bg-gray-800 text-gray-300 hover:text-white">
              Incidents
            </a>
            <a href="#" className="px-3 py-1.5 rounded hover:bg-gray-800 text-gray-300 hover:text-white">
              Alerts
            </a>
            <a href="#" className="px-3 py-1.5 rounded hover:bg-gray-800 text-gray-300 hover:text-white">
              Dashboards
            </a>
            <a href="#" className="px-3 py-1.5 rounded hover:bg-gray-800 text-gray-300 hover:text-white">
              Reports
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search work items..."
              className="bg-gray-800 border border-gray-600 text-sm rounded-md pl-9 pr-3 py-1.5 w-64 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400"
            />
            <svg
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Notifications */}
          <button className="relative p-1.5 rounded hover:bg-gray-800 text-gray-300 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-800 px-2 py-1 rounded">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-medium">
              AR
            </div>
            <span className="text-sm hidden lg:block">Angelique R.</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Secondary bar (optional but common in these tools) */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between text-sm border-t border-gray-700">
        <div className="flex items-center gap-4 text-gray-300">
          <span className="text-white font-medium">Work Items</span>
          <span className="text-gray-500">/</span>
          <span>All Items</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-gray-300 hover:text-white px-2 py-1 rounded hover:bg-gray-700">
            Export
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium">
            + New Work Item
          </button>
        </div>
      </div>
    </header>
  );
}
