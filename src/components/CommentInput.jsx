import { useState } from 'react';

export const CommentInput = ({ onAdd, placeholder = "What are your thoughts?", isReply = false }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <div className={`bg-surface border border-outline-variant rounded p-4 ${isReply ? 'mt-4' : 'mb-4'}`}>
      <div className="border border-outline-variant rounded overflow-hidden">
        <textarea
          className="w-full p-3 text-sm bg-background text-on-surface focus:outline-none min-h-[100px] resize-none placeholder-on-surface-variant"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="bg-[#151516] px-4 py-2 flex justify-end">
          <button 
            onClick={handleSubmit}
            className="px-4 py-1.5 bg-reddit-orange text-white text-xs font-bold rounded-full hover:brightness-110 transition-all"
          >
            {isReply ? "Reply" : "Comment"}
          </button>
        </div>
      </div>
    </div>
  );
};