import React, { useState } from 'react';
import { ChatSidebar } from '../components/chat/ChatSidebar';
import { ChatMessage } from '../components/chat/ChatMessage';
import { ChatInput } from '../components/chat/ChatInput';
import { ChatChannel, Category, ChatMessage as ChatMessageType, User } from '../types';

// Mock data for demonstration
const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Information',
    order: 0,
    channels: ['1', '2'],
  },
  {
    id: '2',
    name: 'General',
    order: 1,
    channels: ['3', '4', '5'],
  },
];

const mockChannels: ChatChannel[] = [
  {
    id: '1',
    name: 'announcements',
    type: 'ANNOUNCEMENT',
    categoryId: '1',
    permissions: [],
  },
  {
    id: '2',
    name: 'rules',
    type: 'TEXT',
    categoryId: '1',
    permissions: [],
  },
  {
    id: '3',
    name: 'general-chat',
    type: 'TEXT',
    categoryId: '2',
    permissions: [],
  },
  {
    id: '4',
    name: 'roleplay-discussion',
    type: 'TEXT',
    categoryId: '2',
    permissions: [],
  },
  {
    id: '5',
    name: 'voice-lounge',
    type: 'VOICE',
    categoryId: '2',
    permissions: [],
  },
];

export function Chat() {
  const [currentChannel, setCurrentChannel] = useState(mockChannels[0].id);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  const handleSend = (content: string) => {
    const newMessage: ChatMessageType = {
      id: Date.now().toString(),
      content,
      authorId: 'current-user',
      channelId: currentChannel,
      createdAt: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen bg-white">
      <ChatSidebar
        categories={mockCategories}
        channels={mockChannels}
        currentChannel={currentChannel}
        onChannelSelect={setCurrentChannel}
      />
      
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              author={{
                id: 'current-user',
                username: 'Current User',
                role: 'MEMBER',
                avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces',
                joinDate: new Date(),
                status: 'online',
              }}
            />
          ))}
        </div>
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}