import { Search, Bell, MessageSquareText, Plus } from 'lucide-react';

export const TopNavbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 h-12 w-full sticky top-0 z-50 bg-surface border-b border-outline-variant font-inter text-sm antialiased">
        <div className="flex items-center gap-4">
        <span className="text-xl font-black text-reddit-orange tracking-tighter">Reddit</span>
        <div className="hidden md:flex items-center gap-4 ml-4">
        <a className="text-on-surface font-bold border-b-2 border-reddit-orange pb-2" href="#">Popular</a>
        <a className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors px-2 py-1 rounded" href="#">All</a>
        <a className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors px-2 py-1 rounded" href="#">Random</a>
        </div>
        </div>
        <div className="flex-1 max-w-xl mx-8">
        <div className="relative flex items-center">
        <span className="material-symbols-outlined absolute left-3 text-on-surface-variant">
            <Search />
        </span>
        <input className="w-full bg-[#272729] border-none rounded-full py-1.5 pl-10 pr-4 focus:ring-1 focus:ring-reddit-orange text-sm text-on-surface placeholder-on-surface-variant" placeholder="Search Reddit" type="text"/>
        </div>
        </div>
        <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
        <span className="material-symbols-outlined text-on-surface-variant">
            <Bell />
        </span>
        </button>
        <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
        <span className="material-symbols-outlined text-on-surface-variant">
            <MessageSquareText />
        </span>
        </button>
        <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
        <span className="material-symbols-outlined text-on-surface-variant">
            <Plus />
        </span>
        </button>
        <button className="ml-2 px-4 py-1.5 font-bold text-sm text-on-surface hover:bg-surface-container-high rounded-full">Log In</button>
        <button className="px-4 py-1.5 font-bold text-sm bg-reddit-orange text-white hover:brightness-110 rounded-full">Sign Up</button>
        </div>
    </nav>
  )
}

export default TopNavbar