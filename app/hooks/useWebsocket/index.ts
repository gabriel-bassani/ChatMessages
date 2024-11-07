// hooks/useWebSocket.ts
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface Message {
  to: string;
  message: string;
}

const SOCKET_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000'; // Ajuste para sua URL

export const useWebSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Conectar ao WebSocket
    const socketIo = io(SOCKET_URL);

    socketIo.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socketIo.on('messageToClient', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    setSocket(socketIo);

    return () => {
      // Desconectar do WebSocket quando o componente for desmontado
      socketIo.disconnect();
    };
  }, []);

  const sendMessage = (message: Message) => {
    if (socket) {
      socket.emit('messageToServer', message);
    }
  };

  return { socket, messages, sendMessage };
};
