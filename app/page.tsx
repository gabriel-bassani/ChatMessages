import { Chat } from "@components/chat";
import { Sidebar } from "@components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Barra Lateral */}
      <div className="w-80"> {/* Largura fixa da barra lateral */}
        <Sidebar />
      </div>

      {/* Tela de Conversa que ocupa o resto da tela */}
      <div className="flex-1"> {/* flex-1 faz o componente ocupar o espaço restante */}
        <Chat />
      </div>
    </div>
  );
}
