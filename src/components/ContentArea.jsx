import { MessageSquare, Share2, Bookmark } from 'lucide-react';

export const ContentArea = () => {
  return (
    <div className="flex-1 p-4">
        <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded-full overflow-hidden bg-reddit-orange/20">
        
        </div>
        <span className="text-xs font-bold text-on-surface">u/DesignPro</span>
        <span className="text-xs text-on-surface-variant">• 6 hours ago</span>
        <span className="px-2 py-0.5 bg-surface-container-high text-[10px] font-bold text-on-surface-variant rounded">Discussion</span>
        </div>
        <h1 className="text-lg font-bold text-on-surface mb-3">Pueden ayudarme a crear un diseño de un foro con comentarios anidados?</h1>
        <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                                Estoy creando un foro y necesito ayuda con el diseño de los comentarios anidados. Quiero que sea fácil de leer y navegar, incluso con muchos comentarios.
                            </p>
        <div className="flex items-center gap-4 border-t border-outline-variant pt-3">
        <button className="flex items-center gap-2 px-2 py-1 hover:bg-surface-container-high rounded text-on-surface-variant transition-colors">
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs font-bold">124 Comments</span>
        </button>
        <button className="flex items-center gap-2 px-2 py-1 hover:bg-surface-container-high rounded text-on-surface-variant transition-colors">
        <Share2 className="w-5 h-5" />
        <span className="text-xs font-bold">Share</span>
        </button>
        <button className="flex items-center gap-2 px-2 py-1 hover:bg-surface-container-high rounded text-on-surface-variant transition-colors">
        <Bookmark className="w-5 h-5" />
        <span className="text-xs font-bold">Save</span>
        </button>
        </div>
    </div>
  )
}

export default ContentArea