import { useState } from 'react';
import { initialForumData, updateTree } from './scripts';
import { Comment } from './components/Comment';
import { TopNavbar } from './components/TopNavbar';
import { SideNavbar } from './components/SideNavbar';
import { ContentArea } from './components/ContentArea';
import { CommunitySideBar } from './components/CommunitySideBar';

export default function App() {
  const [forum, setForum] = useState(initialForumData);

  const handleAddComment = (parentId, text) => {
    const newComment = {
      id: crypto.randomUUID(),
      author: "u/Jesus_Saavedra",
      text: text,
      votes: 1,
      time: "Just now",
      replies: []
    };

    const updatedForum = updateTree(forum, parentId, newComment);
    setForum(updatedForum);
  };

  return (
    <div className="bg-background min-h-screen text-on-surface">
      <TopNavbar />
      
      <div className="max-w-[1200px] mx-auto flex gap-6 px-4 pt-4"> 
        <SideNavbar />
        <main className="flex-1 max-w-4xl min-w-0">
          <ContentArea data={forum} />

          {/* arbol de comentarios */}
          <section className="bg-surface border border-outline-variant rounded p-4">
             {forum.replies.map((reply) => (
               <Comment 
                 key={reply.id}
                 comment={reply} 
                 onAddReply={handleAddComment} 
               />
             ))}
          </section>
        </main>

        <CommunitySideBar />
      </div>
    </div>
  );
}