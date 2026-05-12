//datos del foto, iniciales, para rellenar
export const initialForumData = {
  id: "p-1",
  title: "Diseño de Sistemas: ¿Por qué usar Árboles N-arios?",
  author: "SeniorDev",
  text: "Hablemos de la lógica detrás de los comentarios anidados...",
  votes: 1500,
  time: "6 hours ago",
  replies: [
    {
      id: "c-1",
      author: "Jesus_Dev",
      text: "Me parece excelente para practicar recursividad.",
      votes: 500,
      time: "4h ago",
      replies: [
        {
          id: "c-2",
          author: "User_404",
          text: "Exacto, cada respuesta es un sub-árbol.",
          votes: 120,
          time: "3h ago",
          replies: [] 
        }
      ]
    },
    {
      id: "c-3",
      author: "ReactMaster",
      text: "Lo importante es manejar bien el estado del input.",
      votes: 214,
      time: "5h ago",
      replies: []
    }
  ]
};

//funcion para actualizar el arbol
export const updateTree = (node, parentId, newComment) => {
  // Caso 1: El nodo actual es el padre
  if (node.id === parentId) {
    return {
      ...node,
      replies: [newComment, ...node.replies],
    };
  }

  // Caso 2: Buscar en los hijos
  if (node.replies && node.replies.length > 0) {
    return {
      ...node,
      replies: node.replies.map((child) => updateTree(child, parentId, newComment)),
    };
  }

  // Caso 3: No es el padre ni tiene hijos donde buscar
  return node;
};