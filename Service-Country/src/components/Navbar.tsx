import { useState } from 'react';

export function Navbar() {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<header className="border-b border-gray-700 bg-gray-900 text-white">
			{/* Top Bar */}
			<div className="flex h-12 items-center justify-between px-4">
				{/* Left: Logo + Navigation */}
				<div className="flex items-center gap-6">
					{/* Logo */}
					<div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
						<div className="flex h-7 w-7 items-center justify-center rounded bg-blue-500 text-sm font-bold">
							S
						</div>
						<span>StarOps</span>
					</div>

					{/* Main Nav Links */}
					<nav className="hidden items-center gap-1 text-sm md:flex">
						<a href="#" className="rounded px-3 py-1.5 font-medium text-white hover:bg-gray-800">
							Work Items
						</a>
						<a href="#" className="rounded px-3 py-1.5 text-gray-300 hover:bg-gray-800 hover:text-white">
							Incidents
						</a>
						<a href="#" className="rounded px-3 py-1.5 text-gray-300 hover:bg-gray-800 hover:text-white">
							Alerts
						</a>
						<a href="#" className="rounded px-3 py-1.5 text-gray-300 hover:bg-gray-800 hover:text-white">
							Dashboards
						</a>
						<a href="#" className="rounded px-3 py-1.5 text-gray-300 hover:bg-gray-800 hover:text-white">
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
							className="w-64 rounded-md border border-gray-600 bg-gray-800 py-1.5 pl-9 pr-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						<svg
							className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>

					{/* Notifications */}
					<button className="relative rounded p-1.5 text-gray-300 hover:bg-gray-800 hover:text-white">
						<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
						</svg>
						<span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
					</button>

					{/* User Menu */}
					<div className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 hover:bg-gray-800">
						<div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-medium">
							AR
						</div>
						<span className="hidden text-sm lg:block">Angelique R.</span>
						<svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
						</svg>
					</div>
				</div>
			</div>

			{/* Secondary bar (optional but common in these tools) */}
			<div className="flex items-center justify-between border-t border-gray-700 bg-gray-800 px-4 py-2 text-sm">
				<div className="flex items-center gap-4 text-gray-300">
					<span className="font-medium text-white">Work Items</span>
					<span className="text-gray-500">/</span>
					<span>All Items</span>
				</div>
				<div className="flex items-center gap-3">
					<button className="rounded px-2 py-1 text-gray-300 hover:bg-gray-700 hover:text-white">
						Export
					</button>
					<button className="rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-blue-700">
						+ New Work Item
					</button>
				</div>
			</div>
		</header>
	);
}
