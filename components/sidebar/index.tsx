import Image from "next/image";
import { CogIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'; // Importando ícones do Heroicons

const conversations = [
    {
      id: 1,
      name: "João Silva",
      lastMessage: "Ei, como você está?",
      profilePic: "/images/noprofile.jpg",
    },
    {
      id: 2,
      name: "Maria Santos",
      lastMessage: "Vamos sair hoje?",
      profilePic: "/images/noprofile.jpg",
    },
    {
      id: 3,
      name: "Carlos Costa",
      lastMessage: "Ok, combinado!",
      profilePic: "/images/noprofile.jpg",
    },
    // Adicione mais conversas aqui
  ];

export function Sidebar(){
    return(
      <div className="flex flex-col h-screen bg-dark p-4">
        {/* Cabeçalho da Sidebar */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-lightgray">Conversas</h2>
        </div>
  
        {/* Lista de Conversas */}
        <div className="flex-1 overflow-y-auto">
          {/* Exemplo de conversas */}
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="flex items-center px-4 py-2  hover:bg-secondary cursor-pointer border-b border-lightgray"
              >
                <div
                className="mt-0 "
                
                >
                  <Image
                    src={conversation.profilePic}
                    alt="Foto de perfil"
                    height={30}
                    width={30}
                    className="rounded-full object-cover mt-0"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-bold text-lightgray">{conversation.name}</div>
                  <div className="text-gray text-sm truncate">
                    {conversation.lastMessage}
                  </div>
                </div>
              </div>
            ))}
  
          {/* Adicione mais conversas aqui */}
        </div>
  
        {/* Botões de Configurações e Nova Conversa na parte inferior */}
        <div className="flex justify-between items-center mt-4">
          {/* Botão de Nova Conversa */}
          <button className="flex items-center space-x-2 p-2 bg-primary text-white rounded-lg">
            <ChatBubbleOvalLeftIcon className="h-6 w-6" />
            <span>Nova Conversa</span>
          </button>
  
          {/* Botão de Configurações */}
          <button className="p-2">
            <CogIcon className="h-6 w-6 text-lightgray" /> {/* Ícone de Configurações */}
          </button>
        </div>
      </div>

        // <div className="w-80 bg-gray-500 h-screen overflow-y-auto">
        //   <div className="px-4 py-2 border-b border-gray-300">
        //     <input
        //       type="text"
        //       placeholder="Procurar ou começar nova conversa"
        //       className="w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
        //     />
        //   </div>
        //   <div>
        //     {conversations.map((conversation) => (
        //       <div
        //         key={conversation.id}
        //         className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
        //       >
        //         <div
        //         className="mt-0"
        //         >
        //           <Image
        //             src={conversation.profilePic}
        //             alt="Foto de perfil"
        //             height={30}
        //             width={30}
        //           />
        //         </div>
        //         <div className="ml-4">
        //           <div className="font-bold text-black">{conversation.name}</div>
        //           <div className="text-gray-600 text-sm truncate">
        //             {conversation.lastMessage}
        //           </div>
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        // </div>
    )
}