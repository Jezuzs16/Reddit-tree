import { useState } from 'react';
import { CommentInput } from './CommentInput';
import { ChevronUp, ChevronDown, Reply } from 'lucide-react';

export const Comment = ({ comment, onAddReply, depth = 0 }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleAddReply = (text) => {
    onAddReply(comment.id, text);
    setShowReplyInput(false);
  };
  if (isCollapsed) {
    return (
      <div 
        className={`flex items-center gap-2 ${depth > 0 ? 'mt-2 ml-2' : 'mb-4'} cursor-pointer group`}
        onClick={() => setIsCollapsed(false)}
      >
        <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-reddit-orange transition-colors">
          <span className="text-[10px] text-on-surface-variant group-hover:text-white font-bold">+</span>
        </div>
        <span className="text-xs font-bold text-on-surface-variant hover:underline">
          {comment.author}
        </span>
        <span className="text-[10px] text-outline italic">hilo contraído</span>
      </div>
    );
  }

  return (
    <div className={`flex gap-3 ${depth > 0 ? 'mt-4' : 'mb-6'} group`}>
      <div 
        className="flex flex-col items-center cursor-pointer group/line" 
        onClick={() => setIsCollapsed(true)}
        title="Contraer hilo"
      >
        <div className="w-8 h-8 rounded-full bg-blue-900/30 overflow-hidden mb-1">
          <div className="w-full h-full bg-linear-to-br from-reddit-orange to-yellow-500" />
        </div>
        <div className="flex-1 w-[2px] bg-outline-variant thread-line group-hover/line:bg-reddit-orange transition-colors" />
      </div>

      <div className="flex-1 pt-1">
        <div 
          className="flex items-center gap-2 mb-1 cursor-pointer" 
          onClick={() => setIsCollapsed(true)}
        >
          <span className="text-xs font-bold text-on-surface hover:underline">{comment.author}</span>
          <span className="text-xs text-on-surface-variant">{comment.time}</span>
        </div>
        
        <p className="text-sm text-on-surface-variant mb-2">{comment.text}</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-background rounded p-0.5">
            <button className="p-1 text-on-surface-variant hover:text-reddit-orange flex items-center">
              <ChevronUp size={20} />
            </button>
            <span className="text-xs font-bold px-1 text-on-surface">{comment.votes}</span>
            <button className="p-1 text-on-surface-variant hover:text-reddit-blue flex items-center">
              <ChevronDown size={20} />
            </button>
          </div>
          
          <button 
            onClick={() => setShowReplyInput(!showReplyInput)}
            className="flex items-center gap-1 text-on-surface-variant hover:bg-surface-container-high px-2 py-1 rounded transition-colors"
          >
            <Reply size={18} />
            <span className="text-xs font-bold">Reply</span>
          </button>
        </div>

        {showReplyInput && (
          <div className="mt-2">
             <CommentInput onAdd={handleAddReply} isReply={true} />
          </div>
        )}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4">
            {comment.replies.map((child) => (
              <Comment 
                key={child.id} 
                comment={child} 
                onAddReply={onAddReply} 
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};