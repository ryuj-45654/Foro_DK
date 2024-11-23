import React, { useState } from 'react';
import { Paperclip, Smile, Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (content: string) => void;
  onAttach?: (files: FileList) => void;
}

export function ChatInput({ onSend, onAttach }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <Paperclip className="h-5 w-5 text-gray-500" />
        </button>
        <input
          id="file-input"
          type="file"
          multiple
          className="hidden"
          onChange={(e) => onAttach?.(e.target.files!)}
        />
        
        <div className="flex-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <Smile className="h-5 w-5 text-gray-500" />
        </button>

        <button
          type="submit"
          disabled={!message.trim()}
          className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}