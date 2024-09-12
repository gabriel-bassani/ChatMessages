"use client";
import React, { useState } from 'react';

const messages = [
    { id: 1, sender: 'me', text: 'Olá, como você está?', time: '10:15' },
    { id: 2, sender: 'other', text: 'Estou bem, e você?', time: '10:16' },
    { id: 3, sender: 'me', text: 'Tudo ótimo, obrigado!', time: '10:17' },
    { id: 4, sender: 'other', text: 'Que bom saber!', time: '10:18' },
  // Adicione mais mensagens aqui
];

export function Chat(){
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const now = new Date();
      const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
      console.log("Nova mensagem: ", newMessage, "Horário: ", time);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Barra Superior */}
      <div className="flex items-center bg-lightgray px-4 py-2 shadow">
        <img
          src="/images/noprofile.jpg"
          alt="Foto de perfil"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-4">
          <div className="font-bold text-dark text-lg">João Silva</div>
          <div className="text-dark text-sm">Online</div>
        </div>
      </div>

      {/* Corpo da Conversa */}
      <div className="flex-1 overflow-y-auto p-4 bg-secondary">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'me' ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div
              className={`max-w-xs rounded-lg px-4 py-2 relative ${
                message.sender === 'me'
                  ? 'bg-primary text-white'
                  : 'bg-lightgray text-dark'
              }`}
              style={{ paddingRight: '3rem' }}
            >
              {/* Texto da mensagem */}
              <p>{message.text}</p>
              {/* Horário da mensagem */}
              <span className="text-xs absolute bottom-1 right-2 text-white">
                {message.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Campo de Digitação */}
      <form
        className="flex items-center bg-lightgray px-4 py-2"
        onSubmit={handleSendMessage}
      >
        <input
          type="text"
          placeholder="Digite uma mensagem"
          className="flex-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-primary text-white rounded-lg"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};