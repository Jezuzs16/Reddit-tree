import { House, TrendingUp, Compass, List } from 'lucide-react';

export const SideNavbar = () => {
  return (
    <aside className="flex flex-col p-4 space-y-2 lg:flex bg-background border-r border-outline-variant h-[calc(100vh-48px)] w-64 sticky top-12 font-inter text-sm font-medium">
        <div className="mb-4">
        <h2 className="px-3 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Feeds</h2>
        <p className="px-3 text-[10px] text-on-surface-variant/60">Browse your interests</p>
        </div>
        <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high transition-all active:scale-95 duration-100 rounded-md" href="#">
        <span className="material-symbols-outlined" data-icon="home"><House /></span>
        <span>Home</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 bg-surface-container-high text-on-surface rounded-md transition-all active:scale-95 duration-100" href="#">
        <span className="material-symbols-outlined" data-icon="trending_up"><TrendingUp /></span>
        <span>Popular</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high transition-all active:scale-95 duration-100 rounded-md" href="#">
        <span className="material-symbols-outlined" data-icon="explore"><Compass /></span>
        <span>Explore</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high transition-all active:scale-95 duration-100 rounded-md" href="#">
        <span className="material-symbols-outlined" data-icon="list"><List /></span>
        <span>All</span>
        </a>
    </aside>
  )
}

export default SideNavbar