export const CommunitySideBar = () => {
  return (
    <aside className="hidden xl:block w-80 space-y-4">
        <div className="bg-surface border border-outline-variant rounded overflow-hidden">
        <div className="h-8 bg-reddit-orange"></div>
        <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">🎨</span>
        <h3 className="font-bold text-on-surface">r/UIUXDesign</h3>
        </div>
        <p className="text-sm text-on-surface-variant mb-4">A community dedicated to discussing user interface and user experience design principles, tools, and trends.</p>
        <div className="flex justify-between mb-4 border-b border-outline-variant pb-4">
        <div>
        <p className="text-sm font-bold text-on-surface">450k</p>
        <p className="text-[10px] text-on-surface-variant uppercase font-bold">Members</p>
        </div>
        <div>
        <p className="text-sm font-bold text-on-surface">1.2k</p>
        <p className="text-[10px] text-on-surface-variant uppercase font-bold">Online</p>
        </div>
        </div>
        <button className="w-full py-2 bg-reddit-orange text-white font-bold rounded-full hover:brightness-110 transition-all mb-2">Join Community</button>
        <button className="w-full py-2 border border-reddit-orange text-reddit-orange font-bold rounded-full hover:bg-reddit-orange/10 transition-all">Create Post</button>
        </div>
        </div>
        <div className="bg-surface border border-outline-variant rounded p-4">
        <h3 className="font-bold text-on-surface mb-3 text-xs uppercase tracking-wider">Rules</h3>
        <ol className="space-y-3">
        <li className="text-xs text-on-surface-variant pb-2 border-b border-outline-variant/30">1. Be respectful to fellow designers</li>
        <li className="text-xs text-on-surface-variant pb-2 border-b border-outline-variant/30">2. No self-promotion without flair</li>
        <li className="text-xs text-on-surface-variant pb-2 border-b border-outline-variant/30">3. High-quality discussion only</li>
        <li className="text-xs text-on-surface-variant pb-2 border-b border-outline-variant/30">4. Provide sources for claims</li>
        </ol>
        </div>
        <footer className="p-4 text-[10px] text-on-surface-variant space-y-2">
        <div className="flex flex-wrap gap-2">
        <a className="hover:underline" href="#">User Agreement</a>
        <a className="hover:underline" href="#">Privacy Policy</a>
        <a className="hover:underline" href="#">Content Policy</a>
        <a className="hover:underline" href="#">Moderator Code of Conduct</a>
        </div>
        <p>© 2024 Reddit, Inc. All rights reserved</p>
        </footer>
    </aside>
  )
}

export default CommunitySideBar